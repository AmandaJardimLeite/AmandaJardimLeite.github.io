<script>
    let produtos = [
        { nome: "So Kate", imagem: "/sokate.jpg", preco: "R$ 7.500" },
        { nome: "Pigalle", imagem: "/pigalle.jpg", preco: "R$ 6.800" },
        { nome: "Hot Chick", imagem: "/hotchick.jpg", preco: "R$ 8.200" }
    ];
</script>

<h1>Coleção Favorita</h1>
<div class="galeria">
    {#each produtos as produto}
        <div class="item">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>{produto.preco}</p>
        </div>
    {/each}
</div>

<style>
    .galeria {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
    .item {
        text-align: center;
    }
    img {
        width: 150px;
        border-radius: 10px;
    }
</style>
