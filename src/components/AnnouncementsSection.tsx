
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, AlertCircle, Star, Trophy, Bell } from 'lucide-react';
import { fetchAnnouncements, Announcement } from '@/services/api';

const AnnouncementsSection = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAnnouncements = async () => {
      setLoading(true);
      const data = await fetchAnnouncements();
      setAnnouncements(data);
      setLoading(false);
    };

    loadAnnouncements();
  }, []);

  const getTypeIcon = (type: string) => {
    const icons = {
      important: AlertCircle,
      news: Star,
      update: Calendar,
      milestone: Trophy,
      event: Calendar
    };
    return icons[type as keyof typeof icons] || Bell;
  };

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

  if (loading) {
    return (
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-tech-cyan mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Ładowanie ogłoszeń...</p>
          </div>
        </div>
      </section>
    );
  }

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
            const IconComponent = getTypeIcon(announcement.type);
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
                          {formatDate(announcement.publishedAt)}
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

        {announcements.length === 0 && !loading && (
          <div className="text-center">
            <p className="text-muted-foreground">Brak dostępnych ogłoszeń.</p>
          </div>
        )}

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
