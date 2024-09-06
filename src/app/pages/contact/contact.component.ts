import { Component } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';

// Import de Composants
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';

// Import de service
import { ContactService } from '../../services/Contact/contact.service';
import {ToastrService, ToastrModule} from "ngx-toastr";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    ToastrModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    content: new FormControl('', Validators.required)
  })

  constructor(
    private contactService: ContactService,
    private toastr: ToastrService,
  ) {}

  onSubmit() {
    console.log(this.contactForm.value);
    this.contactService.saveMessage(this.contactForm.value).subscribe(() => {
      this.toastr.success('Message saved', 'success');
    }, (error) => {
      this.toastr.error('Error saving message', 'error');
    });
  }

}
