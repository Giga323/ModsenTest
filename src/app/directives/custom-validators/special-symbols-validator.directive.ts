import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function specialSymbolValidator(specSymbolsRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const specialSymbol = specSymbolsRe.test(control.value);
    return specialSymbol ? {specialSymbol : { value: control.value} } : null;
  }
}