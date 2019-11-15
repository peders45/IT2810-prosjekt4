# Prosjekt 4 - Dokumentasjon
Vi har valgt å ta utgangspunkt i vårt eget prosjekt 3 med bruk av samme database. Der laget vi en søkbar katalog som inneholder restaurantkjeden McDonald’s sine varer, og denne applikasjonen bygger altså på det. Denne dokumentasjonen er i stor grad kopiert fra dokumentasjonen for prosjekt 3, da mesteparten av funksjonaliteten og brukergrensesnittet er identisk, og det ikke ga mening for oss å bruke mye tid på å skrive samme innhold. Vi vil heller her utdype forskjeller der er naturlig. Grunnen til at vi har med mye fra forrige prosjekts dokumentasjon er fordi dette prosjektet helt sikkert vurderes av andre enn sist og gjør det enklere for de å sette seg inn i.

## Krav til applikasjonens innhold og funksjonalitet

### Søkegrensesnitt
Vi implementerte som sist et søkefelt der man kan søke med fritekst etter varer i datasettet. Det fungerer slik at når man trykker på søkeknappen dispatches en action creator der søkeordet sendes med som argument. Videre vil action creatoren hente inn staten og gjøre en spørring basert på denne sammen med søkeordet. Dataene som hentes ut fra databasen lagres så i staten og vises til brukeren i en listevisning. Søkefeltet er laget som et TextInput, og søkeknappen et ikon fra biblioteket ‘react-native-elements’. Vi fikk i tillegg noe kritikk for fargevalg sist da de røde og gule fargene ble beskrevet som “litt mye”. Vi har valgt å tone ned fargenyansene noe, men vi mener McDonald’s-fargene passer godt til temaet i databasen og ønsker derfor ikke å gå helt bort fra disse.

### Dynamisk lasting
Vi har valgt å gå for en “bla i sider” måte å håndtere resultatframvisningen på da dette ga mest mening med tanke på backend oppsettet vi lagde sist, og måten dataen hentes fra databasen. Denne funksjonaliteten er implementert med to knapper som TouchableOpacity (håndterer touch i React Native) nederst på siden som endrer “offset” og gjør avgrensede spørringer når man blar mellom sidene. For å gi plass til ekspandering av menyobjektene for detaljert visning, har vi valgt å kun vise seks menyobjekter av gangen, ettersom dette passet best for ulike skjermstørrelser.

### Detaljert visning
Listevisningen er gjort ved at hvert menyobjekt er representert med et Accordion-objekt fra biblioteket ‘react-native-collapsible’, der varenavn og rating vises når feltet er lukket. Trykker man på objektet vil panelet ekspandere, og ytterligere næringsinformasjon om varen blir synlig. Her finnes også mulighet for å legge til sin egen vurdering av varen. På grunn av liten skjermplass på mobiler og fordi det ikke var et krav som i sist prosjekt valgte vi å droppe vår avanserte visning av næringsinnholdet. Dette ble også gjort på bakgrunn av den korte tiden vi hadde til rådighet.

### Filtrering og sortering
Sortering og filtrering er implementert ved at man kan filtrere på ulike kategorier ved hjelp av checkboxer, og sortere resultatsettet etter rating og kaloriinnhold i ønsket rekkefølge. Fra forrige prosjekt har vi valgt å gå bort ifra slidere for filtrering pga. prosjektets korte levetid. Samtidig dekker checkboxene kravet om filtrering. Samtlige filtrerings- og sorteringsfunksjonaliteter er nå lagt i en ekspanderbar sidemeny, slik at mest mulig av skjermen er tilgjengelig for søkeresultatene. Når man trykker på “Filter and sort”-knappen i sidemenyen dispatches samme action som for søkeknappen, der det gjøres en spørring basert på staten, som igjen vil oppdatere staten og dermed også visningen. Altså skjer all sortering og filtrering i backend på hele datasettet. Merk at filtrering og sortering gjøres på bakgrunn av siste søkeord som er lagret i staten. Altså vil man få vist null items i listevisningen dersom valgte kategorier ikke har et item med det aktuelle søkeordet.

