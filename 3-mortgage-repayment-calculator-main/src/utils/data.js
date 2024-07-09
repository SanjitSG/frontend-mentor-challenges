export const numInput = [
  {
    label: "Mortgage Amount",
    symbol: "£",
    symbolPosition: "left",
    type: "text",
    name: "amount",
  },
  {
    label: "Mortgage Term",
    symbol: "years",
    symbolPosition: "right",
    type: "text",
    name: "time-period",
  },
  {
    label: "Interest Rate",
    symbol: "%",
    symbolPosition: "right",
    type: "text",
    name: "interest",
  },
];

export const radioData = [
  {
    label: "Mortgage Type",
    inputName: "Repayment",
    type: "radio",
    name: "mortgage-type",
    id: "repayment",
    value: 1,
  },
  {
    label: "Mortgage Type",
    inputName: "Repayment",
    type: "radio",
    name: "mortgage-type",
    id: "interestOnly",
    value: 2,
  },
];
