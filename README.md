# Description

Petit projet afin de tester la mise en place des WebSockets en Spring

## La partie Back se trouve dans le dossier `src/main/java`
Elle contient:
- Une classe `Greeting` et `HelloMessage` qui sont les objets échangés entre le client et le serveur
- Une classe `GreetingController` qui permet de gérer les requêtes du client
- Une classe `WebSocketConfig` qui permet de configurer le WebSocket
- Une classe `WebsocketApplication` qui permet de lancer l'application

## La partie Front se trouve dans le dossier `src/main/resources/static`
Elle contient:
- Un fichier `index.html` qui permet de lancer l'application
- Un fichier `app.js` qui permet de gérer les requêtes du client avec les librairie `sockjs` et `stompjs`


# Installation
Projet réalisé avec IntelliJ IDEA

Lancer le projet et rendez vous sur l'url suivante : http://localhost:8080/
