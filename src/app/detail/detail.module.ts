import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { PostService } from '../common/services/post.service';
import { MaterialModule } from '../common/material.moduler';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    MaterialModule
  ],
  providers: [
    PostService
  ]
})
export class DetailModule {
}
