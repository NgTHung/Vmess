<script>
  import { onMount } from "svelte";
  import {tryLogin, isLoggedIn, tryLogout} from "../store/user"
  let cred = {username:"",password:""}
  const login = async (e) =>{
    await tryLogin(cred)
    if($isLoggedIn == "true"){
      location.replace("/")
    }
    else{
      console.log("ERROR!")
    }
  }
  onMount(()=>{
    if($isLoggedIn == "true"){
      location.replace('/')
    }
  })
  const logout = async ()=>{
    await tryLogout()
  }
</script>

<div>
  {$isLoggedIn}
  <button on:click={logout}>Logout</button>
  <article>Vmess</article>
  <span>
    <p class="title">Đăng nhập tài khoảng</p>
    <!-- <div class="big"> -->
    <form on:submit|preventDefault={login}>
      <input type="text" placeholder="Tên tài khoảng..." bind:value={cred.username} />
      <input type="password" placeholder="Mật khẩu..." bind:value={cred.password} />
      <div class="center">
        <input type="submit" value="Đăng nhập" class="submit" />
      </div>
    </form>
  </span>
</div>

<!-- </div> -->
<style>
  form {
    width: auto;
    height: auto;
    max-width: 350px;
    max-height: 200px;
    border: 1px solid #dee3ed;
    border-radius: 30px;
    background-color: #fbfbfb;
    /* flex-basis: 200px;
    flex-grow: 0;
    flex-shrink: 0; */
    /* margin: 40px; */
  }
  .center {
    display: flex;
    justify-content: center;
  }
  input[type="submit"] {
    margin: 1px;
    border: 1px solid #2f528f;
    background-color: #f2f2f2;
    font-weight: bold;
    padding: 3px 10px;
    border-radius: 7px;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  span {
    position: absolute;
    bottom: 0px;
    width: auto;
    display: inline-block;
  }
  input[type="text"],
  input[type="password"] {
    width: 88%;
    margin: 0 6%;
    margin-top: 20px;
    border: 1px solid #c3ccdb;
    border-radius: 30px;
    background-color: #f2f2f2;
    padding: 5px;
    padding-left: 30px;
    flex-basis: 200px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  input::placeholder {
    color: black;
  }

  div {
    display: flex;
    justify-content: center;
  }
  .title {
    width: auto;
    height: auto;
    max-width: 350px;
    max-height: 200px;
    font-weight: bold;
    text-decoration: underline;
    font-size: large;
    display: flex;
    justify-content: center;
  }
</style>
