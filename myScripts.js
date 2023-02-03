// Naprogramoval som takýto jednoduchý mini kvíz myslím, že je to dobrá forma učenia. 
// Momentálne nemám na to čas to teraz dokončiť môžete si kľudne tento kód skopírovať a dokončiť to. 
// Pridať hlavne viacej otázok, lebo ja som na ukážku spravil len dve a trocha sa s tým pohrať.
// Poprípade to úplne inak nakódovať a naprogramovať to tak, aby ste nemuseli 
// refreshovať stránku, keď idete na ďalšiu otázku. Ale základ som dal dúfam, že dobrý.

var okno = document.querySelector(".prompt").style.display = "none";
var okno2 = document.querySelector(".prompt1").style.display = "none";

document.querySelector(".btn").addEventListener("click", function() {
    document.querySelector(".prompt1").style.display = "block";
    document.querySelector(".btn1").style.display = "none";
    document.querySelector(".btn").style.display = "none";
})

document.querySelector(".btn1").addEventListener("click", function() {
    document.querySelector(".prompt").style.display = "block";
    document.querySelector(".btn1").style.display = "none";
    document.querySelector(".btn").style.display = "none";
})

document.querySelector(".btn2").addEventListener("click", function() {

    if (1 < 10) {
        document.querySelector(".prompt1").textContent = ("Nesprávna odpoveď");
    }
})

document.querySelector(".btn3").addEventListener("click", function() {

    if (1 < 10) {
        document.querySelector(".prompt1").textContent = ("Správna odpoveď");
    }
})

document.querySelector(".btn4").addEventListener("click", function() {

    if (1 < 10) {
        document.querySelector(".prompt").textContent = ("Správna odpoveď");
    }
})

document.querySelector(".btn5").addEventListener("click", function() {

    if (1 < 10) {
        document.querySelector(".prompt").textContent = ("Nesprávna odpoveď");
    }
})