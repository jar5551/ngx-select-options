import {Component, Input, Output, EventEmitter, ElementRef, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgxSelectOptionsComponent),
  multi: true
};

@Component({
  selector: 'ngx-select-options',
  templateUrl: './ngx-select-options.component.html',
  styleUrls: ['./ngx-select-options.component.css'],
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
