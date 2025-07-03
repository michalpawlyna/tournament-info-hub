
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Settings, Trophy, Calendar } from 'lucide-react';

const StatsSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    teams: 0,
    robots: 0,
    competitions: 0,
    days: 0
  });

  const finalStats = {
    teams: 157,
    robots: 234,
    competitions: 6,
    days: 3
  };

  const statsData = [
    {
      id: 'teams',
      label: 'Zarejestrowane drużyny',
      value: animatedStats.teams,
      icon: Users,
      color: 'text-tech-cyan',
      bgColor: 'bg-tech-cyan/10'
    },
    {
      id: 'robots',
      label: 'Zgłoszone roboty',
      value: animatedStats.robots,
      icon: Settings,
      color: 'text-tech-blue',
      bgColor: 'bg-tech-blue/10'
    },
    {
      id: 'competitions',
      label: 'Konkurencje',
      value: animatedStats.competitions,
      icon: Trophy,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      id: 'days',
      label: 'Dni zawodów',
      value: animatedStats.days,
      icon: Calendar,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    }
  ];

  const competitionStats = [
    { name: 'Sumo Robotów', count: 64 },
    { name: 'Line Following', count: 52 },
    { name: 'Freestyle', count: 28 },
    { name: 'Maze Solver', count: 31 },
    { name: 'Soccer Robots', count: 24 },
    { name: 'Drone Racing', count: 35 }
  ];

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          teams: Math.round(finalStats.teams * progress),
          robots: Math.round(finalStats.robots * progress),
          competitions: Math.round(finalStats.competitions * progress),
          days: Math.round(finalStats.days * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Statystyki na żywo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aktualne liczby pokazujące skalę tegorocznego turnieju
          </p>
        </div>

        {/* Główne statystyki */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statsData.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-tech-cyan/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-4`}>
                    <IconComponent size={32} className={stat.color} />
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statystyki per konkurencja */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-tech-cyan">
            Zgłoszenia per konkurencja
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitionStats.map((competition, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {competition.name}
                      </h4>
                      <div className="text-2xl font-bold text-tech-cyan">
                        {competition.count}
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-muted-foreground/20">
                      #{index + 1}
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-tech-gradient h-2 rounded-full transition-all duration-1000"
                        style={{
                          width: `${(competition.count / Math.max(...competitionStats.map(c => c.count))) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dodatkowe statystyki */}
        <div className="bg-tech-gradient/10 rounded-2xl p-8 border border-tech-cyan/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
            Inne ciekawe liczby
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-tech-cyan mb-2">23</div>
              <div className="text-sm text-muted-foreground">Województwa reprezentowane</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-cyan mb-2">89</div>
              <div className="text-sm text-muted-foreground">Szkół uczestniczących</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-cyan mb-2">15</div>
              <div className="text-sm text-muted-foreground">Krajów zainteresowanych</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-cyan mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Oczekiwanych widzów</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