### AsyncStorage
AsyncStorage er brukt for å lagre data for favoritter lokalt på enheten. Dette fungerer ved at brukeren trykker på “Add to favourites”-knappen på et element som dispatcher en redux action som asynkront henter ut eksisterende favoritter, sjekker om favoritten allerede er registrert for så og legge til favoritten om den ikke er registrert. Vi har valgt å sette en øvre grense på seks favoritter ettersom en “side” kun har plass til seks elementer. Vi ønsket dermed ikke å lage actions for “Previous”- og “Next”-knappene for å bla mellom de. Om man går over grensen vil elementet først i listen fjernes. Dette fungerer altså som en kø (Last In, First Out). Dette er grunnet kort tid til prosjektet, og vi mener at vi tydelig har klart å vise at prosjektet oppfyller kravene om persistent lagring, som beskrevet i oppgaven. 

For å vise favorittene har vi valgt å legge til en “Show favourites”-knapp  som dispatcher en redux action som henter ut de lokalt lagrede favorittene for så å sette de i staten slik at de vises til brukeren. 

### Rating (ikke krav, men naturlig å dokumentere)
Vi valgte å beholde rating (1-5) da vi synes dette var godt egnet til vårt datasett. På den ekspanderte/detaljerte visningen til hver vare kan man gi en rating/score. Det dispatches da en action creator som tar inn ratingen og ID’en til varen som parametere, og gjør en mutation på bakgrunn av det. I backend regnes ny snittrating ut og sendes tilbake. Så oppdateres staten og visningen. Det er altså snittratingen til varen som vil oppdateres, mens stjernene stadig vil vise ratingen man selv har gitt den respektive varen. Vi fikk tilbakemelding sist med ønske om desimaltall i stedet for heltall, og har etterfulgt det slik at snittratingen nå vises med én desimal.

## Krav til bruk av teknologi

