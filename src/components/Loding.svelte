<!-- Loading.svelte -->
<script>
	/** @type {{message?: string}} */
	let { message = 'Carregando...' } = $props();
</script>

<div class="loading">
	<div class="spinner"></div>
	<p>{message}</p>
</div>

<style>
	.loading {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
	}

	.spinner {
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-top: 4px solid #007bff;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	p {
		margin-top: 10px;
		font-size: 14px;
		color: #333;
	}
</style>
