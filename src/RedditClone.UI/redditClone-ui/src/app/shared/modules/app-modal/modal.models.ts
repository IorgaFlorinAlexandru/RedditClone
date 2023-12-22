import { ComponentRef, Injectable, InjectionToken, Type } from "@angular/core";
import { ModalComponent } from "./components/modal/modal.component";

export class ModalElementRef<T> {

    private componentRef: ComponentRef<ModalComponent> | null = null;
    private type: T | undefined;
    private id: string;
    isOpened: boolean = false;

    constructor(id: string){
        this.id = id;
    }
    
    public closeModal(): void {
        this.isOpened = false;
        this.componentRef?.destroy();
    }

    public getModalRefId(): string {
        return this.id;
    }

    public setComponentRef(componentRef: ComponentRef<ModalComponent>): void {
        this.componentRef = componentRef;
    }

    public getComponentRef(): T {
        return this.type!;
    }

    public setComponentType(type: T): void {
        this.type = type;
    }

}

export interface ModalConfigOptions {
    height?: number;
    width?: number;
    data: any;
}

export const MODAL_DATA = new InjectionToken<any>('ModalData');