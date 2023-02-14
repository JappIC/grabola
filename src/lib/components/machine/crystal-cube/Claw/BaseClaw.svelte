
<div class="base-claw">
    <div class="base-top"></div>
    <div class="base-mid"></div>
    <div class="base-bottom"></div>
</div>

<style>

    .base-claw {
        display: grid;
        place-items: center;
        z-index: 5;
        position: relative;
    }

    .base-claw :is( .base-top, .base-mid , .base-bottom ) {
        background: linear-gradient(
            to right,
            #959595,
            #7c828d
        );
    }

    .base-claw .base-top{
        width: 35px;
        height: 15px;
        border-radius: 0 0 3px 3px;
        box-shadow: -5px 9px 9px -4px #222222 inset;
    }

    .base-claw .base-mid{
        width: 15px;
        height: 8px;
        box-shadow: -4px 6px 4px -3px #222222 inset;
    }

    .base-claw .base-bottom{
        width: 10px;
        height: 18px;
        box-shadow: -3px 9px 8px -3px #343333 inset;
    }

</style>