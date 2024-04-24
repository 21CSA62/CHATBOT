        // Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 100) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hi,I'm link👋 How can I help you?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "ChatBot for Mining industry";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("❤️")
    
}


// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

// chat.js

function sendButton() {
    var userInput = document.getElementById("textInput").value;

    if (userInput === "❤️") {
        // Handle heart emoji message
        // You can implement a specific response for heart emoji here
        botResponse("Thank you for the heart! ❤️");
    } else {
        // Handle other messages
        // Your existing logic for handling regular messages
        buttonSendText(userInput);
    }
}

function buttonSendText(text) {
    // Your existing logic for sending messages
    // For example, updating the chatbox with the user's message
    document.getElementById("chatbox").innerHTML += '<p class="userText"><span>' + text + '</span></p>';

    // Call a function to handle the bot's response based on the user's input
    handleBotResponse(text);
}

function handleBotResponse(userInput) {
    // Your logic for generating bot responses based on user input
    // For example, you can use a switch statement or if conditions
    // to determine the appropriate bot response
    var botResponseText = generateBotResponse(userInput);

    // Display the bot's response in the chatbox
    document.getElementById("chatbox").innerHTML += '<p class="botText"><span>' + botResponseText + '</span></p>';
}

function generateBotResponse(userInput) {
    // Your logic for generating bot responses based on user input
    // Modify this function based on your specific requirements
    // For example, check if userInput is a heart emoji and respond accordingly
    if (userInput === "❤️") {
        return "Thank you for the heart! ❤️";
    } else {
        // Your default response for other messages
        return "I received a message: " + userInput;
    }
}


// Function to show the login form
function showLoginForm() {
    var loginForm = document.getElementById("login-form");
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
    } else {
        loginForm.style.display = "none";
    }
}


function selectLanguage(lang) {
    // You can implement logic here to change the language of the chatbot responses
    console.log("Selected language:", lang);
    // You may need to reload the chatbot or make API calls to fetch responses in the selected language
}

// Function to handle user input and language selection
function handleUserInput(input, language) {
    // Make a request to the backend with the user input and selected language
    // Replace 'fetch' with your preferred method of making requests (e.g., XMLHttpRequest, axios)
    fetch('/api/getBotResponse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input, language })
    })
    .then(response => response.json())
    .then(data => {
        // Display the response in the chat interface
        displayResponse(data.response);
    })
    .catch(error => {
        console.error('Error fetching bot response:', error);
    });
}

// Function to display response in the chat interface
function displayResponse(response) {
    // Update the chat interface with the response
    document.getElementById('chatbox').innerHTML += '<p class="botText">' + response + '</p>';
}

// Event listener for language selection buttons
document.querySelectorAll('.lang-button').forEach(button => {
    button.addEventListener('click', function() {
        // Get the selected language from the button's data attribute or any other method
        const selectedLanguage = this.getAttribute('data-lang');
        
        // Handle user input with the selected language
        const userInput = document.getElementById('textInput').value;
        handleUserInput(userInput, selectedLanguage);
    });
});
