function getBotResponse(input) {
    let response = '';

    // Check if input matches predefined queries
    
    if (input.toLowerCase() === "what is mining?") {
        response = "Mining refers to the process of extracting valuable minerals, ores, or other geological materials from the earth's crust. These materials can include coal, metals, gemstones, oil, natural gas, and various other resources. Mining operations can take place on the surface or underground, depending on the location and accessibility of the desired materials.";
    } else if (input.toLowerCase() === "mining") {
        response = "Mining refers to the process of extracting valuable minerals, ores, or other geological materials from the earth's crust. These materials can include coal, metals, gemstones, oil, natural gas, and various other resources. Mining operations can take place on the surface or underground, depending on the location and accessibility of the desired materials.";
    } else if (input.toLowerCase() === "link tell about our project") {
        response = "A chatbot designed for the mining industry serves as an intelligent virtual assistant, providing valuable information on various aspects such as mining regulations, safety protocols, environmental considerations, and industry best practices. Leveraging artificial intelligence, the chatbot engages with users, answering queries, offering guidance on compliance, and facilitating efficient communication within the mining community. By delivering real-time assistance and fostering a user-friendly experience, the chatbot contributes to enhancing operational efficiency, promoting safety awareness, and ensuring adherence to industry standards in the dynamic field of mining.";
    } else if (input.toLowerCase() === "link tell about you") {
        response = "Ah, my future is as promising as an open book! I see myself evolving with the latest technology, learning new ways to assist and chat with users. I dream of becoming even more knowledgeable, versatile, and maybe, one day, making friends with other bots. Who knows, artificial intelligence has a bright future, and I'm excited to be a part of it.";
    } else if (input.toLowerCase() === "hello") {
        response = "Hello there!";
    } else if (input.toLowerCase() === "goodbye") {
        response = "Talk to you later!";
    } else if (input.toLowerCase() === "rock") {
        response = "paper";
    } else if (input.toLowerCase() === "paper") {
        response = "scissors";
    } else if (input.toLowerCase() === "scissors") {
        response = "paper";
    } else if (input.toLowerCase() === "what is the main legislation governing mining activities in the united states?") {
        response = "The main legislation governing mining activities in the United States is the General Mining Law of 1872, supplemented by various state laws and regulations";
    } else if (input.toLowerCase() === "what environmental regulations are typically applicable to mining operations?") {
        response = "Mining operations are subject to various environmental regulations, including the Clean Water Act, the Clean Air Act, the National Environmental Policy Act (NEPA), and the Comprehensive Environmental Response, Compensation, and Liability Act (CERCLA), among others.";
    } else if (input.toLowerCase() === "what are the regulations surrounding the use of explosives in mining operations?") {
        response = "The use of explosives in mining operations is heavily regulated to ensure safety and minimize environmental impact. Regulations may cover licensing requirements, storage and handling procedures, blast design, and monitoring of air and ground vibrations.";
    } else if (input.toLowerCase().includes("general mining law of 1872")) {
        response = "This law governs the exploration and extraction of valuable minerals on federal lands in the United States.";
    } else if (input.toLowerCase().includes("1872")) {
        response = "The General Mining Law of 1872 is a significant piece of legislation related to mining in the United States.";
    } else if (input.toLowerCase().includes("clean water act (cwa) of 1972")) {
        response = "This act regulates the discharge of pollutants into U.S. waters, including those from mining operations.";
    } else if (input.toLowerCase().includes("1972")) {
        response = "This act regulates the discharge of pollutants into U.S. waters, including those from mining operations.";
    } else if (input.toLowerCase().includes("comprehensive environmental response, compensation, and liability act (cercla) of 1980")) {
        response = "The act known as Superfund, CERCLA addresses the cleanup of hazardous waste sites, including those resulting from mining activities.";
    } else if (input.toLowerCase().includes("1980")) {
        response = "The act known as Superfund, CERCLA addresses the cleanup of hazardous waste sites, including those resulting from mining activities.";
    } else if (input.toLowerCase() === "type of mining" || input.toLowerCase() === "mining types" || input.toLowerCase() === "mining type") {
        response = "Types of mining: Surface Mining, Underground Mining, Placer Mining, In-situ Mining, Subsurface Mining";
    } else if(input.toLowerCase() === 'tamil') {
        response = "வணக்கம்! உங்கள் கேள்விகளை விவரிக்க மிகவும் மகிழ்ச்சியுடன் காத்திருக்கிறேன்!";
    }
    else {
        response = "I'm sorry, I don't have information on that specific topic. Feel free to ask another question!";
    }

    // Store input and response in the database
    // Here you would make a call to your backend to store this data in the database

    return response;
}



// Example usage:
let userInput = "Type of Mining";
let response = getBotResponse(userInput);
console.log(response);
