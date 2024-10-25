import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'dateTranslate',
  pure: false // Esto permite que el pipe se actualice cuando cambia el idioma
})
export class DateTranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(value: Date | string | number, format: string = 'fullDate'): string {
    const currentLang = this.translate.currentLang || 'en'; // Usa el idioma actual o español por defecto
    return formatDate(value, format, currentLang);
  }
}
