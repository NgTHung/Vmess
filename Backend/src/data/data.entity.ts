import {types} from "cassandra-driver"
export default class User {
    id: types.Uuid;
    username: string;
    password: string;
}
export class UserDto{
    username: string;
    password: string;
}