<div class="container">
    <div class="bottle shadow">
        <div class="top"></div>
        <div class="neck"></div>
        <div class="body">
            <div class="label"></div>
        </div>
    </div>
    <div class="bottle">
        <div class="top"></div>
        <div class="neck"></div>
        <div class="body">
            <div class="label"></div>
        </div>
    </div>
</div>

<style>

    .container{
        position: relative;
        width: 80px;
    }

    .bottle{
        width: 60px;
        height: 80px;
        display: grid;
        grid-template-rows: 10% 30% 60%;
        justify-items: center;
    }

    .bottle .top{
        width: 25%;
        background: var(--color-4);
    }

    .bottle .neck{
        width: 25%;
        background: linear-gradient( 
            88deg, 
            var(--color-2) 0 29%, 
            var(--color-3) 30% 40%, 
            var(--color-2) 41% 100% 
        );
    }

    .bottle .body{
        width: 100%;
        background: var(--color-2);
        display: grid;
        align-items: center;
        clip-path: polygon(15% 0, 87% 0, 100% 100%, 0 100%);
        background: linear-gradient( 
            88deg, 
            var(--color-2) 0 29%, 
            var(--color-3) 30% 35%, 
            var(--color-2) 36% 100% 
        );
        border-top: 6px solid var(--color-3);
    }

    .bottle .body .label{
        width: 100%;
        height: 25px;
        background: var(--color-4);
        clip-path: polygon(0 0, 100% 6%, 100% 86%, 0 100%);
    }

    .shadow{
        position: absolute;
        top: 0;
        right: var(--scroll-shadow-bottle);
    }

    .shadow .top, .shadow .neck, .shadow .body{
        background: var(--shadow-bottle);
    }

    .shadow .body{
        border-top: none;
    }

    .shadow .label{
        display: none;
    }

</style>