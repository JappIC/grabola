<script>
    import Glass from "../bottles/Glass.svelte";
    import Counter from "./Counter.svelte";
</script>

<div class="counter-bar">
    <div class="glass-top">
        <Glass/>
        <Glass/>
    </div>
    <Counter/>
</div>

<style>
    .counter-bar{
        display: grid;
        grid-template-rows: 15% 85%;
        height: 100%;
    }

    .counter-bar .glass-top{
        display: flex;
        gap: 10px;
        padding-left: 35%;
    }
</style>