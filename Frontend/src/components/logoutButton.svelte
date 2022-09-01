<script>
    import {tryLogout,isLoggedIn} from "../store/user"
    const trylogout = async () => {
        await tryLogout()
        location.replace('/')
    }
</script>

<button
  class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
  on:click={trylogout}>Logout</button
>