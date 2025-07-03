
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CompetitionsSection from '@/components/CompetitionsSection';
import StatsSection from '@/components/StatsSection';
import SponsorsSection from '@/components/SponsorsSection';
import OrganizersSection from '@/components/OrganizersSection';
import AnnouncementsSection from '@/components/AnnouncementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <CompetitionsSection />
      <StatsSection />
      <SponsorsSection />
      <OrganizersSection />
      <AnnouncementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
