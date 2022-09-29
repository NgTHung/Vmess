<script>
    import{isLoggedIn, tryLogout} from "../store/user"
    const logout = async ()=>{
    await tryLogout()
  }
</script>

{#if $isLoggedIn == "true"}
    <button on:click={logout}>Logout</button>
    <a href="/chat">Chat</a>
{:else}
    <a href="/login">Login</a>
{/if}

