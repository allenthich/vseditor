import { ADD_TEMPLATE, REMOVE_TEMPLATE, RENAME_TEMPLATE } from "./actionTypes";
import { CodeTemplateState } from '../features/CodeTemplateSlice'

let nextTemplateId = 0;

export const createTemplate = (content: CodeTemplateState) => ({
  type: ADD_TEMPLATE,
  payload: {
    id: ++nextTemplateId,
    content
  }
});

export const removeTemplate = (id: Number) => ({
  type: REMOVE_TEMPLATE,
  payload: { id }
});

export const renameTemplate = (id: Number, label: String) => ({
  type: RENAME_TEMPLATE,
  payload: { 
    id,
    label
 }
});

