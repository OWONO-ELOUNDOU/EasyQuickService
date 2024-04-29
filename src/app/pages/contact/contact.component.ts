import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Import de Composants
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';

// Import de Modele
import { ContactForm } from '../../models/contact-form';

// Import de service
import { ContactService } from '../../services/Contact/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(
    private contactService: ContactService
  ) {}

  onSubmit(contact: ContactForm) {
    this.contactService.addMessage(contact).then(() => {
      alert('Votre message a bien été pris en compte!')
    })
  }

}
