
document.write("<h1>Opdracht: Arrays</h1>");

        //begin opdracht.
        let maanden = ["januari","februari","maart"];
        maanden[3] = "april";
        maanden[4] = "mei";
        maanden[5] = "juni";
        maanden.push("juli");
        let laatsteMaanden = ["augustus","september","oktober","november","december"];
        maanden = maanden + "," + laatsteMaanden;
        maanden = maanden.split(",");
        document.write(`<p>${maanden}</p>`);
        document.write(`<p>Er zijn ${maanden.length} maanden in de array.</p>`);
        let march = maanden.indexOf("March");
        document.write(`De maand "March" bevind zich in de array op positie: ${march}`);
        
        //tweede opdracht
        let namen = ["Erik","Sofie","Adam","Zorro"];
        namen = namen.sort();
        document.write(`<p>De gesorteerde namen zijn: ${namen}</p>`);
        let zoekNaam = prompt("Welke naam wilt u zoeken?");
        let indexNaam = namen.indexOf(zoekNaam);
        document.write(`<p>De naam ${zoekNaam} bevindt zich op positie: ${indexNaam}</p>`);
        
        //derde opdracht
        let volledigNaam = prompt("Wat is uw volledig naam? (Voornaam Achternaam)");
        volledigNaam = volledigNaam.split(" ");
        volledigNaam.reverse();
        volledigNaam = volledigNaam.join(" ");
        document.write(`<p>Jouw naam genoteerd als familienaam voornaam is: ${volledigNaam}</p>`);



"use strict"
        document.write("<h1>Opdracht: getal invoer controleren</h1>");

        //begin opdracht
        let getallen = [];
        let aantal = prompt("Hoeveel getallen wil je ingeven?");
        aantal = controleAantal(aantal);
        function controleAantal(aantal) {
            if (aantal == null) {
                document.write("<p>U hebt geanulleerd!</p>");
                return false;
            }
            else if (aantal == 0) {
                document.write("<p>U heeft niks ingegeven!</p>");
                return false;
            }
            else if (isNaN(aantal) == false) {
                return aantal;
            }
            else {
                document.write("<p>Dit is geen correcte ingave!</p>");
                return false;
            }
        }

        if (aantal != false) {
            for (let i = 1; i <= aantal; i++) {
                let getalInvoer = prompt(`Geef getal ${i} in.`); 
                let controleGetal = function (getalInvoer) {
                    if (getalInvoer == null || getalInvoer == 0 || isNaN(getalInvoer) != false) {
                        getallen[i - 1] = "fout";
                        return getallen;
                    }
                    else {
                        let inhoudArray = function (getalInvoer) {
                        getallen[i - 1] = getalInvoer;
                        return getallen;
                        }
                        return inhoudArray(getalInvoer);
                    }
                }
                getallen = controleGetal(getalInvoer); 
            }
            document.write(`<p>${getallen}</p>`);
        }



        document.write("<h1>Opdracht: naamcontrolle via een functie</h1>");

        //begin opdracht
        let voornaam;
        let achternaam;
        voornaam = prompt("Wat is je voornaam?");
        voornaam = controle(voornaam);
        function controle(voornaam) {
            if (voornaam == null) {
                document.write("<p>Je hebt geanulleerd!</p>");
                return false;
            }
            else if (voornaam == 0) {
                document.write("<p>Je hebt niks ingegeven!</p>");
                return false;
            }
            else if (voornaam.length <= 2) {
                document.write("<p>Je naam is te kort!</p>");
                return false;
            }
            else {
                voornaam = voornaam[0].toUpperCase() + voornaam.substring(1); 
                return voornaam;  
            }
        }
        if (voornaam != false) {
                achternaam = prompt("Wat is je achternaam?");
                achternaam = controle(achternaam);
                if (achternaam != false) {
                    document.write(`<p>Hey met ${voornaam} ${achternaam}</p>`);
                }
            }