<script>
    import {io} from "socket.io-client"
    const socket = io("http://localhost:3000/")

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
    socket.emit("prints", data);
    data = "";
  }
</script>


<textarea on:input={auto_grow} bind:value={data} style="overflow: hidden; resize: none; height: 26px;"></textarea>
<button on:click={sending}>Sent</button>