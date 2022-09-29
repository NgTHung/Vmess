<script>
    import {io} from "socket.io-client"
    const socket = io("http://192.168.1.39:3000/")

  let data = "";
  function htmlEscape(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function auto_grow(element) {
    element.target.style.height = "5px";
    element.target.style.height = element.target.scrollHeight + "px";
    if (data.indexOf("\n") !== -1) {
      sending();
      element.target.style.height = "26px";
    }
  }
  function sending() {
    if (data == "") return;
    socket.emit("prints", htmlEscape(data));
    data = "";
  }
  import { onMount } from "svelte";
  import {isLoggedIn} from "../store/user"
  onMount(()=>{
    if($isLoggedIn == "false"){
      location.replace('/')
    }
  })
</script>

<div>
  <textarea on:input={auto_grow} bind:value={data} style="overflow: hidden; resize: none; height: 26px;"></textarea>
  <button on:click={sending}>Sent</button>
</div>
<style>
  div{
    border: 1px solid black;
    margin:  auto;
  }
</style>