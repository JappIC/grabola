<!--
@component
Componente Iframe:
Un componente para los iframes que soporta video o código usando una clase (video o code).
-->

<script>

    import { musicList, openMusic } from '$lib/store/music.js';
    export let 
        title = "Youtube video"
    ;

    $openMusic = "P3EgPi-PDyc"
    
</script>

<div class="video-container">
    <iframe 
        {title} 
        src={`https://www.youtube.com/embed/${$openMusic}?&showinfo=0&autohide=2&controls=2&showinfo=0&modestbranding=1`} 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>

<style>

    .video-container {
        overflow: hidden;
        position: relative;
        width:100%;
        max-width: 525px;
        margin: 0 auto;
        border: 10px solid #141414;
        box-shadow: 0px 0px 11px 3px #222;
    }

    .video-container::after {
        padding-top: 70%;
        display: block;
        content: '';
    }

    .video-container iframe {
        border-radius: var(--radius);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

</style>