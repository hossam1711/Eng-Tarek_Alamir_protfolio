export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  whatsappMessage: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern web portfolio.",
    image: "/images/portfolio-screen.png",
    features: [
      "React / Next.js",
      "Responsive Design",
      "Performance Optimization"
    ],
    whatsappMessage: "Hello, I'm contacting for web portfolio service."
  },
  {
    id: 2,
    title: "Landing Page",
    description: "One web page for small businesses.",
    image: "/images/coffee-service.png",
    features: [
      "React / HTML, CSS, JavaScript",
      "Bootstrap, Tailwind",
      "Responsive Design"
    ],
    whatsappMessage: "Hello, I'm contacting for landing page service."
  },
  // يمكن إضافة المزيد من الخدمات هنا
];

export const whatsappConfig = {
  phoneNumber: "201030354268",
  defaultMessage: "Hello, I need a custom application.",
};