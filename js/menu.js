// A Lista Única de Aulas (Quando criar a Aula 03, é só adicionar uma linha aqui)
const aulas = [
    { id: 'python-aula-01', titulo: '01: O Mundo Real', link: '/cursos/python-na-vida-real/index.html' },
    { id: 'python-aula-02', titulo: '02: A Lógica dos Dados', link: '/cursos/python-na-vida-real/aula-02.html' }
];

function renderizarSidebar() {
    // Procura o "buraco" onde o menu vai ser injetado
    const sidebarNav = document.getElementById('menu-aulas');
    if (!sidebarNav) return;

    // Pega o caminho atual da página (para saber qual aula pintar de azul)
    let urlAtual = window.location.pathname;
    // Ajuste fino para a Vercel que as vezes esconde o "index.html" da URL
    if(urlAtual === '/cursos/python-na-vida-real/') urlAtual = '/cursos/python-na-vida-real/index.html';

    let html = `
        <div class="mb-6">
            <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Módulo 1: Introdução</p>
    `;

    // Para cada aula na lista, ele constrói o botão do menu
    aulas.forEach((aula, index) => {
        const isAtiva = (urlAtual === aula.link);
        const classeAtiva = isAtiva ? 'sidebar-active text-white' : 'text-slate-400 hover:bg-slate-900 hover:text-white';
        const corBolinha = isAtiva ? 'bg-blue-600' : 'bg-slate-800';

        html += `
            <a href="${aula.link}" data-id="${aula.id}" class="aula-item ${classeAtiva} flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition">
                <span class="bolinha-status w-5 h-5 flex items-center justify-center ${corBolinha} rounded-full text-[10px]">${index + 1}</span>
                ${aula.titulo}
            </a>
        `;
    });

    html += `</div>`;
    // Injeta o HTML criado dentro da página
    sidebarNav.innerHTML = html;
}

// Roda o script assim que a página carrega
document.addEventListener('DOMContentLoaded', renderizarSidebar);