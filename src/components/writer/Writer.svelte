<script>
    import SimpleWriter from "./SimpleWriter.svelte";
    import FullWriter from "./FullWriter.svelte";

    let displaySimple = true;
    const toggle = () => displaySimple = !displaySimple;
</script>

<div class="block writer-block">
{#if displaySimple}
    <SimpleWriter onFocus={toggle} />
{:else}
    <FullWriter onBlur={toggle} />
{/if}
</div>
