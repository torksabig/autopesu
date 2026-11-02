export const business = {
  name: "H. TIMANTTI",
  fullName: "H. Timantti Autojen Käsinpesu",
  tagline: "Autojen käsinpesu",
  region: "Tampere",
  phone: "045 220 6422",
  phoneHref: "tel:+358452206422",
  address: "Hepolamminkatu 24, Tampere",
  bookingUrl: "https://h-timantti.setmore.com/",
  facebookUrl: "https://www.facebook.com/HTimantti/",
  hours: [
    { label: "Maanantai – Perjantai", value: "9.00 – 19.00" },
    { label: "Lauantai", value: "10.00 – 18.00" },
    { label: "Sunnuntai", value: "Suljettu" },
  ],
};

export const stats = [
  { value: "alk. 20 €", label: "Henkilöauton pesu" },
  { value: "30 €", label: "Käsinpesu + imurointi" },
  { value: "Ma–La", label: "Avoinna · sunnuntai suljettu" },
  { value: "Hepolamminkatu 24", label: "Tampere" },
];

export const services = [
  {
    id: "01",
    name: "Henkilöauton pesu",
    detail: "Koko auton käsinpesu, vanteet ja ikkunat, huolellinen kuivaus.",
    price: "alk. 20 €",
  },
  {
    id: "02",
    name: "Käsinpesu + imurointi",
    detail: "Ulkopesu käsin sekä imurointi ja mattojen puhdistus sisältä.",
    price: "30 €",
  },
  {
    id: "03",
    name: "Sisäpuhdistus",
    detail: "Imurointi, kojelauta, ovipaneelit ja lasit sisältä.",
    price: "25 €",
  },
  {
    id: "04",
    name: "Moottorin pesu",
    detail: "Moottoritilan pesu herkistä osista huolehtien.",
    price: "25 €",
  },
  {
    id: "05",
    name: "Koirankarvojen poisto",
    detail: "Koirankarvojen ja eläinten jäänteiden poisto sisätiloista.",
    price: "15 €",
  },
  {
    id: "06",
    name: "Vahaus",
    detail: "Käsin levitetty vaha suojaa maalipintaa ja helpottaa seuraavaa pesua.",
    price: "kysy hinta",
  },
  {
    id: "07",
    name: "Penkkien pesu",
    detail: "Penkkien ja verhoilun pesu osana sisäpuhdistusta.",
    price: "kysy hinta",
  },
  {
    id: "08",
    name: "Rekkojen kokonaisvaltainen puhdistus",
    detail: "Täydet puhdistuspalvelut kuorma-autoille ja enintään 29 metriä pitkille rekkayhdistelmille.",
    price: "kysy hinta",
  },
];

export const packages = [
  {
    name: "Pelkkä pesu",
    price: "alk. 20 €",
    unit: "per auto",
    copy: "Auton ulkopuoli käsin pesty ja kuivattu. Siisti pinta ilman harjoja ja rullia.",
    features: [
      "Koko auton käsinpesu",
      "Vanteet ja renkaat",
      "Ikkunat ulkoa",
      "Huolellinen kuivaus",
    ],
    cta: "Varaa aika",
    featured: false,
  },
  {
    name: "Pesu + imurointi",
    price: "30 €",
    unit: "per auto",
    copy: "Suosituin vaihtoehto: auto puhdas niin päältä kuin sisältä yhdellä käynnillä.",
    features: [
      "Koko auton käsinpesu",
      "Imurointi ja matot",
      "Sisäpinnat pyyhitään",
      "Koirankarvat pois tarvittaessa",
    ],
    cta: "Varaa aika",
    featured: true,
  },
  {
    name: "Sisäpuhdistus",
    price: "25 €",
    unit: "per auto",
    copy: "Kun sisätilat kaipaavat enemmän kuin pikaista imurointia.",
    features: [
      "Imurointi ja matot",
      "Kojelauta ja ovipaneelit",
      "Lasit sisältä",
      "Penkkien pesu erikseen sovittaessa",
    ],
    cta: "Kysy lisää",
    featured: false,
  },
];

export const steps = [
  {
    id: "01",
    title: "Varaa aika",
    copy: "Soita numeroon 045 220 6422 tai varaa vuoro verkossa Setmore-palvelussa.",
  },
  {
    id: "02",
    title: "Saavu pesulalle",
    copy: "Hepolamminkatu 24, Tampere. Ajanvaraus pitää pesuvuoron juuri sinulle.",
  },
  {
    id: "03",
    title: "Käsinpesu",
    copy: "Pesemme auton käsin, hellävaraisesti ja tarkasti myös yksityiskohdissa.",
  },
  {
    id: "04",
    title: "Tarkistus ja luovutus",
    copy: "Käymme auton läpi kanssasi ja hoidamme maksun paikan päällä.",
  },
];

export const reasons = [
  {
    title: "Maalipinta säilyy",
    copy: "Käsin pesten lika irtoaa ilman harjojen ja rullien jättämiä jälkiä, ja auto pysyy siistinä pidempään.",
    note: "Hellävarainen pinnalle",
  },
  {
    title: "Koko auto samalla kertaa",
    copy: "Ulkopesu, imurointi, sisäpuhdistus ja moottorin pesu. Yhdellä käynnillä kaikki on tehty.",
    note: "Pesu ja sisätilat",
  },
  {
    title: "Aika varattavissa",
    copy: "Vuoron voi varata verkossa Setmore-palvelussa tai soittamalla. Ovet ovat auki kuutena päivänä viikossa.",
    note: "Ma–La",
  },
];

export const faqs = [
  {
    q: "Pesettekö myös rekkoja?",
    a: "Kyllä. Tarjoamme kokonaisvaltaiset puhdistuspalvelut kuorma-autoille ja enintään 29 metriä pitkille rekkayhdistelmille. Ota yhteyttä, niin sovimme puhdistuksesta, hinnasta ja ajasta.",
  },
  {
    q: "Pitääkö aika varata etukäteen?",
    a: "Suosittelemme varaamaan. Ajan saa helpoimmin verkosta Setmore-palvelusta tai soittamalla numeroon 045 220 6422.",
  },
  {
    q: "Milloin pesula on auki?",
    a: "Maanantaista perjantaihin klo 9–19 ja lauantaisin klo 10–18. Sunnuntaisin pesula on suljettu.",
  },
  {
    q: "Mitä palveluita teiltä saa?",
    a: "Käsinpesun lisäksi imuroinnin, sisäpuhdistuksen, moottorin pesun ja koirankarvojen poiston. Vahaus ja penkkien pesu onnistuvat erikseen sovittaen.",
  },
  {
    q: "Paljonko pesu maksaa?",
    a: "Henkilöauton pesu alkaen 20 €, käsinpesu ja imurointi 30 €, sisäpuhdistus 25 €, moottorin pesu 25 € ja koirankarvojen poisto 15 €.",
  },
  {
    q: "Missä pesula sijaitsee?",
    a: "Hepolamminkatu 24, Tampere. Tarkemmat ajo-ohjeet saat soittamalla, jos perille löytäminen mietityttää.",
  },
];
