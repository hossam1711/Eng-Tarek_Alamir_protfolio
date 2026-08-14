export interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },

  { name: "Contact", path: "#contact" },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/tarek-alamir",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  twitter: "https://twitter.com/",
  whatsapp: "https://wa.me/201289324826",
  email: "mailto:t.alamir3333@gmail.com",
};

export const contactInfo = {
  phone: "+201289324826",
  email: "t.alamir3333@gmail.com",
  whatsappNumber: "201289324826",
};
