# Hermes Piscinas — Landing page

Landing page responsiva feita com HTML, CSS e JavaScript puro.

## Como visualizar no Linux

1. Extraia a pasta do projeto.
2. Abra `index.html` no navegador; ou use a extensão Live Server do VS Code.
3. Teste em desktop e celular e clique nos botões de WhatsApp.

## Configurações antes de publicar

- Confira o telefone em `js/script.js` (`WHATSAPP_NUMBER`).
- Em `index.html`, substitua `https://SEU-DOMINIO.com.br/` pela URL final no `rel="canonical"`.
- Confirme se a área atendida e todos os serviços descritos correspondem ao que você oferece.
- Troque as imagens demonstrativas por fotos reais dos seus serviços quando possível.
- Inclua depoimentos somente com autorização dos clientes e sem inventar avaliações.

## Publicar com GitHub + Netlify

1. Crie um repositório GitHub chamado `hermes-piscinas`.
2. Envie todos os arquivos mantendo a estrutura de pastas.
3. No Netlify, escolha **Add new site** → **Import an existing project**.
4. Conecte o GitHub e selecione `hermes-piscinas`.
5. Como é um site estático, deixe **Build command** vazio e **Publish directory** como `.`.
6. Clique em Deploy. Cada novo push no GitHub poderá atualizar o site automaticamente.

## Observações

- Não há backend nem dependências de instalação.
- As imagens de demonstração são carregadas do Unsplash e precisam de internet.
- O formulário de orçamento foi substituído por links diretos para o WhatsApp.
