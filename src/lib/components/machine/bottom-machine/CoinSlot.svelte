
<div class="coin-slots">
    <div class="coin-box"></div>
    <div class="card">PRESS</div>
    <div class="coin-eject"></div>
    <div class="screw screw-1"></div>
    <div class="screw screw-2"></div>
    <div class="screw screw-3"></div>
    <div class="screw screw-4"></div>
</div>

<style>
    
    .coin-slots {
        background: #bfbfbf;
        width: 55px;
        height: 100px;
        padding: 5px;
        position: relative;
        display: grid;
        justify-items: center;
        grid-template-rows: 1fr 0.5fr 1fr;
        gap: 5px;
    }

    .coin-slots .screw{
        position: absolute;
        background: #5e5e5e;
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }

    .coin-slots .screw-1{
        top: 4px;
        left: 4px;
    }

    .coin-slots .screw-2{
        top: 4px;
        right: 4px;
    }

    .coin-slots .screw-3{
        bottom: 4px;
        left: 4px;
    }

    .coin-slots .screw-4{
        bottom: 4px;
        right: 4px;
    }

    .coin-slots .coin-box{
        background: #5e5e5e;
        border: 4px solid #dddddd;
        border-left-width: 10px;
        border-right-width: 10px;
        width: 6px;
        height: 25px;
    }

    .coin-slots .card{
        background: #ccc;
        border: 2px solid black;
        font-size: 0.6rem;
        padding: 0 6px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .coin-slots .coin-eject{
        width: 15px;
        height: 15px;
        background:#ddd;
        display: grid;
        justify-items: center;
        align-items: end;
        translate: 0 20px;
    }

    .coin-slots .coin-eject::after{
        content: "";
        display: block;
        background: #5e5e5e;
        width: 6px;
        height: 25px;
        position: absolute;
        translate: 0 -25%;
    }

</style>