import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactForm } from '../../models/contact-form';
import { ContactService } from '../../services/Contact/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(
    private contactService: ContactService
  ) {}

  onSubmit(contact: ContactForm) {
    this.contactService.addMessage(contact);
  }

}
