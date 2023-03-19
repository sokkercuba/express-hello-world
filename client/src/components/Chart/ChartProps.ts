import type { PlayerFormationName } from "../../types/PlayerData";

export interface SkillData {
  date: number;
  value: number;
  formation: PlayerFormationName;
}
export interface ChartProps {
  skillName: string;
  data: SkillData[];
  onDataChange: (page: number) => void;
}
