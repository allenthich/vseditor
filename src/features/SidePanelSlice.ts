import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import { CodeTemplate } from '../app/types'


// Define a type for the slice state
interface SidePanelState {
  templates: Array<CodeTemplate>
}

// TODO: Load existing templates as initial state fromlocalStorage potentially
// Also include starting id count to prevent overwrites
// Define the initial state using that type
const initialState: SidePanelState = {
    templates: []
}

export const sidePanelSlice = createSlice({
  name: 'sidePanel',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addTemplate: (state, action: PayloadAction<CodeTemplate>) => {
        
        // This "mutating" code is okay inside of createSlice!
        state.templates.push(action.payload)
    },
    removeTemplate: (state, action: PayloadAction<CodeTemplate>) => {
        
        // This "mutating" code is okay inside of createSlice!
        // state.templates.push(action.payload)
    },
    renameTemplate: (state, action: PayloadAction<CodeTemplate>) => {
      const templateIndex = action.payload.templateIndex
      if (templateIndex !== undefined) {
        state.templates[templateIndex].label = action.payload.label
      }
    },
  },
})

// Other code such as selectors can use the imported `RootState` type
export const selectTemplates = (state: RootState) => state.sidePanel.templates

export default sidePanelSlice.reducer