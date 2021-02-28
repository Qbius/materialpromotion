<script>
	async function get_tp_info() {
		const response = await fetch('/api/tpinfo?ids=24300');
		if (response.ok) {
			const json = await response.json();
			console.log(json);
			console.log(JSON.stringify(json));
			return Object.entries(json);
		}
		else
			throw new Error('Error loading trading post info');
	}
</script>

<main>
	{#await get_tp_info()}
		<h1>Loading...</h1>
	{:then tpinfo}
		{#each tpinfo as info}
			<h1>{info[0]}: {info[1][0]} {info[1][1]}</h1>
		{/each}
	{:catch error}
		<h1>{error}</h1>
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