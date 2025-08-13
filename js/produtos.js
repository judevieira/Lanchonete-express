const produtos = [

    // pratos principais
    {
        id: 1,
        nome: "Xis filé",
        descricao: "Pão macio recheado com suculento filé grelhado, queijo derretido e frescor de salada.",
        imagem: "../img/pratos-principais/xis-file.jpg",
        valor: "55,00",
        categoria: "prato-principal"
    },
    {
        id: 2,
        nome: "Hamburguer três carnes",
        descricao: "Três camadas irresistíveis de carnes selecionadas, combinadas com queijo e tempero especial.",
        imagem: "../img/pratos-principais/hamburguer-trescarnes.jpg",
        valor: "60,00",
        categoria: "prato-principal"
    },
    {
        id: 3,
        nome: "Hamburguer bacon",
        descricao: "Carne suculenta, bacon crocante e queijo cremoso, acompanhados de batatas fritas douradas e sequinhas.",
        imagem: "../img/pratos-principais/hamburguer-bacon.png",
        valor: "50,00",
        categoria: "prato-principal"
    },
    {
        id: 4,
        nome: "Hamburguer tradicional salada",
        descricao: "O tradicional que todo mundo ama: carne saborosa, queijo derretido, alface, tomate e maionese caseira.",
        imagem: "../img/pratos-principais/hamburguer-tradicional.png",
        valor: "40,00",
        categoria: "prato-principal"
    },
    {
        id: 5,
        nome: "Ala minuta",
        descricao: "Arroz soltinho, feijão fresquinho, bife suculento, salada colorida e batata frita crocante.",
        imagem: "../img/pratos-principais/alaminuta.png",
        valor: "40,00",
        categoria: "prato-principal"
    },
    {
        id: 6,
        nome: "Picadão",
        descricao: "Generosa porção de carne cortada em pedaços, salteada com temperos especiais, acompanhada de batatas",
        imagem: "../img/pratos-principais/picadao.png",
        valor: "70,00",
        categoria: "prato-principal"
    },

    // acompanhamentos
    {
        id: 7,
        nome: "Batata frita com bacon",
        descricao: "Batatas crocantes cobertas com bacon dourado e toque de queijo.",
        imagem: "../img/acompanhamentos/batata-frita.png",
        valor: "30,00",
        categoria: "acompanhamento"
    },
    {
        id: 8,
        nome: "Anéis de cebola",
        descricao: "Crocantes por fora, macios e docinhos por dentro.",
        imagem: "../img/acompanhamentos/aneis-cebola.png",
        valor: "25,00",
        categoria: "acompanhamento"
    },
    {
        id: 9,
        nome: "Bolinhas de queijo",
        descricao: "Deliciosas bolinhas empanadas com queijo derretendo no interior.",
        imagem: "../img/acompanhamentos/bolinhas-de-queijo.png",
        valor: "15,00",
        categoria: "acompanhamento"
    },
    {
        id: 10,
        nome: "Iscas de peixe à milanesa",
        descricao: "Filés de peixe empanados e fritos, crocantes por fora e macios por dentro.",
        imagem: "../img/acompanhamentos/iscas-de-peixe.png",
        valor: "15,00",
        categoria: "acompanhamento"
    },

    // sobremesas
    {
        id: 11,
        nome: "Brownie com sorvete",
        descricao: "Brownie quentinho, macio e intenso no chocolate, servido com sorvete cremoso.",
        imagem: "../img/sobremesas/brownie-com-sorvete.png",
        valor: "15,00",
        categoria: "sobremesa"
    },
    {
        id: 12,
        nome: "Churros",
        descricao: "Recheados ou passados no açúcar e canela, crocantes por fora e macios por dentro.",
        imagem: "../img/sobremesas/churros.png",
        valor: "9,00",
        categoria: "sobremesa"
    },
    {
        id: 13,
        nome: "Creme Brulle",
        descricao: "Sobremesa francesa sofisticada, com creme aveludado e crosta caramelizada na hora.",
        imagem: "../img/sobremesas/creme-brulle.png",
        valor: "10,00",
        categoria: "sobremesa"
    },
    {
        id: 14,
        nome: "Petit gateau",
        descricao: "Bolinho de chocolate com casquinha crocante e recheio cremoso, servido com sorvete.",
        imagem: "../img/sobremesas/petit-gateau.png",
        valor: "25,00",
        categoria: "sobremesa"
    },

    // bebidas
    {
        id: 15,
        nome: "Coca-cola Zero",
        descricao: "O sabor original da Coca, agora sem açúcar, perfeita para refrescar sem culpa.",
        imagem: "../img/bebidas/coca-cola-zero.png",
        valor: "8,00",
        categoria: "bebida"
    },
    {
        id: 16,
        nome: "Coca-cola normal",
        descricao: "Refrescante, geladinha e com aquele sabor inconfundível que todo mundo ama.",
        imagem: "../img/bebidas/coca-cola-normal.png",
        valor: "8,00",
        categoria: "bebida"
    },
    {
        id: 17,
        nome: "Água com gás",
        descricao: "Refrescante e leve, perfeita para acompanhar qualquer refeição.",
        imagem: "../img/bebidas/agua-com-gas.png",
        valor: "6,00",
        categoria: "bebida"
    },
    {
        id: 18,
        nome: "Água sem gás",
        descricao: "Pura e cristalina, ideal para hidratar e equilibrar o paladar.",
        imagem: "../img/bebidas/agua-sem-gas.png",
        valor: "6,00",
        categoria: "bebida"
    },
    {
        id: 19,
        nome: "Suco de uva",
        descricao: "Natural e encorpado, feito com uvas selecionadas.",
        imagem: "../img/bebidas/suco-uva.png",
        valor: "9,00",
        categoria: "bebida"
    },
    {
        id: 20,
        nome: "Suco de laranja",
        descricao: "Refrescante, cítrico e natural.",
        imagem: "../img/bebidas/suco-laranja.png",
        valor: "9,00",
        categoria: "bebida"
    }
];


