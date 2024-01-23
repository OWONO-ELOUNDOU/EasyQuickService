import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'app-jurisdiction',
  standalone: true,
  imports: [FormsModule, CdkStepperModule],
  templateUrl: './jurisdiction.component.html',
  styleUrl: './jurisdiction.component.css'
})
export class JurisdictionComponent {
onSubmit(arg0: any) {
throw new Error('Method not implemented.');
}

}
