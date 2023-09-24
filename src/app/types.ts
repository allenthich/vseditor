export type TString = ``

// Define a type for the slice state
export interface CodeTemplate {
    templateIndex?: number,
    id: string,
    label: string,
    codeLiteral: TString
}
