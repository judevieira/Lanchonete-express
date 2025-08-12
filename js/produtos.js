const produtos = [
    //pratos principais
    {
        id: 1,
        nome: "Xis filé",
        descricao: "Xis file delicioso",
        imagem: "../img/pratos-principais/xis-file.jpg",
        valor: "55,00",
        categoria: "prato-principal"
    },
    {
        id: 2,
        nome: "Hamburguer",
        descricao: "Hamburguer três carnes",
        imagem: "../img/pratos-principais/hamburguer-trescarnes.jpg",
        valor: "40,00",
        categoria: "prato-principal"
    },
    {
        id: 3,
        nome: "Ala minuta",
        descricao: "Ala minuta - arroz, feijao, bife, salada e batata-frita",
        imagem: "../img/pratos-principais/alaminuta.png",
        valor: "40,00",
        categoria: "prato-principal"
    },
    {
        id: 4,
        nome: "Picadão",
        descricao: "Picadão",
        imagem: "../img/pratos-principais/picadao.png",
        valor: "70,00",
        categoria: "prato-principal"
    },

    //acompanhamento
    {
        id: 5,
        nome: "Batata frita com bacon",
        descricao: "batata frita com bacon",
        imagem: "../img/acompanhamentos/batata-frita.png",
        valor: "30,00",
        categoria: "acompanhamento"

    },
    {
        id: 6,
        nome: "Aneis de cebola",
        descricao: "Aneis de cebola",
        imagem: "../img/acompanhamentos/aneis-cebola.png",
        valor: "25,00",
        categoria: "acompanhamento"

    },

    //sobremesas

    {
        id: 7,
        nome: "Brownie com sorvete",
        descricao: "Brownie com sorvete",
        imagem: "../img/sobremesas/brownie-com-sorvete.png",
        valor: "15,00",
        categoria: "sobremesa"
    },
    {
        id: 8,
        nome: "Churros",
        descricao: "Churros",
        imagem: "../img/sobremesas/churros.png",
        valor: "9,00",
        categoria: "sobremesa"
    },
    {
        id: 9,
        nome: "Creme Brulle",
        descricao: "Creme Brulle",
        imagem: "../img/sobremesas/creme-brulle.png",
        valor: "10,00",
        categoria: "sobremesa"
    },
    {
        id: 10,
        nome: "Petit gateau",
        descricao: "Petit gateau",
        imagem: "../img/sobremesas/petit-gateau.png",
        valor: "25,00",
        categoria: "sobremesa"
    }

    //bebidas

    
]

function mostrarProdutosAleatorios(idContainer, qtde) {
  const container = document.getElementById(idContainer);
  if(!container) return; //sai se o container nao existir
  container.innerHTML = ""; // limpa conteúdo

  // Embaralha e pega qtde produtos
  const produtosAleatorios = produtos
    .slice() // copia array para não modificar o original
    .sort(() => 0.5 - Math.random())
    .slice(0, qtde);

  // Cria o HTML completo numa string para depois inserir tudo de uma vez
  let html = "";

  produtosAleatorios.forEach(produto => {
    html += `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${produto.imagem}" alt="${produto.nome}" style="" class="card-img">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${produto.nome}</h5>
            <p class="card-text">${produto.descricao}</p>
            <p class="fw-bold">R$ ${produto.valor}</p>
            <div class="mt-auto">
              <button class="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#cardModal-${produto.id}">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="cardModal-${produto.id}" tabindex="-1" aria-labelledby="cardModalLabel-${produto.id}" aria-hidden="true">
          <div class="modal-dialog modal-sm">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="cardModalLabel-${produto.id}">${produto.nome}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                  </div>
                  <div class="modal-body">
                      <p>${produto.descricao}</p>
                      <p>R$${produto.valor}</p>

                      <label for="obs-${produto.id}" class="form-label">Observações</label>
                      <textarea for="obs-${produto.id}" class="form-control" placeholder="ex: sem cebola, sem milho"></textarea> 
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                      <button type="button" class="btn btn-dark">Adicionar ao carrinho</button>
                  </div>
              </div>
          </div>
      </div>
      
    `;
  });

  container.innerHTML = html; // insere tudo junto
}


document.addEventListener("DOMContentLoaded", () => {
  mostrarProdutosAleatorios("produtos-cardapio", 12);
  mostrarProdutosAleatorios("produtos-aleatorios",8);
});
