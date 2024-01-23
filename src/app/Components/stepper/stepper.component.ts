import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepper } from '@angular/cdk/stepper'

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
  providers: [{provide: CdkStepper, useExisting: StepperComponent}]
})
export class StepperComponent extends CdkStepper {
  @Input() linearModeSelected = true;

  onClick(index: number) {
    this.selectedIndex = index;
  }
}
