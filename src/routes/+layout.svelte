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