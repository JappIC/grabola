<script>

    import Claw from "./Claw/Claw.svelte";
  import Arrow from "./content-balls/Arrow.svelte";
    import ContentBalls from "./content-balls/ContentBalls.svelte";

    export let 
        clawX = 0,
        clawRotateZ = 0,
        fingerRotateZ = 75,
        down = false,
        showBall = false,
        dropBall = false,
        img = ""
    ;

</script>

<div class="crystal-cube">
    <div class="cube-back"></div>
    <div class="content">
        <Claw {clawRotateZ} {down} {fingerRotateZ} {showBall} {dropBall} {img} {clawX} />
        <Arrow/>
        <ContentBalls/>
    </div>
</div>


<style>
    
    .crystal-cube {
        border: 5px solid var(--color-9);
        border-bottom-width: 12px;
        box-sizing: border-box;
        margin: 0 10px;
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
        grid-template-rows: 15% 1fr 30%;
        justify-content: center;
        justify-items: center;
        height: 100%;
        color: #fff;
    }

    .crystal-cube .cube-back {
        position: absolute;
        inset: 0;
        width: calc(100% - 30%);
        border: 36px solid rgb(148 18 18 / 0%);
        border-color: #1d2826 #ffffff40 #3816b7;
        z-index: 0;
    }
    
</style>