import { LEVELS, THEME_QUESTS } from '../constants';


type PageNameType = {
    'Main': string;
    'Quest': string;
    'MyQuest': string;
    'Booking': string;
    'Login': string;
     'Contacts': string;
  };

type DifficultyType = typeof LEVELS;
type DifficultyKeysType = DifficultyType[number];

type ThemeQuestsType = typeof THEME_QUESTS;
type ThemeQuestsKeysType = ThemeQuestsType[number];


export type {PageNameType, DifficultyType, DifficultyKeysType,
  ThemeQuestsType, ThemeQuestsKeysType
};
