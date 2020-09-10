const tableBody = document.getElementById("tableBody");

const languages = [];

let cards = document.getElementById("cards");

//add languages to languages arary
function addLanguage(
  name,
  isImperativ,
  isDeskriptiv,
  isProcedural,
  isOO,
  isSpecial,
  usage
) {
  languages.push({
    name,
    isImperativ,
    isDeskriptiv,
    isProcedural,
    isOO,
    isSpecial,
    usage,
  });
}

//schöner code und so
function addLanguages() {
  addLanguage(
    "FORTRAN",
    true,
    false,
    true,
    false,
    false,
    "Mathematische Formelübersetzung und Lösung"
  );
  addLanguage(
    "RPG",
    false,
    false,
    false,
    false,
    true,
    "Erstellung von Kaufmännischen Listen"
  );
  addLanguage(
    "Algol",
    true,
    false,
    true,
    false,
    false,
    "wissenschaftliche Computer / Algorithmen berechnen"
  );
  addLanguage(
    "Cobol",
    true,
    false,
    true,
    true,
    false,
    "Business, Finanzanwendungen"
  );
  addLanguage("Lisp", false, true, true, true, false, "AI");
  addLanguage("Simula", true, false, false, true, false, "Simulation");
  addLanguage(
    "PL/1",
    true,
    false,
    true,
    false,
    false,
    "Data processing, system programming"
  );
  addLanguage(
    "Pascal",
    true,
    false,
    true,
    false,
    false,
    "Anwendungsentwicklung"
  );
  addLanguage("Basic", true, false, true, false, false, "Business-Anwendungen");
  addLanguage(
    "Smalltalk",
    false,
    true,
    false,
    true,
    false,
    "Crossplatform Anwendungsentwicklung"
  );
  addLanguage(
    "Prolog",
    false,
    true,
    true,
    false,
    false,
    "Machine reading, Planung, machine learning"
  );
  addLanguage(
    "MATLAB",
    true,
    false,
    true,
    true,
    false,
    "Simulation, Datenerfassung, Datenanalyse sowie auswertung"
  );
  addLanguage(
    "C",
    true,
    false,
    true,
    false,
    false,
    "Kompilierer, OS, Software"
  );
  addLanguage(
    "ABAP",
    true,
    false,
    true,
    false,
    false,
    "komerzielle Anwendungen"
  );
  addLanguage(
    "PostScript",
    true,
    false,
    true,
    false,
    false,
    "Verwendet in Druckern (Vektorgrafikformat)"
  );
  addLanguage(
    "SGML",
    true,
    false,
    false,
    false,
    true,
    "synatx zur präzisen Beschreibung von Dokumentenstrukturen"
  );
  addLanguage(
    "SQL",
    false,
    true,
    false,
    false,
    true,
    "Datenbanken / Datenbankschnittstelle"
  );
  addLanguage(
    "C++",
    true,
    false,
    false,
    true,
    false,
    "Software- und Spieleentwicklung"
  );
  addLanguage(
    "Ada",
    false,
    true,
    true,
    false,
    false,
    "Raketenkontrolle, Flugverkehrskontrolle"
  );
  addLanguage(
    "TurboPascal",
    true,
    false,
    true,
    false,
    false,
    "Anwendungsentwicklung"
  );
  addLanguage(
    "R",
    false,
    false,
    false,
    true,
    false,
    "statische Berechnungen und Grafiken"
  );
  addLanguage(
    "HTML",
    true,
    false,
    false,
    false,
    true,
    "Grundgerüst für Webseiten"
  );
  addLanguage(
    "UML",
    false,
    false,
    false,
    true,
    true,
    "Grafische Darstellung von (meist OOP) Codestruktur"
  );
  addLanguage(
    "Java",
    true,
    false,
    false,
    true,
    false,
    "Anwendungsentwicklung, Spieleentwicklung, Backendentwicklung"
  );
  addLanguage(
    "Visual Basic",
    false,
    true,
    false,
    true,
    false,
    "Anwendungsentwicklung"
  );
  addLanguage(
    "Perl",
    false,
    true,
    true,
    true,
    false,
    "manipulation von Textdateien"
  );
  addLanguage(
    "CSS",
    false,
    true,
    false,
    false,
    true,
    "Gestaltung einer Webseite hinsichtich Design"
  );
  addLanguage(
    "XML",
    false,
    true,
    false,
    false,
    true,
    "Sicherung von Daten, package-management"
  );
  addLanguage(
    "C#",
    true,
    false,
    false,
    true,
    false,
    "Anwendungsentwicklung, Spieleentwicklung, Backendentwicklung, APIs"
  );
  addLanguage("PHP", true, false, true, true, false, "Backend Webentwicklung");
  addLanguage(
    "JavaScript",
    true,
    false,
    true,
    true,
    false,
    "Client-/Serversided Webentwicklung, Anwendungsentwicklung"
  );
  addLanguage(
    "VBScript",
    true,
    false,
    false,
    true,
    false,
    "Zugriff auf COM-Komponenten via IDispatch-Schnittstelle"
  );
  addLanguage(
    "YAML",
    false,
    true,
    false,
    false,
    true,
    "Sicherung von Daten / Konfiguration"
  );
  addLanguage(
    "HTML 5",
    false,
    true,
    false,
    false,
    true,
    "Grundgerüst von Webseiten"
  );
  addLanguage(
    "VB.NET",
    true,
    false,
    false,
    true,
    false,
    "Anwendungsentwicklung (Windows Forms)"
  );
  addLanguage("GO", true, false, false, true, false, "Software");
  addLanguage(
    "JSON",
    false,
    true,
    false,
    false,
    true,
    "Sicherung und Verarbeitung von Daten; Fast jede Programmiersprache versteht JSON"
  );
  addLanguage("Swift", true, false, false, true, false, "iOS App entwicklung");
  addLanguage(
    "Hack",
    true,
    false,
    true,
    true,
    false,
    "Weiterentwickeltes PHP - Backend"
  );
}

