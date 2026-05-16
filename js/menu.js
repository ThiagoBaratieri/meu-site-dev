// A Lista Única de Aulas
const aulas = [
    { id: 'python-aula-01', titulo: '01: O Mundo Real', link: '/cursos/python-na-vida-real/index.html' },
    { id: 'python-aula-02', titulo: '02: A Lógica dos Dados', link: '/cursos/python-na-vida-real/aula-02.html' }
];

// NOVA FUNÇÃO: Conserta a URL caso a Vercel esconda o .html
function obterUrlAtual() {
    let url = window.location.pathname;
    
    // Se a URL não terminar com / e nem com .html, a Vercel escondeu. Vamos colocar de volta!
    if (!url.endsWith('.html') && !url.endsWith('/')) {
        url += '.html';
    }
    // Se terminar com a barra /, sabemos que é a página inicial (index.html)
    if (url.endsWith('/')) {
        url += 'index.html';
    }
    
    return url;
}

function renderizarSidebar() {
    const sidebarNav = document.getElementById('menu-aulas');
    if (!sidebarNav) return;

    let urlAtual = obterUrlAtual(); // Usa a nossa nova função inteligente

    let html = `
        <div class="mb-6">
            <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Módulo 1: Introdução</p>
    `;

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
    sidebarNav.innerHTML = html;
}

function renderizarComunidade() {
    const container = document.getElementById('comunidade-container');
    if (!container) return;

    container.innerHTML = `
        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Comunidade</p>
        
        <a href="https://www.tiktok.com/@kiritodev77" target="_blank" class="flex items-center gap-3 p-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition mb-1">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            Assista no TikTok
        </a>
        
        <a href="https://discord.gg/8jsD463svX" target="_blank" class="flex items-center gap-3 p-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-indigo-900/50 hover:text-indigo-400 transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
            Comunidade no Discord
        </a>
    `;
}

function renderizarRodape() {
    const container = document.getElementById('rodape-container');
    if (!container) return;

    let urlAtual = obterUrlAtual(); // Usa a nossa nova função inteligente

    const indexAtual = aulas.findIndex(aula => aula.link === urlAtual);
    if (indexAtual === -1) return; // Agora ele vai achar!

    const aulaAtual = aulas[indexAtual];
    const proximaAula = aulas[indexAtual + 1];
    const aulaAnterior = indexAtual > 0 ? aulas[indexAtual - 1] : null;

    let html = `<div class="border-t border-slate-800 pt-8 mt-8 flex justify-between items-center w-full">`;

    if (aulaAnterior) {
        html += `
            <a href="${aulaAnterior.link}" class="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                ← <span class="hidden md:inline">Aula Anterior</span>
            </a>
        `;
    } else {
        html += `<div></div>`; 
    }

    if (proximaAula) {
        html += `
            <div class="flex items-center gap-4 text-right">
                <div class="hidden md:block">
                    <p class="text-xs text-slate-500 uppercase font-bold tracking-widest text-left">Próxima</p>
                    <p class="text-sm text-white font-medium">${proximaAula.titulo}</p>
                </div>
                <button onclick="concluirAula('${aulaAtual.id}', '${proximaAula.link}')" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2">
                    Concluir <span class="hidden md:inline">e Avançar</span> <span aria-hidden="true">→</span>
                </button>
            </div>
        `;
    } else if (aulaAtual.isUltima) {
        html += `
            <button onclick="alert('Sistema de Certificado em breve!')" class="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-green-900/20">
                Solicitar Certificado 🎉
            </button>
        `;
    } else {
        html += `
            <div class="text-right flex-1">
                <p class="text-sm text-slate-400 font-medium italic">Próximas aulas em produção...</p>
            </div>
        `;
    }

    html += `</div>`;
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarSidebar();
    renderizarComunidade();
    renderizarRodape();
});