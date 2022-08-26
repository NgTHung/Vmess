import { createSignal } from "solid-js";
import { Button } from "solid-headless";

export default function Counter() {
    const [Count, setCount] = createSignal(0);
    return (
        <>
            <div class="flex h-screen justify-center items-center">
                <Button class="rounded-md px-2 py-1 text-sm font-medium transition duration-150 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-gray-900 dark:focus-visible:ring-gray-50 border-2 border-gray-900 dark:border-gray-300" onClick={() => { setCount(Count() - 1) }}>-</Button>
                &nbsp;&nbsp;{Count()}&nbsp;&nbsp;
                <Button class="rounded-md px-2 py-1 text-sm font-medium transition duration-150 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-gray-900 dark:focus-visible:ring-gray-50 border-2 border-gray-900 dark:border-gray-300" onClick={() => { setCount(Count() + 1) }}>+</Button>
            </div>
        </>
    )
}