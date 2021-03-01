<script>
    export let price;

    $: gold = Math.floor(price / 10000);
    $: silver = Math.floor(Math.floor(price / 100) - (gold * 100));
    $: copper = Math.floor(price - (gold * 10000) - (silver * 100));
</script>

<div class="component">
    {#if gold > 0}
        <span class="price-text">{gold}</span>
        <img class="coin-icon" alt="gold" src="Gold_coin.png">
    {/if}
    {#if silver > 0}
        <span class="price-text">{silver}</span>
        <img class="coin-icon" alt="silver" src="Silver_coin.png">
    {/if}
    <span class="price-text">{copper}</span>
    <img class="coin-icon" alt="copper" src="Copper_coin.png">
</div>

<style>
    .component {
        display: flex;
        align-items: center;
    }

    .price-text {
        font-size: 8px;
        width: 10px;
    }

    .coin-icon {
        margin-left: 1px;
        margin-right: 1px;
        width: 8px;
        height: 8px;
    }
</style>
