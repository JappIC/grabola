<script>
    import CounterBar from "./Counter/CounterBar.svelte";
    import ShelfBar from "./shelf/ShelfBar.svelte";
  import Sign from "./Sign.svelte";
</script>

<div class="bar">
    <Sign/>
    <ShelfBar/>
    <CounterBar/>
</div>

<style>
    .bar{
        display: grid;
        grid-template-rows: 15% 45% 40%;
        height: 100%;
    }
</style>
    