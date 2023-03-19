export interface Exercise {
  id?: string;
  name: string;
  sets?: number;
  reps?: number;
  weight?: number;
}
export interface Training {
  title: string;
  id?: string;
  exercises: Exercise[];
}

export interface NavContext {
  currentPath: string;
  navigate: (to: string) => void;
}

export type FormData = Partial<Exercise>;
