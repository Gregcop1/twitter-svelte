<script>
    import ActionBar from "./ActionBar.svelte";
    import { tweets } from '../../stores/tweets';
    import { user } from '../../stores/user';

    export let onBlur;

    let value = '';
    const blurIfEmpty = () => {
        if (value === '') {
            onBlur();
        }
    };

    const onKeyDown = (event) => {
        if (event.ctrlKey && event.code === 'Enter') {
            doSubmit();
        }
    };

    const doSubmit = () => {
        tweets.add($user, value);
        value = '';
        onBlur();
    };
</script>

<div class="writer-block--unfold">
    <!-- svelte-ignore a11y-autofocus -->
    <textarea
            autofocus
            rows="3"
            on:blur={blurIfEmpty}
            on:keydown={onKeyDown}
            bind:value={value}/>
    <ActionBar textSize={value.length} onSubmit={doSubmit}/>
</div>
