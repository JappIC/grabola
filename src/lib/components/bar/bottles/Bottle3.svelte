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
        width: 50px;
        height: 120px;
        display: grid;
        grid-template-rows: 10% 15% 75%;
        justify-items: center;
    }

    .bottle .top{
        width: 30%;
        background: var(--color-5);
    }

    .bottle .neck{
        width: 30%;
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
        justify-items: center;
        align-items: center;
        clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);
        background: linear-gradient( 
            88deg, 
            var(--color-2) 0 29%, 
            var(--color-3) 30% 35%, 
            var(--color-2) 36% 100% 
        );
        border-top: 6px solid var(--color-3);
    }

    .bottle .body .label{
        width: 70%;
        height: 75%;
        background: var(--color-5);
        border-radius: 50%;
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