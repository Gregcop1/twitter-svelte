<script>
    import List from "../components/list/List.svelte";
    import PrimaryAsideBar from "../components/sidebar/PrimaryAsideBar.svelte";
    import Writer from "../components/writer/Writer.svelte";
    import { currentUserTweets } from '../stores/tweets';
</script>

<svelte:head>
    <title>Svelte Twitter</title>
</svelte:head>

<PrimaryAsideBar />
<div class="column main-content">
    <Writer />
    <List tweets={$currentUserTweets} />
</div>
