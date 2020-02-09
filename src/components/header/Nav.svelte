<script>
    export let segment;
</script>

<nav class="main-nav">
    <ul>
        <li>
            <a href='.' class="nav-item" class:nav-item--active={segment === undefined}>
                <i class="fa fa-home"></i> Accueil
            </a>
        </li>
        <li>
            <a href='my-tweets' class="nav-item" class:nav-item--active={segment === 'my-tweets'}>
                <i class="fa fa-bell-o"></i> Mes tweets
            </a>
        </li>
    </ul>
</nav>

<style>
    .main-nav {
        position: absolute;
        bottom: 0;
    }

    ul {
        display: inline;
        margin: 0;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0;
        font-size: 1.5em;
    }

    .nav-item {
        display: inline-block;
        padding: 0 15px 8px;
        border-bottom: 2px solid transparent;
        font-weight: var(--fw-semibold);
        transition: border-color 200ms linear;
    }

    .nav-item:hover, .nav-item--active {
        border-color: var(--blue);
        text-decoration: none;
    }

    .fa {
        margin-right: 5px;
    }
</style>
