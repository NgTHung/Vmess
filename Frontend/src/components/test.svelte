<script>
    let count = 0
    function inc(){
        count += 1
    }
</script>
<button on:click={inc}>
    {count}
</button>