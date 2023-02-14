
<div class="counter">
    
    <div class="top"></div>
    <div class="body">
        <div>
            <div></div>
        </div>
        <div>
            <div></div>
        </div>
        <div>
            <div></div>
        </div>
        <div>
            <div></div>
        </div>
    </div>
    <div class="bottom"></div>
</div>

<style>
    .counter{
        display: grid;
        grid-template-rows: 10% 80% 10%;
        height: 100%;
    }

    .counter .top{
        border-radius: 5px 0 0 5px;
        background: linear-gradient( 
            88deg, 
            #9b4d41 0 20%, 
            var(--color-7) 30% 100% 
        );
    }

    .counter .body{
        display: flex;
        gap: 10%;
        padding: 3% 8%;
        box-sizing: border-box;
        grid-template-columns: repeat(4, 25%);
        background: linear-gradient( 
            88deg, 
            #bf6541 0, 
            var(--color-6)100% 
        );
        width: 98%;
        justify-self: right;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
        box-shadow: 0px 7px 8px 2px #00000061 inset;
    }

    .counter .body > div{
        border: 3px solid var(--color-7);;
        width: 100%;
        padding: 3%;
    }

    .counter .body > div > div{
        background: var(--color-7);;
        width: 100%;
        height: 100%;
    }

    .counter .bottom{
        width: 97%;
        justify-self: right;
        border-radius: 5px 0 0 5px;
        background: linear-gradient( 
            88deg, 
            #9b4d41 0 20%, 
            var(--color-7) 30% 100% 
        );

        box-shadow: -10px 11px 14px -9px #000;
    }
</style>