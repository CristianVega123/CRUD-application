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
    user ?: {
        id: number | undefined
        username: string
    } 
}

export type InfoCreateUser = ObjError | IResponseCreated;

export interface SessionDataCustom {
    id: number | undefined;
    user: string;
}

export interface ICreateProduct extends SessionDataCustom {
    nombre: string;
    precio: number;
    cantidad: number;
    marca: string
}

export interface DataCreated {
    id: number | undefined
    nombre: string;
    precio: number;
    cantidad: number;
    marca: string
}

export interface DataUpdate {
    nombre ?: string;
    precio?: number;
    cantidad?: number;
    marca?: string
}

export interface SessionFrontend {
    idProduct: number,
    userId: number | string;
}

export type RequestUpdate = DataUpdate & SessionFrontend