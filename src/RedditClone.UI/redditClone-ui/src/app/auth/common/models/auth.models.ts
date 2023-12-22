import { EventEmitter } from "@angular/core";
import { AuthFormRoutes } from "../enums/auth.enums";

export interface AuthFormComponent {
    changeForm: EventEmitter<AuthFormRoutes>;
    navigateToForm(route: string): void;
}