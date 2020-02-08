<script>
    import Logo from "./Logo.svelte";
    import Nav from "./Nav.svelte";

    export let segment;
</script>

<header class="main-header">
    <div class="container">
        <Nav {segment} />
        <p class="logo">
            <Logo loading={false} />
        </p>
    </div>
</header>

<style>
    .main-header {
        background-color: var(--white);
        box-shadow: 0 2px 3px var(--grey);
        text-align: center;
    }

    .container { position: relative; }

    .logo {
        display: inline-block; margin: 10px 0;
        color: var(--blue);
    }
</style>
