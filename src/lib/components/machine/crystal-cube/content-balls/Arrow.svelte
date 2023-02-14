<div class="arrow">
    <span>Soltar</span>
    <div class="top">1</div>
    <div class="bottom">2</div>
</div>

<style>
    .arrow {
        display: grid;
        translate: 42px 61px;
        width: 30px;
        height: 50px;
        justify-items: center;
        z-index: -1;
        opacity: 0.4;
        font-size: 0.8rem;
        font-family: 'Playfair Display SC', serif;
    }

    .arrow div{
        background: white;
        width: 100%;
    }

    .arrow .bottom{
        clip-path: polygon(50% 50%, 0 0, 100% 0);
    }
</style>