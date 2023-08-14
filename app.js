window.onload = function () {
    initializeLiff();
};

function initializeLiff() {
    liff.init({
        liffId: 'YOUR_LIFF_ID' // Replace with your LIFF ID
    }).then(() => {
        // Enable UI elements
        document.getElementById("messageForm").style.display = "block";
        
        // Set up event listener for the form
        document.getElementById("messageForm").addEventListener("submit", sendMessage);
    }).catch((error) => {
        console.log('LIFF initialization failed', error);
    });
}

function sendMessage(event) {
    event.preventDefault();
    const message = document.getElementById("messageInput").value;

    if (message) {
        liff.sendMessages([
            {
                type: "text",
                text: message
            }
        ]).then(() => {
            alert("Message sent!");
        }).catch((error) => {
            console.error("Error sending message:", error);
        });
    }
}

