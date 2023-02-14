<script>
    import Bar from "$lib/components/bar/Bar.svelte";
    import ListYoutube from "$lib/components/ListYoutube.svelte";
    import Machine from "$lib/components/machine/Machine.svelte";
    import Youtube from "$lib/components/Youtube.svelte";
</script>


<section class="bar">
    <div>
        <Machine/>
    </div>
    <div>
        <Youtube/>
        <ListYoutube/>
    </div>
    <div>
        <Bar/>
    </div>
</section>

<style>
    .bar{
        display: grid;
        grid-template-columns: 20% 50% 30%;
    }

    .bar div:nth-child(1){
        display: grid;
        justify-content: center;
        align-items: end;
    }

</style>