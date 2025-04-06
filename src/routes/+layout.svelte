<script>
import "../app.css";
import 'flowbite-svelte';
/** @type {{children?: import('svelte').Snippet}} */
import { injectAnalytics } from '@vercel/analytics/sveltekit'

injectAnalytics()

</script>

<main>
	<slot />
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Arial, sans-serif;
	}
</style>
