export interface FormFieldCore  {
    label?: string
    name: string;
    maxLength?: number
    placeholder?: string
    disabled?: boolean
}

export interface SelectOption{
    value: any;
    key?: string;
    text: string;
}
