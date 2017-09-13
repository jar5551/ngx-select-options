import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxSelectOptionsComponent} from './ngx-select-options/ngx-select-options.component';
import {NgxSelectOptionsPipe} from './ngx-select-options.pipe';
import {FormsModule} from '@angular/forms';
import { NgxSelectOptionsFilterPipe } from './ngx-select-options-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NgxSelectOptionsComponent,
    NgxSelectOptionsPipe,
    NgxSelectOptionsFilterPipe
  ],
  exports: [
    NgxSelectOptionsComponent
  ]
})
export class NgxSelectOptions {
}
