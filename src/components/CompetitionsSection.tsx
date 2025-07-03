
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { fetchCompetitions, Competition } from '@/services/api';

const CompetitionsSection = () => {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCompetitions = async () => {
      setLoading(true);
      const data = await fetchCompetitions();
      setCompetitions(data);
      setLoading(false);
    };

    loadCompetitions();
  }, []);

  const handleDownloadRules = (competition: Competition) => {
    if (competition.rules?.url) {
      window.open(`http://localhost:3000${competition.rules.url}`, '_blank');
    } else {
      console.log(`Pobieranie regulaminu dla: ${competition.name}`);
      // Fallback jeśli nie ma pliku
    }
  };

  if (loading) {
    return (
      <section id="competitions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-tech-cyan mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Ładowanie konkurencji...</p>
          </div>
        </div>
      </section>
    );
  }

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
                  {competition.ageGroup && (
                    <span className="text-sm text-muted-foreground">
                      {competition.ageGroup}
                    </span>
                  )}
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
                  {competition.participants && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Uczestnicy:</span>
                      <span className="font-medium">{competition.participants}</span>
                    </div>
                  )}
                  {competition.prize && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Nagroda:</span>
                      <span className="font-bold text-tech-cyan">{competition.prize}</span>
                    </div>
                  )}
                </div>

                <Button 
                  onClick={() => handleDownloadRules(competition)}
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

        {competitions.length === 0 && !loading && (
          <div className="text-center">
            <p className="text-muted-foreground">Brak dostępnych konkurencji.</p>
          </div>
        )}

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
