<script>
    
    import CoinSlot from "./CoinSlot.svelte";
    import MadeBox from "./MadeBox.svelte";

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

<div class="bottom-machine">
    <div class="coin-container">
        <CoinSlot/>
    </div>
    <div class="box-container">
        <MadeBox {img} {author} {dropBall} {dropBallBox} {showBall} {showBallBox} {openBall} on:click/>
    </div>
</div>



<style>
    
    .bottom-machine {
        background: linear-gradient( 88deg, #904236 0, #bf6541 100% );
        border-radius: 0 0 10px 10px;
        display: grid;
        grid-template-columns: 0.8fr 1.2fr;
        gap: 1em;
        border: 5px solid var(--color-9);
        box-sizing: border-box;
        box-shadow: 0 0 6px 2px #38211d inset;
    }

    .bottom-machine .coin-container, 
    .bottom-machine .box-container {
        display: grid;
        place-items: center;
    }

</style>