<script>
	import * as example from './materials_example.json';
	import {localhost, materials} from './common.js';
	import Matable from './Matable.svelte';

	async function get_tp_info() {
		if (localhost) return example.default;
		
		const response = await fetch('/api/tpinfo?ids=' + [].concat(...Object.values(materials)).join(','));
		if (response.ok) {
			const json = await response.json();
			console.log(json);
			console.log(JSON.stringify(json));
			return json;
		}
		else
			throw new Error('Error loading trading post info');
	}
</script>

<main>
	{#await get_tp_info()}
		<h1>Loading...</h1>
	{:then tpinfo}
		<!-- {#each tpinfo as info}
			<h1>{info[0]}: {info[1][0]} {info[1][1]}</h1>
		{/each} -->
		<Matable {tpinfo}/>

	{:catch error}
		<h1>{error}</h1>
	{/await}
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;

		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
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