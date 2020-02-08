<script>
    export let loading = false;
</script>

{#if loading}
    <i class="fa fa-spinner fa-pulse fa-fw"></i>
{:else}
    <i class="fa fa-twitter fa-fw"></i>
{/if}

<style>
    .fa { font-size: 1.5em; }
</style>
