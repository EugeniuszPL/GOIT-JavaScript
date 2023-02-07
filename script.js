function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

class Przesyłka {
constructor(name, waga){
  this.name =  name;
  this.waga = waga;
} 
}

let przesylka = new Przesyłka("List", "");
let przesylka2 = new Przesyłka("Paczka", 20);




function mojaFunkcja(id) {

  const element = document.getElementById("id01");
  const element2 = document.getElementById("id02");

  if (id === 1) { //instrukcje dla przycisku z informacja o przesylce 1

    informacja = "Typ twojej przesylki to: " + przesylka.name;
    element.innerHTML = informacja;
    
    informacja = "Przesyłka nie posiada wagi";
    element2.innerHTML = informacja;
  }

  else if (id === 2) { //instrukcje dla przycisku z informacja o przesylce 2

    informacja = "Typ twojej przesylki to: " + przesylka2.name;
    element.innerHTML = informacja;
  
    informacja = "Waga twojej przesylki to: " + przesylka2.waga + " kg";
    element2.innerHTML = informacja;
  }

}








