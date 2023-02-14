
<script>

    export let
        showBall = true,
        showBallBox = false,
        dropBall = false,
        dropBallBox = false,
        openBall = false,
        img = "",
        author = ""
    ;

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="ball" class:showBall class:dropBall class:dropBallBox class:showBallBox on:click>
    <div class="top" class:openBall></div>
    <img src={img} alt={author}>
    <div class="line"></div>
    <div class="bottom"></div>
</div>

<style>

    .ball {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: relative;
        box-shadow: 0px 0px 2px 0px #000;
        display: none;
    }

    .ball .top {
        background: radial-gradient(ellipse, #fff9, transparent );
        height: 50%;
        transform-origin: 0% 100%;
        border-radius: 25px 25px 0 0;
    }

    .ball img {
        width: 33px;
        height: 33px;
        position: absolute;
        z-index: -1;
        top: 10px;
        left: 8px;
    }

    .ball .line {
        width: 56px;
        height: 4px;
        transform: translateX(-3px);
        border-radius: 2px;
        position: absolute;
    }

    .ball .bottom {
        height: 50%;
        box-shadow: 0 0 14px #0008 inset;
        border-radius: 0 0 25px 25px;
    }

    .openBall{
        transform: rotate(-25deg);
        transition: 1s;
    }

    .showBall{
        display: block;
    }

    .showBallBox{
        display: block;
        margin: 0 auto !important;
    }

    .dropBall{
        animation: drop-ball 1s;
    }

    .dropBallBox{
        animation: drop-ball-box 1s;
        translate: 0 8px;
    }

    @keyframes drop-ball{
        100% {
            translate: 0 200px
        }
    }

    @keyframes drop-ball-box{
        0%{
            translate: 0 -40px;
        }
        100% {
            translate: 0 8px;
        }
    }

    /* ESTO SERÍA MEJOR HACERLO CON UNA FUNCION DE JS */
    .ball:nth-child(1){ transform: rotate(15deg); margin: -15px 5px 0 0;}
    .ball:nth-child(2){ transform: rotate(-5deg); margin: 5px 5px 0 0;}
    .ball:nth-child(3){ transform: rotate(10deg); margin: 0px 5px 0 0;}
    .ball:nth-child(4){ transform: rotate(35deg); margin: -15px 5px 0 0;}
    .ball:nth-child(5){ transform: rotate(-15deg); margin: -20px 5px 0 0;}
    .ball:nth-child(6){ transform: rotate(-25deg); margin: -20px 5px 0 0;}
    .ball:nth-child(7){ transform: rotate(5deg); margin: -15px 5px 0 0;}
    .ball:nth-child(8){ transform: rotate(-30deg); margin: -20px 5px 0 0;}
    .ball:nth-child(9){ transform: rotate(-45deg); margin: -80px 0 0 -10px; z-index: -1;}
    .ball:nth-child(10){ transform: rotate(10deg); margin: -65px 0 0 0;  z-index: -1;}
    .ball:nth-child(11){ transform: rotate(5deg); margin: -65px 5px 0 0;  z-index: -1;}
    .ball:nth-child(12){ transform: rotate(15deg); margin: -85px 5px 0 0;  z-index: -1;}
    .ball:nth-child(13){ transform: rotate(45deg); margin: -35px 10px 0 0; z-index: -1;}
    .ball:nth-child(14){ transform: rotate(-10deg); margin: -35px 10px 0 0;  z-index: -1;}
    .ball:nth-child(15){ transform: rotate(-5deg); margin: -35px 5px 0 0;  z-index: -1;}
    .ball:nth-child(16){ transform: rotate(-15deg); margin: -35px -10px 0 0;  z-index: -1;}

    /* ESTO SERÍA MEJOR HACERLO CON UNA FUNCION DE JS */
    .ball:nth-child(1) .bottom{ background: linear-gradient(rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0.9) );}
    .ball:nth-child(2) .bottom{ background: linear-gradient(rgba(0, 153, 255, 0.8), rgba(0, 153, 255, 0.9) );}
    .ball:nth-child(3) .bottom{ background: linear-gradient(rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0.9) );}
    .ball:nth-child(4) .bottom{ background: linear-gradient(rgba(255, 0, 212, 0.8), rgba(255, 0, 212, 0.9) );}
    .ball:nth-child(5) .bottom{ background: linear-gradient(rgba(238, 255, 0, 0.8), rgba(238, 255, 0, 0.9) );}
    .ball:nth-child(6) .bottom{ background: linear-gradient(rgba(0, 255, 21, 0.8), rgba(0, 255, 21, 0.9) );}
    .ball:nth-child(7) .bottom{ background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9) );}
    .ball:nth-child(8) .bottom{ background: linear-gradient(rgba(229, 255, 0, 0.8), rgba(229, 255, 0, 0.9) );}
    .ball:nth-child(9) .bottom{ background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9) );}
    .ball:nth-child(10) .bottom{ background: linear-gradient(rgba(0, 217, 255, 0.8), rgba(0, 217, 255, 0.9) );}
    .ball:nth-child(11) .bottom{ background: linear-gradient(rgba(255, 251, 0, 0.8), rgba(255, 251, 0, 0.9) );}
    .ball:nth-child(12) .bottom{ background: linear-gradient(rgba(51, 255, 0, 0.8), rgba(51, 255, 0, 0.9) );}

    /* ESTO SERÍA MEJOR HACERLO CON UNA FUNCION DE JS */
    .ball:nth-child(1) .line{ background: rgba(255, 0, 0, 0.9);}
    .ball:nth-child(2) .line{ background: rgba(0, 153, 255, 0.9);}
    .ball:nth-child(3) .line{ background: rgba(255, 0, 0, 0.9);}
    .ball:nth-child(4) .line{ background: rgba(255, 0, 212, 0.9);}
    .ball:nth-child(5) .line{ background: rgba(238, 255, 0, 0.9);}
    .ball:nth-child(6) .line{ background: rgba(0, 255, 21, 0.9);}
    .ball:nth-child(7) .line{ background: rgba(255, 255, 255, 0.9);}
    .ball:nth-child(8) .line{ background: rgba(229, 255, 0, 0.9);}
    .ball:nth-child(9) .line{ background: rgba(212, 0, 255, 0.9);}
    .ball:nth-child(10) .line{ background: rgba(255, 255, 255, 0.9);}
    .ball:nth-child(11) .line{ background: rgba(255, 251, 0, 0.9);}
    .ball:nth-child(12) .line{ background: rgba(51, 255, 0, 0.9);}

</style>