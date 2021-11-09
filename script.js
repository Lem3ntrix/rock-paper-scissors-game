
//Begrüßungstext und Regelerklärung
alert('Willkommen bei Stein, Schere, Papier \nSpielregeln: \nEs wird insgesamt über 5 Runden gespielt \nes darf ausschließlich Stein, Schere und Papier benutzt werden! \n\num Anzufangen bestätige bitte mit OK und lies das nächste Fenster');

//Auswahl vom Computer anfordern und so bearbeiten dass Groß- und Kleinschreibung egal ist
function computerPlay() {
    //Antwortmöglichkeiten vorgeben
    const answers = ['STEIN', 'SCHERE', 'PAPIER'];
    //Zufällig eine Antwortmöglichkeit auswählen
    let random = Math.floor(Math.random() * answers.length);
    //Ausgewählte Antwort des Computers in Kleinbuchstaben zurückgeben
    return answers[random].toLowerCase();
}

//Eingabe vom User anfordern und so bearbeiten dass Groß- und Kleinschreibung egal ist
function playerPlay() {
    //Auswahl vorschlagen und Eingabe anfordern
    let playerInput = prompt('Bitte gib deine Auswahl ein: Stein Schere oder Papier');
    //Eingabe des Users in Kleinbuchstaben zurückgeben
    return playerInput.toLowerCase();
}

//Ausführen der Vergleichsoperation und erhöhen der Anzahl der Siege
function game(player, computer) {
    if (player === 'stein' && computer === 'stein') {
        alert('Du: Stein\nComputer: Stein\nStein gegen Stein gibt ein Unentschieden!');
    } else if (player === 'stein' && computer === 'schere') {
        alert('Du: Stein \nComputer: Schere\nStein schlägt Schere, du gewinnst!');
        return result = 'player'
    } else if (player === 'stein' && computer === 'papier') {
        alert('Du: Stein \nComputer: Papier\nStein wird von Papier umwickelt, du verlierst!');
        return result = 'computer';
    } else if (player === 'schere' && computer === 'stein') {
        alert('Du: Schere \nComputer: Stein\nSchere wird von Stein geschlagen, du verlierst!');
        return result = 'computer';
    } else if (player === 'schere' && computer === 'schere') {
        alert('Du: Schere \nComputer: Schere\nSchere gegen Schere gibt ein Unentschieden!');
    } else if (player === 'schere' && computer === 'papier') {
        alert('Du: Schere \nComputer: Papier\nSchere schneidet Papier, du gewinnst!');
        return result = 'player';
    } else if (player === 'papier' && computer ==='stein') {
        alert('Du: Papier \nComputer: Stein\nPapier umwickelt Stein, du gewinnst!');
        return result = 'player';
    } else if (player === 'papier' && computer ==='schere') {
        alert('Du: Papier \nComputer: Schere\nPapier wird von Schere zerschnitten, du verlierst!');
        return result = 'computer';
    } else if (player === 'papier' && computer ==='papier') {
        alert('Du: Papier \nComputer:Papier\nPapier gegen Papier gibt ein Unentschieden!');
    } else {
        alert('Keine passende Eingabe!')
    }
}

//Festlegen von Startwerten für benötigte Variablen
let playerWins = 0;
let computerWins = 0;
let result = "";
//Aufrufen der Spiel-funktion, 5-mal
for (let i = 0; i < 5; i++ ){
    //Übergabe der Funktionen in eine Konstante
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    game(playerSelection, computerSelection);

    //Zählen der Anzahl an Siegen
    if (result == 'player') {
        playerWins += 1;
    } else if (result == 'computer') {
        computerWins += 1;
    }
}

//Auswertung des Gesamtsieges
if (playerWins > computerWins) {
    alert('Glückwunsch, du hast dir den Gesamtsieg über 5 Runden gesichert!')
} else if (playerWins < computerWins) {
    alert('Schade, der Computer hat sich den Gesamtsieg über 5 Runden gesichert')
} else if (playerWins == computerWins) {
    alert('Hmm, ihr hab nur ein Unentschieden hervorgebracht.')
} else {
    alert('Leider konnte kein Gewinner ermittelt werden.')
}