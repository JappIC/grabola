<script>
    import Bar from "$lib/components/bar/Bar.svelte";
</script>


<section class="bar">
    <div>
        <article>
            <div>
                <h1>Tutorial</h1>
                <p> 
                    La Grabola es una app que simula la máquina del gancho que se usa para sacar una bola con la peculiaridad de que al abrirla se reproducirá un video musical de YouTube.
                </p>
                <p>
                    Para poder desplazar el gancho de izquierda a derecha, utiliza las teclas de dirección de tu teclado y la barra espaciadora para enganchar la bola.
                </p>
                <p>
                    Si la bola es enganchada, muévela hacia la flecha que dice soltar y espera que el gancho abra los dedos. Una vez suelta dale clic izquierdo con el ratón a la bola y play al vídeo en la TV
                </p>
            </div>
            <div>
                <h1>¿Como surgió la idea?</h1>
                <p>
                    La idea de hacer La Grabola surgió del desarrollador Forntend <a href="https://manz.dev/">Manz</a> que emite por <a href="https://www.twitch.tv/ManzDev">Twitch</a> la mayoría de la semana por la tarde.
                </p>
                <p>
                    En una serie de 4 videos que también puedes encontrar por <a href="https://www.youtube.com/watch?v=U2cMFRsIXh0">YouTube</a>, desarrolló una máquina gancho que se podían recoger bolas y de aquí surgió la idea de La Grabola
                </p>
                <p>
                    Si quieres tener acceso a los archivos del proyecto, entra en mi <a href="https://github.com/JappIC/grabola">GitHub</a>  y descargalo. Puedes hacer lo que quieras con ella.
                </p>
                <p>
                    Espero que te guste y lo disfrutes. ¡Saludos!!!!!!!!
                </p>
            </div>
            
        </article>
    </div>
    <div>
        <Bar/>
    </div>
</section>

<style>
    .bar{
        display: grid;
        grid-template-columns: 70% 30%;
    }

    .bar div:nth-child(1){
        display: grid;
        justify-content: center;
        align-items: center;
    }

    .bar div:nth-child(2){
        display: grid;
        justify-content: right;
        align-items: end;
    }

    article{
        display: grid;
        gap: 25px;
        overflow-y: scroll;
        max-height: 500px;
        color: white;
        font-family: 'Playfair Display SC', serif;
        font-size: 1.1rem;
        background: #222222;
        padding: 25px;
        margin: 50px auto;
        max-width: 800px;
        border: 10px solid var(--color-4);
        text-shadow: 0px 0px 20px #f10000;
        box-shadow: 0px 0px 5px 1px #00000094;
    }

    h1{
        font-size: 2rem;
        text-align: center;
        border-bottom: 1px solid #5c5c5c;
        padding-bottom: 10px;
    }

    a{
        text-decoration: none;
        color: var(--color-2);
    }

</style>