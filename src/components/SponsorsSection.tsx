
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const SponsorsSection = () => {
  const sponsors = {
    main: [
      {
        id: 1,
        name: "TechCorp Solutions",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
        website: "https://techcorp.com",
        description: "Główny sponsor technologiczny"
      }
    ],
    gold: [
      {
        id: 2,
        name: "RoboTech Industries",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=75&fit=crop&q=80",
        website: "https://robotech.com",
        description: "Dostawca komponentów robotycznych"
      },
      {
        id: 3,
        name: "AI Innovations Lab",
        logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=150&h=75&fit=crop&q=80",
        website: "https://ailab.com",
        description: "Sponsor kategorii AI"
      }
    ],
    silver: [
      {
        id: 4,
        name: "CodeAcademy Plus",
        logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=60&fit=crop&q=80",
        website: "https://codeacademy.com",
        description: "Partner edukacyjny"
      },
      {
        id: 5,
        name: "MakerSpace Warsaw",
        logo: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=120&h=60&fit=crop&q=80",
        website: "https://makerspace.com",
        description: "Przestrzeń dla twórców"
      },
      {
        id: 6,
        name: "Electronics Hub",
        logo: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=120&h=60&fit=crop&q=80",
        website: "https://electronics.com",
        description: "Sklep elektroniczny"
      }
    ],
    partners: [
      {
        id: 7,
        name: "University of Technology",
        logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=50&fit=crop&q=80",
        website: "https://university.edu",
        description: "Partner akademicki"
      },
      {
        id: 8,
        name: "Innovation Center",
        logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=50&fit=crop&q=80",
        website: "https://innovation.com",
        description: "Centrum innowacji"
      },
      {
        id: 9,
        name: "Future Engineers",
        logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=100&h=50&fit=crop&q=80",
        website: "https://futureeng.com",
        description: "Fundacja edukacyjna"
      },
      {
        id: 10,
        name: "Tech Media",
        logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop&q=80",
        website: "https://techmedia.com",
        description: "Partner medialny"
      }
    ]
  };

  const SponsorCard = ({ sponsor, size = 'medium' }: { sponsor: any, size?: 'large' | 'medium' | 'small' }) => {
    const sizeClasses = {
      large: 'p-8',
      medium: 'p-6',
      small: 'p-4'
    };

    return (
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-tech-cyan/50 transition-all duration-300 group">
        <CardContent className={`${sizeClasses[size]} text-center`}>
          <div className="mb-4">
            <img 
              src={sponsor.logo} 
              alt={sponsor.name}
              className="mx-auto rounded-lg object-cover"
              style={{
                width: size === 'large' ? '200px' : size === 'medium' ? '150px' : '100px',
                height: size === 'large' ? '100px' : size === 'medium' ? '75px' : '50px'
              }}
            />
          </div>
          <h3 className="font-bold text-foreground group-hover:text-tech-cyan transition-colors mb-2">
            {sponsor.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {sponsor.description}
          </p>
          <a 
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-tech-cyan hover:text-tech-blue transition-colors text-sm"
          >
            Odwiedź stronę
            <ExternalLink size={14} className="ml-1" />
          </a>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="sponsors" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Sponsorzy & Partnerzy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dziękujemy naszym partnerom za wsparcie i wiarę w rozwój polskiej robotyki
          </p>
        </div>

        {/* Sponsor Główny */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-tech-cyan">Sponsor Główny</h3>
          <div className="max-w-md mx-auto">
            {sponsors.main.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} size="large" />
            ))}
          </div>
        </div>

        {/* Sponsorzy Złoci */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-tech-cyan">Sponsorzy Złoci</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.gold.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} size="medium" />
            ))}
          </div>
        </div>

        {/* Sponsorzy Srebrni */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-tech-cyan">Sponsorzy Srebrni</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsors.silver.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} size="small" />
            ))}
          </div>
        </div>

        {/* Partnerzy */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-tech-cyan">Partnerzy</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sponsors.partners.map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} size="small" />
            ))}
          </div>
        </div>

        {/* CTA dla potencjalnych sponsorów */}
        <div className="text-center">
          <div className="bg-tech-gradient/10 rounded-2xl p-8 border border-tech-cyan/20">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Zostań naszym partnerem!</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Dołącz do grona firm wspierających rozwój młodych talentów w dziedzinie robotyki. 
              Oferujemy różnorodne pakiety sponsorskie dostosowane do Twoich potrzeb.
            </p>
            <div className="space-x-4">
              <button className="bg-tech-gradient hover:opacity-90 text-background font-semibold px-6 py-3 rounded-lg">
                Pakiety Sponsorskie
              </button>
              <button className="border border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-background px-6 py-3 rounded-lg transition-colors">
                Skontaktuj się z nami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
