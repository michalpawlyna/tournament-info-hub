
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-dark-gradient">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-tech-cyan/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-tech-blue/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-cyan/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">RoboChampions</span>
            <br />
            <span className="text-foreground">2024</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Największy turniej robotyki w Polsce. Konkurencje dla wszystkich poziomów zaawansowania.
          </p>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 tech-glow">
              <Calendar className="text-tech-cyan" size={24} />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Data</p>
                <p className="font-semibold">15-17 Marca 2024</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 tech-glow">
              <MapPin className="text-tech-cyan" size={24} />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Miejsce</p>
                <p className="font-semibold">Warszawa, Expo XXI</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 bg-card/50 backdrop-blur-sm rounded-lg p-4 tech-glow">
              <Users className="text-tech-cyan" size={24} />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Uczestnicy</p>
                <p className="font-semibold">500+ Zawodników</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-tech-gradient hover:opacity-90 text-background font-semibold px-8 py-3 text-lg tech-glow"
            >
              Zobacz Konkurencje
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-background px-8 py-3 text-lg"
            >
              Pobierz Regulamin
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-tech-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
