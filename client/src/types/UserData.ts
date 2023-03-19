export interface TodayData {
  day: number;
  week: number;
  season: number;
  seasonWeek: number;
  date: {
    value: string;
    // get the date using new Date(timestamp * 1000)
    timestamp: number;
  };
}

export interface TeamData {
  id: number;
  name: string;
  rank: number;
  emblem: string;
  country: {
    code: number;
    name: string;
  };
  colors?: any;
  nationalType: number;
}

export interface UserData {
  id: number;
  name: string;
  today: TodayData;
  team: TeamData;
  budget: {
    value: number;
    currency: string;
  };
  roles?: any[];
  plus: boolean;
  hasTrialPlus: boolean;
  plusDeadline: string | null;
  dateTime?: {
    date: string;
    timezone_type: number;
    timezone: string;
  };
  enabledFeatures: string[];
  sl: string;
  nationalTeamId: number;
  nationalTeam: number | string | null;
  firstLogin: boolean;
  settings: {
    locale: string;
    theme: string;
  };
  lock: {
    transfersLocked: boolean;
    readOnlyMode: boolean;
  };
}
