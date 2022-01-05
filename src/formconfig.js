export const CALL_FORM_CONFIG = [{
  name: 'name',
  component: "dyn-input",
  label: 'název',
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'submission_start',
  component: "dyn-date",
  label: "začátek navrhování",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'submission_end',
  component: "dyn-date",
  label: "konec navrhování",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'thinking_start',
  component: "dyn-date",
  label: "začátek ověřování",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'voting_start',
  component: "dyn-date",
  label: "začátek hlasování",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'voting_end',
  component: "dyn-date",
  label: "konec hlasování",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'budgetlimit',
  component: "dyn-input",
  label: "limit rozpočtu",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'minimum_support',
  component: "dyn-input",
  label: "minimální počet palečků",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'status',
  label: "status",
  fieldcomponent: true
}]

// export const OPTION_FORM_CONFIG = [{
//   name: 'value',
//   component: "dyn-input",
//   label: "hodnota",
//   rules: "required",
//   fieldcomponent: true, sortable: true
// }, {
//   name: 'text',
//   component: "dyn-input",
//   label: "text",
//   rules: "required",
//   fieldcomponent: true, sortable: true
// }, {
//   name: 'note',
//   component: "dyn-input",
//   label: "poznámka",
//   fieldcomponent: true
// }]