function mostrarProdutosAleatorios(idContainer, qtde) {
  const container = document.getElementById(idContainer);
  if(!container) return; //sai se o container nao existir
  container.innerHTML = "";

  // Embaralha e pega qtde produtos
  const produtosAleatorios = produtos
    .slice() // copia array para não modificar o original
    .sort(() => 0.5 - Math.random())
    .slice(0, qtde);

  // Cria o HTML completo numa string para depois inserir tudo de uma vez
  let html = "";

  produtosAleatorios.forEach(produto => {
    html += `
      <div class="col-md-4 mb-4 roleCard" data-categoria="${produto.categoria}">
        <div class="card h-100">
          <img src="${produto.imagem}" alt="${produto.nome}" style="" class="card-img">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${produto.nome}</h5>
            <p class="card-text">${produto.descricao}</p>
            <p class="fw-bold">R$ ${produto.valor}</p>
            <div class="mt-auto">
              <button class="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#cardModal-${produto.id}">Adicionar ao pedido</button>
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
                      <img id="modalImagem-${produto.id}" src="${produto.imagem}" class="img-fluid rounded mb-3" alt="Imagem do Produto">
                      <p>${produto.descricao}</p>
                      <strong>R$${produto.valor}</strong><br>

                      <label for="obs-${produto.id}" class="form-label">Observações:</label>
                      <textarea id="observacao-${produto.id}" class="form-control" placeholder="ex: sem cebola, sem milho"></textarea> 
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-dark btnAddCarrinho"
                        data-id="${produto.id}"
                        data-nome = "${produto.nome}"
                        data-valor = "${produto.valor}">
                        Adicionar ao carrinho
                      </button>
                  </div>
              </div>
          </div>
      </div>
      
    `;
  });

  container.innerHTML = html; // insere tudo junto
}


let carrinho = [];

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btnAddCarrinho")) {

        const id = parseInt(e.target.dataset.id);
        const nome = e.target.dataset.nome;
        const valor = parseFloat(e.target.dataset.valor.replace(",", "."));
        const obs = document.getElementById(`observacao-${id}`).value.trim();

        // verifica se já existe um item com mesmo id e mesma observação
        const itemExiste = carrinho.find(item => item.id === id && item.observacao === obs);

        if (itemExiste) {
            // se já existe exatamente igual, aumenta a quantidade
            itemExiste.quantidade += 1;
        } else {
            // se não existe, adiciona um novo item
            carrinho.push({
                id: id,
                nome: nome,
                valor: valor,
                observacao: obs,
                quantidade: 1
            });
        }

        salvarCarrinho();
        atualizaCarrinho();
        toastCarrinho();
    }
});

//salvar carrinho
function salvarCarrinho(){
    localStorage.setItem("carrinho",JSON.stringify(carrinho));
}


