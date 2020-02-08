<script>
    import {user} from '../../stores/user';
    import gravatarHelper from '../../helpers/gravatar';

    export let onFocus;
</script>

<div class="writer-block--fold">
    <img src={gravatarHelper.getAvatar($user.email) } alt={$user.name} class="avatar" />
    <input type="text" placeholder="Ecrivez votre texte ici..." on:focus={onFocus}/>
    <i class="fa fa-picture-o"></i>
</div>
