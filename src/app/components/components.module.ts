import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicacionListComponent } from './publicacion-list/publicacion-list.component';
import { PublicacionFormComponent } from './publicacion-form/publicacion-form.component';
import { ConfirmacionModalComponent } from './confirmacion-modal/confirmacion-modal.component';
import { FechaPipe } from '../pipes/fecha-pipe';

@NgModule({
  declarations: [
    PublicacionListComponent,
    PublicacionFormComponent,
    ConfirmacionModalComponent,
    FechaPipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PublicacionListComponent,
    PublicacionFormComponent,
    ConfirmacionModalComponent,
    FechaPipe
  ]
})
export class ComponentsModule { }
