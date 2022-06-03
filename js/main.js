let btadd = document.getElementById('wprowadz');
let btdel = document.getElementById('skasuj');
let paragraf = document.getElementById('tekst');

btadd.onclick = function dodawanie() {
    paragraf.textContent = "Przykładowy tekst";
}

btdel.onclick = function usuwanie() {
    paragraf.textContent = "";
}