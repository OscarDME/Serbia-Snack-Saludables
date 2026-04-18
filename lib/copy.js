// lib/copy.js — sav vidljivi tekst sa landing stranice. Srpski, doslovno sa
// loncherafeliz.aprende-hoy.shop. Svaka promena teksta se dešava ovde.

export const copy = {
  metadata: {
    title:
      "Zdrave užine za decu | 500 brzih i ukusnih recepata",
    description:
      "Otkrijte 500 recepata za zdrave dečje užine, gotove za manje od 15 minuta. Uključuje 9 besplatnih bonusa. Specijalna ponuda: 990 din.",
    productName: "Priručnik za zdrave dečje užine",
  },

  hero: {
    urgencyBar:
      "⚡ VREMENSKI OGRANIČENA PONUDA! Samo danas: 95% popusta",
    badge: "Gotovo za manje od 15 minuta",
    headline: {
      before: "Promenite ishranu svoje dece uz ",
      accent: "zdrave užine",
      after: ", koje su istovremeno brze i neverovatno ukusne",
    },
    subheadline:
      "Jednostavni i hranljivi recepti koje će vaši najmiliji obožavati – idealni za školu ili kod kuće. 500 ideja da se pobrinete za njihovo zdravlje, bez gubljenja dragocenog vremena!",
    ctaLabel: "Kupite odmah i uštedite 95%!",
    trustChips: [
      { icon: "🥗", text: "500 recepata" },
      { icon: "🎁", text: "Bonusi u vrednosti preko 10.000 din NA POKLON" },
      { icon: "🛡️", text: "14 dana garancije bez rizika" },
    ],
    image: {
      src: "/hero-snacks.webp",
      alt: "Transformacija sa nezdrave hrane na zdrave užine za manje od 15 minuta",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Gotovo za", bottom: "15 min" },
      discount: { icon: "💚", top: "95%", bottom: "popusta" },
    },
  },

  story: {
    kicker: "Naša priča",
    paragraphs: [
      "Vaše dete jede nekoliko puta dnevno, a ono što unosi direktno utiče na njegovo zdravlje, energiju i raspoloženje.",
      "Problem nije u tome da mu s vremena na vreme date keks. Problem nastaje kada, zbog nedostatka vremena ili ideja, to postane svakodnevica.",
      "Nije da vi ne brinete. Jednostavno, između umora, kućnih poslova i hiljadu dnevnih obaveza, ponekad vam je potrebno nešto zaista brzo i lako.",
      "„ZDRAVE UŽINE ZA DECU“ je priručnik stvoren upravo za takve roditelje – koji brinu o zdravlju svoje dece, ali traže praktična rešenja, a ne komplikovane recepte i neizvodljive ideje.",
    ],
  },

  benefits: {
    kicker: "Glavne prednosti",
    headline: "Uz Priručnik za zdrave dečje užine reći ćete zbogom...",
    items: [
      {
        icon: "🍪",
        title: "Brzoj i nezdravoj hrani",
        desc: "Brzi recepti sa prirodnim sastojcima, bez veštačkih dodataka i konzervansa.",
      },
      {
        icon: "⏱️",
        title: "Nedostatku vremena",
        desc: "Recepti gotovi za samo 15 minuta, apsolutno idealni za ljude sa pretrpanim rasporedom.",
      },
      {
        icon: "🥦",
        title: "Brigama oko dečje ishrane",
        desc: "Užine prepune važnih vitamina i minerala koje će svi obožavati.",
      },
      {
        icon: "😩",
        title: "Stresu zbog pripreme komplikovanih jela",
        desc: "Ukusni recepti zbog kojih će vaši najmiliji s nestrpljenjem čekati ono što im spremate.",
      },
    ],
  },

  transformation: {
    kicker: "Transformacija koju tražite",
    headline: "Pogledajte kako će se promeniti ishrana i energija vaše dece",
    before: {
      tag: "PRE",
      title: "Bez energije i nutritivne vrednosti",
      desc: "Prerađena hrana prepuna šećera i aditiva koji ne donose ništa dobro",
    },
    after: {
      tag: "POSLE",
      title: "Srećni, vitalni i puni energije",
      desc: "Prirodne, ukusne i hranljive užine koje deca obožavaju",
    },
    image: {
      src: "/kids-transformation.webp",
      alt: "Transformacija: tužno dete koje jede nezdravu hranu u poređenju sa srećnim detetom uz zdrave užine",
    },
  },

  samples: {
    headline: "Neodoljivi recepti koje će obožavati",
    subheadline:
      "Zavirite u mali deo ukusnih recepata koje ćete pronaći u ovoj e-knjizi",
    items: [
      {
        image: "/recipe-pancakes.webp",
        title: "Zdrave palačinke",
        desc: "Vazdušaste i zlatne, sa svežim voćem i pravim pčelinjim medom",
      },
      {
        image: "/recipe-pizza.webp",
        title: "Pica bez glutena",
        desc: "Ukusna pica sa svežim povrćem i topljenim sirom",
      },
      {
        image: "/recipe-smoothies.webp",
        title: "Prirodni smutiji",
        desc: "Šareni voćni smutiji koji će ih oduševiti",
      },
      {
        image: "/recipe-cookies.webp",
        title: "Ovseni keksići",
        desc: "Hrskavi domaći keksići sa ovsenim pahuljicama i bademima",
      },
    ],
    footnote: "Svih 500 recepata vas čeka u kompletnoj e-knjizi",
  },

  testimonials: {
    kicker: "DOKAZANI REZULTATI",
    headline: "Preko 5000 porodica je već promenilo svoj način ishrane",
    subheadline:
      "Pridružite se hiljadama roditelja koji već uživaju u zdravijoj hrani bez nepotrebnog stresa",
    rating: 5,
    ratingLabel: "5/5",
    reviewCount: "150 recenzija",
    items: [
      {
        initial: "J",
        name: "Jelena",
        role: "majka dvoje male dece",
        quote:
          "Nikada nisam verovala da će moj sin tako brzo prihvatiti zdrave užine! Recepti su ne samo prelaki, već mu se i strašno sviđaju. Hvala vam što ste mi olakšali život! Najbolja investicija koju sam ikada napravila.",
      },
      {
        initial: "M",
        name: "Marko",
        role: "otac troje dece",
        quote:
          "Ranije sam mnogo brinuo o tome šta dajem svojoj deci, ali sa ovom knjigom sam pronašao izuzetno ukusne i zdrave opcije. Sada svi jedemo kvalitetnije i mnogo sam spokojniji!",
      },
      {
        initial: "M",
        name: "Milica",
        role: "nutricionista i majka",
        quote:
          "Kao stručnjak, mogu da potvrdim da su ovi recepti savršeno izbalansirani. Moja deca ih obožavaju, a ja sam mirna znajući da se hrane dobro. Toplo preporučujem svakom roditelju!",
      },
      {
        initial: "D",
        name: "Dragana",
        role: "zaposlena majka",
        quote:
          "Zbog gustog rasporeda nisam imala nimalo vremena za kuvanje. Ova knjiga je promenila sve: recepti za 15 minuta koje moja deca traže iznova i iznova. Vredi svaki dinar! Već sam je preporučila svim svojim prijateljicama.",
      },
    ],
  },

  whatYouGet: {
    kicker: "ŠTA JE UKLJUČENO?",
    headline: "Sve što ćete pronaći u ovoj neverovatnoj e-knjizi",
    subheadline: "Potpun priručnik za zdravu dečju ishranu",
    items: [
      "500 brzih i hranljivih recepata za doručak, ručak, večeru i školske užine",
      "Gotovi nedeljni jelovnici + ekonomični spiskovi za kupovinu",
      "Ideje za savršeno kombinovanje doručka, užine i večere",
      "Jednostavna uputstva za pripremu korak po korak",
      "Spisak zdravih zamena kada vam zafali neki sastojak",
      "Besplatna ažuriranja sa novim receptima i jelovnicima",
      "I još mnogo toga…",
    ],
    footnote: {
      line1: "I to nije sve...",
      line2: "Ima još mnogo toga!",
      line3: "Dobićete takođe...",
    },
  },

  bonuses: {
    flagline: "🔥 SAMO DANAS!",
    headline: "Preuzmite BESPLATNE bonuse u vrednosti preko 10.000 dinara uz kupovinu danas",
    subheadline:
      "U vrednosti od 10.700 dinara — potpuno VAŠ POKLON uz današnju kupovinu!",
    badgeLabel: "BESPLATNO",
    valueLabel: "Vrednost:",
    items: [
      {
        value: "3.300 din",
        title: "Recepti za mafine i pice bez šećera i glutena",
        desc: "Pripremite zdrave verzije njihove omiljene hrane, bez dodatog šećera, bez glutena i gotove bukvalno za nekoliko minuta.",
      },
      {
        value: "2.300 din",
        title: "Praktični vodič za organizaciju i zamrzavanje hrane",
        desc: "Naučite kako da pripremite sve odjednom i imate gotovu hranu za celu nedelju uz manje od 30 minuta dnevnog posla.",
      },
      {
        value: "1.700 din",
        title: "Specijalni recepti za decu sa alergijama",
        desc: "Bezbedni i ukusni recepti prilagođeni najčešćim alergijama (mleko, jaja, soja, kikiriki).",
      },
      {
        value: "1.700 din",
        title: "Recepti za ukusne i zdrave deserte",
        desc: "Zamenite prerađene slatkiše zdravim poslasticama napravljenim isključivo od prirodnih sastojaka.",
      },
      {
        value: "1.700 din",
        title: "Zdravi i lako pripremivi sveže ceđeni sokovi",
        desc: "Praktični recepti za prirodne, hranljive i ukusne sokove koji će osvežiti dan vašim najmilijima.",
      },
    ],
    totalLabel: "🎁 Ukupna vrednost bonusa: 10.700 din",
    totalCta: "DODAJEMO IH POTPUNO BESPLATNO UZ VAŠU DANAŠNJU KUPOVINU!",
  },

  exclusiveBonuses: {
    kicker: "PORED TOGA.. ⭐ EKSKLUZIVNI BONUSI!",
    headline: "Samo danas! Preuzmite i ove dodatne ekskluzivne bonuse",
    subheadline: "kako biste preporodili zdravlje svoje dece",
    badgeLabel: "BESPLATNO",
    valueLabel: "Vrednost:",
    items: [
      {
        value: "2.200 din",
        title: "Domaće voćne gumene bombone sa visokim sadržajem vitamina C",
        desc: "Naučite kako da napravite prirodne gumene bombone bogate vitaminom C kako biste ojačali imuni sistem svoje dece na zabavan i ukusan način. Bez dodatog šećera, 100% prirodno i prepuno korisnih nutrijenata!",
      },
      {
        value: "2.300 din",
        title: "Kako navesti decu da zavole povrće",
        desc: "Pretvorite povrće u ukusnu i zabavnu avanturu za vašu decu. Jednostavni recepti koji će im pomoći da jedu povrće sa ogromnim zadovoljstvom.",
      },
      {
        value: "2.100 din",
        title: "Priručnik za brze užine za probirljivu decu",
        desc: "Otkrijte jednostavne i hranljive užine, idealne za decu sa slabim apetitom, koje im pomažu da se hrane zdravo i veoma ukusno.",
      },
      {
        value: "2.100 din",
        title: "Priručnik o superhrani za decu",
        desc: "Naučite kako da uključite superhranu koja će poboljšati zdravlje i energiju vaše dece kroz jednostavne recepte koji obezbeđuju važne hranljive materije.",
      },
    ],
    totalLabel: "🎁 Ukupna vrednost SVIH bonusa: 19.400 din",
    totalCta: "DODAJEMO IH POTPUNO BESPLATNO UZ VAŠU DANAŠNJU KUPOVINU!",
  },

  finalCta: {
    flagline: "⏰ PONUDA VAŽI SAMO DANAS!",
    headline: "Kompletan paket u vrednosti od 23.400 din",
    subheadline: "Danas ga uzimate uz neverovatnih 95% popusta",
    regularPriceLabel: "Standardna cena:",
    regularPrice: "23.400 din",
    offerPrice: "990 din",
    bundleList: [
      "✅ 500 recepata za zdrave užine (vrednost 4.000 din)",
      "✅ 9 ekskluzivnih bonusa u vrednosti od 19.400 din — POTPUNO BESPLATNO!",
      "✅ Recepti gotovi za manje od 15 minuta",
      "✅ Trenutni i doživotni pristup",
      "✅ 14 dana garancije povraćaja novca",
    ],
    button: "Kupite odmah i uštedite 95%!",
    trustRow: "🔒 100% sigurno plaćanje • ⚡ Trenutni pristup • ✅ 14 dana garancije",
    bonusesBadge: "✓ 9 BESPLATNIH BONUSA",
    discountStickerLabel: "Samo danas",
    discountStickerValue: "-95%",
    imageAlt:
      "Kompletan paket: E-knjiga Zdrave užine za decu + 9 Bonusa",
    image: "/mockup-cta.webp",
  },

  guarantee: {
    headline: "Vaša kupovina je 100% zaštićena našom garancijom od 14 dana",
    tag: "NULTI RIZIK ZA VAS",
    body: "Toliko smo sigurni da će vam se ovaj priručnik dopasti da vam nudimo bezuslovnu garanciju od 14 dana. Ako iz bilo kog razloga niste 100% zadovoljni, vratićemo vam svaki dinar. Bez suvišnih pitanja i komplikacija.",
    footer: "✅ Garantovan potpuni povraćaj novca • ✅ Bez suvišnih pitanja • ✅ Hitna procedura",
  },

  faq: {
    kicker: "ČPP",
    headline: "Često postavljana pitanja",
    items: [
      {
        q: "Za koju starosnu grupu je namenjen priručnik?",
        a: "Priručnik je namenjen deci od 2 do 12 godina, mada se recepti vrlo lako mogu prilagoditi apsolutno svim uzrastima.",
      },
      {
        q: "Da li su recepti pogodni za decu sa alergijama?",
        a: "Da! Nudimo recepte prilagođene najčešćim alergijama poput mleka, jaja, soje i kikirikija, tako da sva deca mogu uživati u ukusnoj i zdravoj hrani.",
      },
      {
        q: "Da li moram da budem ekspert u kuhinji?",
        a: "Ne, recepti su dizajnirani tako da budu maksimalno jednostavni za praćenje, sa malo sastojaka i prostim koracima. Čak i ako ne kuvate često, snaći ćete se odlično!",
      },
      {
        q: "Da li su sastojci skupi?",
        a: "Ne, svi sastojci su pristupačni i lako se nalaze u svakom standardnom supermarketu. Nisu vam potrebni skupi ili teško dostupni proizvodi.",
      },
      {
        q: "Koliko vremena je potrebno za pripremu užina?",
        a: "Recepti su izuzetno brzi, a većina užina je gotova za manje od 15 minuta.",
      },
      {
        q: "Mogu li da platim u svojoj lokalnoj valuti?",
        a: "Da! Naš sistem plaćanja automatski konvertuje iznos po kursu vaše lokalne valute. Kada pređete na plaćanje, videćete cenu prilagođenu vašoj valuti, tako da ne morate da brinete o dodatnim konverzijama. Garantujemo da je proces plaćanja jednostavan i potpuno transparentan, bez obzira na vašu lokaciju.",
      },
    ],
  },

  closing: {
    kicker: "POSLEDNJA ŠANSA! ⚡ Ova ponuda ističe uskoro",
    headline:
      "Ne propustite ovu jedinstvenu priliku da preporodite ishranu svoje porodice!",
    subheadline:
      "Potpun priručnik + 9 Bonusa u vrednosti od 19.400 din NA POKLON! Sve to po ceni jedne večere u restoranu",
    regularPrice: "23.400 din",
    offerPrice: "990 din",
    ctaLabel: "DA, ŽELIM SVOJ PRIRUČNIK ODMAH!",
    trustRow:
      "🔒 100% sigurno plaćanje • ⚡ Trenutni pristup • ✅ 14 dana garancije povraćaja novca bez rizika",
  },

  footer: {
    madeWith: "Napravljeno sa",
    forWho: "za zdrave porodice",
    copyright: "© 2026 Zdrave užine. Sva prava zadržana.",
  },

  stickyCta: {
    label: "990 din",
    ctaLabel: "Kupite odmah i uštedite 95%!",
    urgency: "⚡ Vremenski ograničena ponuda",
  },
};