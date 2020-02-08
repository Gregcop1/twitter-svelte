<script>
	import PrimaryAsideBar from "../components/sidebar/PrimaryAsideBar.svelte";
	import SecondaryAsideBar from "../components/sidebar/SecondaryAsideBar.svelte";
	import Writer from "../components/writer/Writer.svelte";
</script>

<svelte:head>
	<title>Svelte Twitter</title>
</svelte:head>

<PrimaryAsideBar />
<div class="column main-content">
	<Writer />
</div>
<SecondaryAsideBar />
