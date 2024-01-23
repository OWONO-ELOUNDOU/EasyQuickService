import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'app-info-service',
  standalone: true,
  imports: [FormsModule, CdkStepperModule],
  templateUrl: './info-service.component.html',
  styleUrl: './info-service.component.css'
})
export class InfoServiceComponent {
  onSubmit(arg0: any) {
    throw new Error('Method not implemented.');
  }
}
