
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const CompetitionsSection = () => {
  const competitions = [
    {
      id: 1,
      name: "Sumo Robotów",
      description: "Klasyczna konkurencja polegająca na wypchnięciu robota przeciwnika poza ring. Kategorie: Mini Sumo (1kg) i Mega Sumo (3kg).",
      category: "Walka",
      ageGroup: "12-18 lat",
      participants: "64 robotów",
      prize: "10 000 zł"
    },
    {
      id: 2,
      name: "Line Following",
      description: "Robot musi jak najszybciej przejechać po wyznaczonej linii. Różne poziomy trudności tras z przeszkodami i skrzyżowaniami.",
      category: "Programowanie",
      ageGroup: "10-16 lat",
      participants: "120 robotów",
      prize: "8 000 zł"
    },
    {
      id: 3,
      name: "Freestyle",
      description: "Pokaz kreatywności! Roboty prezentują swoje unikalne umiejętności w 3-minutowym występie ocenianym przez jury.",
      category: "Kreatywność",
      ageGroup: "8-18 lat",
      participants: "45 robotów",
      prize: "12 000 zł"
    },
    {
      id: 4,
      name: "Maze Solver",
      description: "Autonomiczny robot musi znaleźć wyjście z labiryntu w jak najkrótszym czasie. Wykorzystuje algorytmy AI i czujniki.",
      category: "AI & Algorytmy",
      ageGroup: "14-20 lat",
      participants: "32 robotów",
      prize: "15 000 zł"
    },
    {
      id: 5,
      name: "Soccer Robots",
      description: "Drużyny robotów grają w piłkę nożną na specjalnie przygotowanym boisku. Wymagana współpraca między robotami.",
      category: "Teamwork",
      ageGroup: "12-18 lat",
      participants: "16 drużyn",
      prize: "20 000 zł"
    },
    {
      id: 6,
      name: "Drone Racing",
      description: "Wyścigi dronów na torze z przeszkodami. Kombinacja umiejętności pilotażu i konfiguracji technicznej drona.",
      category: "Wyścigi",
      ageGroup: "16-25 lat",
      participants: "80 pilotów",
      prize: "18 000 zł"
    }
  ];

  const handleDownloadRules = (competitionName: string) => {
    // Symulacja pobierania PDF
    console.log(`Pobieranie regulaminu dla: ${competitionName}`);
    // W rzeczywistej aplikacji tutaj byłby link do PDF
  };

  return (
    <section id="competitions" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Konkurencje</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wybierz spośród różnorodnych kategorii konkurencji dostosowanych do Twojego poziomu zaawansowania i zainteresowań
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map((competition) => (
            <Card key={competition.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-tech-cyan/50 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-tech-cyan bg-tech-cyan/10 px-3 py-1 rounded-full">
                    {competition.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {competition.ageGroup}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-tech-cyan transition-colors">
                  {competition.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {competition.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Uczestnicy:</span>
                    <span className="font-medium">{competition.participants}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Nagroda:</span>
                    <span className="font-bold text-tech-cyan">{competition.prize}</span>
                  </div>
                </div>

                <Button 
                  onClick={() => handleDownloadRules(competition.name)}
                  variant="outline" 
                  className="w-full border-tech-cyan/30 text-tech-cyan hover:bg-tech-cyan hover:text-background"
                >
                  <Download size={16} className="mr-2" />
                  Pobierz Regulamin
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-tech-gradient/10 rounded-2xl p-8 border border-tech-cyan/20">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Nie widzisz swojej kategorii?</h3>
            <p className="text-muted-foreground mb-6">
              Masz pomysł na nową konkurencję? Skontaktuj się z nami! Jesteśmy otwarci na nowe propozycje i innowacyjne kategorie zawodów.
            </p>
            <Button className="bg-tech-gradient hover:opacity-90 text-background font-semibold">
              Zaproponuj Konkurencję
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
