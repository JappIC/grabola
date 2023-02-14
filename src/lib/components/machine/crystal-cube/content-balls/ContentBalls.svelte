<script>
    
    import { musicList } from '$lib/store/music.js';
    import Ball from "../../ball.svelte";

    let 
        showBall = true,
        openBall = false
    ;

    //console.log($musicList);
    
    // Función para rotar las bolas con JS pero no se como llamar a una función dentro de un bloque each de svelte
    /*function rotateBallF(){
        rotateBall = -20 + Math.floor(Math.random() * 20);
    }*/
    //rotateBall = -20 + Math.floor(Math.random() * 40);

</script>

<div class="content-balls">
    {#each $musicList as {img, author}, i}
        <Ball {showBall} {openBall} {img} {author}/>
    {/each}
</div>

<style>

    .content-balls {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

</style>