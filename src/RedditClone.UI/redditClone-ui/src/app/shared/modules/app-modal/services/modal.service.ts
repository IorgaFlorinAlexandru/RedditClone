import { ApplicationRef, ElementRef, Injectable, Injector, StaticProvider, Type, ViewContainerRef } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { MODAL_DATA, ModalConfigOptions, ModalElementRef } from '../modal.models';

let uniqueId = 0;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private openedModals: ModalElementRef<any>[] = [];
  public elementRefs: ElementRef[] = [];

  constructor(private applicationRef: ApplicationRef) { }

  public openModalWithComponent(componentType: Type<any>, config: ModalConfigOptions | null = null): void {
    const rootViewContainerRef = this.applicationRef.components[0].injector.get(ViewContainerRef);
    const modalRef = this.getModalRef(componentType);

    if(modalRef.isOpened) return;

    const injector = this.createInjector(rootViewContainerRef.injector,modalRef, config);
    
    // Insert the modal component into the root view container
    const componentRef = rootViewContainerRef.createComponent(ModalComponent,{ injector : injector});

    modalRef.setComponentRef(componentRef);
    modalRef.setComponentType(componentType);
    modalRef.isOpened = true;
    
    // Get the instance of the modal component
    componentRef.instance.componentType = componentType;
    componentRef.instance.modalRefId = modalRef.getModalRefId();
  }

  private createInjector(userInjector: Injector,modalRef: ModalElementRef<any>, config: ModalConfigOptions | null = null): Injector {
    const providers: StaticProvider[] = [
      { provide: ModalElementRef, useValue: modalRef },
      { provide: MODAL_DATA, useValue: config?.data }
    ];

    return Injector.create({parent: userInjector, providers: providers});
  }

  private getModalRef(type: Type<any>): ModalElementRef<any> {
    let ref = this.openedModals.find(m => m.getComponentRef() === type);

    if(!ref){
      ref = new ModalElementRef<typeof type>(`modal-ref-${uniqueId++}`);
      this.openedModals.push(ref);
    }
    
    return ref;
  }
  
  public closeAll(): void {
    this.openedModals.forEach(ref => ref.closeModal());
  }

  public closeById(id: string): void {
    this.openedModals.find(m => m.getModalRefId() === id)?.closeModal();
  }

  public addElement(element: ElementRef): void {
    this.elementRefs.push(element);
  }

}
