export interface Casino {
  id: string;
  name: string;
  logo: string;
  rating: number;
  votes: number;
  bonus: string;
  url: string;
  badge: string;
  isMobile?: boolean;
}

interface RawCasino {
  name: string;
  logo: string;
  bonus: string;
  url: string;
  votes: number;
  isMobile?: boolean;
}

function generateId(name: string, index: number): string {
  const str = `${name}-${index}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, "0");
}

const BADGES = ["Editor's Pick", "Top Pick", "Trending Now"];

function processCasinos(raw: RawCasino[]): Casino[] {
  return raw.map((c, i) => ({
    ...c,
    id: generateId(c.name, i),
    rating: parseFloat((10.0 - i * 0.1).toFixed(1)),
    badge: i < 3 ? BADGES[i] : "",
  }));
}

const rawCasinos: RawCasino[] = [
  
  {
    name: "Bwin",
    logo: "/bwin-logo-light.png",
    bonus: "Joga 10€ — Ganha 100 Rodadas Grátis",
    url: "https://www.bwin.pt/pt/sports",
    votes: 5921,
  },
  {
    name: "Placard",
    logo: "/placard.webp",
    bonus: "GANHA ATÉ 50 SPINS GRÁTIS!",
    url: "https://online.placard.pt/promoRedirect?key=ej0xMzc1ODQzOSZsPTEzNzQ2MDA2JnA9MTkzNjI%3D",
    votes: 5480,
  },
  {
    name: "888 Casino",
    logo: "/888casino_logo.svg.png",
    bonus: "100% ATÉ €1.000 NO PRIMEIRO DEPÓSITO",
    url: "https://ic.aff-handler.com/C/43538?sr=xxxxxx",
    votes: 5480,
  },
  {
    name: "NossaAposta",
    logo: "/nossaaposta.png",
    bonus: "Ganhe Até €300 + 25 Giros Grátis!",
    url: "https://creatives.nossaaposta.pt/creativedirect.aspx?mid=532&sid=4924",
    votes: 5103,
  },
  {
    name: "BacanaPlay",
    logo: "/bacanaplay.png",
    bonus: "100% ATÉ €250 + 20 Spins Grátis",
    url: "https://site.gotobacanaplay.com/index.php",
    votes: 4872,
  },
];

const rawMobileCasinos: RawCasino[] = [
  
];

const allProcessed = processCasinos([...rawCasinos, ...rawMobileCasinos]);

export const regularCasinos = allProcessed.filter((c) => !c.isMobile);
export const mobileCasinos = allProcessed.filter((c) => c.isMobile);
export const allCasinos = allProcessed;
