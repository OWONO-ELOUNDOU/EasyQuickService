import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { StepperComponent } from '../../Components/stepper/stepper.component';
import { JurisdictionComponent } from '../../Components/jurisdiction/jurisdiction.component';
import { DescriptionComponent } from '../../Components/description/description.component';
import { FinishComponent } from '../../Components/finish/finish.component';
import { TaskObjComponent } from '../../Components/task-obj/task-obj.component';
import { TaskTypeComponent } from '../../Components/task-type/task-type.component';
import { TaskQualityComponent } from '../../Components/task-quality/task-quality.component';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [
    CommonModule,
    CdkStepperModule,
    StepperComponent,
    TaskObjComponent,
    TaskTypeComponent,
    TaskQualityComponent,
    JurisdictionComponent,
    DescriptionComponent,
    FinishComponent
  ],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent {

}
