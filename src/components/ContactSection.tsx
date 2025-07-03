
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formularz wysłany:', formData);
    // Tutaj byłaby logika wysyłania formularza
    alert('Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@robochampions.pl',
      description: 'Odpowiadamy w ciągu 24h'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+48 123 456 789',
      description: 'Pon-Pt: 9:00-17:00'
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'ul. Technologiczna 12, 00-001 Warszawa',
      description: 'Centrum Organizacyjne'
    },
    {
      icon: Clock,
      title: 'Godziny pracy',
      content: 'Poniedziałek - Piątek',
      description: '9:00 - 17:00'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Kontakt</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Masz pytania? Potrzebujesz pomocy? Skontaktuj się z nami!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informacje kontaktowe */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-tech-cyan">Skontaktuj się z nami</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-tech-cyan/10 rounded-lg flex items-center justify-center">
                        <IconComponent size={24} className="text-tech-cyan" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-tech-cyan font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mapa (placeholder) */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-0">
                <div className="h-64 bg-tech-gradient/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-tech-cyan mx-auto mb-4" />
                    <p className="text-foreground font-medium">Centrum Expo XXI</p>
                    <p className="text-muted-foreground text-sm">Warszawa, ul. Prądzyńskiego 12/14</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formularz kontaktowy */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-tech-cyan">Napisz do nas</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-cyan"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-cyan"
                      placeholder="jan@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Temat *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-cyan"
                  >
                    <option value="">Wybierz temat</option>
                    <option value="registration">Pytania o rejestrację</option>
                    <option value="rules">Regulamin i zasady</option>
                    <option value="technical">Wsparcie techniczne</option>
                    <option value="sponsorship">Sponsoring</option>
                    <option value="media">Współpraca medialna</option>
                    <option value="other">Inne</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-cyan resize-none"
                    placeholder="Opisz swoje pytanie lub problem..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-tech-gradient hover:opacity-90 text-background font-semibold py-3"
                >
                  <Send size={20} className="mr-2" />
                  Wyślij wiadomość
                </Button>
              </form>

              <div className="mt-6 p-4 bg-tech-cyan/10 rounded-lg border border-tech-cyan/20">
                <p className="text-sm text-muted-foreground">
                  <strong>Uwaga:</strong> Odpowiadamy na wszystkie wiadomości w ciągu 24 godzin w dni robocze. 
                  W przypadku pilnych spraw prosimy o kontakt telefoniczny.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
