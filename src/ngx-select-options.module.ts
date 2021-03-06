import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgxSelectOptionsComponent} from './ngx-select-options/ngx-select-options.component';
import {NgxSelectOptionsPipe} from './ngx-select-options.pipe';
import {NgxSelectOptionsFilterPipe} from './ngx-select-options-filter.pipe';

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
    NgxSelectOptionsComponent,
    NgxSelectOptionsPipe,
    NgxSelectOptionsFilterPipe
  ]
})
export class NgxSelectOptionsModule {
}
