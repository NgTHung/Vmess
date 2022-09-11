import { atom, action, task } from "nanostores";
import * as axios from "axios"
export const isLoggedIn = atom(false);
export const mutateIsLoggedIn = action(
    isLoggedIn,
    "mutateIsLoggedIn",
    (store, payload) => {
        store.set(payload);
        return store.get();
    }
);

export const tryLogin = async (objCredential: any) => {
    await task(async () => {
        const res = await axios.default.post("http://localhost:3000/auth/login", { username: objCredential.username, password: objCredential.password }, { withCredentials: true })
        if (res.data === 'Done') {
            mutateIsLoggedIn(true)
        }
    });
};

export const tryLogout = async () => {
    await task(async () => {
        if (!isLoggedIn.get()) return;
        const res = await axios.default.get("http://localhost:3000/auth/logout", { withCredentials: true })
        if (res.data === 'Done') {
            mutateIsLoggedIn(false)
        }
    })
}
