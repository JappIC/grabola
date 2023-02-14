<script>
    import Bottle2 from "$lib/components/bar/bottles/Bottle2.svelte";
    import Bottle1 from "$lib/components/bar/bottles/Bottle1.svelte";
    import Bottle3 from "$lib/components/bar/bottles/Bottle3.svelte";
    import Bottle4 from "$lib/components/bar/bottles/Bottle4.svelte";
    import Shelf from "$lib/components/bar/shelf/shelf.svelte";
</script>

<div class="shelf-bar">
    <div class="shelf1 ">
        <div>
            <Bottle1/>
            <Bottle3/>
            <Bottle3/>
            <Bottle4/>
            <Bottle2/>
        </div>
        <Shelf/>
    </div>
    <div class="shelf2">
        <div>
            <Bottle4/>
            <Bottle1/>
            <Bottle1/>
            <Bottle2/>
            <Bottle3/>
            <Bottle1/>
        </div>
        <Shelf/>
    </div>
</div>

<style>
    .shelf-bar{
        display: grid;
        gap: 25px;
        grid-auto-rows: 115px 115px;
    }

    .shelf-bar .shelf1 > div{
        padding-left: 100px;
    }

    .shelf-bar .shelf2 > div{
        padding-left: 35px;
    }

    .shelf-bar > div > div{
        display: flex;
        align-items: flex-end;
    }
</style>
    