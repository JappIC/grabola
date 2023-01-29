<script>
  import TheClaw from "./the-claw/TheClaw.svelte";

</script>

<div class="crystal-cube">
    <div class="cube-back"></div>
    <div class="content">
        <TheClaw/>
        <div></div>
        <div class="content-ball">BOLAS</div>
    </div>
</div>

<style>
    .crystal-cube {
        background-color: #fff;
        border: 5px solid var(--shadow-color);
        border-top: 0;
        border-bottom-width: 12px;
        margin: 0 5px;
        position: relative;
        overflow: hidden;
    }

    .crystal-cube::after {
        --light-color: #310cb622;
        --dark-color: #82ade922;
        content: "";
        display: block;
        position: absolute;
        inset: 0;
        background: #278ccb89;
        background: linear-gradient(
            232deg,
            var(--dark-color) 0 29.5%,
            var(--light-color) 30% 34.5%,
            var(--dark-color) 35% 39.5%,
            var(--light-color) 40% 70.5%,
            var(--dark-color) 71% 100%
        );
    }

    .crystal-cube .content {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-rows: 15% 1fr 15%;
        justify-content: center;
        justify-items: center;
        height: 100%;
        color: #fff;
    }

    .crystal-cube .cube-back {
        position: absolute;
        inset: 0;
        width: calc(100% - 30%);
        background: #532be4;
        border: 36px solid rgb(148, 18, 18);
        border-color: #fff #fff #3816b7;
        border-top: 0px;
        z-index: 0;
    }
    
</style>