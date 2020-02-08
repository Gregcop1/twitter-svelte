<script>
    export let textSize;
    export let onSubmit;

    const MAX_LENGTH = 140;

    $: remainingChars = MAX_LENGTH - textSize;
    $: isBelowEnd = 0 > remainingChars;
    $: isNearTheEnd = !isBelowEnd && 20 >=remainingChars;
    $: isTweetable = !isBelowEnd && MAX_LENGTH !== remainingChars;
</script>

<p class="writer-actions">
            <span class="writer-actions-controls-block">
                <i class="fa fa-picture-o fa-border fa-fw"></i>
                <i class="fa fa-th-list fa-border fa-fw"></i>
                <i class="fa fa-map-marker fa-border fa-fw"></i>
            </span>
    <span class="writer-actions-submit-block">
                <span class="writer-actions-counter"
                      class:writer-actions-counter--danger={isNearTheEnd}
                      class:writer-actions-counter--alert={isBelowEnd}
                >{ remainingChars }</span>
                <button
                        on:click={onSubmit}
                        class="writer-actions-submit"
                        class:writer-actions-submit--disabled={!isTweetable}
                        >
                    Tweeter
                </button>
            </span>
</p>
