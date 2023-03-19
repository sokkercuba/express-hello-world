export interface InitialData {
  initialWeeks: number;
  initialSkill: string;
}

export interface JuniorData {
  id: number;
  teamId: number;
  name: string;
  fullName: {
    name: string;
    surname: string;
    full: string;
  };
  skill: number;
  age: number;
  weeksLeft: number;
  pops: number;
  avg: string;
  projectedLvl: string;
  initialData: InitialData;
}
