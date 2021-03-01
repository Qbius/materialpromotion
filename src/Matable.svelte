<script>
    export let tpinfo;

    import {materials, material_names, mobile} from './common';
    import Pricetag from './Pricetag.svelte';

    function quotes(type, tier) {
        const index = tier - 1;

        const[sells_for, buys_for] = tpinfo[materials[type][index].toString()];
        const[sells_for_prev, _] = tpinfo[materials[type][index - 1].toString()];
        const[sells_for_dust, __] = tpinfo[materials['dust'][index].toString()];

        const cost = sells_for + (((type === 'dust') ? 0 : 5) * sells_for_dust) + (((type === 'dust') ? 250 : 50) * sells_for_prev);
        const payoff_min = ((tier === 6) ? 5 : 7) * buys_for;
        const payoff_avg = ((type === 'dust') ? ((tier == 6) ? 0 : 87) : ((tier == 6) ? 6.91 : 18.51)) * buys_for;
        return [cost, payoff_min, payoff_avg];
    }

    function quotes_to_class(cost, payoff_min, payoff_avg) {
        return (cost < payoff_avg) ? 'promotion-success' : 'promotion-failure';
    }
</script>

<div class="component">
    {#each Object.entries(materials) as [type, material_ids]}
        <div class="material-column">
            {#each material_ids.slice(1, 6).map((id, ind) => [id, quotes(type, ind + 2)]) as [id, [cost, payoff_min, payoff_avg]], index}
                <div class={'material-cell ' + (quotes_to_class(cost, payoff_min, payoff_avg))}>
                    <!--<div style="display: flex; flex-direcion: column;">-->
                        <img class="material-icon" alt={material_names[type][index + 1]} src={`/material-icons/${material_names[type][index + 1].replace(/\ /g, '_')}.png`}>
                        <!--<span class="main-text" style="font-size: 14px;">{material_names[type][index + 1]}</span>
                    </div>
                    <div style="display: flex;">
                        <div style="display: flex; flex-direction: column;">
                            <img class="ingredient-icon" alt={material_names[type][index]} src={`/material-icons/${material_names[type][index].replace(/\ /g, '_')}.png`}>
                            <span class="ingredient-text">50</span>
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <img class="ingredient-icon" alt={material_names['dust'][index + 1]} src={`/material-icons/${material_names['dust'][index + 1].replace(/\ /g, '_')}.png`}>
                            <span class="ingredient-text">5</span>
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <img class="ingredient-icon" alt={material_names[type][index + 1]} src={`/material-icons/${material_names[type][index + 1].replace(/\ /g, '_')}.png`}>
                            <span class="ingredient-text">1</span>
                        </div>
                    </div>
                    <div style="width: 100%; font-size: 10px; display: flex; justify-content: space-between;">
                        <span>Cost:</span>
                        <Pricetag price={cost}/>
                    </div>
                    <div style="width: 100%; font-size: 10px; display: flex; justify-content: space-between;">
                        <span>Minimal:</span>
                        <Pricetag price={payoff_min}/>
                    </div>
                    <div style="width: 100%; font-size: 10px; display: flex; justify-content: space-between;">
                        <span>Average:</span>
                        <Pricetag price={payoff_avg}/>
                    </div>-->
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
        height: 80px;
        width: 80px;
        border: 1px solid black;
        margin: 2px;
        padding: 3px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .promotion-success {
        border: 1px solid #006400;
        background-color: #228B22;
    }

    .promotion-failure {
        border: 1px solid #A52A2A;
        background-color: #DC143C;
        filter: drop-shadow(0px 0px 5px red);
        opacity: 0.8;
    }

    .material-icon {
        border: 1px solid black;
        width: 74px;
        height: 74px;
    }

    .ingredient-icon {
        width: 15px;
        height: 15px;
    }

    .ingredient-text {
        font-size: 12px;
    }

    @media only screen and (max-width: 760px) {
        .component {
            flex-direction: column;
        }
        
        .material-column {
            flex-direction: row;
        }
    }

</style>