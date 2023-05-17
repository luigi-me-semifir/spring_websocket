let stompClient = null;

/**
 * fonction qui gère l'affichage des boutons en fonction de l'état de la connexion
 * @param connected
 */
function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

/**
 * fonction qui utilise SockJS et stomp.js pour ouvrir une connexion
 */
function connect() {
    let socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            showGreeting(JSON.parse(greeting.body).content);
        });
    });
}

/**
 * fonction qui ferme la connexion
 */
function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

/**
 * fonction qui envoie le nom saisi par l'utilisateur au serveur
 */
function sendName() {
    stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
}

/**
 * fonction qui affiche le message de bienvenue
 * @param message
 */
function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

/**
 * fonction qui est appelée au chargement de la page
 */
$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    // on associe les fonctions aux boutons
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});