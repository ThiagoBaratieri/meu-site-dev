// Função para marcar a aula como concluída e ir para a próxima
function concluirAula(idAulaAtual, linkProximaAula) {
    // 1. Salva no navegador que esta aula foi feita
    localStorage.setItem(idAulaAtual, 'concluida');
    
    // 2. Redireciona o aluno para a próxima aula
    window.location.href = linkProximaAula;
}

// Quando a página carregar, o script verifica quais aulas já foram feitas
document.addEventListener('DOMContentLoaded', () => {
    // Busca todos os links do menu lateral que tenham a classe 'aula-item'
    const itensMenu = document.querySelectorAll('.aula-item');
    
    itensMenu.forEach(item => {
        const idAula = item.getAttribute('data-id');
        
        // Se a aula estiver salva como 'concluida' no localStorage
        if (localStorage.getItem(idAula) === 'concluida') {
            const bolinha = item.querySelector('.bolinha-status');
            
            // Pinta a bolinha de verde e coloca um check de concluído
            if (bolinha) {
                bolinha.classList.remove('bg-slate-800', 'bg-blue-600');
                bolinha.classList.add('bg-green-500');
                bolinha.innerHTML = '✓';
            }
        }
    });
});

// Função para abrir e fechar o menu no celular
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    // Faz a barra deslizar para dentro ou para fora da tela
    sidebar.classList.toggle('-translate-x-full');
    // Mostra ou esconde o fundo escuro
    overlay.classList.toggle('hidden');
}