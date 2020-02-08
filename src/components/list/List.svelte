<script>
    import ListItem from "./ListItem.svelte";

    export let tweets;
</script>

<div class="tweet-list">
    {#each tweets as tweet}
        <ListItem tweet={tweet} />
    {/each}
</div>
