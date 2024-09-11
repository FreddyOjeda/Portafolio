import { Component } from '@angular/core';

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

  // Dirección de correo electrónico de destino
  recipientEmail: string = 'elinge02@proton.me';

  // Método para manejar el envío del formulario
  onSubmit() {
    const { name, email, message } = this.formData;
    const mailtoLink = `mailto:${this.recipientEmail}?subject=Mensaje de ${name}&body=${message} (Enviado desde: ${email})`;
    window.location.href = mailtoLink;
  }
}
