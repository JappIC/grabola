<script>
    let pressed = false;

    /**
    * @param {{ keyCode: any; }} e
    */

    function onKeyDown(e) {

    const {key} = e.keyCode


    if( e.keyCode === 32 ){
        
        pressed = true
        
        setTimeout(()=>{
            pressed = false
        }, 500);

    }
}
</script>


<div class="claw-buttom">
    <div class="buttom" class:pressed></div>
    <div class="shadow"></div>
</div>
<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>

    .claw-buttom {
        width: 50px;
        height: 30px;
        position: relative;
        display: grid;
        place-items: center;
        translate: 50px 0;
    }

    .claw-buttom .buttom {
        background: var(--light-color-btn);
        width: 75%;
        height: 40%;
        box-shadow: 
            0 2px 0 var(--dark-color-btn),
            0 4px 0 var(--dark-color-btn),
            0 6px 0 var(--dark-color-btn),
            0 8px 0 var(--dark-color-btn),
            0 10px 0 var(--dark-color-btn)
        ;
        position: relative;
        border-radius: 50%;
        z-index: 4;
        transform: translate(0, -4px);
        transition: 
            transform 0.5s,
            box-shadow 0.5s
        ;
    }

    .claw-buttom .pressed {
        box-shadow: 
            0 1px 0 var(--dark-color-btn),
            0 2px 0 var(--dark-color-btn),
            0 3px 0 var(--dark-color-btn),
            0 4px 0 var(--dark-color-btn),
            0 5px 0 var(--dark-color-btn)
        ;
        transform: translate(0, 1px);
    }

    .claw-buttom .shadow {
        background: #0009;
        width: 100%;
        height: 60%;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
    }

</style>