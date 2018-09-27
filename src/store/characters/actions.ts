import { ICharacter } from 'common/types';
import { ActionCreator } from 'redux';
import {
    GET_CHARACTERS,
    ICharacterListGetAction,
} from './types';

// Type these action creators with `: ActionCreator<ActionTypeYouWantToPass>`.
// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly.



export const getCharactersList: ActionCreator<ICharacterListGetAction> = () => ({
    type: typeof GET_CHARACTERS,
    characters
});