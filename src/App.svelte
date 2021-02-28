<script>

	const range = n => [...Array(n).keys()];

	const materials = {
		dust: range(6).map(i => 24272 + i),
		sac: range(6).map(i => 24278 + i),
		scale: range(6).map(i => 24284 + i),
		blood: range(6).map(i => 24290 + i),
		totem: [].concat(range(4).map(i => 24272 + i), [24363], [24300]),
		claw: range(6).map(i => 24346 + i),
		fang: range(6).map(i => 24352 + i),
		bone: [].concat(range(4).map(i => 24272 + i), [24341], [24358]),
	}

all_ids_str = ','.join(chain(*[list(map(str, ids)) for ids in fines.values()]))
payload = loads(urlopen('https://api.guildwars2.com/v2/commerce/prices?ids=' + all_ids_str).read())
info = {priceinfo['id']: (priceinfo['buys']['unit_price'], priceinfo['sells']['unit_price']) for priceinfo in payload}

def compare(tier, typ):
    if tier < 2 or tier > 6: return "Invalid tier"
    index = tier - 1

    print(loads(urlopen(f'https://api.guildwars2.com/v2/items/{fines[typ][index]}').read())['name'])
    print(fines[typ][index])
    sells_for, buys_for = info[fines[typ][index]]
    sells_for_prev, _ = info[fines[typ][index - 1]]
    sells_for_dust, _ = info[fines['dust'][index]]

    cost = sells_for + (5 * sells_for_dust) + (50 * sells_for_prev)
    payoff_min = (6.91 if tier == 6 else 18.51) * buys_for
    payoff_avg = (6.91 if tier == 6 else 18.51) * buys_for
    return (, (6.91 if tier == 6 else 18.51) * buys_for)

print(compare(3, 'bone'))
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
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