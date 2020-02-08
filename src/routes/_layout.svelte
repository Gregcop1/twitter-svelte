<script>
	import Header from '../components/header/Header.svelte';

	export let segment;
</script>

<Header {segment}/>

<main class="main-container">
	<div class="container">
		<slot></slot>
	</div>
</main>
