<script>
    import BaseClaw from "./BaseClaw.svelte";
    import Arm from "./Arm.svelte";

    export let 
        clawX = 0,
        clawRotateZ = 0,
        fingerRotateZ = 75,
        down = false,
        showBall = false,
        dropBall = false,
        img = ""
    ;

</script>

<div class="the-claw" style="transform: translateX({clawX}px);">
    <BaseClaw/>
    <Arm {clawRotateZ} {down} {fingerRotateZ} {showBall} {dropBall} {img}/>
</div>

<style>

    .the-claw {
        width: 55px;
        height: 300px;
        transition: transform 0.2s cubic-bezier(0.2, 0.3, 0.3, 0.2);
    }

</style>