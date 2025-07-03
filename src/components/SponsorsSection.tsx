
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { fetchSponsors, Sponsor } from '@/services/api';

const SponsorsSection = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSponsors = async () => {
      setLoading(true);
      const data = await fetchSponsors();
      setSponsors(data);
      setLoading(false);
    };

    loadSponsors();
  }, []);

  const groupSponsorsByCategory = (sponsors: Sponsor[]) => {
    return sponsors.reduce((acc, sponsor) => {
      if (!acc[sponsor.category]) {
        acc[sponsor.category] = [];
      }
      acc[sponsor.category].push(sponsor);
      return acc;
    }, {} as Record<string, Sponsor[]>);
  };

  const SponsorCard = ({ sponsor, size = 'medium' }: { sponsor: Sponsor, size?: 'large' | 'medium' | 'small' }) => {
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
              src={sponsor.logo?.url ? `http://localhost:3000${sponsor.logo.url}` : '/placeholder.svg'} 
              alt={sponsor.logo?.alt || sponsor.name}
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
          {sponsor.description && (
            <p className="text-sm text-muted-foreground mb-4">
              {sponsor.description}
            </p>
          )}
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

  const getCategoryTitle = (category: string) => {
    const titles = {
      main: 'Sponsor Główny',
      gold: 'Sponsorzy Złoci', 
      silver: 'Sponsorzy Srebrni',
      partners: 'Partnerzy'
    };
    return titles[category as keyof typeof titles] || category;
  };

  const getCategorySize = (category: string): 'large' | 'medium' | 'small' => {
    const sizes = {
      main: 'large' as const,
      gold: 'medium' as const,
      silver: 'small' as const,
      partners: 'small' as const
    };
    return sizes[category as keyof typeof sizes] || 'medium';
  };

  const getCategoryGridClass = (category: string) => {
    const classes = {
      main: 'max-w-md mx-auto',
      gold: 'grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto',
      silver: 'grid grid-cols-1 md:grid-cols-3 gap-6',
      partners: 'grid grid-cols-2 md:grid-cols-4 gap-4'
    };
    return classes[category as keyof typeof classes] || 'grid grid-cols-1 md:grid-cols-3 gap-6';
  };

  if (loading) {
    return (
      <section id="sponsors" className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-tech-cyan mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Ładowanie sponsorów...</p>
          </div>
        </div>
      </section>
    );
  }

  const groupedSponsors = groupSponsorsByCategory(sponsors);

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

        {Object.entries(groupedSponsors).map(([category, categorySponsors]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-tech-cyan">
              {getCategoryTitle(category)}
            </h3>
            <div className={getCategoryGridClass(category)}>
              {categorySponsors.map((sponsor) => (
                <SponsorCard 
                  key={sponsor.id} 
                  sponsor={sponsor} 
                  size={getCategorySize(category)} 
                />
              ))}
            </div>
          </div>
        ))}

        {sponsors.length === 0 && !loading && (
          <div className="text-center mb-16">
            <p className="text-muted-foreground">Brak dostępnych sponsorów.</p>
          </div>
        )}

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
