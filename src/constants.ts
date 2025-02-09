import { PageNameType } from './types/types';

const TIMEOUT_SHOW_ERROR = 3000;

const AuthStatus = {
  Auth: 'auth',
  NoAuth: 'no-auth',
  Unknown: 'unknown',
} as const;

const PageName:PageNameType = {
  Main: 'Main',
  Quest: 'quest',
  MyQuest: 'myquest',
  Booking: 'booking',
  Login: 'login',
  Contacts: 'contacts',
} as const;

const AppRoute = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:offerId',
  NotFound: '*',
} as const;

const APIRoute = {
  Offers: 'offers',
  Offer: '/offers/:offerId',
  NearbyOffers: '/offers/:offerId/nearby',
  Comments:'/comments/:offerId',
  Login: '/login',
  Logout: '/logout',
  FavoritesLoad: '/favorite',
  Favorite: '/favorite/:offerId/:status',
} as const;

const Status = {
  Idle: 'IDLE',
  Loading: 'LOADING',
  Success: 'SUCCESS',
  Error: 'ERROR'
} as const;

const THEME_QUESTS = [
  'Все квесты', 'Приключения', 'Ужасы',
  'Мистика', 'Детектив', 'Sci-fi'
] as const;

const DEFAULT_ACTIVE_THEME_QUESTS = THEME_QUESTS[0];

const LEVELS = [
  'Любой',
  'Лёгкий',
  'Средний',
  'Сложный',
] as const;
const DEFAULT_ACTIVE_LEVELS = LEVELS[0];


export {TIMEOUT_SHOW_ERROR, PageName, AppRoute, APIRoute, AuthStatus, Status,
  THEME_QUESTS, DEFAULT_ACTIVE_THEME_QUESTS,
  LEVELS, DEFAULT_ACTIVE_LEVELS
};
