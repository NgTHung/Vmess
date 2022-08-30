/// <reference types="node" />
import { types } from "cassandra-driver";
export default class User {
    id: types.Uuid;
    username: String;
    password: Buffer;
}