//atualiza carrinho
function atualizaCarrinho() {
    const container = document.getElementById("itensCarrinho");
    container.innerHTML = "";

    let total = 0;

    carrinho.forEach(item => {
        const subtotal = item.valor * item.quantidade;
        total += subtotal;

        container.innerHTML += `
        <div class="item-carrinho d-flex justify-content-between align-items-center mb-2">
            <div>
                <strong>${item.nome}</strong><br>
                R$ ${item.valor.toFixed(2)} x 
                <input type="number" min="1" value="${item.quantidade}" class="form-control form-control-sm"
                       onchange="mudarQuantidade(${item.id}, this.value)" style="width:60px;">
                ${item.observacao ? `<br><em>Obs: ${item.observacao}</em>` : ""}
            </div>
            <div>
                R$ ${subtotal.toFixed(2)}
                <button onclick="removeItem(${item.id}, '${item.observacao}')" class="btn btn-sm btn-danger">Remover</button>
            </div>
        </div>
        `;
    });

    container.innerHTML += `
        <hr>
        <div class="total d-flex justify-content-between fw-bold">
            <span>Total:</span>
            <span>R$ ${total.toFixed(2)}</span>
        </div>
    `;

    salvarCarrinho();
}


function mudarQuantidade(id, novaQuantidade) {
    const item = carrinho.find(i => i.id === id);
    if (item) {
        item.quantidade = Math.max(1, parseInt(novaQuantidade));
        atualizaCarrinho(); // atualiza subtotal e total
        salvarCarrinho();
    }
}


function removeItem(id, obs){
  carrinho = carrinho.filter(item => !(item.id == id && item.observacao == obs));

  salvarCarrinho();
  atualizaCarrinho();
}

function toastCarrinho(){
    const abaToast = document.getElementById("toastCarrinho");
    const toast = new bootstrap.Toast(abaToast);
    toast.show();
}

document.addEventListener("DOMContentLoaded", () => {
  const carrinhoSalvo = localStorage.getItem("carrinho");
  if (carrinhoSalvo) {
    carrinho = JSON.parse(carrinhoSalvo);
    atualizaCarrinho();
  }

  mostrarProdutosAleatorios("produtos-cardapio", produtos.length);
  mostrarProdutosAleatorios("produtos-aleatorios", 8);

  //limpando carrinho 

  const btnLimpar = document.getElementById('btLimpar');

  if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
        carrinho = [];
        localStorage.removeItem('carrinho');

        // atualiza a interface
        if (typeof atualizaCarrinho === 'function') {
        atualizaCarrinho();
        } 
    });
  }

  //finaliza compra

  const btnFinalizar = document.getElementById('btFinalizar');

  if (btnFinalizar) {
    btnFinalizar.addEventListener('click', () => {
    
        carrinho = [];
        localStorage.removeItem('carrinho');

        if (typeof atualizaCarrinho === 'function') {
            atualizaCarrinho();
        }

        // fecha o offcanvas
        const offcanvasEl = document.getElementById('offcanvasCarrinho');
        const toastEl = document.getElementById('toastPedidoFinalizado');

        if (offcanvasEl) {
          // mostra o toast DEPOIS que o offcanvas fechar
          offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
              if (toastEl) bootstrap.Toast.getOrCreateInstance(toastEl).show();
          }, { once: true });

          const inst = bootstrap.Offcanvas.getInstance(offcanvasEl) || new bootstrap.Offcanvas(offcanvasEl);
          inst.hide();
        } else {
        // se não tiver offcanvas mostra o toast direto
        if (toastEl) bootstrap.Toast.getOrCreateInstance(toastEl).show();
        }
    });
    }

    //filtro por categoria
    const navlinks = document.querySelectorAll('.navbar-nav a.nav-link[data-categoria]');

    navlinks.forEach(link =>{
        link.addEventListener("click", (e) =>{
            e.preventDefault();
            const categoriaSelecionada = link.dataset.categoria;
            const cards = document.querySelectorAll(".roleCard[data-categoria]");

            cards.forEach(card =>{
                const categoriaCard = card.dataset.categoria;
                card.hidden = (categoriaCard !== categoriaSelecionada);
            });

            document.querySelectorAll('.navbar-nav a.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });


  //botao add carrinho modal e toast
  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".btnAddCarrinho");
    if (!btn) return;

    const modalEl = btn.closest(".modal");
    if (modalEl) {
      const hasDataDismiss = btn.hasAttribute("data-bs-dismiss");

      const modalInstance = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      if (!hasDataDismiss) modalInstance.hide();

      // Exibe o toast depois que o modal terminar de fechar
      modalEl.addEventListener("hidden.bs.modal", () => {
        // evita “piscar” quando o scrollbar volta
        setTimeout(showCartToast, 50);
      }, { once: true });
    } else {
      // Se não há modal, mostra direto
      showCartToast();
    }
  });
});




