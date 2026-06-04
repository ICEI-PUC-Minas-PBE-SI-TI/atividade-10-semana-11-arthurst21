const dados = {
  "filmes": [
    {
      "id": 1,
      "titulo": "Interstellar",
      "descricao": "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
      "conteudo": "Dirigido por Christopher Nolan, Interstellar combina precisão científica com um drama emocional profundo. A história acompanha Cooper, um ex-piloto da NASA que precisa deixar seus filhos para trás e liderar uma missão espacial para encontrar um novo lar para a humanidade, enfrentando os perigos da dilatação temporal e do espaço profundo.",
      "genero": "Ficção Científica",
      "diretor": "Christopher Nolan",
      "destaque": true,
      "data": "2014-11-06",
      "imagem_principal": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHavuA0IIAhk6hD8FA_8GYVWH3dRMNAEUaCvqxS2su3LhYGGEiwbPegWb_IEcxU7t8VGnc1bLEUD3LqssiBd3qQAHCTEIbLKQpVIN1etM&s", 
      "elenco": [
        {
          "id": 1,
          "nome": "Matthew McConaughey",
          "papel": "Cooper",
          "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIMJHqzazxUbPS0fmt6fRi0BQu3N57z0VbA&s"
        },
        {
          "id": 2,
          "nome": "Anne Hathaway",
          "papel": "Brand",
          "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cIX5okud_TkulRIgxAA4jeIlVfwQz-S9Pg&s"
        },
        {
          "id": 3,
          "nome": "Jessica Chastain",
          "papel": "Murph",
          "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9m5KDnRVbQFrXXaJL75O_I6cNQt8Q7u-3mg&s"
        }
      ]
    },
    {
      "id": 2,
      "titulo": "O Cavaleiro das Trevas",
      "descricao": "Batman enfrenta a ameaça caótica conhecida como Coringa, que busca destruir Gotham City.",
      "conteudo": "Considerado um dos melhores filmes de super-heróis de todos os tempos, o longa traz um embate psicológico insano entre a ordem e o caos. A performance icônica e póstuma de Heath Ledger como o Coringa revolucionou o cinema moderno de ação.",
      "genero": "Ação / Policial",
      "diretor": "Christopher Nolan",
      "destaque": true,
      "data": "2008-07-18",
      "imagem_principal": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2GnOPu6UZVYMjVKVTpf0Is8osbq-PlRAaw&s",
      "elenco": [
        {
          "id": 1,
          "nome": "Christian Bale",
          "papel": "Bruce Wayne / Batman",
          "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNF86icUKZoRuRh_RwDPCjsTqmPcUezOGfNg&s"
        },
        {
          "id": 2,
          "nome": "Heath Ledger",
          "papel": "Coringa",
          "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5VUWflIkaw0SehBPxIq8grMitk1M6dlbhSA&s"
        },
        {
          "id": 3,
          "nome": "Gary Oldman",
          "papel": "Jim Gordon",
          "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe16JxMnXmGmuE32xWJogJ-PBE3xl-QBhHYQ&s"
        }
      ]
    },
    {
      "id": 3,
      "titulo": "A Origem",
      "descricao": "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos.",
      "conteudo": "Dom Cobb é um extrator profissional, mestre na arte de invadir o subconsciente das pessoas enquanto elas dormem. Agora, ele recebe a missão inversa: plantar uma ideia na mente de um herdeiro empresarial, uma tarefa quase impossível chamada de Inception.",
      "genero": "Ficção Científica / Ação",
      "diretor": "Christopher Nolan",
      "destaque": false,
      "data": "2010-09-24",
      "imagem_principal": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6xNrV6yRayeIkXOIIBXY9i6v1cdqxWKmVQ&s",
      "elenco": [
        {
          "id": 1,
          "nome": "Leonardo DiCaprio",
          "papel": "Cobb",
          "imagem": "https://media.gazetadopovo.com.br/2010/08/58fb0a8ea0fcf30ebb93243fda6909aa-full.jpg"
        },
        {
          "id": 2,
          "nome": "Cillian Murphy",
          "papel": "Fischer",
          "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlruIR1uQuD4MyhAo9vdS376bCLDVY8fQ-BQ&s"
        },
        {
          "id": 3,
          "nome": "Elliot Page",
          "papel": "Ariadne",
          "imagem": "https://i.redd.it/jd45zz1w4wx01.png"
        }
      ]
    }
  ]
};

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function montarSlider() {
  const destaques = dados.filmes.filter(f => f.destaque);
  const inner = document.getElementById('carouselInner');
  const indicators = document.getElementById('carouselIndicators');
  if (!inner) return;

  destaques.forEach((filme, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('data-bs-target', '#sliderDestaques');
    btn.setAttribute('data-bs-slide-to', i);
    btn.setAttribute('aria-label', `Slide ${i + 1}`);
    if (i === 0) { btn.classList.add('active'); btn.setAttribute('aria-current', 'true'); }
    indicators.appendChild(btn);

    const item = document.createElement('div');
    item.classList.add('carousel-item');
    if (i === 0) item.classList.add('active');
    item.innerHTML = `
      <div class="carousel-img-wrap">
        <img src="${filme.imagem_principal}" class="d-block w-100 carousel-img" alt="${filme.titulo}">
        <div class="carousel-overlay"></div>
      </div>
      <div class="carousel-caption">
        <span class="carousel-badge">${filme.genero}</span>
        <h2 class="carousel-title">${filme.titulo}</h2>
        <p class="carousel-desc">${filme.descricao}</p>
        <a href="detalhes.html?id=${filme.id}" class="btn btn-destaque">Ver Filme →</a>
      </div>
    `;
    inner.appendChild(item);
  });
}

