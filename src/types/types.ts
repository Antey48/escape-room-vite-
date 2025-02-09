import { LEVELS, THEME_QUESTS } from '../constants';


type PageNameType = {
    'Main': string;
    'Quest': string;
    'MyQuest': string;
    'Booking': string;
    'Login': string;
     'Contacts': string;
  };

type LevelsType = typeof LEVELS;
type LevelKeysType = LevelsType[number];

type ThemeQuestsType = typeof THEME_QUESTS;
type ThemeQuestKeysType = ThemeQuestsType[number];


export type {PageNameType, LevelsType, LevelKeysType,
  ThemeQuestsType, ThemeQuestKeysType
};
