<script>
    let nome = '';
    let email = '';
    let mensagem = '';

    const enviarMensagem = () => {
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Mensagem:', mensagem);
        alert('Mensagem enviada com sucesso!');
    };
</script>

<div class="container mt-5">
    <h2>Contato</h2>
    <p>Preencha o formulário abaixo para entrar em contato conosco.</p>

    <form on:submit|preventDefault={enviarMensagem}>
        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" id="nome" class="form-control" bind:value={nome} required />
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-control" bind:value={email} required />
        </div>

        <div class="mb-3">
            <label for="mensagem" class="form-label">Mensagem</label>
            <textarea id="mensagem" class="form-control" rows="4" bind:value={mensagem} required></textarea>
        </div>

        <button type="submit" class="btn btn-danger">Enviar</button>
    </form>
</div>
