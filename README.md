# Angular II
Den här uppgiften går ut på att träna på att göra HTTP-anrop med Angular och HttpClient. 

## Ramschema
Datan som presenteras i ramschemat är en lokal JSON-fil med namnet ramschema_ht23.json. Filen ligger under mappen "assets". 

## Tillvägagångssätt
För att implementera JSON-filen till arbetet har en service skapats, samt en model med en fil som definierar interfacet för datans egenskaper. I service-filen definieras HttpClient-anropet. Efter utveckling av koden i de olika filerna kunde sedan valfri variabel från JSON-filen skrivas ut till sidan i home.component.html-filen. Jag valde att skriva ut kursnamn, kurskod och progression. För att kunna sortera och söka data gjordes else-if-satser med sort-funktionen. Webbsidan använder SCSS för layoutdesign.

## Resultat
Resultatet uppfyller kraven för uppgiften:
- Inhämtning av data från JSON-fil
- En service som anvädner HttpClient
- Resultatet presenteras i tabellformat
- Sortering av data (a-z samt z-a) utifrån kursnamn, kurskod och progession
- Filtrerings- och sökningsmöjlighet
- Automatisk uppdatering av användargränssnitt

Cecilia Lindström