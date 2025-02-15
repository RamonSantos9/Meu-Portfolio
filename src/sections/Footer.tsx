import logoImage from "@/assets/images/logo.png";
import Image from "next/image";

const footerLinks = [
  { href: "#", label: "Contato" },
  { href: "#", label: "Política de Privacidade e Cookies" },
  { href: "#", label: "Termos e Condições" },
];

export default function Footer() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div>
            <Image src={logoImage} alt="Ramon Logo" width={60} height={60} />
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-white/50 text-sm">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}