import {AUTO_LANGUAGE, type SUPPORTED_LANGUAGES} from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

//si es un object usar interface
export interface State{
    fromLanguage: FromLanguage,
    toLanguage: Language,
    fromText: string,
    result: string,
    loading: boolean   
}


export type Action =
    | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }   
    | { type: 'SET_TO_LANGUAGE', payload: Language }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_RESULT', payload: string }
    | { type: 'INTERCHANGE_LANGUAGES' }

//los enums son importantes para evitar tener que utilizar strings a mano.
export enum SectionType {
    From = 'from',
    To = 'to'
}