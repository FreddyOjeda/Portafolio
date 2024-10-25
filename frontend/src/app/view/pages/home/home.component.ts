import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  text: string = '';
  displayText: string = '';
  index: number = 0;
  direction: number = 1; // 1 for typing, -1 for deleting
  showCursor: boolean = true;
  langChangeSubscription!: Subscription; // Para gestionar la suscripción

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadText();
    this.type();

    // Suscribirse al evento de cambio de idioma
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadText(); // Recargar el texto traducido
    });
  }

  loadText(): void {
    // Obtener la traducción y asignarla a la variable 'text'
    this.translate.get('HOME.DESCRIPTION').subscribe((translatedText: string) => {
      this.text = translatedText;
      this.index = 0;  // Reiniciar el índice cuando cambia el texto
      this.direction = 1;  // Reiniciar la dirección para volver a escribir el nuevo texto
    });
  }

  type(): void {
    this.displayText = this.text.slice(0, this.index);
    this.index += this.direction;

    if (this.index === this.text.length + 1) {
      this.direction = -1;
      setTimeout(() => this.type(), 1000); // Pausa antes de eliminar
    } else if (this.index === 0) {
      this.direction = 1;
      setTimeout(() => this.type(), 500); // Pausa antes de volver a escribir
    } else {
      setTimeout(() => this.type(), this.direction === 1 ? 100 : 50); // Velocidad de escritura y borrado
    }
  }

  ngOnDestroy(): void {
    // Desuscribirse cuando se destruya el componente para evitar fugas de memoria
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
