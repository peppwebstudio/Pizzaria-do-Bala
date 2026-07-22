// Central brand config + menu data for Pizzaria do Bala
export const BRAND = {
  name: "Pizzaria do Bala",
  tagline: "Sabor de verdade",
  since: "2022",
  whatsapp: "5581992588530", // DDI+DDD+numero
  phoneDisplay: "(81) 99258-8530",
  address: "Rua José de Alencar, 116 — Boa vista, Recife/PE",
  hours: [
    { day: "Terça a Domingo", time: "17h00 — 23h00" },
    { day: "Segunda", time: "Fechado" },
  ],
  instagram: "https://www.instagram.com/pizzariadobala/",
  ifood: "https://www.ifood.com.br/delivery/recife-pe/pizzaria-do-bala-boa-vista/1ea43b93-9345-44b6-a2c4-f17501b2add7",
  linktree: "https://linktr.ee/pizzariadobala",
  maps: "https://www.google.com/maps/place/Pizzaria+do+Bala/@-8.0611484,-34.8912152,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab195a2bfa653b:0x35a6b3cf54ccab8d!8m2!3d-8.0611537!4d-34.8886349!16s%2Fg%2F11shkt65xq?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3948203125133!2d-34.891215190290794!3d-8.061148380510181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab195a2bfa653b%3A0x35a6b3cf54ccab8d!2sPizzaria%20do%20Bala!5e0!3m2!1spt-BR!2sbr!4v1784682034011!5m2!1spt-BR!2sbr",
};

