import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import codeTemplateSlice from './CodeTemplateSlice'


// Define a type for the slice state
interface SidePanelState {
    templates: Array<typeof codeTemplateSlice>
}

// Define the initial state using that type
const initialState: SidePanelState = {
    templates: []
}

export const sidePanelSlice = createSlice({
  name: 'sidePanel',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

  },
})

// Other code such as selectors can use the imported `RootState` type
export const selectTemplates = (state: RootState) => state.sidePanel.templates

export default sidePanelSlice.reducer