export interface IDataUser {
    id ?: number; 
    username : string;
    email: string;
    password: string;
}

enum Errores {
    E_UNIQUE = "error_unique",
    STATUS = "status_error" 
}

export type ObjError = {
    [index in Errores] ?: string | number;
}

export interface IResponseCreated {
    status: number; 
    user ?: IDataUser
}

export type InfoCreateUser = ObjError | IResponseCreated;

export interface SessionDataCustom {
    id: string;
    user: string;
}

