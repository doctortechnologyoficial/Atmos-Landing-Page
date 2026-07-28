# 🚀 Atmos Landing Page Premium

Landing Page de alto impacto para venda de planos de TV por assinatura / IPTV, desenvolvamente com foco em performance, design "Apple/Netflix" e experiência do usuário premium. Esta página foi otimizada estrategicamente para conversão via **Google Ads** e **SEO**.

## ✨ Funcionalidades

- **Design Glassmorphism**: Interface moderna com efeitos de transparência e desfoque (backdrop-blur).
- **Identidade Atmos**: Paleta de cores exclusiva (Preto profundo + Gradiente Vermelho/Laranja).
- **Animações Premium**: Utilização do `framer-motion` para interações suaves e revelação de elementos no scroll.
- **Otimizada para Conversão**: Estrutura focamente em CTA (Call to Action) direcionando para o WhatsApp.
- **SEO & SEM Ready**: Metadados otimizados com palavras-chave de alta intenção (ex: "Streaming 4K", "Sem travamentos") e estrutura preparada para campanhas de Google Ads.
- **Pronta para Deploy**: Configuração Docker otimizada para Portainer + Cloudflare.

## 📈 Estratégia de Marketing & SEO

Este projeto não é apenas código; ele foi estruturado como uma máquina de vendas:

### 🎯 Google Ads Strategy
A estrutura do site foi desenhada para suportar três tipos de campanhas:
1.  **Pesquisa (Search)**: Focada em termos de alta intenção como `iptv premium` e `canais ao vivo 4k`.
2.  **Remarketing**: Preparado para impactar usuários que visitaram o site mas não converteram via WhatsApp.
3.  **Blindagem de Verba (Negative Keywords)**: O projeto inclui uma estratégia de palavras-chave negativas (`grátis`, `torrent`, `download`) para evitar cliques irrelevantes e reduzir o CPC.

### 🔍 SEO On-Page
As metatags foram otimizadas com foco em **CTR** (Click-Through Rate) nos resultados de busca, utilizando:
- Títulos magnéticos focados em "Streaming 4K".
- Descrições que enfatizam a resolução Ultra HD e o atendimento via WhatsApp.
- Integração semântica de keywords dentro dos componentes `Hero`, `Benefits` e `FAQ`.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Lucide React](httpshttps://lucide.dev/)
- **Infraestrutura**: Docker & Docker Compose

## 🚀 Como Rodar Localmente

1.  **Clone o repositório ou entre na pasta:**
    ```bash
    cd atmos
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O projeto estará disponível em `http://localhost:5173`.

## 🐳 Como Fazer o Deploy (Docker/Portainer)

Este projeto já está configurado para ser implantado como uma **Stack** no Portainer.

1.  **Construir a imagem:**
    No terminal, na raiz do projeto, execute:
    ```bash
    docker build -t atmos-landing-page .
    ```

2.  **No Portainer (ou via Docker Compose local):**
    Crie uma nova **Stack** e cole o conteúdo do arquivo `docker-compose.yml`:
    ```yaml
    version: '3.8'
    services:
      atmos-web:
        image: atmos-landing-page # Ou o caminho da sua imagem buildada
        container_name: atmos-landing-page
        ports:
          - "3000:80"
        restart: always
    ```

3.  **Configuração Cloudflare:**
    Configure seu túnel do Cloudflare (Cloudflare Tunnel) para apontar para a porta `3000` do seu servidor. A Cloudflare cuidará de todo o SSL e Proxy Reverso.

## 📝 Notas de Produção

- **WhatsApp**: Lembre-se de verificar os links nos componentes `Hero.jsx`, `Pricing.jsx` e `Footer.jsx` para garantir que o número de atendimento esteja correto e sem espaços no link.
- **SEO Maintenance**: Ao adicionar novos conteúdos, mantenha a densidade de palavras-chave focadas em "Premium", "4K" e "Sem travamentos".
- **Imagens**: Para produção, recomenda-se utilizar imagens próprias ou um CDN para garantir o carregamento ultra-rápido exigido pela estratégia.

---
Developed for **Atmos Streaming**.
