import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function spaceValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const space = nameRe.test(control.value);
    return space ? {space : { value: control.value} } : null;
  }
}