<script>
  import { isLoggedIn, tryLogin } from "../store/user";
  let cred = { username: "", password: "" };
  async function formSubmitHandler() {
    await tryLogin(cred);
    if (isLoggedIn.get()) {
      location.replace("/");
    } else {
      console.log("Sorry not logged in");
    }
  }
</script>

<form class="w-full max-w-sm" on:submit|preventDefault={formSubmitHandler}>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-full-name"
      >
        Username
      </label>
    </div>
    <div class="md:w-2/3">
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        id="inline-full-name"
        type="text"
        placeholder="Your Username?"
        bind:value={cred.username}
      />
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        for="inline-password"
      >
        Password
      </label>
    </div>
    <div class="md:w-2/3">
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        id="inline-password"
        type="password"
        placeholder="Your Password?"
        bind:value={cred.password}
      />
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-full">
      <button
        class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded min-w-full"
        type="submit"
      >
        Login
      </button>
    </div>
  </div>
</form>
