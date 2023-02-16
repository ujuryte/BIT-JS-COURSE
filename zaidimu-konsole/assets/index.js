const screen = document.querySelector('#screen')
const power = document.querySelector('#powerOn');
const ytFrame = document.querySelector('#yt-frame');
const gameTable = document.querySelector('#tbl');
screen.style.background = "black";
power.style.color = "black";

const games = [
    {
        photo_url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        pavadinimas: "Hogwarts Legacy",
        kaina:"40.99 EUR"
    },
    {
        photo_url:"..\assets\foto\gta.jpg",
        pavadinimas:"Grand Theft Auto IV",
        kaina: "8.99 EUR"
    },
    {
        photo_url:"..\assets\foto\elden_ring.jpeg",
        pavadinimas:"Elden Ring",
        kaina: "39.99 EUR"
    }
]

function powerBtn(){
    
    if(screen.style.background === "black"){
        screen.style.background = "white";
        power.innerHTML = `Sveiki sugrįžę!`;
        power.style.color = "black";
        ytFrame.style.display = "none";
        gameTable.style.display = "none";
        console.log("veikia A")
    }else {
        screen.style.background = "black";
        power.innerHTML = `Iki pasimatymo!`;
        power.style.color = "white";
        ytFrame.style.display = "none";
        gameTable.style.display = "none";
        console.log("veikia B")
        
    }
}

function tvBtn(){
    screen.style.background = "white";
    ytFrame.style.display = "unset";
    power.innerHTML = '';
    gameTable.style.display = "none";
}

function backBtn(){
        screen.style.background = "white";
        power.innerHTML = `Sveiki sugrįžę!`;
        power.style.color = "black";
        ytFrame.style.display = "none";
        gameTable.style.display = "none";
}

function tblBtn() {
    screen.style.background = "white";
    gameTable.style.display = "unset";
    ytFrame.style.display = "none";
    power.innerHTML = '';

    document.querySelector('tbody').innerHTML = '';

    games.forEach((games, indeksas) => {
        document.querySelector('tbody').innerHTML += `
    <tr>
        <td>${games.nuotrauka}</td>
        <td>${games.pavadinimas}</td>
        <td>${games.kaina}</td>
    </tr>
    `;
    })
}




