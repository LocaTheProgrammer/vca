export class DynamicInput {
    public label: string
    public valueType: string //può essere input/output
    public inputValue: any
    public inputValueType: string //date, number, string ecc

    constructor(valueType: string, inputValue: any, inputValueType: string, label: string) {
        this.valueType = valueType
        this.inputValue = inputValue
        this.inputValueType = inputValueType
        this.label = label
    }
}