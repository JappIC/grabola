<script>
    import { musicList, openMusic } from '$lib/store/music.js';
    import TopMachine from "./TopMachine.svelte";
    import CrystalCube from "./crystal-cube/CrystalCube.svelte";
    import ControlPanel from "./control-panel/ControlPanel.svelte";
    import BottomMachine from "./bottom-machine/BottomMachine.svelte";

    export let 
        pressed = false,
        joystick = 0,
        clawX = 0,
        clawRotateZ = 0,
        fingerRotateZ = 75,
        down = false,
        useArrows = true,
        useSpace = true,
        showBall = false,
        showBallBox = false,
        dropBall = false,
        dropBallBox = false,
        openBall = false,
        ballRandom = 0
    ;

    $: ballSelected = $musicList[ballRandom]
    $: clawX

    /**
    * Lógica de la garra
    * @param {{ keyCode: any; }} e
    */
    function onKeyMotion(e) {

        // Desplazamiento horizontal de la garra con las flechas
        if( e.keyCode === 37 && useArrows === true ){
            clawX = Math.max(-75,clawX - 2);
            clawRotateZ = -10;
            joystick = -25
        } else if( e.keyCode === 39 && useArrows === true ){
            clawX = Math.min(75,clawX + 2);
            clawRotateZ = 10;
            joystick = 25
        }

        // Reseteamos el efecto de los dedos de la garra y desplazamiento del joystick
        setTimeout(()=>{
            clawRotateZ = 0
            joystick = 0
        }, 500);

        // Aletoriedad de si agarra la bola o no
        const dropRandom = Math.floor(Math.random() * 2);

        // Lógica de agarrar la bola
        if( e.keyCode === 32 && useSpace === true ){
            
            down = true
            useArrows = false
            useSpace = false

            pressed = true
            
            setTimeout(()=>{
                pressed = false
            }, 500);
            
            setTimeout(()=>{
                fingerRotateZ = 65;
                showBall = true
            }, 1000);

            setTimeout(()=>{
                useArrows = true
            }, 3000);

            // Si falla
            if (dropRandom === 0) {
                setTimeout(()=>{
                    fingerRotateZ = 75
                    dropBall = true
                }, 2500);

                setTimeout(()=>{
                    down = false
                    ballRandom = Math.floor(Math.random() * 84)
                }, 3000);

                setTimeout(()=>{
                    showBall = false
                    dropBall = false
                    useSpace = true
                }, 3500);
            }

            // Si acierta
            if (dropRandom === 1) {

                ballRandom = Math.floor(Math.random() * 84)
                console.log(clawX)
                
                setTimeout(()=>{
                    down = false
                    fingerRotateZ = 75
                    dropBall = true
                }, 6500);

                setTimeout(()=>{
                    showBall = false
                    dropBall = false
                }, 7000);

                setTimeout(()=>{
                    dropBallBox = true
                    showBallBox = true
                    useArrows = false
                }, 7500);


                // Detecta si el gancho está donde se suelta la bola pero no funciona si se desplazo el gacho hacia esa posición.
                // Para probar quitar el último setTimeout y descomenta la siguiente condición.
                /*if(clawX <= 58 && clawX >= 42){
                    setTimeout(()=>{
                        dropBallBox = true
                        showBallBox = true
                    }, 7500);
                } else {
                    dropBallBox = false
                    showBallBox = false
                    useSpace = true
                }*/
                
            }
            
        }
    }

    function playMusic() {
		$openMusic = ballSelected.video
        openBall = true
        setTimeout(()=>{
            dropBallBox = false
            showBallBox = false
            openBall = false
            useArrows = true
            useSpace = true
        }, 2000);   
	}
</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<div class="machine-container">
    <TopMachine/>
    <CrystalCube {clawRotateZ} {down} {fingerRotateZ} {showBall} {dropBall} img={ballSelected.img} {clawX}/>
    <ControlPanel {pressed} {joystick}/>
    <BottomMachine img={ballSelected.img} author={ballSelected.author} {showBallBox} {dropBallBox} {openBall} on:click={playMusic}/>
    <div class="base-machine"></div>
</div>
<svelte:window on:keydown|preventDefault={onKeyMotion} />


<style>

    .machine-container {
        width: var(--width-machine);
        height: var(--height-machine);
        display: grid;
        grid-template-rows: 20% 40% 6% 30% 4%;
    }

    .base-machine {
        width: calc( var(--width-machine) - 25px );
        margin: 0 auto;
        background: var(--c-roof);
        border-radius: 0 0 50px 50px;
        box-shadow: 0 11px 5px -4px #2e2e2e;
    }

</style>