
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, AlertCircle, Star, Trophy } from 'lucide-react';

const AnnouncementsSection = () => {
  const announcements = [
    {
      id: 1,
      title: "Przedłużono termin rejestracji!",
      content: "Ze względu na duże zainteresowanie, przedłużamy termin rejestracji do 28 lutego 2024. Nie przegap swojej szansy na udział w największym turnieju robotyki!",
      date: "2024-02-15",
      type: "important",
      icon: AlertCircle
    },
    {
      id: 2,
      title: "Nowy sponsor główny - TechCorp Solutions",
      content: "Z radością ogłaszamy, że TechCorp Solutions zostało naszym głównym sponsorem! Dzięki temu nagrody w tym roku będą jeszcze atrakcyjniejsze.",
      date: "2024-02-12",
      type: "news",
      icon: Star
    },
    {
      id: 3,
      title: "Aktualizacja regulaminu konkurencji Sumo",
      content: "Wprowadziliśmy drobne zmiany w regulaminie konkurencji Sumo Robotów. Wszystkie zmiany zostały wyróżnione w nowej wersji dokumentu dostępnej do pobrania.",
      date: "2024-02-10",
      type: "update",
      icon: Calendar
    },
    {
      id: 4,
      title: "Już 200 zarejestrowanych robotów!",
      content: "Osiągnęliśmy kamień milowy - 200 zarejestrowanych robotów! Poziom tegorocznej rywalizacji będzie rekordowy. Gratulujemy wszystkim uczestnikom!",
      date: "2024-02-08",
      type: "milestone",
      icon: Trophy
    },
    {
      id: 5,
      title: "Warsztaty przygotowawcze - 25 lutego",
      content: "Organizujemy bezpłatne warsztaty przygotowawcze dla uczestników turnieju. Spotkamy się 25 lutego w Centrum Technologii Warszawskiej. Rejestracja na stronie partnera.",
      date: "2024-02-05",
      type: "event",
      icon: Calendar
    }
  ];

  const getTypeStyles = (type: string) => {
    const styles = {
      important: "border-red-500/50 bg-red-500/10",
      news: "border-tech-cyan/50 bg-tech-cyan/10",
      update: "border-yellow-500/50 bg-yellow-500/10",
      milestone: "border-green-500/50 bg-green-500/10",
      event: "border-purple-500/50 bg-purple-500/10"
    };
    return styles[type as keyof typeof styles] || styles.news;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      important: "text-red-400",
      news: "text-tech-cyan",
      update: "text-yellow-400",
      milestone: "text-green-400",
      event: "text-purple-400"
    };
    return colors[type as keyof typeof colors] || colors.news;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Ogłoszenia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bądź na bieżąco z najnowszymi informacjami dotyczącymi turnieju
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {announcements.map((announcement) => {
            const IconComponent = announcement.icon;
            return (
              <Card 
                key={announcement.id} 
                className={`backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 ${getTypeStyles(announcement.type)}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${getTypeColor(announcement.type)} bg-current/10`}>
                      <IconComponent size={24} className={getTypeColor(announcement.type)} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {announcement.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {formatDate(announcement.date)}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {announcement.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-tech-gradient/10 rounded-2xl p-8 border border-tech-cyan/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Chcesz być na bieżąco?</h3>
            <p className="text-muted-foreground mb-6">
              Zapisz się do naszego newslettera, aby otrzymywać najświeższe informacje 
              o turnieju bezpośrednio na swoją skrzynkę pocztową.
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
    </section>
  );
};

export default AnnouncementsSection;
