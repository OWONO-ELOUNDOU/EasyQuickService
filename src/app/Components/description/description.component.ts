import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [FormsModule, CdkStepperModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
onSubmit(arg0: any) {
throw new Error('Method not implemented.');
}

}