//create Table body (super toller schöner Code)
function createTableBody() {
  languages.forEach((lan, index) => {
    let tr = document.createElement("tr");
    tr.classList.add("hidden");

    let td1 = document.createElement("td");
    td1.innerText = index;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerText = lan.name;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = lan.isImperativ
      ? `<i class="fas fa-check"></i>`
      : `<i class="fas fa-times"></i>`;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerHTML = lan.isDeskriptiv
      ? `<i class="fas fa-check"></i>`
      : `<i class="fas fa-times"></i>`;
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.innerHTML = lan.isProcedural
      ? `<i class="fas fa-check"></i>`
      : `<i class="fas fa-times"></i>`;
    tr.appendChild(td5);

    let td6 = document.createElement("td");
    td6.innerHTML = lan.isOO
      ? `<i class="fas fa-check"></i>`
      : `<i class="fas fa-times"></i>`;
    tr.appendChild(td6);

    let td7 = document.createElement("td");
    td7.innerHTML = lan.isSpecial
      ? `<i class="fas fa-check"></i>`
      : `<i class="fas fa-times"></i>`;
    tr.appendChild(td7);

    tableBody.appendChild(tr);

    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("hidden");

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("cardHeader");

    let cardContent = document.createElement("div");
    cardContent.classList.add("cardContent");

    cardHeader.innerText = lan.name;

    cardContent.innerText = lan.usage;

    card.appendChild(cardHeader);
    card.appendChild(cardContent);

    cards.appendChild(card);
  });
}

addLanguages();
createTableBody();

//handle scroll anim
function scrollAnim() {
  let clientPosition = window.innerHeight + window.scrollY;
  const offsetY = 100;
  const hiddens = document.querySelectorAll(".hidden");

  hiddens.forEach((el) => {
    const random = Math.random();
    if (!el.classList.contains("left") && !el.classList.contains("right")) {
      if (el.getBoundingClientRect().y < clientPosition - offsetY) {
        el.classList.add(random > 0.5 ? "left" : "right");
      }
    }
  });
}

//initialCall
scrollAnim();
//add event listener to change on scroll
document.addEventListener("scroll", scrollAnim);

//scrolls to #smth
function doScroll(hash) {
  window.location.href = window.location.pathname + `${hash}`;
}
