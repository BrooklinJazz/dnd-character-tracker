import { ICharacter } from "common/types";

export interface ICharactersState {
    username: string;
}

import { Action } from 'redux';

export const GET_CHARACTERS = "@@chat/CHARACTER_LIST_GET";

export interface ICharacterListGetAction extends Action {
    type: typeof GET_CHARACTERS;
    characters: ICharacter[]
}