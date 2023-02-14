
<script>
    export let joystick = 0;
</script>

<div class="claw-joystick">
    <div class="joystick" style="transform: rotate({joystick}deg);">
        <div class="ball"></div>
        <div class="stick"></div>
    </div>
    <div class="base"></div>
    <div class="shadow"></div>
</div>

<style>

    .claw-joystick {
        width: 60px;
        height: 75px;
        position: relative;
        display: grid;
        place-items: center;
        translate: 145px -76px;
        z-index: 7;
    }

    .claw-joystick .joystick {
        width: 50%;
        height: 75%;
        display: grid;
        place-items: center;
        transform-origin: 50% 100%;
        transition: transform 0.5s;
    }

    /*.joystick:hover { transform: rotate(25deg); }*/

    .claw-joystick .joystick .ball {
        background: var(--light-color-btn);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: -4px -8px 0 #0004 inset;
    }

    .claw-joystick .joystick .ball::before {
        content: "";
        display: block;
        background: #fffc;
        width: 30%;
        height: 20%;
        border-radius: 50%;
        transform: translate(4px, 5px) rotate(-35deg);
    }

    .claw-joystick .joystick .stick {
        background: #999;
        background-image: linear-gradient(40deg, #999 0 70%, #2229 75% 100%);
        width: 25%;
        height: 100%;
        border-radius: 0 0 18% 18%;
    }

    .base {
        position: absolute;
        width: 15px;
        height: 6px;
        border-radius: 5px;
        bottom: 5px;
        background: black;
    }

    .claw-joystick .shadow {
        background: #0009;
        width: 60%;
        height: 20%;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        z-index: -1;
    }

</style>