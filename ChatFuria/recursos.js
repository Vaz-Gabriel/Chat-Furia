const chatBox = document.getElementById('chatBox');
let notificationsEnabled = false;

// Função para adicionar mensagens ao chat
function addMessage(message, isUser = false) {
    const messageElement = document.createElement('p');
    messageElement.textContent = isUser ? `Você: ${message}` : message;
    messageElement.style.color = isUser ? '#FF4C00' : '#FFFFFF';
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para enviar mensagem do usuário e simular resposta da torcida
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();

    if (message) {
        addMessage(message, true);

        // Simulação de resposta da torcida
        setTimeout(() => {
            const responses = [
                "É isso aí! Vamos virar esse jogo! 🐾",
                "FURIA É FOGO! VAMOS COM TUDO!!! 🔥",
                "Boa, irmão! Tamo junto nessa torcida! 💪",
                "VAMO QUE VAMO, FURIA!!! 🖤🧡"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(`Torcida FURIA: ${randomResponse}`);
        }, 1000);

        chatInput.value = ''; // Limpar o campo de entrada
    }
}

// Função para exibir status de jogo ao vivo (simulado)
function showLiveStatus() {
    const liveStatus = [
        "🔴 AO VIVO: FURIA vs. NAVI - Mapa 1: Mirage, Placar: 5-3",
        "⚡ KSCERATO acabou de fazer um clutch 1v3! VAMOS FURIA!!!",
        "🔴 AO VIVO: FURIA vs. NAVI - Mapa 1: Mirage, Placar: 7-5"
    ];

    liveStatus.forEach((status, index) => {
        setTimeout(() => {
            addMessage(status);
        }, index * 2000);
    });
}

// Função para exibir resultados recentes
function showRecentResults() {
    const results = [
        "📊 Resultado Recente: FURIA 2-1 Complexity - ESL Pro League Season 6",
        "📊 Resultado Recente: FURIA 1-2 NAVI - IEM Katowice 2025",
        "📊 Resultado Recente: FURIA 2-0 GamerLegion - BLAST Open Spring 2025"
    ];

    results.forEach((result, index) => {
        setTimeout(() => {
            addMessage(result);
        }, index * 1500);
    });
}

// Função para ativar/desativar notificações
function toggleNotifications() {
    notificationsEnabled = !notificationsEnabled;
    addMessage(notificationsEnabled 
        ? "🔔 Notificações ativadas! Você será avisado sobre próximas partidas." 
        : "🔕 Notificações desativadas.");

    if (notificationsEnabled) {
        setTimeout(() => {
            addMessage("🔔 Próxima Partida: FURIA vs. Liquid - PGL Astana, 29 dias!");
        }, 3000);
    }
}

// Mensagem inicial ao carregar a página
window.onload = () => {
    addMessage("Bem-vindo ao Chat Furia! 🖤🧡");
    addMessage("Digite uma mensagem para interagir com a torcida ou use os botões abaixo!");
};