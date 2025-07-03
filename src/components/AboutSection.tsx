
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">O Turnieju</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-tech-cyan">Nasza Misja</h3>
                <p className="text-muted-foreground leading-relaxed">
                  RoboChampions to więcej niż turniej - to platforma dla młodych innowatorów, 
                  inżynierów i pasjonatów technologii. Naszym celem jest promowanie edukacji STEM 
                  oraz inspirowanie następnego pokolenia twórców robotów.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-tech-cyan">Historia</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Od 2018 roku organizujemy turniej, który stał się najważniejszym wydarzeniem 
                  robotycznym w Polsce. Każdego roku gromadzi setki zawodników z całego kraju, 
                  tworząc społeczność pasjonatów robotyki.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-tech-cyan">Dla Kogo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Turniej skierowany jest do uczniów szkół podstawowych, średnich oraz studentów. 
                  Mamy kategorie dla początkujących jak i zaawansowanych konstruktorów robotów. 
                  Każdy znajdzie swoją kategorię!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-tech-cyan">Nagrody</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zwycięzcy otrzymują nagrody o łącznej wartości ponad 50 000 zł, 
                  w tym sprzęt robotyczny, kursy programowania oraz stypendia na studia techniczne. 
                  Dodatkowo wszyscy uczestnicy otrzymują certyfikaty uczestnictwa.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 p-8 bg-tech-gradient/10 rounded-2xl border border-tech-cyan/20">
            <h3 className="text-3xl font-bold mb-4 text-gradient">Liczby, które mówią same za siebie</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-tech-cyan mb-2">6</div>
                <div className="text-sm text-muted-foreground">Lat doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-tech-cyan mb-2">2500+</div>
                <div className="text-sm text-muted-foreground">Uczestników</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-tech-cyan mb-2">15</div>
                <div className="text-sm text-muted-foreground">Konkurencji</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-tech-cyan mb-2">50k</div>
                <div className="text-sm text-muted-foreground">Wartość nagród (zł)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
