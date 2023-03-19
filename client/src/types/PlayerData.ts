import { TodayData } from "./UserData";

export type PlayerFormationName = "GK" | "DEF" | "MID" | "ATT";
export interface PlayerFormation {
  code: number;
  name: PlayerFormationName;
}

export interface PlayerName {
  name: string;
  surname: string;
  full: string;
}

export interface PlayerSkills {
  form: number;
  tacticalDiscipline: number;
  teamwork: number;
  experience: number;
  stamina: number;
  keeper: number;
  playmaking: number;
  passing: number;
  technique: number;
  defending: number;
  striker: number;
  pace: number;
}

export type PlayerTrainingData = Pick<
  PlayerSkills,
  | "stamina"
  | "keeper"
  | "playmaking"
  | "passing"
  | "technique"
  | "defending"
  | "striker"
  | "pace"
>;

export interface TrainingWeek extends TodayData, PlayerTrainingData {
  formation: PlayerFormation;
}

export interface PlayerStats {
  goals: number;
  assists: number;
  matches: number;
  cards: {
    cards: number;
    yellow: number;
    red: number;
  };
}

export interface PlayerInfo {
  name: PlayerName;
  formation?: PlayerFormation | null;
  number?: number | null;
  team?: {
    id: number;
  };
  country: {
    code: number;
    name: string;
  };
  value: {
    value: number;
    currency: string;
  };
  previousValue?: number | null;
  wage: {
    value: number;
    currency: string;
  };
  characteristics: {
    age: number;
    bmi: number;
    height: number;
    weight: number;
  };
  skills: PlayerSkills;
  stats: PlayerStats;
  nationalStats: PlayerStats;
  face: {
    face: number;
    skinColor: number;
    hairColor: number;
    hair: number;
    eyes: number;
    nose: number;
    beard: number;
    beardColor: number;
    shirt: number;
    mouth: number;
  };
  youthTeamId?: number | null;
  injury: {
    severe: boolean;
    daysRemaining: number;
  };
  nationalSharing: boolean;
}

export interface PlayerData {
  id: string;
  info: PlayerInfo;
  formation: PlayerFormation;
  games: {
    minutesOfficial: number;
    minutesFriendly: number;
    minutesNational: number;
  };
  intensity: number;
  effectiveness: number;
  trainingData: TrainingWeek[];
}
