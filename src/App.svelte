<script>
	async function get_tp_info() {
		return fetch('https://promotion-five.vercel.app/api/tpinfo?ids=24300')
			.then(response => response.json())
			.then(data => data.results)
			.catch(console.log);
	}
</script>

<main>
	{#await get_tp_info()}
		<h1>Loading...</h1>
	{:then response}
		<h1>{response}</h1>
	{/await}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>