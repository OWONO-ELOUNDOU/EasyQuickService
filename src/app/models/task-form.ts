export interface TaskForm {
    username?: string;
    email?: string;
    phoneNumber?: string;
    userId: string;
    id: string;
    type: string;
    object: string;
    quality: string;
    description: string;
    natureJuridique: string;
    office: string;
    localisation: string;
    creationDate: string;
    status?: string;
}

export interface TaskGroup {
    id: string;
    tasks: TaskForm[];
}
