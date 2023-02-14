<!-- +layout.svelte -->
<script>
    import '$lib/css/style.css'
    import Header from '$lib/layout/Header.svelte'
    import Footer from '$lib/layout/Footer.svelte'
</script>
    
<Header />

<main>
  <slot />
</main>

<Footer />

<style>
    main {
        display: grid;
        padding: 20px 0 0 20px;
        margin-bottom: -50px;
    }
</style>