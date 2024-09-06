import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

// Import Components
import { HeaderComponent } from "../../Components/header/header.component";
import { FooterComponent } from "../../Components/footer/footer.component";

// Import Models
import { Objects, Qualities, Types } from "../../models/services";

// Import Services
import {ToastrService, ToastrModule} from "ngx-toastr";
import {AuthService} from "../../services/Auth/auth.service";
import {FormService} from "../../services/Forms/form.service";
import { UserService } from '../../Auth/service/user.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-service-form',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage,
    ToastrModule,
    ReactiveFormsModule,
    RouterLink,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './service-form.component.html',
  styleUrl: './service-form.component.css'
})
export class ServiceFormComponent implements OnInit {

  isLoading = false;
  date = new Date().toISOString().slice(0,10);
  types = Types;
  qualities = Qualities;
  objects = Objects;
  selectedType!: string;
  selectedObj!: string;
  selectedQlt!: string;
  serviceForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    type: new FormControl('', Validators.required),
    object: new FormControl('', Validators.required),
    quality: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    natureJuridique: new FormControl('', Validators.required),
    office: new FormControl('', Validators.required),
    localisation: new FormControl('', Validators.required),
    creationDate: new FormControl(''),
    status: new FormControl('')
  });
  user$ = this.authService.currentUser$;


  constructor(
    private router: Router,
    private toastr: ToastrService,
    private formService: FormService,
    private authService: AuthService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  getSelectedType(e: any) {
    this.selectedType = e.currentTarget.value;
  }

  getSelectedObject(e: any) {
    this.selectedObj = e.currentTarget.value;
  }

  getSelectedQuality(e: any) {
    this.selectedQlt = e.currentTarget.value;
  }

  onSubmit(user: User) {
    if(!this.serviceForm.valid) return;

    this.isLoading = !this.isLoading;
    this.serviceForm.patchValue({
      username: user.displayName,
      email: user.email,
      type: this.selectedType,
      object: this.selectedObj,
      quality: this.selectedQlt,
      creationDate: this.date, 
      status: 'available'
    });
    this.formService.addTask(this.serviceForm.value).subscribe(() => {
      this.toastr.success("Register Successfully", "success");
      localStorage.setItem('task', JSON.stringify(this.serviceForm.value))
      this.router.navigate(['/dohone']).then(() => {});
      this.isLoading = !this.isLoading;
    }, (error) => {
      this.toastr.error(error.message, "error");
      this.isLoading = !this.isLoading;
    });
  }

}
