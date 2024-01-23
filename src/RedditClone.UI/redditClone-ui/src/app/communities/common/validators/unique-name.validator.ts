import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, map, catchError, of } from "rxjs";
import { CommunityService } from "../../services/community.service";
import { CheckNameUniquenessResponse } from "../models/check-name-uniqueness.model";

@Injectable({ providedIn: 'root' })
export class UniqueNameValidator implements AsyncValidator {
  constructor(private communityService: CommunityService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.communityService.isNameTaken(control.value.toString().trim()).pipe(
      map((response: CheckNameUniquenessResponse) => (response.isTaken ? { uniqueName: true } : null)),
      catchError(() => of(null)),
    );
  }
}