<script>
    import ClawButtom from "./ClawButtom.svelte";
    import ClawJoystick from "./ClawJoystick.svelte";

    export let 
        pressed = false,
        joystick = 0
    ;

</script>

<div class="control-panel">
    <div class="board"></div>
    <ClawButtom {pressed}/>
    <ClawJoystick {joystick}/>
</div>

<style>

    .control-panel {
        position: relative;
    }

    .control-panel > * {
        position: absolute;
    }

    .control-panel .board {
        background: linear-gradient( 88deg, #904236 0, #bf6541 100% );
        width: 100%;
        height: 100%;
        clip-path: polygon(5% 0, 95% 0, 100% 100%, 0 100%);
    }

</style>