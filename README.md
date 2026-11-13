# smartStream
1. Présentation du projet
Smart Stream est une application web de streaming IPTV permettant aux utilisateurs de consulter un catalogue de chaînes de télévision en direct, de rechercher des chaînes et de visualiser le contenu d'une chaîne sélectionnée.




2. Objectifs du projet
Développer une interface IPTV intuitive et responsive.
Consommer des données depuis une API REST avec Fetch API.
Utiliser MockAPI pour simuler un serveur Backend.
Organiser le code avec les modules JavaScript ES6.
Gérer les traitements asynchrones avec async/await et try/catch.
Implémenter la recherche et le filtrage instantané des chaînes.
Gérer les états de chargement et les erreurs HTTP.
Ajouter un lecteur vidéo interactif.
Afficher les informations EPG (Electronic Program Guide).


DOCUMENTATION :
Gestion des statuts HTTP

Code HTTP	Signification	Comportement
200	=> OK	Données récupérées avec succès
404 =>	Not Found	Ressource introuvable
500	=> Internal Server Error	Erreur serveur

--Méthodes JavaScript ES6+ utilisées

- *trim()* =>  La méthode trim() en JavaScript permet de supprimer les espaces blancs au début et à la fin d'une chaîne de caractères, sans modifier la chaîne d'origine.
 
- *filter()* =>  La méthode filter() permet de créer un nouveau tableau contenant uniquement les éléments qui passent un test défini dans une fonction de rappel. Elle ne modifie pas le tableau d’origine et ignore les cases vides.

- *API Fetch en JavaScript* => L'API Fetch est une interface moderne et puissante permettant d'effectuer des requêtes HTTP asynchrones en JavaScript. Elle remplace avantageusement l'ancienne méthode XMLHttpRequest en utilisant des promesses, ce qui rend le code plus lisible et maintenable. Fetch est largement utilisé pour récupérer des données depuis des serveurs ou envoyer des informations.
