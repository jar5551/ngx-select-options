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

Parameter | Description
--- | ---
placeholder | Text displayed on dropdown button
ngModel | Angular data binding
options | Array of options in dropdown

## Array options structure

Options data displayed on dropdown shoud have structure like this:

`[{ label: 'Option label', value: 123 }, {...}]`

Optional you can use also `key` value that defines selected value on dropdown button (instead of placeholder, when value is already selected).