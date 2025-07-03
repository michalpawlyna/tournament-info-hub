
import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tournament: [
      { name: 'O Turnieju', href: '#about' },
      { name: 'Konkurencje', href: '#competitions' },
      { name: 'Regulamin', href: '#' },
      { name: 'Harmonogram', href: '#' }
    ],
    participants: [
      { name: 'Rejestracja', href: '#' },
      { name: 'Dla uczestników', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Materiały', href: '#' }
    ],
    organization: [
      { name: 'Sponsorzy', href: '#sponsors' },
      { name: 'Organizatorzy', href: '#organizers' },
      { name: 'Kontakt', href: '#contact' },
      { name: 'Prasa', href: '#' }
    ],
    legal: [
      { name: 'Polityka prywatności', href: '#' },
      { name: 'Regulamin strony', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'RODO', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo i opis */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">RC</span>
              </div>
              <span className="text-xl font-bold text-gradient">RoboChampions</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Największy turniej robotyki w Polsce. Łączymy pasję do technologii 
              z duchem rywalizacji, tworząc niezapomniane doświadczenia dla młodych inżynierów.
            </p>
            
            {/* Kontakt bezpośredni */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-tech-cyan" />
                <span className="text-muted-foreground">info@robochampions.pl</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-tech-cyan" />
                <span className="text-muted-foreground">+48 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin size={16} className="text-tech-cyan" />
                <span className="text-muted-foreground">Warszawa, ul. Technologiczna 12</span>
              </div>
            </div>
          </div>

          {/* Linki - Turniej */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Turniej</h4>
            <ul className="space-y-2">
              {footerLinks.tournament.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-tech-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Linki - Uczestnicy */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Uczestnicy</h4>
            <ul className="space-y-2">
              {footerLinks.participants.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-tech-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Linki - Organizacja */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Organizacja</h4>
            <ul className="space-y-2">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-tech-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Linki - Prawne */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Informacje prawne</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-tech-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="bg-tech-gradient/10 rounded-2xl p-6 border border-tech-cyan/20">
            <div className="text-center">
              <h4 className="text-xl font-bold mb-2 text-gradient">Bądź na bieżąco!</h4>
              <p className="text-muted-foreground mb-4">
                Zapisz się do newslettera i otrzymuj najświeższe informacje o turnieju
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Twój adres email"
                  className="flex-1 px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-cyan"
                />
                <button className="bg-tech-gradient hover:opacity-90 text-background font-semibold px-6 py-2 rounded-lg">
                  Zapisz się
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media i Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} RoboChampions. Wszystkie prawa zastrzeżone.
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">Śledź nas:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-tech-cyan transition-colors"
                  aria-label={social.name}
                >
                  <ExternalLink size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
