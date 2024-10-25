import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  // Datos del formulario
  formData = {
    name: '',
    email: '',
    message: ''
  };
  isLoading: boolean = false
  notyf: Notyf
  
  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ){
    this.notyf = new Notyf({
      duration: 5000, // Duración en milisegundos
      dismissible: true // Hacer las notificaciones desechables si lo deseas
    })
  }
  
  // Método para manejar el envío del formulario
  onSubmit() {
    this.isLoading = true
    const current_lang = this.translateService.currentLang? this.translateService.currentLang : this.translateService.defaultLang
    this.http.post('http://localhost:3000/api/send-email', this.formData).subscribe(response => {
      this.isLoading = false
      this.notyf.success(current_lang == 'es'? "Muy bien, tu mensaje fue enviado y sera revisado dentro de poco." : "Ok, your message has been sent and will be reviewed shortly.")
    }, error => {
      this.isLoading = false
      this.notyf.error(current_lang == 'es'? "Estoy teniendo problemas para recibir tu correo, intentalo despues :')" : "I'm having trouble receiving your email, please try again later :')")
    });
  }
}
