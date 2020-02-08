<script>
    import gravatarHelper from '../../helpers/gravatar';
    import dateHelper from '../../helpers/date';

    export let tweet;
    const {author, date, image, message, shares} = tweet
</script>

<div class="block list-item">
    <img src={gravatarHelper.getAvatar(author.email)} alt={author.name} class="avatar"/>
    <div class="list-item-content">
        <p class="list-item-meta">
            <span class="list-item-name">{ author.name }</span>
            <span class="list-item-account">{ author.account }</span>
            <span class="list-item-date">{ dateHelper.fromNow(date) }</span>
        </p>
        <p class="list-item-message">
                {@html message}
        </p>
        {#if image}
            <img src={image} class="list-item-image" alt=""/>
        {/if}
        <p class="list-item-actions">
            <button class="fa fa-comment-o fa-fw answer"
                    class:active={!!shares.answer}
            >{ shares.answer }</button>
            <button class="fa fa-retweet fa-fw retweet"
                    class:active={!!shares.retweet}
            >{ shares.retweet }</button>
            <button class="fa fa-fw like"
                    class:active={!!shares.like}
                    class:fa-heart={!!shares.like}
                    class:fa-heart-o={!shares.like}
            >{ shares.like }</button>
            <button class="fa fa-envelope-o fa-fw pm"></button>
        </p>
    </div>
</div>

<style>
    .block.list-item {
        margin-bottom: 0;
        border-top: 1px solid var(--light-blue);
        transition: background 200ms linear;
    }
    .block.list-item:hover { background: var(--light-grey); }

    .avatar { float: left; margin-right: 10px; border-radius: 24px; width: 48px; }
    .list-item-content { display: inline-block; width: 512px; }
    .list-item-name { font-weight: var(--fw-bold); }
    .list-item-account,
    .list-item-date {
        display: inline-block; margin-left: 3px;
        color: var(--dark-grey);
    }
    .list-item-date:before { margin-right: 3px; content: '\00b7'; }
    p { margin: 0; }
    .list-item-message { margin: 5px 0; }
    .list-item-image { margin: 5px 0; border-radius: 3px; }
    .list-item-actions button {
        margin-right: 20px;
        min-width: 40px;
        font-family: var(--font);
        font-size: .9em;
        font-weight: var(--fw-semibold);
        color: var(--dark-grey);
        transition: color 200ms linear;
    }
    .list-item-actions button:before {
         margin-right: 5px;
         font-family: var(--fontAwesome); font-size: 1.3em;
    }
    .list-item-actions button:hover { text-decoration: none; }

    .answer.active, .answer:hover,
    .pm:hover { color: var(--blue); }
    .like.active, .like:hover { color: var(--red); }
    .retweet.active, .retweet:hover { color: var(--green); }
</style>
