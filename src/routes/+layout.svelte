<script> 
    let { children } = $props();
</script>

<nav class="navbar navbar-expand-sm">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Louboutin</a>

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
                    <a class="nav-link" href="/sobre">Sobre a Marca</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/colecao">Coleções</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contato">Contato</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

{@render children()}

<style>
  
    .navbar {
        background-color: #ca1414 !important; 
    }

    .navbar-nav .nav-link {
        color: #ffffff !important;
        font-weight: bold; 
    }

    .navbar-nav .nav-link:hover {
        color: #382626 !important; 
    }
</style>