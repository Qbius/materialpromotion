<script>
	import {localhost, range} from './common.js';

	const materials = {
		dust: range(6).map(i => 24272 + i),
		sac: range(6).map(i => 24278 + i),
		scale: range(6).map(i => 24284 + i),
		blood: range(6).map(i => 24290 + i),
		totem: [].concat(range(4).map(i => 24296 + i), [24363], [24300]),
		claw: range(6).map(i => 24346 + i),
		fang: range(6).map(i => 24352 + i),
		bone: [].concat(range(4).map(i => 24342 + i), [24341], [24358]),
	};

	async function get_tp_info() {
		if (localhost) return [];
		
		const response = await fetch('/api/tpinfo?ids=' + [].concat(...Object.values(materials)).join(','));
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