<script>
    import gravatarHelper from "../../helpers/gravatar";
    import {user} from '../../stores/user';

</script>

<div class="block short-profile">
    <div class="profile-infos">
        <img src={gravatarHelper.getAvatar($user.email)} alt={$user.name} class="avatar"/>
        <p class="profile-metas">
            {$user.name}
            <span class="profile-account">{$user.account}</span>
        </p>
        <div class="profile-relation">
            <p class="col col-30">
                Tweets
                <a href="/my-tweets">{$user.tweetCount}</a>
            </p><!--
            --><p class="col col-40">
                Abonnements
                <a href="/my-tweets">{$user.subscriber}</a>
            </p><!--
            --><p class="col col-30">
                Abonnés
                <a href="/my-tweets">{$user.subscription}</a>
            </p>
        </div>
    </div>
</div>

<style>
    .block.short-profile {
        padding-top: 100px;
        background-color: var(--blue);
    }

    .profile-infos {
        margin: var(--page-padding);
        background-color: var(--white);
    }

    .avatar, .profile-metas, .col {
        display: inline-block; margin: 0;
        vertical-align: top;
    }
    .avatar { margin: -40px var(--page-padding) 0; border: 5px solid var(--white); border-radius: 50%; }
    .profile-metas {
        font-size: 1.8em;
        font-weight: var(--fw-semibold);
        line-height: 1.3;
    }
    .profile-account {
        display: block;
        color: var(--dark-grey); font-size: .85em; font-weight: var(--fw-regular);
    }

    .col {
        padding: var(--page-padding);
        font-size: 1.2em;
        font-weight: var(--fw-bold);
        line-height: 1.3;
        color: var(--dark-grey);
    }

    a {
        display: block;
        font-size: 1.5em;
    }
    .col-30 { width: 30%; }
    .col-40 { width: 40%; }
</style>
