# ⚡ DevUtil - Ferramentas para Desenvolvedores

> Ferramentas essenciais para o dia a dia de programação, focadas em privacidade, performance e usabilidade.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Licença](https://img.shields.io/badge/License-MIT-blue)

## 💻 Sobre o Projeto

O **DevUtil** é uma coleção de utilitários online desenvolvida para auxiliar desenvolvedores, redatores e estudantes. O diferencial do projeto é o processamento **100% Client-Side**, ou seja, todos os dados (como validação de JSON ou geração de senhas) são processados no navegador do usuário, garantindo privacidade total e velocidade instantânea.

🔗 **Acesse online:** [devutil.com.br](https://devutil.com.br)

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web modernas, sem dependências pesadas de frameworks, garantindo leveza e facilidade de manutenção.

-   **HTML5 Semântico**: Estrutura otimizada para SEO.
-   **Tailwind CSS (via CDN)**: Estilização responsiva e sistema de Dark Mode.
-   **JavaScript (ES6+)**: Lógica das ferramentas, manipulação do DOM e persistência de dados.
-   **LocalStorage**: Para salvar a preferência de tema do usuário.
-   **Vercel**: Hospedagem e configuração de URLs amigáveis (Clean URLs).

## ✨ Funcionalidades

### 🎨 Interface e UX
-   **Dark Mode Completo**: Sistema robusto de tema claro/escuro com persistência (salva a escolha do usuário) e detecção automática da preferência do sistema operacional. Evita o "flash" de tela branca ao carregar.
-   **Design Responsivo**: Layout adaptável para Mobile, Tablet e Desktop.
-   **Navegação Fluida**: Menu interativo e breadcrumbs (botões de voltar) intuitivos.

### 🧰 Ferramentas Disponíveis
1.  **Manipulação de Texto**: Contador de caracteres, palavras e conversor Maiúsculo/Minúsculo.
2.  **Desenvolvimento**:
    -   **Formatador JSON**: "Pretty print" para JSON minificado e validação de sintaxe.
    -   **Lorem Ipsum**: Gerador de texto simulado para prototipagem.
3.  **Segurança**:
    -   **Gerador de Senhas**: Criação de senhas fortes com alta entropia via `Math.random()`.
4.  **Lazer**:
    -   **Sorteador FIFA**: Algoritmo para sortear times equilibrados (Ataque/Defesa) para partidas rápidas.

## 🚀 Como Rodar Localmente

Para rodar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/devutil.git](https://github.com/SEU-USUARIO/devutil.git)
    ```

2.  **Abra a pasta do projeto:**
    Navegue até o diretório onde os arquivos foram clonados.

3.  **Execute:**
    Você pode abrir o arquivo `index.html` diretamente no navegador ou usar uma extensão como o "Live Server" do VS Code.

### ⚠️ Nota sobre URLs Amigáveis (Clean URLs)

Este projeto utiliza um arquivo `vercel.json` para remover as extensões `.html` das URLs em produção (ex: `devutil.com.br/blog` ao invés de `/blog.html`).

Ao rodar localmente (via Live Server ou arquivo direto), **é necessário adicionar a extensão `.html` manualmente** na barra de endereço se os links internos parecerem quebrados, pois servidores locais simples não leem a configuração da Vercel nativamente.

## 📂 Estrutura de Arquivos

```text
/
├── index.html          # Página Inicial (Ferramentas)
├── blog.html           # Listagem de Artigos
├── fifa-duelo.html     # Ferramenta de Sorteio
├── privacidade.html    # Política de Privacidade
├── vercel.json         # Configuração de Servidor (Clean URLs)
└── README.md           # Documentação
```