<div class="sign">
    <span>Bar</span>
    <span>Ranco</span>
</div>

<style>

    .sign{
        width: 40%;
        height: 100%;
        display: grid;
        font-size: 1.5rem;
        margin: 0;
        justify-items: center;
        align-items: center;
        justify-self: center;
        border: 1px solid #fff;
        border-radius: 50%;
        font-size: 3.2rem;
        padding: 10px 5px;
        font: normal 48px/normal "Warnes", Helvetica, sans-serif;
        color: rgba(255,255,255,1);
        text-shadow: 
            0 0 10px rgba(255,255,255,1), 
            0 0 20px rgba(255,255,255,1), 
            0 0 30px rgba(255,255,255,1), 
            0 0 40px var(--c-neon),
            0 0 70px var(--c-neon), 
            0 0 80px var(--c-neon), 
            0 0 100px var(--c-neon)
        ;
        box-shadow: 
            0 0 10px rgba(255,255,255,1), 
            0 0 20px rgba(255,255,255,1), 
            0 0 30px rgba(255,255,255,1), 
            0 0 40px var(--c-neon), 
            0 0 70px var(--c-neon),
            0 0 80px var(--c-neon),
            0 0 100px var(--c-neon),
            inset 0 0 10px rgba(255,255,255,1), 
            inset 0 0 20px rgba(255,255,255,1), 
            inset 0 0 30px rgba(255,255,255,1), 
            inset 0 0 40px var(--c-neon), 
            inset 0 0 70px var(--c-neon),
            inset 0 0 80px var(--c-neon),
            inset 0 0 100px var(--c-neon) 
        ;
        animation: electro 0.2s cubic-bezier(0.32, 0, 0.67, 0) 20s 2 normal backwards;
        transition: 0.5s;
    }

    .sign:hover {
        text-shadow: 
            0 0 10px rgba(255,255,255,1),
            0 0 20px rgba(255,255,255,1),
            0 0 30px rgba(255,255,255,1),
            0 0 40px var(--c-neon-2),
            0 0 70px var(--c-neon-2),
            0 0 80px var(--c-neon-2),
            0 0 100px var(--c-neon-2)
        ;
        box-shadow: 
            0 0 10px rgba(255,255,255,1), 
            0 0 20px rgba(255,255,255,1), 
            0 0 30px rgba(255,255,255,1), 
            0 0 40px var(--c-neon-2), 
            0 0 70px var(--c-neon-2),
            0 0 80px var(--c-neon-2),
            0 0 100px var(--c-neon-2),
            inset 0 0 10px rgba(255,255,255,1), 
            inset 0 0 20px rgba(255,255,255,1), 
            inset 0 0 30px rgba(255,255,255,1), 
            inset 0 0 40px var(--c-neon-2), 
            inset 0 0 70px var(--c-neon-2),
            inset 0 0 80px var(--c-neon-2),
            inset 0 0 100px var(--c-neon-2) 
        ;
    }
    
    .sign span:nth-child(1){
        font-size: 2.2rem;
    }

    @keyframes electro {
	0%,
	50%,
	100% {
		opacity: 1;
	}

	25%,
	75% {
		opacity: 0.2;
	}
}

</style>