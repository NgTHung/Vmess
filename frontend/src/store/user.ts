import { task } from "nanostores";
import * as axios from "axios"
import {persistentAtom} from "@nanostores/persistent"


export const isLoggedIn = persistentAtom<string>("sadas","false");

export const tryLogin = async (objCredential: any) => {
    await task(async () => {
        const res = await axios.default.post("http://192.168.1.39:3000/auth/login", { username: objCredential.username, password: objCredential.password }, { withCredentials: true })
        if (res.data === 'Done') {
            isLoggedIn.set("true")
        }
        else{
            console.log(res)
        }
    });
};

export const tryLogout = async () => {
    await task(async () => {
        // if (!isLoggedIn.get()) return;
        const res = await axios.default.get("http://192.168.1.39:3000/auth/logout", { withCredentials: true })
        if (res.data === 'Done') {
            isLoggedIn.set("false")
        }
    })
}
