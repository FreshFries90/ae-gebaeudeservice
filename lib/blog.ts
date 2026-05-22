export type BlogStatus = "published" | "planned";

export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  plannedFor?: string;
  status: BlogStatus;
  category: string;
  readingMinutes: number;
  icon: string;
  coverGradient: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: BlogSection[];
  checklist: string[];
  ctaTitle: string;
  ctaText: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "grundreinigung-buero-nach-winter",
    title: "Grundreinigung im Büro nach dem Winter: Warum jetzt der richtige Zeitpunkt ist",
    excerpt:
      "Nach Heizperiode, Streusalz und nasser Witterung brauchen viele Büroflächen mehr als eine normale Unterhaltsreinigung. Dieser Beitrag zeigt, worauf Unternehmen achten sollten.",
    date: "2026-05-22",
    status: "published",
    category: "Grundreinigung",
    readingMinutes: 5,
    icon: "cleaning_services",
    coverGradient: "from-emerald-500 via-green-600 to-slate-950",
    metaTitle: "Grundreinigung im Büro nach dem Winter | AE Gebäudeservice",
    metaDescription:
      "Warum eine professionelle Grundreinigung nach dem Winter für Büros, Praxen und Gewerbeflächen sinnvoll ist. Tipps von AE Gebäudeservice.",
    intro:
      "Wenn der Winter vorbei ist, sieht man vielen gewerblichen Flächen an, was die letzten Monate mitgebracht haben: Feuchtigkeit im Eingangsbereich, matte Laufwege, Staub in Ecken, Streusalzränder an Bodenbelägen und oft auch ein insgesamt schwereres Raumgefühl. Genau jetzt ist ein guter Zeitpunkt, Büroflächen, Praxen, Treppenhäuser und Empfangsbereiche gründlicher anzupacken als im normalen Tagesgeschäft.",
    sections: [
      {
        heading: "Warum die normale Reinigung oft nicht ausreicht",
        body: [
          "Eine regelmäßige Unterhaltsreinigung hält den Betrieb sauber und ordentlich. Sie ist aber nicht dafür gedacht, tief sitzende Verschmutzungen vollständig zu lösen oder beanspruchte Bodenflächen wieder sichtbar aufzufrischen. Gerade in Eingangsbereichen wird Schmutz über Monate eingetragen. Feine Partikel setzen sich in Fugen, Ecken und Randbereiche. Auf glatten Flächen entstehen Laufstraßen, die selbst nach dem Wischen stumpf wirken können.",
          "Eine Grundreinigung arbeitet gezielter. Möbelkanten, Sockelleisten, schwer erreichbare Bereiche, Bodenbeläge, Türen, Griffe und Sanitärbereiche werden intensiver behandelt. Dadurch entsteht nicht nur ein besserer optischer Eindruck, sondern auch ein hygienischeres Arbeitsumfeld für Mitarbeitende, Kunden und Besucher.",
        ],
      },
      {
        heading: "Besonders wichtig: Böden und Eingangsbereiche",
        body: [
          "Böden sind in vielen Objekten die größte sichtbare Fläche. Wenn sie stumpf, fleckig oder ungleichmäßig wirken, beeinflusst das sofort den Eindruck des gesamten Gebäudes. Nach dem Winter lohnt sich deshalb ein genauer Blick auf PVC, Linoleum, Fliesen, Naturstein oder versiegelte Hartböden. Je nach Material geht es um maschinelle Reinigung, Randreinigung, Fleckenbehandlung oder eine geeignete Pflege.",
          "Auch Schmutzfangmatten, Glasflächen im Eingangsbereich und Handläufe sollten geprüft werden. Diese Zonen entscheiden oft innerhalb weniger Sekunden, ob ein Objekt gepflegt wirkt. Für Unternehmen mit Kundenkontakt ist das ein direkter Teil der Außenwirkung.",
        ],
      },
      {
        heading: "Gute Planung verhindert Störungen im Betrieb",
        body: [
          "Eine professionelle Grundreinigung sollte so organisiert werden, dass der Betrieb möglichst wenig beeinträchtigt wird. Viele Arbeiten lassen sich außerhalb der Öffnungszeiten, am Wochenende oder in klar abgegrenzten Etappen durchführen. Wichtig ist eine kurze Vorabklärung: Welche Bereiche sind besonders belastet? Gibt es sensible Räume? Welche Bodenarten sind vorhanden? Müssen Arbeitsplätze vorher freigeräumt werden?",
          "Je genauer die Planung, desto sauberer das Ergebnis. AE Gebäudeservice prüft vorab, welche Reinigungsmethode sinnvoll ist und welche Reihenfolge im Objekt am meisten Sinn ergibt. So entsteht kein Aktionismus, sondern ein sauberer Ablauf mit klaren Ergebnissen.",
        ],
      },
    ],
    checklist: [
      "Eingangsbereiche und Laufwege auf Streusalzspuren prüfen",
      "Bodenbeläge materialgerecht reinigen lassen",
      "Sockelleisten, Türen, Griffe und Randbereiche einbeziehen",
      "Sanitärbereiche intensiv entkalken und desinfizieren",
      "Reinigung außerhalb der Betriebszeiten einplanen",
    ],
    ctaTitle: "Büro oder Gewerbefläche braucht wieder Grund rein?",
    ctaText:
      "AE Gebäudeservice plant die Grundreinigung so, dass Ihre Räume sauber wirken, ohne den Betrieb unnötig zu stören.",
  },
  {
    slug: "baureinigung-nach-umbau-gewerbe",
    title: "Baureinigung nach Umbau im Gewerbe: So wird aus Baustelle wieder Betriebsfläche",
    excerpt:
      "Staub, Folienreste, Silikonspuren und Bauschmutz verschwinden nicht von allein. Eine strukturierte Baureinigung macht Räume wieder nutzbar und präsentationsfähig.",
    date: "2026-05-21",
    status: "published",
    category: "Baureinigung",
    readingMinutes: 6,
    icon: "construction",
    coverGradient: "from-lime-500 via-emerald-700 to-zinc-950",
    metaTitle: "Baureinigung nach Umbau im Gewerbe | AE Gebäudeservice",
    metaDescription:
      "Was bei einer professionellen Baureinigung nach Umbau, Renovierung oder Ausbau wichtig ist. Mit Checkliste für Gewerbekunden.",
    intro:
      "Nach einem Umbau sieht ein Raum auf den ersten Blick vielleicht fertig aus. In der Praxis liegt aber oft noch feiner Baustaub auf Fensterbänken, Rahmen, Steckdosen, Böden, Türen und Einbauten. Dazu kommen Klebereste, Folien, Verpackungsmaterial, Silikonspuren oder Schlieren auf Glasflächen. Für Gewerbekunden ist das ein Problem, weil neue Flächen schnell wieder nutzbar sein müssen und beim ersten Eindruck keine Baustellenreste mehr sichtbar sein dürfen.",
    sections: [
      {
        heading: "Baugrobreinigung und Baufeinreinigung unterscheiden",
        body: [
          "Bei einer Baugrobreinigung geht es zunächst um das Entfernen von grobem Schmutz, Verpackungen, Schutzfolien, Materialresten und losem Staub. Diese Phase ist wichtig, damit die Fläche überhaupt sicher betreten und weiterbearbeitet werden kann. Häufig findet sie bereits während oder direkt nach den handwerklichen Arbeiten statt.",
          "Die Baufeinreinigung ist der Schritt, der Räume wirklich bezugsfertig macht. Hier werden Oberflächen, Böden, Glas, Rahmen, Türen, Sanitärbereiche und Details sorgfältig gereinigt. Gerade dieser Teil entscheidet, ob ein Büro, Ladenlokal, Praxisraum oder eine Halle professionell übergeben werden kann.",
        ],
      },
      {
        heading: "Warum Baustaub besonders hartnäckig ist",
        body: [
          "Baustaub ist sehr fein und verteilt sich schnell. Er setzt sich nicht nur auf sichtbaren Flächen ab, sondern auch in Ritzen, Fugen, Profilen, Leisten und Lüftungsgittern. Wird er falsch entfernt, entstehen Schlieren oder Kratzer. Deshalb ist eine passende Methode wichtig: trockenes Abnehmen, gezieltes Absaugen, feuchtes Nacharbeiten und materialgerechte Reinigungsmittel müssen zusammenpassen.",
          "Besonders empfindlich sind neue Glasflächen, Edelstahl, beschichtete Oberflächen, Designböden und frisch montierte Elemente. Hier sollte nicht einfach mit aggressiven Mitteln gearbeitet werden. Eine gute Baureinigung schützt die neuen Materialien und entfernt trotzdem die Spuren der Baustelle.",
        ],
      },
      {
        heading: "Gewerbeflächen brauchen einen klaren Übergabetermin",
        body: [
          "Bei gewerblichen Projekten hängt an der Reinigung oft ein konkreter Termin: Eröffnung, Wiederinbetriebnahme, Mieterübergabe, Kundenbesuch oder Abnahme durch den Auftraggeber. Darum sollte die Baureinigung nicht erst ganz am Ende spontan angefragt werden. Besser ist es, die Reinigung früh einzuplanen und ein realistisches Zeitfenster zu blocken.",
          "AE Gebäudeservice kann die Arbeiten nach Bereichen aufteilen. So werden zuerst stark verschmutzte Zonen gereinigt, danach sensible Flächen und zum Schluss sichtbare Details. Das Ergebnis ist eine Fläche, die nicht nur sauber ist, sondern auch bereit wirkt.",
        ],
      },
    ],
    checklist: [
      "Groben Bauschmutz und Verpackungsreste entfernen",
      "Feinen Baustaub von Profilen, Rahmen und Oberflächen lösen",
      "Glasflächen, Türen und Böden materialgerecht reinigen",
      "Sanitär- und Küchenbereiche bezugsfertig machen",
      "Reinigung passend zum Übergabe- oder Eröffnungstermin planen",
    ],
    ctaTitle: "Umbau fast fertig, aber die Fläche noch nicht präsentabel?",
    ctaText:
      "Wir übernehmen die Baureinigung für Gewerbeobjekte, Büros, Praxen, Ladenflächen und Hallen mit sauberer Planung bis zur Übergabe.",
  },
  {
    slug: "containerreinigung-baustelle-hygiene",
    title: "Containerreinigung auf Baustellen: Mehr Hygiene für Mannschaft, Sanitär und Aufenthaltsräume",
    excerpt:
      "Baucontainer werden täglich stark genutzt. Mit einem klaren Reinigungsplan bleiben Sanitärcontainer, Pausenräume und Zugänge deutlich angenehmer und sicherer.",
    date: "2026-05-20",
    status: "published",
    category: "Containerreinigung",
    readingMinutes: 5,
    icon: "factory",
    coverGradient: "from-green-400 via-emerald-600 to-gray-950",
    metaTitle: "Containerreinigung auf Baustellen | AE Gebäudeservice",
    metaDescription:
      "Warum regelmäßige Containerreinigung auf Baustellen wichtig ist und welche Bereiche besonders beachtet werden sollten.",
    intro:
      "Auf Baustellen sind Container oft der einzige feste Rückzugsort für Teams. Dort wird gegessen, geplant, umgezogen, geduscht, telefoniert und Pause gemacht. Gleichzeitig werden Schmutz, Staub, Feuchtigkeit und Arbeitskleidung täglich hineingetragen. Ohne regelmäßige Reinigung wirken Sanitärcontainer und Aufenthaltsräume schnell unangenehm. Das ist nicht nur eine Frage der Optik, sondern auch der Hygiene und der Wertschätzung gegenüber den Mitarbeitenden.",
    sections: [
      {
        heading: "Welche Container besonders kritisch sind",
        body: [
          "Sanitärcontainer stehen ganz oben auf der Liste. Toiletten, Waschbecken, Armaturen, Duschen, Böden und Türgriffe werden häufig genutzt und müssen zuverlässig gereinigt werden. Kalk, Feuchtigkeit und Gerüche entstehen dort schneller als in vielen festen Gebäuden. Auch Aufenthaltscontainer brauchen Aufmerksamkeit, weil Essbereiche, Tische, Stühle, Küchenzeilen und Griffe täglich Kontaktflächen sind.",
          "Bürocontainer wirken nach außen oft wie die Visitenkarte der Baustelle. Hier kommen Bauleitung, Auftraggeber, Lieferanten oder Prüfer zusammen. Ein sauberer Bürocontainer unterstützt einen professionellen Eindruck und erleichtert das Arbeiten im Alltag.",
        ],
      },
      {
        heading: "Ein fester Rhythmus macht den Unterschied",
        body: [
          "Je nach Größe der Baustelle reicht eine gelegentliche Reinigung nicht aus. Wenn viele Personen täglich vor Ort sind, sollten Sanitär- und Aufenthaltsbereiche regelmäßig gereinigt werden. Der genaue Rhythmus hängt von Nutzung, Wetter, Verschmutzung und Arbeitszeiten ab. Bei intensiver Nutzung kann eine tägliche oder mehrmals wöchentliche Reinigung sinnvoll sein.",
          "Wichtig ist, dass die Reinigung nicht als Notlösung passiert, wenn es bereits unangenehm ist. Ein sauberer Plan verhindert Beschwerden, reduziert Gerüche und sorgt dafür, dass Container dauerhaft nutzbar bleiben. Das spart auch Zeit, weil weniger Grundreinigungsaufwand entsteht.",
        ],
      },
      {
        heading: "Außenbereiche und Zugänge nicht vergessen",
        body: [
          "Oft wird nur an den Innenraum gedacht. Dabei tragen saubere Zugänge viel dazu bei, dass Container innen länger gepflegt bleiben. Treppen, Podeste, Eingangszonen und direkte Laufwege sollten mitbetrachtet werden. Gerade bei Regen oder matschigem Untergrund wird sonst ständig neuer Schmutz eingetragen.",
          "AE Gebäudeservice kann Containeranlagen so reinigen, dass Sanitär, Aufenthalt, Büro und Zugangsbereiche zusammen gedacht werden. Dadurch entsteht kein Flickwerk, sondern ein funktionierender Reinigungsablauf für die komplette Baustelleneinrichtung.",
        ],
      },
    ],
    checklist: [
      "Sanitärcontainer regelmäßig reinigen und entkalken",
      "Kontaktflächen wie Griffe, Tische und Armaturen einbeziehen",
      "Aufenthalts- und Bürocontainer getrennt betrachten",
      "Zugänge, Treppen und Podeste sauber halten",
      "Reinigungsrhythmus an Nutzung und Baustellenphase anpassen",
    ],
    ctaTitle: "Containeranlage sauber halten, ohne selbst hinterherzulaufen?",
    ctaText:
      "Wir reinigen Sanitär-, Aufenthalts- und Bürocontainer zuverlässig nach Ihrem Baustellenrhythmus.",
  },
  {
    slug: "glasreinigung-fruehling-gewerbe",
    title: "Glasreinigung im Frühling: Warum Schaufenster, Büros und Fassaden jetzt besonders wirken",
    excerpt:
      "Wenn die Sonne wieder stärker scheint, sieht man Schlieren, Staub und Wasserflecken sofort. Eine professionelle Glasreinigung sorgt für klare Sicht und bessere Außenwirkung.",
    date: "2026-05-19",
    status: "published",
    category: "Glasreinigung",
    readingMinutes: 5,
    icon: "window",
    coverGradient: "from-teal-400 via-green-600 to-slate-900",
    metaTitle: "Glasreinigung im Frühling für Gewerbe | AE Gebäudeservice",
    metaDescription:
      "Tipps zur Glasreinigung im Frühling für Büros, Schaufenster, Praxen und Gewerbeobjekte. Klare Sicht und gepflegte Außenwirkung.",
    intro:
      "Im Frühling verändert sich der Blick auf Glasflächen. Mehr Tageslicht fällt in Büros, Kundenzonen und Ladenlokale. Gleichzeitig werden Spuren sichtbar, die im Winter weniger aufgefallen sind: Regenflecken, Staub, Pollen, Schmutzränder, Fingerabdrücke und Schlieren. Für Unternehmen mit Kundenkontakt kann das schnell den Eindruck trüben, obwohl das Objekt insgesamt gut gepflegt ist.",
    sections: [
      {
        heading: "Glasflächen sind Teil des ersten Eindrucks",
        body: [
          "Schaufenster, Eingangstüren, Glasfronten und Empfangsbereiche werden von Kunden oft unbewusst bewertet. Saubere Glasflächen lassen Räume heller, offener und professioneller wirken. Verschmutzte Scheiben dagegen können selbst hochwertige Innenräume weniger gepflegt erscheinen lassen. Gerade in Branchen mit Beratung, Verkauf, Gesundheit oder Dienstleistung zählt dieser erste Eindruck.",
          "Eine gute Glasreinigung umfasst nicht nur die reine Scheibe. Rahmen, Falze, Griffe, Fensterbänke und angrenzende Flächen sollten ebenfalls beachtet werden. Sonst wirkt das Ergebnis nur kurzfristig sauber, weil Schmutz aus den Randbereichen schnell wieder sichtbar wird.",
        ],
      },
      {
        heading: "Pollen, Regen und Stadtstaub setzen sich schnell ab",
        body: [
          "Im Frühling kommen mehrere Verschmutzungen zusammen. Pollen legen sich auf Außenflächen, Regen verteilt Staub und an stark befahrenen Straßen kommt zusätzlicher Stadt- oder Industriestaub dazu. Bei Glasfassaden, Vordächern und großen Fensterfronten fällt das besonders auf. Wer hier regelmäßig reinigen lässt, verhindert hartnäckige Ablagerungen und hält das Objekt länger repräsentativ.",
          "Auch innen entstehen Verschmutzungen: Fingerabdrücke an Türen, Staub auf Innenfenstern, Abdrücke in Besprechungsräumen oder Schlieren auf Glastrennwänden. Diese Flächen werden häufig berührt und sollten nicht nur gelegentlich mit einem Tuch nachgewischt werden.",
        ],
      },
      {
        heading: "Sicherheit und Erreichbarkeit richtig planen",
        body: [
          "Nicht jede Glasfläche lässt sich gefahrlos mit einfachen Mitteln erreichen. Hohe Fenster, Fassadenelemente, Glasdächer oder schwer zugängliche Bereiche benötigen passende Ausrüstung und Erfahrung. Vor allem bei Gewerbeobjekten sollte klar sein, wann gereinigt wird, welche Bereiche abgesperrt werden müssen und wie der Kunden- oder Mitarbeiterverkehr weiterlaufen kann.",
          "AE Gebäudeservice plant Glasreinigungen so, dass Sichtbarkeit und Sicherheit zusammenpassen. Ob Büro, Laden, Praxis, Treppenhaus oder Fassade: Entscheidend ist ein Ergebnis, das nicht nur sauber aussieht, sondern auch fachgerecht umgesetzt wurde.",
        ],
      },
    ],
    checklist: [
      "Scheiben, Rahmen und Falze gemeinsam reinigen lassen",
      "Schaufenster und Eingangstüren regelmäßig einplanen",
      "Pollen- und Regenflecken früh entfernen",
      "Hohe Glasflächen nur mit geeigneter Ausrüstung bearbeiten",
      "Reinigung so terminieren, dass Kundenverkehr nicht gestört wird",
    ],
    ctaTitle: "Glasflächen sollen wieder klar und hochwertig wirken?",
    ctaText:
      "Wir reinigen Fenster, Glasfronten, Schaufenster und Fassadenflächen für Gewerbeobjekte mit sauberer Planung.",
  },
  {
    slug: "unterhaltsreinigung-kosten-gewerbe",
    title: "Unterhaltsreinigung im Gewerbe: Welche Faktoren die Kosten wirklich beeinflussen",
    excerpt:
      "Quadratmeter allein reichen für ein seriöses Angebot nicht aus. Nutzung, Frequenz, Verschmutzung und gewünschter Leistungsumfang entscheiden über den Aufwand.",
    date: "2026-05-18",
    status: "published",
    category: "Unterhaltsreinigung",
    readingMinutes: 6,
    icon: "receipt_long",
    coverGradient: "from-primary via-emerald-700 to-black",
    metaTitle: "Unterhaltsreinigung Kosten im Gewerbe | AE Gebäudeservice",
    metaDescription:
      "Welche Faktoren die Kosten einer gewerblichen Unterhaltsreinigung beeinflussen und warum ein Vor-Ort-Blick sinnvoll ist.",
    intro:
      "Viele Unternehmen möchten für eine Unterhaltsreinigung zuerst einen schnellen Quadratmeterpreis wissen. Verständlich ist das, aber in der Praxis reicht diese Zahl selten aus. Zwei Objekte mit gleicher Fläche können völlig unterschiedliche Anforderungen haben. Ein ruhiges Büro mit wenig Publikumsverkehr ist anders zu reinigen als eine Praxis, ein Ladenlokal, eine Werkstatt, eine stark genutzte Sanitäranlage oder ein Treppenhaus mit vielen Parteien.",
    sections: [
      {
        heading: "Fläche ist nur ein Teil der Kalkulation",
        body: [
          "Natürlich spielt die Größe eine Rolle. Je mehr Fläche gereinigt werden muss, desto mehr Zeit wird benötigt. Entscheidend ist aber auch, wie die Fläche genutzt wird. Gibt es viele Schreibtische, Küchenbereiche, Sanitäranlagen, Besprechungsräume, Glasflächen oder stark frequentierte Eingänge? Müssen Stühle bewegt, Mülleimer geleert, Verbrauchsmaterial kontrolliert oder besondere Oberflächen beachtet werden?",
          "Auch die Möblierung beeinflusst den Aufwand. Leere Flächen sind schneller zu reinigen als Räume mit vielen Kanten, Kabeln, Pflanzen, Regalen oder sensiblen Arbeitsbereichen. Deshalb ist eine kurze Objektbegehung oft der ehrlichste Weg zu einem passenden Angebot.",
        ],
      },
      {
        heading: "Reinigungsfrequenz verändert das Ergebnis",
        body: [
          "Eine Fläche, die täglich gereinigt wird, bleibt stabiler sauber. Der einzelne Reinigungsgang kann dann oft effizienter erfolgen, weil sich weniger Schmutz aufbaut. Bei einer seltenen Reinigung entsteht dagegen häufig mehr Aufwand pro Einsatz, weil Verschmutzungen länger liegen bleiben und intensiver bearbeitet werden müssen.",
          "Die richtige Frequenz hängt vom Objekt ab. Manche Büros kommen mit zwei bis drei Terminen pro Woche gut aus. Andere Flächen brauchen täglich Aufmerksamkeit, vor allem Sanitärbereiche, Küchen, Empfangszonen oder Kundenbereiche. Eine gute Unterhaltsreinigung passt sich dem Alltag an und wird nicht pauschal übergestülpt.",
        ],
      },
      {
        heading: "Leistungsumfang klar definieren",
        body: [
          "Ein Angebot wird nur vergleichbar, wenn klar ist, was enthalten ist. Werden nur Böden und Oberflächen gereinigt oder auch Türen, Griffe, Küchenflächen, Sanitärdetails, Glasinnentüren, Treppenhäuser und Müllentsorgung? Gibt es regelmäßige Zusatzleistungen wie Grundreinigung, Glasreinigung oder Desinfektion von Kontaktflächen?",
          "AE Gebäudeservice legt Wert auf klare Absprachen. So wissen beide Seiten, welche Leistung erwartet wird und wann Zusatzarbeiten sinnvoll sind. Das schützt vor Missverständnissen und sorgt dafür, dass die Reinigung dauerhaft zur Fläche passt.",
        ],
      },
    ],
    checklist: [
      "Nutzung und Besucherfrequenz realistisch einschätzen",
      "Sanitär-, Küchen- und Eingangsbereiche getrennt bewerten",
      "Reinigungsfrequenz passend zum Alltag festlegen",
      "Leistungsumfang schriftlich definieren",
      "Regelmäßige Qualitätskontrolle einplanen",
    ],
    ctaTitle: "Sie möchten ein ehrliches Angebot statt Fantasie-Quadratmeterpreis?",
    ctaText:
      "Wir schauen uns Ihre Fläche an und erstellen ein Reinigungsmodell, das zu Nutzung, Anspruch und Budget passt.",
  },
  {
    slug: "gebaeudereinigung-sommer-vorbereitung",
    title: "Geplante Gebäudereinigung vor dem Sommer: So bleibt Ihr Objekt bei Hitze, Staub und Publikumsverkehr sauber",
    excerpt:
      "Geplant für nächste Woche: Warum Unternehmen ihre Reinigungsroutinen vor heißen Monaten prüfen sollten und welche Bereiche besonders wichtig werden.",
    date: "2026-05-26",
    plannedFor: "2026-05-26",
    status: "planned",
    category: "Gebäudereinigung",
    readingMinutes: 5,
    icon: "event_available",
    coverGradient: "from-green-300 via-emerald-600 to-slate-950",
    metaTitle: "Gebäudereinigung vor dem Sommer | AE Gebäudeservice",
    metaDescription:
      "Geplanter Blogbeitrag zur Gebäudereinigung vor dem Sommer: Hitze, Staub, Eingangsbereiche, Sanitär und Kundenflächen richtig vorbereiten.",
    intro:
      "Dieser Beitrag ist für die kommende Woche geplant und richtet sich an Unternehmen, die ihre Gebäudereinigung nicht erst dann anpassen möchten, wenn die ersten Beschwerden kommen. Der Sommer bringt andere Belastungen mit als die kalten Monate: mehr Staub, mehr Pollen, mehr geöffnete Fenster, stärker genutzte Sanitärbereiche, verschwitzte Kontaktflächen und oft auch mehr Publikumsverkehr. Wer früh plant, hält sein Objekt sichtbar gepflegt und vermeidet hektische Sonderaktionen.",
    sections: [
      {
        heading: "Warum der Sommer andere Reinigungsroutinen braucht",
        body: [
          "In warmen Monaten verändert sich die Nutzung vieler Gebäude. Türen stehen häufiger offen, Außenbereiche werden stärker genutzt und Staub wird schneller eingetragen. Gleichzeitig fallen Gerüche in Sanitär- und Küchenbereichen schneller auf. Was im Frühjahr noch ausreichend war, kann im Sommer zu wenig sein. Deshalb lohnt es sich, die Reinigung nicht nur nach Kalender, sondern nach tatsächlicher Nutzung zu planen.",
          "Besonders wichtig sind Eingänge, Treppenhäuser, Empfangszonen, Küchen, Aufenthaltsräume und Sanitärbereiche. Diese Zonen werden täglich wahrgenommen und entscheiden darüber, ob ein Objekt frisch oder vernachlässigt wirkt.",
        ],
      },
      {
        heading: "Kontaktflächen und Sanitärbereiche im Fokus",
        body: [
          "Bei Hitze werden Kontaktflächen stärker beansprucht. Türgriffe, Handläufe, Lichtschalter, Aufzugtasten, Tischflächen und Küchenbereiche sollten regelmäßig gereinigt werden. In Sanitärbereichen geht es zusätzlich um Geruchsvermeidung, Kalkränder, Armaturen, Böden und Verbrauchsmaterial. Ein sauberer Waschraum ist für Mitarbeitende und Kunden sofort spürbar.",
          "Ein sinnvoller Plan definiert nicht nur, was gereinigt wird, sondern auch wie oft. Einige Bereiche können im Sommer eine höhere Frequenz benötigen, während andere im normalen Rhythmus bleiben. So bleibt der Aufwand kontrollierbar und die Qualität sichtbar.",
        ],
      },
      {
        heading: "Vorbereitung statt Reaktion",
        body: [
          "Viele Reinigungsprobleme entstehen, weil erst reagiert wird, wenn es auffällt. Besser ist ein kurzer Check vor der heißen Phase: Welche Bereiche waren im letzten Sommer problematisch? Wo gab es Gerüche, Staub, Flecken oder Beschwerden? Welche Zeiten passen am besten, damit die Reinigung den Betrieb nicht stört?",
          "AE Gebäudeservice unterstützt Unternehmen dabei, ihren Reinigungsplan saisonal anzupassen. Das Ziel ist nicht, pauschal mehr zu reinigen, sondern an den richtigen Stellen genauer zu werden. So bleibt das Gebäude gepflegt, ohne unnötige Kosten aufzubauen.",
        ],
      },
    ],
    checklist: [
      "Eingänge und Laufwege vor der Sommerphase prüfen",
      "Sanitärbereiche bei Bedarf häufiger reinigen lassen",
      "Kontaktflächen konsequent einplanen",
      "Küchen- und Aufenthaltsbereiche geruchssicher halten",
      "Reinigungszeiten an Hitze und Betriebsabläufe anpassen",
    ],
    ctaTitle: "Sommer-Reinigungsplan rechtzeitig prüfen?",
    ctaText:
      "Wir passen Ihre Gebäudereinigung an Nutzung, Wetter und Kundenverkehr an, bevor Probleme sichtbar werden.",
  },
  {
    slug: "industriereinigung-produktionspause-nutzen",
    title: "Industriereinigung in der Produktionspause: Warum kurze Stillstände ideal genutzt werden sollten",
    excerpt:
      "Geplant für nächste Woche: Wie Industrie- und Gewerbebetriebe Wartungsfenster, Brückentage oder geplante Pausen für intensive Reinigung nutzen können.",
    date: "2026-05-28",
    plannedFor: "2026-05-28",
    status: "planned",
    category: "Industriereinigung",
    readingMinutes: 6,
    icon: "precision_manufacturing",
    coverGradient: "from-emerald-600 via-gray-900 to-black",
    metaTitle: "Industriereinigung in der Produktionspause | AE Gebäudeservice",
    metaDescription:
      "Geplanter Beitrag zur Industriereinigung in Produktionspausen: Wartungsfenster sinnvoll nutzen, Sicherheit erhöhen und Anlagenumfeld sauber halten.",
    intro:
      "Dieser Beitrag ist für nächste Woche geplant und behandelt ein Thema, das in vielen Betrieben unterschätzt wird: kurze Produktionspausen als Reinigungsfenster. Wenn Maschinen stillstehen, Bereiche gesperrt sind oder Wartungen laufen, lassen sich Reinigungsarbeiten oft deutlich besser durchführen als im laufenden Betrieb. Das gilt für Hallenböden, Laufwege, Maschinenumfelder, Lagerzonen, Sozialräume und schwer zugängliche Bereiche.",
    sections: [
      {
        heading: "Warum geplante Pausen so wertvoll sind",
        body: [
          "Im laufenden Betrieb sind viele Reinigungsarbeiten nur eingeschränkt möglich. Gabelstapler fahren, Mitarbeitende bewegen sich durch die Halle, Maschinen laufen und Sicherheitsbereiche dürfen nicht betreten werden. Während einer geplanten Pause kann dagegen strukturierter gearbeitet werden. Flächen sind besser zugänglich, Arbeitswege lassen sich absperren und Teams können gezielt in Reihenfolge reinigen.",
          "Gerade bei stark beanspruchten Produktionsflächen entstehen Verschmutzungen, die nicht täglich vollständig gelöst werden können. Ölige Rückstände, Staub, Abrieb, Verpackungsreste oder festgetretener Schmutz brauchen Zeit, passende Mittel und sichere Abläufe.",
        ],
      },
      {
        heading: "Sicherheit und Reinigung gehören zusammen",
        body: [
          "Saubere Industrieflächen sind nicht nur schöner. Sie können auch zur Sicherheit beitragen. Rutschige Böden, verschmutzte Markierungen, blockierte Laufwege oder Staubansammlungen können den Betrieb belasten. Eine Industriereinigung sollte deshalb immer mit Blick auf Nutzung, Arbeitsschutz und interne Abläufe geplant werden.",
          "Wichtig ist, vorher klar zu definieren, welche Bereiche gereinigt werden dürfen, welche Maschinen tabu sind und wer vor Ort Ansprechpartner ist. So entstehen keine Verzögerungen und keine unnötigen Risiken.",
        ],
      },
      {
        heading: "Nach der Reinigung schneller wieder startklar",
        body: [
          "Eine gute Planung sorgt dafür, dass der Betrieb nach der Pause nicht durch Restfeuchte, blockierte Wege oder ungeklärte Zuständigkeiten aufgehalten wird. Reihenfolge, Trocknungszeiten, Zugangspunkte und Übergabe sollten vorher geklärt sein. Dadurch wird aus der Reinigung kein Störfaktor, sondern ein sinnvoller Teil der Betriebsorganisation.",
          "AE Gebäudeservice unterstützt Industrie- und Gewerbekunden dabei, solche Reinigungsfenster praktisch zu nutzen. Das Ziel ist eine saubere, sichere und wieder einsatzbereite Fläche, ohne den Produktionsablauf unnötig zu bremsen.",
        ],
      },
    ],
    checklist: [
      "Produktionspausen früh als Reinigungsfenster einplanen",
      "Maschinenumfelder, Laufwege und Hallenböden priorisieren",
      "Sicherheitsbereiche und Ansprechpartner vorab klären",
      "Trocknungszeiten und Wiederanlauf berücksichtigen",
      "Reinigung mit Wartung und internen Abläufen abstimmen",
    ],
    ctaTitle: "Produktionspause sinnvoll nutzen?",
    ctaText:
      "Wir planen Industriereinigungen so, dass Stillstände produktiv genutzt und Flächen sauber übergeben werden.",
  },
];

export const publishedBlogPosts = blogPosts.filter(
  (post) => post.status === "published",
);

export const plannedBlogPosts = blogPosts.filter(
  (post) => post.status === "planned",
);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export function getPostWordCount(post: BlogPost) {
  const allText = [
    post.title,
    post.excerpt,
    post.intro,
    ...post.sections.flatMap((section) => [section.heading, ...section.body]),
    ...post.checklist,
    post.ctaTitle,
    post.ctaText,
  ].join(" ");

  return allText.trim().split(/\s+/).filter(Boolean).length;
}
