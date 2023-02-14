<script>
    
    import Ball from "../ball.svelte";

    export let 
        img = "",
        author = "",
        dropBall = false,
        dropBallBox = false,
        showBall = false,
        showBallBox = false,
        openBall = false
    ;

</script>


<div class="made-box">
    <Ball {img} {author} {dropBall} {dropBallBox} {showBall} {showBallBox} {openBall} on:click/>
</div>
    
<style>
    
    .made-box {
        width: 100px;
        height: 100px;
        position: relative;
        overflow: hidden;
        background: #959595;
        border: 20px solid rgb(148 18 18 / 0%);
        border-color: #adadad #8d8d8d ;
        box-sizing: border-box;
        box-shadow: 0px 0px 5px 1px #00000042 inset;
    }

</style>