export interface Client {
  id: string;
  name: string;
  slug: string;
  image: string;
  website?: string;
  description: string;
  services: string[];
  technologies: string[];
  featured: boolean;
  category: string;
}

export const clients: Client[] = [
  {
    id: "1",
    name: "Johanna Medranda",
    slug: "johanna-medranda",
    image: "johanna-medranda-1",
    website: "https://johannamedranda.com",
    description:
      "Johanna is a Detroit-based comedian making a splash in the comedy world on a national level. She needed a website that matched her bold stage persona and could grow alongside her rising career.",
    services: [
      "Web Design",
      "Photography",
    ],
    technologies: [
        "Next.js",
        "Tailwind CSS",
        "Google API",
        "Framer",
        "Adobe Photoshop"
    ],
    featured: true,
    category: "Performer",
  },
  {
    id: "2",
    name: "Motor City Comedy Festival",
    slug: "motor-city-comedy-festival",
    image: "mccf",
    website: "https://motorcitycomedyfestival.com",
    description:
      "Held in the booming city of Detroit, the Motor City Comedy Festival is the longest tenured comedy festival in the state of Michigan. We built them a brand new website and helped photograph two years of the festival.",
    services: [
        "Web Design",
        "Photography"
    ],
    technologies: [
        "Squarespace",
        "Vanilla CSS",
        "Adobe Photoshop",
        "Adobe Lightroom"
    ],
    featured: true,
    category: "Event",
  },
  {
    id: "3",
    name: "Connor Meade",
    slug: "connor-meade",
    image: "connor-meade",
    website: "https://connormeade.com",
    description:
      "Connor Meade is a Metro Detroit-based turned Brooklyn-based stand-up comedian. We built her website with a dynamic show spreadsheet that Connor can easily keep updated.",
    services: ["Web Design"],
    technologies: [
        "Next.js",
        "Tailwind CSS",
        "Google API",
        "Vercel"
    ],
    featured: false,
    category: "Performer",
  },
  {
    id: "4",
    name: "Priscilla Hankins",
    slug: "priscilla-hankins",
    image: "priscilla-hankins",
    website: "https://priscillahankins.com",
    description:
      "Priscilla Hankins is an End-of-Life Doula based in the Detroit area. We created a warm, professional website redesign that speaks to her compassionate practice.",
    services: ["Web Design"],
    technologies: [
        "Squarespace",
        "Vanilla CSS",
        "Adobe Photoshop"
    ],
    featured: false,
    category: "Professional",
  },
  {
    id: "5",
    name: "Alice Duhon",
    slug: "alice-duhon",
    image: "alice-duhon",
    website: "https://aliceduhon.com",
    description:
      "Alice Duhon is a Chicago-based stand-up comedian, dancer, and retired theater kid. We handle her website.",
    services: ["Web Design"],
    technologies: [
        "HTML5",
        "TailwindCSS",
        "Adobe Photoshop"
    ],
    featured: false,
    category: "Performer",
  },
  {
    id: "6",
    name: "Nic Gumina",
    slug: "nic-gumina",
    image: "nic-gumina-1",
    website: "https://nicgumina.com",
    description:
      "Nic Gumina is a Cloud Security Consultant who needed a professional website and a high-quality headshot to match.",
    services: [
        "Web Design",
        "Photography"
    ],
    technologies: [
        "Next.js",
        "TailwindCSS",
        "Framer",
        "Adobe Photoshop"
    ],
    featured: true,
    category: "Professional",
  },
];

export const getFeaturedClients = (): Client[] =>
  clients.filter((c) => c.featured);

export const getAllClients = (): Client[] => clients;