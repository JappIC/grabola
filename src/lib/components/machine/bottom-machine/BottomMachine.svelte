<script>
  import CoinSlot from "./CoinSlot.svelte";
  import MadeBox from "./MadeBox.svelte";

</script>

<div class="bottom-machine">
    <div class="coin-container">
        <CoinSlot/>
    </div>
    <div class="box-container">
        <MadeBox/>
    </div>
</div>

<style>
    
    .bottom-machine {
        background-color: var(--medium-color);
        border-radius: 0 0 10px 10px;
        display: grid;
        grid-template-columns: 0.8fr 1.2fr;
        gap: 1em;
    }

    .bottom-machine .coin-container, 
    .bottom-machine .box-container {
        display: grid;
        place-items: center;
    }

</style>