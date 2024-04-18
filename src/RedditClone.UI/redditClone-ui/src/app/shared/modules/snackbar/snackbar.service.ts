import { ApplicationRef, ComponentRef, Injectable, Injector, StaticProvider, ViewContainerRef } from '@angular/core';
import { MESSAGE, MESSAGE_TYPE, MessageType, SNACKBAR_ID, Snackbar } from './snackbar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private applicationRef: ApplicationRef) { }

  private snackbarContainer: HTMLElement | undefined = undefined;
  private count = 0;
  private snackbarMap = new Map<string,ComponentRef<Snackbar>>()

  public displaySnackbar(messageType: MessageType,message: string): void {
    const rootViewContainerRef = this.applicationRef.components[0].injector.get(ViewContainerRef);
    const snackbar_id = 'SNACKBAR_' + this.count++;

    const providers: StaticProvider[] = [
      { provide: MESSAGE_TYPE, useValue: messageType },
      { provide: MESSAGE, useValue: message },
      { provide: SNACKBAR_ID, useValue: snackbar_id },
      { provide: SnackbarService, useValue: this }
    ];

    const injector = Injector.create({providers: providers});

    const snackbarRef = rootViewContainerRef.createComponent(Snackbar, {injector: injector});
    this.snackbarMap.set(snackbar_id,snackbarRef);

    const container = this.createContainerElement();

    container.append(snackbarRef.location.nativeElement);

    document.body.append(container);
  }

  private createContainerElement(): HTMLElement {
    if(!this.snackbarContainer) {
      const container = document.createElement('div');
      container.classList.add('fixed','z-50','bottom-0','w-[496px]','right-0','left-0','ml-auto','mr-auto','mb-5');

      this.snackbarContainer = container;
    }
    
    return this.snackbarContainer;
  }

  public removeReference(id: string): void {
    const snackbarRef = this.snackbarMap.get(id);
    snackbarRef?.destroy();
    this.snackbarMap.delete(id);
  }
}
