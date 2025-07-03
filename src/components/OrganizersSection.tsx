
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const OrganizersSection = () => {
  const mainOrganizer = {
    name: "Polish Robotics Foundation",
    logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=100&fit=crop&q=80",
    description: "Fundacja Polish Robotics Foundation od 2015 roku promuje edukację STEM i rozwój robotyki w Polsce. Organizujemy warsztaty, kursy i konkursy dla młodych inżynierów.",
    website: "https://polishrobotics.org",
    achievements: [
      "Ponad 10 000 przeszkolonych uczniów",
      "50+ partnerstw z szkołami",
      "Międzynarodowe nagrody za innowacje edukacyjne"
    ]
  };

  const coOrganizers = [
    {
      id: 1,
      name: "Warsaw University of Technology",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=150&h=75&fit=crop&q=80",
      description: "Politechnika Warszawska zapewnia wsparcie merytoryczne, bazę lokalową oraz sędziów kompetentnych w dziedzinie robotyki.",
      website: "https://pw.edu.pl"
    },
    {
      id: 2,
      name: "National Institute of Technology",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&h=75&fit=crop&q=80",
      description: "Narodowy Instytut Technologii wspiera turniej poprzez dostarczanie najnowszych technologii i sprzętu do zawodów.",
      website: "https://nit.gov.pl"
    },
    {
      id: 3,
      name: "Innovation Hub Warsaw",
      logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=150&h=75&fit=crop&q=80",
      description: "Centrum Innowacji w Warszawie odpowiada za promocję wydarzenia oraz wsparcie logistyczne podczas organizacji turnieju.",
      website: "https://innovationhub.pl"
    }
  ];

  return (
    <section id="organizers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Organizatorzy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Poznaj zespół pasjonatów, którzy sprawiają, że RoboChampions staje się rzeczywistością
          </p>
        </div>

        {/* Główny Organizator */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-tech-cyan">Główny Organizator</h3>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <img 
                    src={mainOrganizer.logo} 
                    alt={mainOrganizer.name}
                    className="mx-auto lg:mx-0 rounded-lg mb-4 w-48 h-24 object-cover"
                  />
                  <h4 className="text-2xl font-bold mb-4 text-gradient">{mainOrganizer.name}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {mainOrganizer.description}
                  </p>
                  <a 
                    href={mainOrganizer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-tech-cyan hover:text-tech-blue transition-colors"
                  >
                    Odwiedź naszą stronę
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-tech-gradient/10 rounded-xl p-6 border border-tech-cyan/20">
                  <h5 className="font-bold mb-4 text-tech-cyan">Nasze osiągnięcia:</h5>
                  <ul className="space-y-2">
                    {mainOrganizer.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Współorganizatorzy */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-tech-cyan">Współorganizatorzy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coOrganizers.map((organizer) => (
              <Card key={organizer.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-tech-cyan/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <img 
                    src={organizer.logo} 
                    alt={organizer.name}
                    className="mx-auto rounded-lg mb-4 w-32 h-16 object-cover"
                  />
                  <h4 className="text-xl font-bold mb-3 group-hover:text-tech-cyan transition-colors">
                    {organizer.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {organizer.description}
                  </p>
                  <a 
                    href={organizer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-tech-cyan hover:text-tech-blue transition-colors text-sm"
                  >
                    Więcej informacji
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Zespół organizacyjny */}
        <div className="text-center">
          <div className="bg-tech-gradient/10 rounded-2xl p-8 border border-tech-cyan/20">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Nasz zespół</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Za sukcesem RoboChampions stoi zespół ponad 50 wolontariuszy, 
              sędziów technicznych i koordynatorów, którzy z pasją pracują nad każdym szczegółem wydarzenia.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-cyan mb-2">15</div>
                <div className="text-sm text-muted-foreground">Sędziów technicznych</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-cyan mb-2">35</div>
                <div className="text-sm text-muted-foreground">Wolontariuszy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-cyan mb-2">8</div>
                <div className="text-sm text-muted-foreground">Koordynatorów</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-cyan mb-2">6</div>
                <div className="text-sm text-muted-foreground">Lat doświadczenia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
