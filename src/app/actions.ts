import { ADD_TEMPLATE, REMOVE_TEMPLATE, RENAME_TEMPLATE } from "./actionTypes";
import { CodeTemplate } from '../app/types'

export const createTemplate = (content: CodeTemplate) => ({
  type: ADD_TEMPLATE,
  payload: content
});

export const removeTemplate = (id: number) => ({
  type: REMOVE_TEMPLATE,
  payload: { id }
});

export const renameTemplate = (id: number, label: string) => ({
  type: RENAME_TEMPLATE,
  payload: { 
    id,
    label
 }
});

