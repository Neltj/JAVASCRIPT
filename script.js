const person = {
    name: "Frank",
    surname: "Malca Rojas",
    fullNameMain: function () {
        return this.name + " " + this.surname;
    }

}

const girlfriend = {
    name: "Monica",
    surname: "Qiu",
}

let fullName = person.fullNameMain.bind(girlfriend);


document.getElementById("demo").innerHTML= fullName();


function displayDate () {
    document.getElementById('orario').innerHTML= Date();
}

let text = "We are the so-called \"vikings\" from the north, it's alright \n Fanculo ";
document.getElementById("viking").innerHTML= text;