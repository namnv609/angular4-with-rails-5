import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class ValidationService {

  constructor(private translateSvc: TranslateService) { }

  getValidatorErrorMessage(validatorName: string, fieldName: any, validatorValue?: any) {
    fieldName = this.translateSvc.instant("form_controls.labels." + fieldName);

    let errorMessage: string = this.translateSvc.instant("validation_error_messages." + validatorName, {fieldName: fieldName});

    return this.replaceExtendedParams(errorMessage, validatorValue);
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  private replaceExtendedParams(errorMessage: string, validatorValue?: any): string {
    let extraParams: Array<string>|null = errorMessage.match(/validatorValue\.\w+/g);

    if (extraParams && extraParams.length) {
      extraParams.forEach(function(extraParam: any, idx: number) {
        extraParam = extraParam.split(".");

        let validatorValueKey: string = extraParam[1];
        let interpolationRegEx: RegExp = new RegExp("\\{{2}validatorValue\\." + validatorValueKey + "\\}{2}", "g");

        errorMessage = errorMessage.replace(interpolationRegEx, validatorValue[validatorValueKey]);
      })
    }

    return errorMessage;
  }
}
