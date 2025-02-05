<script>
    import { base } from '$app/paths';
    let { children } = $props();
</script>

<nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container-fluid">
        <!-- Logo que leva para a página inicial -->
        <a class="navbar-brand" href="{base}/">Louboutin</a>

        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="{base}/colecao">Coleções</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{base}/sobre">Sobre a Marca</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

{@render children()}


