<header>
    <a href="/">BAR</a>
    <nav>
        <a href="/tutorial">Tutorial</a>
    </nav>
</header>

<div class="beam">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>

<style>
    header {
        padding: 1rem;
        background: var(--c-roof);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        box-shadow: 0px 0px 35px 4px #00000045;
    }
    
    a {
        text-decoration: none;
        color: var(--color-2);
    }
    
    .beam{
        height: 30px;
        display: flex;
        justify-content: center;
        gap: 12%;
    }

    .beam div{
        width: 30px;
        height: 25px;
        background: var(--c-roof);
        clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
    }

</style>