export const whatsappLink = (msg) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    msg || `Olá! Vim pelo site da ${BRAND.name} e gostaria de fazer um pedido.`
  )}`;

export const PIZZAS = [
  {
    id: "margherita",
    name: "Margherita",
    category: "Tradicionais",
    description: "Molho de tomate italiano, mussarela de búfala, manjericão fresco e azeite extravirgem.",
    price: 49.9,
    badge: "Mais pedida",
    image: "margherita",
  },
  {
    id: "calabresa",
    name: "Calabresa",
    category: "Tradicionais",
    description: "Calabresa artesanal fatiada, cebola roxa, mussarela e orégano.",
    price: 54.9,
    badge: "Mais pedida",
    image: "calabresa",
  },
  {
    id: "portuguesa",
    name: "Portuguesa",
    category: "Tradicionais",
    description: "Presunto, ovos, cebola, ervilha, azeitona preta e mussarela.",
    price: 58.9,
    badge: null,
    image: "portuguesa",
  },
  {
    id: "quatro-queijos",
    name: "Quatro Queijos",
    category: "Especiais",
    description: "Mussarela, gorgonzola, parmesão e provolone com toque de mel.",
    price: 62.9,
    badge: "Premium",
    image: "margherita",
  },
  {
    id: "parma",
    name: "Parma & Rúcula",
    category: "Especiais",
    description: "Presunto parma, rúcula fresca, lascas de parmesão e tomate confit.",
    price: 69.9,
    badge: "Premium",
    image: "calabresa",
  },
  {
    id: "brigadeiro",
    name: "Brigadeiro Belga",
    category: "Doces",
    description: "Chocolate belga ao leite, brigadeiro granulado, morangos e leite condensado.",
    price: 52.9,
    badge: "Doce da casa",
    image: "chocolate",
  },
  {
    id: "chocolate-morango",
    name: "Chocolate & Morango",
    category: "Doces",
    description: "Chocolate branco e ao leite, morangos frescos e raspas de chocolate.",
    price: 56.9,
    badge: null,
    image: "chocolate",
  },
];

export const BEBIDAS = [
  { id: "coca-2l", name: "Coca-Cola 2L", price: 14.9, category: "Bebidas" },
  { id: "guarana-2l", name: "Guaraná Antarctica 2L", price: 13.9, category: "Bebidas" },
  { id: "suco-natural", name: "Suco Natural 500ml", price: 11.9, category: "Bebidas" },
  { id: "agua", name: "Água Mineral 500ml", price: 5.0, category: "Bebidas" },
];

export const PROMOS = [
  {
    id: "combo-familia",
    title: "Combo Família",
    desc: "1 Pizza Grande + 1 Refrigerante 2L + Borda recheada",
    price: 79.9,
    oldPrice: 104.9,
    badge: "-24%",
  },
  {
    id: "terca-dobro",
    title: "Terça em Dobro",
    desc: "2 Pizzas Médias pelo preço de 1. Válido às terças.",
    price: 59.9,
    oldPrice: 109.8,
    badge: "-45%",
  },
  {
    id: "pizza-refri",
    title: "Pizza Grande + Refrigerante",
    desc: "Pizza grande de calabresa + Guaraná 2L gelado.",
    price: 64.9,
    oldPrice: 79.8,
    badge: "-19%",
  },
  {
    id: "primeira-compra",
    title: "Cupom PRIMEIRACOMPRA",
    desc: "R$ 15 OFF na primeira compra pelo site. Sem mínimo.",
    price: null,
    oldPrice: null,
    badge: "Cupom",
  },
];

export const REVIEWS = [
  {
    name: "Mariana Costa",
    initials: "MC",
    text: "A melhor pizza da Vila Mariana! Massa fininha e crocante, recheio generoso e chegou quentinha. Virei cliente fiel.",
    role: "Cliente desde 2023",
  },
  {
    name: "Rafael Almeida",
    initials: "RA",
    text: "Peço toda terça na promoção em dobro. Custo-benefício imbatível e o atendimento no WhatsApp é rapidíssimo.",
    role: "Cliente fiel",
  },
  {
    name: "Juliana Ferreira",
    initials: "JF",
    text: "A pizza de brigadeiro é simplesmente espetacular. Entrega rápida e embalagem que mantém quente. Recomendo!",
    role: "Avaliação iFood",
  },
  {
    name: "Carlos Eduardo",
    initials: "CE",
    text: "Ingredientes de qualidade, dá pra sentir a diferença. A borda recheada de catupiry é viciante. Nota 1000.",
    role: "Cliente desde 2022",
  },
  {
    name: "Patrícia Souza",
    initials: "PS",
    text: "Atendimento impecável e sabor de verdade. A pizza chegou antes do prazo estimado. Super merece as 5 estrelas.",
    role: "Cliente nova",
  },
  {
    name: "Bruno Martins",
    initials: "BM",
    text: "Pedi a Portuguesa e a Margherita, ambas perfeitas. Massa artesanal de verdade. Já é minha pizzaria oficial.",
    role: "Cliente fiel",
  },
];

const MEDIA = "https://media.base44.com/images/public/6a5a5a58f63f47cade00892b";
export const IMG = {
  hero: `${MEDIA}/d5f3f579d_generated_15f7f0fe.png`,
  about: `${MEDIA}/2e20a8bb4_generated_afc6b7b4.png`,
  margherita: `${MEDIA}/1b9f9122a_generated_49836e4a.png`,
  calabresa: `${MEDIA}/ac5d999cf_generated_99bbc04e.png`,
  portuguesa: `${MEDIA}/776789d97_generated_8cdd297c.png`,
  chocolate: `${MEDIA}/5043dafb0_generated_e90ae228.png`,
  lifestyle: `${MEDIA}/ebf8efaec_generated_910235fa.png`,
  ingredients: `${MEDIA}/2d7980fd4_generated_d43925a9.png`,
};

export const SIZES = [
  { id: "media", label: "Média", slices: "6 fatias", factor: 0.8 },
  { id: "grande", label: "Grande", slices: "8 fatias", factor: 1 },
  { id: "familia", label: "Família", slices: "12 fatias", factor: 1.3 },
];

export const CRUSTS = [
  { id: "tradicional", label: "Tradicional", price: 0 },
  { id: "fina", label: "Fina e crocante", price: 0 },
  { id: "catupiry", label: "Borda Catupiry", price: 9 },
  { id: "cheddar", label: "Borda Cheddar", price: 9 },
  { id: "chocolate", label: "Borda Chocolate", price: 11 },
];

export const EXTRAS = [
  { id: "catupiry", label: "Catupiry extra", price: 7 },
  { id: "mussarela", label: "Mussarela extra", price: 6 },
  { id: "bacon", label: "Bacon crocante", price: 8 },
  { id: "calabresa", label: "Calabresa extra", price: 7 },
];

export const PAYMENTS = [
  { id: "pix", label: "PIX", desc: "Aprovação imediata", icon: "Zap" },
  { id: "cartao", label: "Cartão", desc: "Crédito ou débito na entrega", icon: "CreditCard" },
  { id: "dinheiro", label: "Dinheiro", desc: "Pago na entrega", icon: "Wallet" },
];

export const INSTAGRAM_PHOTOS = [
  IMG.lifestyle,
  IMG.calabresa,
  IMG.ingredients,
  IMG.margherita,
  IMG.chocolate,
  IMG.portuguesa,
];