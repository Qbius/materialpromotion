<script>
	import * as example from './materials_example.json';
	import {localhost, materials} from './common.js';
	import Matable from './Matable.svelte';

	async function get_tp_info() {
		if (localhost) return example.default;
		
		const response = await fetch('/api/tpinfo?ids=' + [].concat(...Object.values(materials)).join(','));
		if (response.ok) {
			const json = await response.json();
			return json;
		}
		else
			throw new Error('Error loading trading post info');
	}
</script>

<main>
	{#await get_tp_info()}
		<h1 style="margin: auto;">Loading...</h1>
	{:then tpinfo}
		<div class="bg-image"><img style="width: 100%; height: 100%; filter: blur(20px);" alt="" src="/forge.png"></div>
		<Matable style="margin: auto;" {tpinfo}/>
	{:catch error}
		<h1 style="margin: auto;">{error}</h1>
	{/await}
</main>

<style>
	main {
		text-align: center;

		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.bg-image {
		z-index: -1;
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: black;
	}
</style>