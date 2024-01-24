import { Component, Inject, InjectionToken, OnDestroy, OnInit } from "@angular/core";
import { SnackbarService } from "./snackbar.service";
import { animate, style, transition, trigger } from "@angular/animations";

export enum MessageType {
    SUCCESS = 'SUCCESS',
    INFORMATIONAL = 'INFORMATIONAL',
    ERROR = 'ERROR',
    WARNING = 'WARNING'
}

export const MESSAGE_TYPE = new InjectionToken<MessageType>('Type');
export const MESSAGE = new InjectionToken<MessageType>('Message');
export const SNACKBAR_ID = new InjectionToken<MessageType>('SnackbarId');
export const ICON_URL = '../../../../../assets/icons/snackbar_icons.svg#';

export const ICONS_MAP = new Map<MessageType,string>([
    [MessageType.INFORMATIONAL, ICON_URL + 'info'],
    [MessageType.SUCCESS, ICON_URL + 'success'],
    [MessageType.ERROR, ICON_URL + 'error'],
    [MessageType.WARNING, ICON_URL + 'warning']
]);
export const COLORS_MAP = new Map<MessageType,string>([
    [MessageType.INFORMATIONAL, '#24a0ed'],
    [MessageType.SUCCESS, '#46d160'],
    [MessageType.ERROR, '#EA0027'],
    [MessageType.WARNING, 'yellow']
]);;

@Component({
    template: `
        <div @flyInOut class="mb-5 overflow-hidden relative text-[#cbcdcf]
         rounded-md w-[496px] h-[52px] ml-auto mr-auto group">
            <div class="flex items-center absolute h-full w-[526px] 
                left-[-30px] ease-in duration-200 group-hover:left-0">
                <button class="text-black h-full pr-2 pl-2" [style.background-color]="borderColor" (click)="close()">
                    <app-icon icon="x-mark"></app-icon>
                </button>
                <div class="bg-[#1a1a1b] border border-[#818384] border-l-0 border-r-0 flex items-center h-full w-full">
                    <svg class="h-6 w-6 ml-2" viewBox="0 0 24 25"
                        xmlns="http://www.w3.org/2000/svg">
                        <use [attr.xlink:href]='snackbarIcon'/>
                    </svg>  
                    <h4 class="ml-2">{{message}}</h4>
                </div>
            </div>
            <!--This fixes the border right issue-->
            <div class="absolute w-24 h-full right-0 bg-[#1a1a1b] rounded-r-md border-l-0 border border-[#818384]">
            </div>
        </div>
    `,
    selector: 'snackbar',
    animations: [
        trigger('flyInOut', [
            transition(':enter', [
                style({ 
                    transform: 'translateX(-30%)',
                    opacity: 0 
                }),
                animate(200)
            ]),
            transition(':leave', [
                style({ 
                    transform: 'translateX(30%)',
                    opacity: 0 
                }),
                animate(200)
            ]),
        ])
    ]
})
export class Snackbar implements OnInit, OnDestroy {
    constructor(
        @Inject(MESSAGE_TYPE) public messageType: MessageType,
        @Inject(MESSAGE) public message: string,
        @Inject(SNACKBAR_ID) public id: string,
        private snackbarService: SnackbarService
        ) { }

    borderColor: string = '#24a0ed';
    snackbarIcon: string = ICON_URL + 'info';
    private timeout: ReturnType<typeof setTimeout> | undefined = undefined;
    private TIMEOUT_MS = 5000;

    ngOnInit(): void {
        this.startTimeout();
        this.setBorderColor();
        this.setSnackbarIcon();
    }

    ngOnDestroy(): void {
        clearTimeout(this.timeout);
    }

    public close(): void {
        this.snackbarService.closeSnackbar(this.id);
    }

    private startTimeout(): void {
        this.timeout = setTimeout(() => {
            this.close();
        }, this.TIMEOUT_MS);
    }

    private setBorderColor(): void {
        const color = COLORS_MAP.get(this.messageType);
        if(color) this.borderColor = color;
    }

    private setSnackbarIcon(): void {
        const icon = ICONS_MAP.get(this.messageType);
        if(icon) this.snackbarIcon = icon;
    }
}