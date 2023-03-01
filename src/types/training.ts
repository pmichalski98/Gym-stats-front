export interface Exercise {
    id:string;
    name:string;
    sets?:number;
    reps?:number;
    weight?:number;
}

export interface Exercises{
    exercises: Exercise[]
}

export interface Training {
    name:string;
    id:string;
    exercises: Exercises
}

export interface Trainings {
    trainings: Training[]
}

export interface NavContext {
    currentPath: string;
    navigate: (to:string) => void
}