const screen = document.querySelector('#screen')
const power = document.querySelector('#powerOn');
const ytFrame = document.querySelector('#yt-frame');
const ggFrame = document.querySelector('#gg-frame');
const gameTable = document.querySelector('#tbl');
screen.style.background = "black";
power.style.color = "black";

const games = [
    {
        photo_url: "/zaidimu-konsole/assets/foto/hogwarts.jpg",
        pavadinimas: "Hogwarts Legacy",
        kaina:"40.99 EUR"
    },
    {
        photo_url:"/zaidimu-konsole/assets/foto/gta.jpg",
        pavadinimas:"Grand Theft Auto IV",
        kaina: "8.99 EUR"
    },
    {
        photo_url:"/zaidimu-konsole/assets/foto/elden_ring.jpeg",
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
        ggFrame.style.display = "none";
    }else {
        screen.style.background = "black";
        power.innerHTML = `Iki pasimatymo!`;
        power.style.color = "white";
        ytFrame.style.display = "none";
        gameTable.style.display = "none";
        ggFrame.style.display = "none";        
    }
}

function tvBtn(){
    screen.style.background = "white";
    ytFrame.style.display = "unset";
    power.innerHTML = '';
    gameTable.style.display = "none";
    ggFrame.style.display = "none";
}

function backBtn(){
        screen.style.background = "white";
        power.innerHTML = `Sveiki sugrįžę!`;
        power.style.color = "black";
        ytFrame.style.display = "none";
        gameTable.style.display = "none";
        ggFrame.style.display = "none";
}

function tblBtn() {
    screen.style.background = "white";
    gameTable.style.display = "unset";
    ytFrame.style.display = "none";
    power.innerHTML = '';
    ggFrame.style.display = "none";

    document.querySelector('tbody').innerHTML = '';

    games.forEach((games) => {
        document.querySelector('tbody').innerHTML += `
    <tr>
        <td><img src="${games.photo_url}" style='height:50px'></td>
        <td style="vertical-align:middle">${games.pavadinimas}</td>
        <td style="vertical-align:middle">${games.kaina}</td>
    </tr>
    `;
    })
}

function ggBtn() {
    ggFrame.style.display = "unset";
    screen.style.background = "white";
    ytFrame.style.display = "none";
    power.innerHTML = '';
    gameTable.style.display = "none";
}




