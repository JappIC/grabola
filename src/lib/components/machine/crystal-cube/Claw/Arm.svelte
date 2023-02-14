<script>
    import Finger from "./Finger.svelte";
    import Ball from "../../ball.svelte";

    export let
        showBall = true,
        dropBall = false,
        clawRotateZ = 0,
        fingerRotateZ = 65,
        down = false,
        img = ""
    ;

    //console.log($musicList[ballRandom])

</script>

<div class="arm" class:down>
    <div class="extender-claw"></div>
    <div class="claw" style="transform: rotateZ({clawRotateZ}deg)">
        <div class="axis"></div>
        <Finger transform="rotateZ({fingerRotateZ}deg)"/>
        <Finger transform="rotateZ(-{fingerRotateZ}deg) rotateY(180deg)" />
    </div>
    <Ball {showBall} {dropBall} {img}/>
</div>

<style>

    .arm{
        transition: translate 1s;
        translate: 0 -170px
    }

    .arm .extender-claw {
        width: 3px;
        height: 180px;
        margin: 0 auto;
        background: linear-gradient(
            to right,
            #959595  0 60%,
            #8a8f97  60% 100%
        );
    }

    .arm .claw {
        position: relative;
        transition: transform 0.25s cubic-bezier(0.2, 0.3, 0.3, 0.2);
        transition-delay: 0.1s;
    }

    .arm .claw .axis{
        width: 17px;
        height: 17px;
        margin: 0 auto;
        border-radius: 50%;
        background: #959595;
        background-image: radial-gradient(
            circle,
            #959595  0 15%,
            #7c828d  20% 25%,
            #d4d4d4  30% 40%,
            #959595  45% 100%
        );
        position: relative;
        z-index: 5;
    }

    .down{
        animation: down 3s cubic-bezier(0.65, 0, 0.35, 1);
    }

    @keyframes down{
        0%, 100% {
            translate: 0 -170px
        }

        40%, 60% {
            translate: 0 0px
        }
    }

</style>