<script>
    import TopMachine from "./TopMachine.svelte";
    import CrystalCube from "./crystal-cube/CrystalCube.svelte";
    import ControlPanel from "./control-panel/ControlPanel.svelte";
    import BottomMachine from "./bottom-machine/BottomMachine.svelte";
</script>

<div class="machine-container">
    <TopMachine/>
    <CrystalCube/>
    <ControlPanel/>
    <BottomMachine/>
    <div class="base-machine"></div>
</div>

<style>

    .machine-container {
        width: var(--width-machine);
        height: var(--height-machine);
        display: grid;
        grid-template-rows: 10% 45% 6% 35% 2%;
    }

    .base-machine {
        width: calc( var(--width-machine) - 25px );
        margin: 0 auto;
        background: #111;
        border-radius: 0 0 50px 50px;
    }

</style>