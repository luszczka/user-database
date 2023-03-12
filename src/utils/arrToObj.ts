import { type ProfileValuesTypes } from './setProfileValues';

export const arrToObj = ([key, value]: string[]): ProfileValuesTypes => ({ [key]: value });