### React Native
React Native er brukt for all frontend i prosjektet. Komponenter er så langt det lot seg gjøre hentet fra prosjekt 3, med oppdatert syntaks for React Native. Dette innebar blant annet at alle <div>-tagger ble fjernet og erstattet med React Natives <View>. Andre gjennomgående ting som måtte endres var <input> til TextInput, <p> til <Text> og <button> til TouchableOpacity. Nye komponenter er også enten bygget opp av grunnleggende React Native komponenter, eller hentet fra tredjepartsbiblioteker. Biblioteket [‘react-native-elements’](https://react-native-elements.github.io/react-native-elements/) er mye brukt for mer avanserte komponenter, hovedsakelig headeren, checkboxer, stjernerating og ikoner. Komponentene er organisert i en hierarkisk mappestruktur med “organisms”, “molecules” og “atoms” der de fungerer som “byggeklosser” med atomene nederst i strukturen. F.eks. kan en organisme bestå av en kombinasjon av atomer og molekyler. Ettersom heller ikke dette prosjektet består av nevneverdig mange filer kan kanskje denne mappestrukturen virke noe overflødig, men i tidligere arbeid med React har vi erfart at det lønner seg å begynne med gode praksiser selv for mindre prosjekter, slik at skalering blir enklere dersom det trengs. 

All styling er gjort med StyleSheet-objekter, da CSS styling ikke er støttet av React Native. Dette er skrevet i bunnen av hver komponent og følger mange av de samme prinsippene som CSS.

For å håndtere staten har vi valgt å fortsette å bruke Redux da applikasjonen våres fra sist er bygd på dette. Komponentene som håndterer søk, sortering, filtrering og rating dispatcher actions creators, som gjennom en reducer oppdaterer den aktuelle delen av Redux storen. I storen finnes grunnlaget til spørringene, det vil si søkeord, valgte kategorier og sorteringsverdier. I tillegg har vi også med “menyene” som spørringene returnerer, altså de ulike varene som skal vises basert på et søk. Det er dermed lett å utføre spørringer da staten hele tiden viser siste versjon av brukerens input. Dette gjøres også ved å dispatche en action creator. Denne tar inn staten, gjør en spørring og oppdaterer staten med svaret. Det er dermed også enkelt å vise/oppdatere visningen av søkeresultatet ved at visningen lytter etter endringer i staten. Vi bruker også React Hooks noen steder der det er naturlig å håndtere informasjon som kun er visuell, f.eks. om en checkbox er checked eller ikke.

### Bruk av Expo verktøyet
Expo ble benyttet for initialisering av prosjektet med kommandoen: 
```console
expo init prosjekt-4-app
```

Vi brukte også expo aktivt under utvikling og kjøring av prosjektet, særlig for å enkelt få kjørt applikasjonen på mobiltelefon og ulike emulatorer. Applikasjonen kjøres enkelt ved å skrive følgende kommando i terminalen når man er inne i mappen ‘prosjekt-4-app’:
```console
expo start
```

Deretter kan enten QR-koden brukes for å åpne i Expo Client appen på mobil, evt bruke en av de listede kommandoene for å åpne i web eller emulator. Under utvikling har vi som sagt hovedsakelig brukt mobiltelefon eller emulator, men vi fant det også nyttig å åpne i nettleser for å sjekke console.log, redux state, actions og AsyncStorage da dette var en veldig enkel måte å gjøre dette på. Vi har derimot helt ignorert hvordan appen ser ut i nettleseren da appen ikke er laget for dette.

## Krav til testing

### Multiplattform
Applikasjonen ble testet på flere android-enheter og iOS-enheter, både fysisk og i emulatorer, og viste ønsket oppførsel på alle. Vi har valgt å ikke tilpasse appen for liggende-/horisontal visning på mobil da dette ikke sto oppgitt som et krav, og vi fant flere eksempler på virkelige applikasjoner (blant annet Instagram) som heller ikke støtter dette. Den korte tidsfristen spilte igjen inn her.

### Manuell end-to-end testing
Vi valgte å utføre end-to-end testing av applikasjonen ved å definere ulike brukerscenarioer, og teste gjennomføring av disse. Scenarioene ble laget slik at de skulle dekke alle brukerkrav beskrevet i oppgaven, og teste all funksjonalitet implementert i applikasjonen. Appen ble restartet mellom hver testoppgave, slik at ingen filtere/sorteringer/søkeord var aktive ved oppstart av et testscenario. Gjennomføringen av brukerscenarioene var vellykket, og alle enheter og komponenter fungerte som forventet. Testoppgavene er listet nedenfor:
Søk etter “Hamburger” med søkeknappen i headeren, og les av kaloriinnholdet.
Søk etter “Cheeseburger” med søkeknappen på keyboardet, og les av proteininnholdet.
Finn menyobjektet i kategoriene “Salads” og “Desserts” med høyest rating.
Avgi din rating på menyobjektet “Egg_McMuffin”.
Finn “shake”-menyobjektet med høyest rating, og legg til i “Favoritter”.
Finn menyobjektet med lavest kaloriinnhold i kategorien “Breakfast”, der navnet inneholder søkeordet “Mc”.
Legg til dine to favorittdesserter i “Favoritter”.
Gi din rating av menyobjektet med høyest kaloriinnhold.
Finn antall menyobjekter som inneholder søkeordet “Premium”.
Gå inn og ut av sidemenyen uten å gjøre endringer i filtrering/sortering.
Bla til tredje side med “Beverages”, og legg til et av menyobjektene i visningen til “Favoritter”. Bla så én side tilbake, og legg til et av menyobjektene her til “Favoritter”.
Legg til seks favoritter og vis dem. Legg til to favoritter til og vis dem. Restart appen og vis favorittene dine igjen.
