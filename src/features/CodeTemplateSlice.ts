import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

type TString = ``

// Define a type for the slice state
interface CodeTemplateState {
    label: String,
    codeLiteral: TString
}

// Define the initial state using that type
const initialState: CodeTemplateState = {
    label: '',
    codeLiteral: ``
}

export const codeTemplateSlice = createSlice({
  name: 'codeTemplate',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    rename: (state, action: PayloadAction<String>) => {
      state.label = action.payload
    },
  },
})

export const { rename } = codeTemplateSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLabel = (state: RootState) => state.codeTemplate.label

export default codeTemplateSlice.reducer