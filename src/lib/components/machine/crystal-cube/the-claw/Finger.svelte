
<div class="finger" {...$$restProps}>
    <div class="phalanx"></div>
    <div class="fingernail"></div>
</div>

<style>

    .finger{
        position: absolute;
        left: 41%;
        transform-origin: 50% 0;
        translate: 0 -10px;
        transition: transform 0.3s;
    }

    .finger .phalanx {
        width: 10px;
        height: 40px;
        background: radial-gradient(
            circle,
            #a5a4a4,
            #7c828d
        );
        clip-path: polygon( 0 0, 30% 100%, 70% 100%, 100% 0 );
        box-shadow: 0px 7px 7px -3px #000 inset;
        border-radius: 50% / 25%;
        position: relative;
        z-index: 4;
    }

    .finger .phalanx::after {
        content: "";
        display: block;
        position: absolute;
        background: black;
        width: 2px;
        height: 2px;
        border-radius: 50%;
        bottom: 1px;
        left: 40%;
    }

    .finger .fingernail{
        width: 3px;
        height: 20px;
        position: absolute;
        left: 4px;
        bottom: -18.3px;
        background: radial-gradient( circle, #a5a4a4, #5e6064 );
        box-shadow: 0px -9px 0px -1px #000 inset;
        border-radius: 50% / 5%;
        clip-path: polygon( 0 0, 30% 100%, 70% 100%, 100% 0 );
        transform-origin: 50% 0;
        --claw-angle:-90deg;
        transform: rotate(var(--claw-angle));
    }

</style>