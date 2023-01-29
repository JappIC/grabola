<script>
  import ClawButtom from "./ClawButtom.svelte";
  import ClawJoystick from "./ClawJoystick.svelte";
</script>

<div class="control-panel">
    <div class="board"></div>
    <ClawButtom/>
    <ClawJoystick/>
</div>

<style>

    .control-panel {
        position: relative;
    }

    .control-panel > * {
        position: absolute;
    }

    .control-panel .board {
        background-color: var(--light-color);
        width: 100%;
        height: 100%;
        clip-path: polygon(5% 0, 95% 0, 100% 100%, 0 100%);
    }

</style>