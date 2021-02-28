<script>
    export let tpinfo;

    import {materials, material_names} from './common';

    function compare(type, tier) {
        const index = tier - 1;
        console.log(index);
        console.log(materials[type][index - 1])

        const[sells_for, buys_for] = tpinfo[materials[type][index].toString()];
        const[sells_for_prev, _] = tpinfo[materials[type][index - 1].toString()];
        const[sells_for_dust, __] = tpinfo[materials['dust'][index].toString()];

        const cost = sells_for + (5 * sells_for_dust) + (50 * sells_for_prev);
        const payoff_min = ((tier === 6) ? 5 : 18.51) * buys_for
        const payoff_avg = ((tier == 6) ? 6.91 : 18.51) * buys_for
        return (cost < payoff_min) ? 'HARD' : (cost < payoff_avg) ? 'YES' : 'NO';
    }
</script>

<div class="component">
    {#each Object.entries(materials) as [type, material_ids]}
        <div class="material-column">
            {#each material_ids.slice(1, 6) as id, index}
                <div class="material-cell">
                    <img class="material-icon" alt={material_names[type][index + 1]} src={`/material-icons/${material_names[type][index + 1].replace(/\ /g, '_')}.png`}>
                    {compare(type, index + 2)}
                </div>
            {/each}
        </div>
    {/each}
</div>

<style>
    .component {
        margin: auto;

        display: flex;
    }

    .material-column {
        display: flex;
        flex-direction: column;
    }

    .material-cell {
        width: 100px;
        height: 50px;
        border: 1px solid black;
        margin: 2px;
    }

    .material-icon {
        width: 30px;
        height: 30px;
    }
</style>