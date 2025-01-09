<script>
    import "../app.css";
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
    
    injectAnalytics();

    // Define `children` as a prop
    export let children;
</script>

<main>
    {#if children}
        {children()}
    {/if}
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
    }
</style>
