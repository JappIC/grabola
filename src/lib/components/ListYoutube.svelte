
<script>
    import { musicList } from '$lib/store/music.js';
</script>

<div class="list-youtube">
    {#each $musicList as {img, author, title, category, seen}, i}
        <div class="info" class:seen>
            <figure>
                <img src={img} alt={author}>
            </figure>
            <p class="title">{title}</p>
            <p class="author">{author}</p>
            <p class="category">{category}</p>
        </div>
    {/each}
</div>

<style>
    .list-youtube{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        overflow-y: scroll;
        max-height: 200px;
        color: white;
        font-family: 'Playfair Display SC', serif;
        font-size: 1.1rem;
        background: #222222;
        padding: 25px;
        margin: 50px auto;
        max-width: 800px;
        border: 10px solid var(--color-4);
        text-shadow: 0px 0px 20px #f10000;
        box-shadow: 0px 0px 5px 1px #00000094;
    }

    .list-youtube .info{
        display: grid;
        grid-template-areas: 
            "figure title"
            "figure author"
            "figure category"
        ;
        grid-template-columns: 75px 1fr;
        grid-template-rows: 18px 18px 18px;
        gap: 10px;
        border: 1px solid #f6c55c52;
        border-radius: 5px;
    }

    .list-youtube .info figure{
        grid-area: figure;
        margin: 0;
        overflow: hidden;
    }

    .list-youtube .info figure img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .list-youtube .info p{
        margin: 0;
    }

    .list-youtube .info .title{
        grid-area: title;
        color: var(--color-5);
    }

    .list-youtube .info .author{
        grid-area: author;
        font-size: 0.8rem;
    }

    .list-youtube .info .category{
        grid-area: category;
        font-size: 0.8rem;
    }

    .seen{
        background: green;
    }
</style>