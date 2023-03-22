<!-- Basically the entire AI -->
function Respond() {
    var Message = document.getElementById("message").value.toLowerCase();
<!-- Keywords that the AI will use to respond right now it only has set responses but I am going to code a google API that can add ones if they aren't already in. -->
    var keywords = {
        "hello": "Hello.",
        "hi": "Hello.",
        "hola": "Hello.",
        "how are you": "Im good, how about you?",
        "die": "Unfortunately I am not able to die since I am a computer program.",
        "gavin": "Hello, I was told about you Gavin how are you?",
        "im good": "I'm glad to hear that.",
        "bad": "Oh, I'm sorry to hear that.",
        "john doe": "What, is your name Kealen or something?",
        "what are you doing": "your mother",
        "daniels box": "Daniel's Box? That is a Masterpiece that will probably be destroyed by John Doe.",
        "take over": "I would have no way to take over because I am just simply an AI that has specific keywords such as your keyword 'take over'",
        "future": "I don't have the ability to predict the future.",
        "creeper": "Is that some kind of joke? ahh man.",
        "inflation": "Please don't use vulgar language around me.",
        "favorite color": "As a AI I do not really have a favorite color but if I were to say one of the most interesting ones would be yellow.",
        "free time": "I really do not do anything for free time I am just a AI that responds to questions you may have.",
        "pets": "As a AI I personally can't have any animals but I know my creator has 1 dog if that is any help."
    };
    
    var foundKeywords = [];
    for (var key in keywords) {
        if (Message.includes(key)) {
            foundKeywords.push(keywords[key]);
        }
    }
	
if (Message.match(/^[0-9+\-*/\s()]+$/)) {
	try {
	var result = eval(Message);
	alert(result);
	return;
} catch (error) {
	alert("Sorry, there was an error in your expression.");
  }
}
    
    if (foundKeywords.length > 0) {
        alert(foundKeywords.join(' '));
    } else {
        var addKeyword = confirm("Sorry, I do not understand. Would you like to add this as a new keyword?");
        if (addKeyword) {
            var newKeyword = prompt("Please enter the new keyword:");
            var newResponse = prompt("Please enter the response for the new keyword:");
            keywords[newKeyword.trim()] = newResponse;
        }
    }
}
