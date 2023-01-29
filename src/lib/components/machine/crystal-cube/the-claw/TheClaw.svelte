<script>
    import BaseClaw from "./BaseClaw.svelte";
    import Arm from "./Arm.svelte";

    let 
        clawX = 0
    ;

    /**
    * @param {{ keyCode: any; }} e
    */
    function onKeyMotion(e) {
		switch(e.keyCode) {
			case 37:
                clawX = Math.max(-75,clawX - 2);
				break;
			case 39:
                clawX = Math.min(75,clawX + 2);
				break;
		}

        if( e.keyCode === 32 ){
            
             
        }
	}
</script>

<div class="the-claw" style="transform: translateX({clawX}px);">
    <BaseClaw/>
    <Arm />
</div>
<svelte:window on:keydown|preventDefault={onKeyMotion} />

<style>

    .the-claw {
        width: 55px;
        height: 300px;
        transition: transform 0.2s cubic-bezier(0.2, 0.3, 0.3, 0.2);
    }

</style>