import {type InfoCreateUser, IResponseCreated} from './Interface'

export function isResponseCreated(data: InfoCreateUser) : data is IResponseCreated {
    return (data as IResponseCreated).user !== undefined;
}