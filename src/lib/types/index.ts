export interface Service {
  id: string;
  name: string;
  category: 'hair' | 'grooming' | 'treatment' | 'kids';
  description: string;
  image: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'haircut' | 'shave' | 'treatment' | 'styling';
  image: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  experience: string;
  photo: string;
  bio: string;
  specialty: string[];
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface PricingItem {
  id: string;
  name: string;
  category: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  avatar: string;
  review: string;
  date: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  excerpt: string;
  content: string; // HTML or Markdown paragraphs
  author: {
    name: string;
    avatar: string;
  };
  featured?: boolean;
}

export interface OpeningHour {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
}
