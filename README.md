# ngx-select-options

Easy to use Angular >= 2 module that replaces default HTML select input with more advended dropdown - combobox style.
Features options search. Works perfectly with Angular ngModel directive.

## How to install

Install package with npm

`npm install ngx-select-options --save`

Import in your module file and include in import section.

## How to use in code

Instead of default select input use code down below

`<ngx-select-options placeholder="Select option" [(ngModel)]="valueModel" [options]="options" ngDefaultControl></ngx-select-options>`
