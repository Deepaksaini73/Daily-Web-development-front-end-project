document.getElementById('send-btn').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        addUserMessage(userInput);
        generateBotResponse(userInput);
        document.getElementById('user-input').value = "";
        console.log(userInput);
    }
});

function addUserMessage(message) {
    let chatBox = document.getElementById('chat-box');
    let userMsg = document.createElement('div');
    userMsg.className = 'user';
    userMsg.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(userMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function generateBotResponse(userInput) {
    let chatBox = document.getElementById('chat-box');
    let botMsg = document.createElement('div');
    botMsg.className = 'bot';

    const API_KEY = "AIzaSyCYF6wAtiU8G8OE__kWEH1tYFblIat4UtI";
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{ text: userInput }]
                }]
            })
        });

        const data = await response.json();

        // Log the entire response to understand its structure
        const apiResponse = data?.candidates[0].content.parts[0].text;
        console.log('API Response:', apiResponse);
        const apiResponseFormat = apiResponse.replace(/\*/g, '<br/>');

        let botResponse = "";

        if (apiResponse) {
            botResponse = apiResponseFormat;
        } else {
            botResponse = "Sorry, I didn't understand that.";
        }

        botMsg.innerHTML = `<p>${botResponse}</p>`;
    } catch (error) {
        console.log('Error:', error);
        botMsg.innerHTML = `<p>Sorry, something went wrong. Please try again later.</p>`;
    }

    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});
