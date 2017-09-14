import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxSelectOptionsComponent),
  multi: true
};

const styles = `
select {
  width: 100%; }

.dropdown-menu {
  overflow: auto;
  max-height: 500px;
  margin-bottom: 1em; }

.dropdown-item {
  line-height: 1.5em;
  font-size: 0.9em; }
  .dropdown-item.selected {
    background-color: #0275d8;
    color: #fff; }
  .dropdown-item.searchFieldItem {
    background-color: transparent; }
    .dropdown-item.searchFieldItem .form-control {
      border: none;
      margin: 0;
      padding: 0.5rem 0; }

.form-group {
  margin: 0;
  font-size: 0.9em; }
`;

@Component({
  selector: 'ngx-select-options',
  template: `
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" (click)="openDropdown($event)">
        {{!value ? placeholder : (value | ngxSelectOptions:_options)}}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div class="dropdown-item searchFieldItem">
          <div class="form-group">
            <input class="form-control" [placeholder]="searchText" [(ngModel)]="searchField" name="searchField">
          </div>
        </div>
        <a class="dropdown-item" href="#" *ngFor="let option of _options | ngxSelectOptionsFilter:searchField" (click)="selectOption(option.value, $event)" [class.selected]="value === option.value">{{option.label}}</a>
      </div>
    </div>
  `,
  styles: [styles],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class NgxSelectOptionsComponent implements ControlValueAccessor {

  public element: ElementRef;
  protected _options: Array<any> = [];
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  private innerValue: any = '';
  public searchField: string = '';

  @Input() public placeholder: string = 'Wybierz...';
  @Input() public searchText: string = 'Wyszukaj...';

  @Input()
  public set options(value: Array<any>) {
    if (!value) {
      this._options = [];
    } else {
      this._options = value;
    }
  }

  @Output() public selected: EventEmitter<any> = new EventEmitter();

  constructor(element: ElementRef) {
    this.element = element;
  }

  get value(): any {
    return this.innerValue;
  };

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  public selectOption(value: string, e: Event): void {
    if (e) {
      e.preventDefault();
    }

    if (!this.checkIsOptions) {
      return;
    }

    this.value = value;
  }

  private checkIsOptions(): boolean {
    return !!this._options;
  }

  public openDropdown(e: Event):void {
    setTimeout(() => {
      let el = this.element.nativeElement.querySelector('.dropdown-menu input');
      if (el) {
        el.focus();
      }
    }, 0);
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }


}
