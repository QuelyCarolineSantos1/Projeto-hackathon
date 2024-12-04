// Funcionalidade de exibição de mensagens
function exibirMensagem(mensagem) {
    alert(mensagem + " - Em construção!");
}

// Funcionalidade de chat
function enviarMensagem() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        var chatContent = document.getElementById("chat-content");
        var userMessage = document.createElement("div");
        userMessage.classList.add("message", "user");
        userMessage.textContent = userInput;
        chatContent.appendChild(userMessage);

        document.getElementById("user-input").value = "";
        chatContent.scrollTop = chatContent.scrollHeight;

        setTimeout(function () {
            var botMessage = document.createElement("div");
            botMessage.classList.add("message", "bot");
            botMessage.textContent = "Essa funcionalidade ainda está em construção!";
            chatContent.appendChild(botMessage);
            chatContent.scrollTop = chatContent.scrollHeight;
        }, 1000);
    }
}

// Funcionalidade de alternar chatbox
function toggleChatbox() {
    var chatbox = document.getElementById("chatbox");
    chatbox.classList.toggle("hidden");
}

// Exibir menu do aluno
document.getElementById("user-avatar").addEventListener("click", function() {
    var menu = document.getElementById("user-menu");
    menu.classList.toggle("hidden");
});

// Fechar menu do aluno
function fecharMenu() {
    var menu = document.getElementById("user-menu");
    menu.classList.add("hidden");
}
function filterCards() {
    // Pega o valor da pesquisa e do filtro
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const subjectFilter = document.getElementById("subject-filter").value;

    // Pega todos os cards
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        // Verifica se o título ou a matéria do card corresponde à pesquisa
        const title = card.querySelector("h2").textContent.toLowerCase();
        const materia = card.getAttribute("data-materia");

        // Verifica se a pesquisa e o filtro correspondem
        if (
            (title.includes(searchQuery) || searchQuery === "") && 
            (materia.includes(subjectFilter) || subjectFilter === "")
        ) {
            card.style.display = "block"; // Exibe o card
        } else {
            card.style.display = "none"; // Oculta o card
        }
    });
}
// Função para alternar a visibilidade do chatbox
function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    if (chatbox.style.display === 'none' || chatbox.style.display === '') {
        chatbox.style.display = 'flex'; // Mostra o chatbox
    } else {
        chatbox.style.display = 'none'; // Oculta o chatbox
    }
}
