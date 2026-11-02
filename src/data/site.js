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
  // Social profiles: add the Instagram/TikTok URL here and it appears site-wide.
  socials: [
    { name: "Facebook", url: "https://www.facebook.com/HTimantti/" },
    // { name: "Instagram", url: "https://www.instagram.com/KAYTTAJANIMI/" },
    // { name: "TikTok", url: "https://www.tiktok.com/@KAYTTAJANIMI" },
  ],
  // Web3Forms access key (web3forms.com, free). Empty = form opens a prefilled SMS instead.
  formEndpoint: "",
  legalName: "HMD Autokorjaamo",
  businessId: "3339714-7",
  hours: [
    { label: "Maanantai – Perjantai", value: "9.00 – 19.00" },
    { label: "Lauantai", value: "10.00 – 18.00" },
    { label: "Sunnuntai", value: "Suljettu" },
  ],
};

export const stats = [
  { value: "20 €", label: "Ulkopesu + imurointi" },
  { value: "60 €", label: "Pesu + kovavaha" },
  { value: "Hepolamminkatu 24", label: "Tampere" },
  { value: "Turvesuonkatu 16", label: "Tampere" },
  { value: "Ma–La", label: "Avoinna · sunnuntai suljettu", wide: true },
];

// One price list = one source of truth. Services, Pricing and area pages all read from here.
// offer = current campaign price, normal = struck-through regular price (omit when no campaign).
export const priceCategories = [
  {
    id: "pesut",
    title: "Pesut",
    note: "Ulkopesu tehdään aina käsin, ilman harjoja ja rullia.",
    items: [
      { name: "Ulkopesu + sisäimurointi", detail: "Koko auton käsinpesu, vanteet, ikkunat ja imurointi sisältä.", price: 20, normal: 30, popular: true },
      { name: "Ulkopesu + pikavaha", detail: "Käsinpesu ja pikavaha, joka antaa kiillon ja helpottaa seuraavaa pesua.", price: 30, normal: 50 },
      { name: "Ulkopesu + kestovaha", detail: "Käsinpesu ja pidempään kestävä vaha maalipinnan suojaksi.", price: 70, normal: 100 },
      { name: "Ulkopesu + asfalttipuhdistus + kovavaha", detail: "Asfaltti- ja tervaroiskeiden poisto sekä kovavaha.", price: 60, normal: 90 },
    ],
  },
  {
    id: "sisatilat",
    title: "Sisätilat",
    note: "Voit yhdistää sisäpuhdistuksen mihin tahansa pesuun.",
    items: [
      { name: "Sisäpuhdistus", detail: "Imurointi, kojelauta, ovipaneelit ja lasit sisältä.", price: 25 },
      { name: "Penkkipesu + sisäpuhdistus", detail: "Penkkien ja verhoilun pesu sekä koko sisätilojen puhdistus.", price: 80, normal: 100 },
      { name: "Koirankarvojen poisto", detail: "Lisäpalvelu: koirankarvat pois penkeiltä ja matoilta.", price: 15, addon: true },
    ],
  },
  {
    id: "suojaus",
    title: "Vahaus ja suojaus",
    note: "Pitkäkestoinen kiilto ja suoja maalipinnalle.",
    items: [
      { name: "Puleeraus + kovavahaus", detail: "Maalipinnan kiillotus ja kovavaha. Palauttaa kiillon ja suojaa pintaa.", price: 100, normal: 180 },
      { name: "Keraaminen pinnoite", detail: "Pitkäkestoisin suoja maalipinnalle. Kysy lisää kestosta.", price: 350, normal: 550 },
    ],
  },
  {
    id: "muut",
    title: "Muut palvelut",
    note: "Isommat ajoneuvot ja erikoistyöt.",
    items: [
      { name: "Moottorin pesu", detail: "Moottoritilan pesu herkistä osista huolehtien.", price: 25 },
      { name: "Asuntoauton pesu ja vahaus", detail: "Asuntoauton ulkopesu käsin ja vahaus.", price: 175 },
      { name: "Rekkojen kokonaisvaltainen puhdistus", detail: "Kuorma-autot ja enintään 29 m rekkayhdistelmät.", price: null },
    ],
  },
];

export const formatPrice = (item) => (item.price == null ? "Kysy hinta" : `${item.price} €`);

// Flat list used by the Services section and area pages.
export const services = priceCategories.flatMap((c) => c.items).map((item, i) => ({
  id: String(i + 1).padStart(2, "0"),
  name: item.name,
  detail: item.detail,
  price: formatPrice(item),
}));

export const openingOffer = {
  location: "Turvesuonkatu 16",
  title: "Avajaistarjous Turvesuonkadulla",
  items: [
    { name: "Käsinpesu", price: "10 €" },
    { name: "Renkaanvaihto", price: "15 €" },
  ],
};

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
    q: "Voinko jättää auton pesuun ja hakea sen myöhemmin?",
    a: "Riippuu palvelusta, mutta useimmiten kyllä. Kun tuot auton pesuun, voit yleensä jättää sen meille ja hoitaa omat asiasi sillä välin. Pesu hoituu nopeasti, ja ilmoitamme, kun auto on valmis.",
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
    a: "Ulkopesu ja sisäimurointi 20 €, ulkopesu ja pikavaha 30 €, sisäpuhdistus 25 €, penkkipesu ja sisäpuhdistus 80 €, puleeraus ja kovavahaus 100 €. Koko hinnasto löytyy sivun Hinnasto-osiosta.",
  },
  {
    q: "Missä pesula sijaitsee?",
    a: "Meillä on kaksi pesulaa Tampereella: Hepolamminkatu 24 Hervannassa ja Turvesuonkatu 16 Lielahdessa, Prisman vieressä.",
  },
];

// Real 5-star Google reviews (Hepolamminkatu profile), quoted verbatim.
// Names shortened to first name + initial for the reviewers' privacy.
export const googleRating = {
  rating: "4,2",
  count: 248,
  url: "https://www.google.com/maps/place/?q=place_id:ChIJsZc0H77fjkYRvF_w00KV7wA",
};

export const reviews = [
  {
    name: "Heikki N.",
    text: "Äitienpäivälahjaksi hankittu fiksaus teetetty (ulko- ja sisäpesu myllytyksineen). Aivan huippu lopputulos ja äitimuori enemmän kuin tyytyväinen. Asioimme varmasti toistekkin. Lämmin kiitos henkilökunnalle ja aurinkoista kesää!",
  },
  {
    name: "Mervi R.",
    text: "Punainen vanha corollani oli todellakin haalistunut. Miehet tekivät uskomattoman työn. Nyt kiiltää ja kuin uusi.",
  },
];