function montarCards() {
  const container = document.getElementById('containerCards');
  if (!container) return;

  dados.filmes.forEach(filme => {
    const col = document.createElement('div');
    col.classList.add('col-12', 'col-sm-6', 'col-lg-4');
    col.innerHTML = `
      <div class="card-filme" onclick="window.location.href='detalhes.html?id=${filme.id}'">
        <div class="card-img-wrap">
          <img src="${filme.imagem_principal}" alt="${filme.titulo}">
          <div class="card-genero-tag">${filme.genero}</div>
          ${filme.destaque ? '<div class="card-destaque-badge">⭐ Populares</div>' : ''}
        </div>
        <div class="card-body-filme">
          <h3 class="card-nome">${filme.titulo}</h3>
          <p class="card-desc">${filme.descricao}</p>
          <div class="card-meta">
            <span>🎬 Direção: ${filme.diretor}</span>
          </div>
          <a href="detalhes.html?id=${filme.id}" class="card-link">Mais Detalhes →</a>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// ─── DETALHE ─────────────────────────────────────────────────────────────

function montarDetalhe() {
  const id = parseInt(getQueryParam('id'));
  const filme = dados.filmes.find(f => f.id === id);

  if (!filme) {
    document.getElementById('detalheConteudo').innerHTML = `
      <div class="text-center py-5">
        <h2>Filme não encontrado.</h2>
        <a href="index.html" class="btn btn-destaque mt-3">Voltar</a>
      </div>`;
    return;
  }

  document.title = `${filme.titulo} | CineReview`;

  document.getElementById('detalheConteudo').innerHTML = `
    <div class="detalhe-hero">
      <img src="${filme.imagem_principal}" alt="${filme.titulo}">
      <div class="detalhe-hero-overlay">
        <a href="index.html" class="btn-voltar">← Voltar</a>
        <div class="detalhe-hero-info">
          <span class="carousel-badge">${filme.genero}</span>
          <h1>${filme.titulo}</h1>
          <p>${filme.descricao}</p>
        </div>
      </div>
    </div>

    <div class="container detalhe-container">
      <div class="row g-4 mt-2">
        <div class="col-lg-8">
          <div class="detalhe-card">
            <h2 class="section-label">Sinopse Completa</h2>
            <p class="detalhe-texto">${filme.conteudo}</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="detalhe-info-card">
            <h3 class="section-label">Ficha Técnica</h3>
            <ul class="info-list">
              <li><span class="info-icon">🎬</span><div><strong>Diretor</strong><span>${filme.diretor}</span></div></li>
              <li><span class="info-icon">🎭</span><div><strong>Gênero</strong><span>${filme.genero}</span></div></li>
              <li><span class="info-icon">⭐</span><div><strong>Popular</strong><span>${filme.destaque ? 'Sim' : 'Não'}</span></div></li>
              <li><span class="info-icon">🗓</span><div><strong>Lançamento</strong><span>${new Date(filme.data).toLocaleDateString('pt-BR')}</span></div></li>
              <li><span class="info-icon">👥</span><div><strong>Elenco Principal</strong><span>${filme.elenco.length} Atores</span></div></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="elenco-section">
        <h2 class="section-label">Elenco Principal</h2>
        <div class="row g-4" id="containerElenco"></div>
      </div>
    </div>
  `;

  const container = document.getElementById('containerElenco');
  filme.elenco.forEach(ator => {
    const col = document.createElement('div');
    col.classList.add('col-12', 'col-md-4');
    col.innerHTML = `
      <div class="ator-card">
        <div class="ator-img-wrap">
          <img src="${ator.imagem}" alt="${ator.nome}">
        </div>
        <div class="ator-body">
          <h4>${ator.nome}</h4>
          <p><strong>Papel:</strong> ${ator.papel}</p>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// ─── INIT ──────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('carouselInner')) {
    montarSlider();
    montarCards();
  }
  if (document.getElementById('detalheConteudo')) {
    montarDetalhe();
  }
});