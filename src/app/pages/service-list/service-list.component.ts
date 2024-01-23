import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { StepperComponent } from '../../Components/stepper/stepper.component';
import { InfoServiceComponent } from '../../Components/info-service/info-service.component';
import { JurisdictionComponent } from '../../Components/jurisdiction/jurisdiction.component';
import { DescriptionComponent } from '../../Components/description/description.component';
import { FinishComponent } from '../../Components/finish/finish.component';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [
    CommonModule,
    CdkStepperModule,
    StepperComponent,
    InfoServiceComponent,
    JurisdictionComponent,
    DescriptionComponent,
    FinishComponent
  ],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent {

}
