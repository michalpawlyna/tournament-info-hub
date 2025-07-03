
const API_BASE_URL = 'http://localhost:3000/api';

export interface Competition {
  id: string;
  name: string;
  description: string;
  category: string;
  ageGroup: string;
  participants: string;
  prize: string;
  rules?: {
    url: string;
    filename: string;
  };
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'important' | 'news' | 'update' | 'milestone' | 'event';
  publishedAt: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: {
    url: string;
    alt: string;
  };
  website: string;
  category: 'main' | 'gold' | 'silver' | 'partners';
  description?: string;
}

export const fetchCompetitions = async (): Promise<Competition[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/competitions`);
    if (!response.ok) throw new Error('Failed to fetch competitions');
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error('Error fetching competitions:', error);
    return [];
  }
};

export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/announcements?sort=-publishedAt`);
    if (!response.ok) throw new Error('Failed to fetch announcements');
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return [];
  }
};

export const fetchSponsors = async (): Promise<Sponsor[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/sponsors`);
    if (!response.ok) throw new Error('Failed to fetch sponsors');
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error('Error fetching sponsors:', error);
    return [];
  }
};
