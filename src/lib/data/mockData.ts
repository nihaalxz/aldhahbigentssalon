import type { Service, GalleryItem, Barber, PricingItem, Testimonial, BlogPost, OpeningHour, Statistic } from '../types';

export const services: Service[] = [
  {
    id: 's1',
    name: 'Hair Cut',
    category: 'hair',
    description: 'A professional custom haircut designed for your individual face structure and style. Includes premium wash, scalp massage, and expert blowdry styling.',
    image: '/hair_cut.png',
    popular: true
  },
  {
    id: 's2',
    name: 'Precision Skin Fade',
    category: 'hair',
    description: 'High-detail seamless blending from skin to desired length using state-of-the-art clippers. Detailed foil shaver finish on edges and neck.',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 's3',
    name: 'Beard Trimming',
    category: 'grooming',
    description: 'Detailed trim and architectural lining using custom trimmers and straight razor edging. Completed with hot steam towel treatment and nourishing beard oil.',
    image: '/beard_trimming.png',
    popular: true
  },
  {
    id: 's4',
    name: 'Royal Beard Trim & Sculpt',
    category: 'grooming',
    description: 'Precision beard shaping and lining using clippers and straight razor. Finished with natural beard oils and steam therapy to moisturize skin.',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 's5',
    name: 'Classic Hair Styling',
    category: 'hair',
    description: 'Professional hair wash, blowdry, and styling using premium pomades, clays, or waxes to suit your daily or special event look.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 's6',
    name: 'Head Massage',
    category: 'treatment',
    description: 'Relaxing traditional massage incorporating warm, therapeutic organic oils to release neck and head tension, improve circulation, and condition the scalp.',
    image: '/head_massage.png',
    popular: true
  },
  {
    id: 's7',
    name: 'Nourishing Keratin Spa',
    category: 'treatment',
    description: 'Intense deep-conditioning therapy utilizing cold-pressed argan oil and organic proteins to strengthen follicles, eliminate frizz, and add healthy shine.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 's8',
    name: 'Little Prince Haircut',
    category: 'kids',
    description: 'Gentle and patient haircut service for boys under 12, featuring a friendly barber environment, soft shampoo, and a sweet treat treat afterwards.',
    image: 'https://images.unsplash.com/photo-1517832606589-7a598b647192?auto=format&fit=crop&q=80&w=800',
    popular: false
  },
  {
    id: 's9',
    name: 'Al Dhahabi Luxury Grooming Package',
    category: 'grooming',
    description: 'The ultimate royal experience: Signature Royal Haircut, Imperial Hot Towel Shave, Active Gold Facial, and standard pedicure & manicure. The absolute best Dubai has to offer.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
    popular: true
  }
];

export const gallery: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Textured Crop Fade',
    category: 'haircut',
    image: '/salon_interior_1.jpg'
  },
  {
    id: 'g2',
    title: 'Royal Straight Razor Lining',
    category: 'shave',
    image: '/salon_interior_2.jpg'
  },
  {
    id: 'g3',
    title: '24K Gold Facial Treatment',
    category: 'treatment',
    image: '/salon_interior_3.jpg'
  },
  {
    id: 'g4',
    title: 'Slick Back Pompadour Styling',
    category: 'styling',
    image: '/Salon_exterior.JPG.jpeg'
  }
];

export const barbers: Barber[] = [
  {
    id: 'b1',
    name: 'Karim Al-Masri',
    role: 'Master Barber & Founder',
    experience: '15+ Years',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    bio: 'Born in Damascus and trained in Paris, Karim brings over 15 years of luxury grooming expertise. He specializes in bespoke shear cuts and classic executive styles.',
    specialty: ['Shear Cuts', 'Classic Taper', 'Imperial Shave'],
    socials: {
      instagram: 'https://instagram.com/karim_barber',
      facebook: 'https://facebook.com/karim.barber'
    }
  },
  {
    id: 'b2',
    name: 'Marcus Vance',
    role: 'Senior Hair Stylist',
    experience: '8 Years',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    bio: 'Hailing from London, Marcus is known for his creative skin fades and modern textured cuts. His styling reflects the latest European streetwear aesthetics.',
    specialty: ['Drop Fade', 'Textured Crop', 'Keratin Treatments'],
    socials: {
      instagram: 'https://instagram.com/marcus_v_style',
      twitter: 'https://twitter.com/marcus_v_style'
    }
  },
  {
    id: 'b3',
    name: 'Youssef Mansour',
    role: 'Beard Sculptor & Facial Expert',
    experience: '10 Years',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600',
    bio: 'Youssef is an expert in beard dynamics and skin anatomy. He believes every beard tells a story and specializes in sculpting and organic skin therapy.',
    specialty: ['Beard Sculpting', 'Gold Therapy', 'Traditional Shave'],
    socials: {
      instagram: 'https://instagram.com/youssef_sculpts'
    }
  }
];

export const pricing: PricingItem[] = [
  // Hair Services
  { id: 'p1', name: 'Hair Cutting', category: 'Hair Services', popular: true },
  { id: 'p2', name: 'Child Haircut', category: 'Hair Services' },
  { id: 'p4', name: 'Hair Straightening', category: 'Hair Services' },
  { id: 'p5', name: 'Keratin Super Straightening', category: 'Hair Services', popular: true },

  // Beard & Shaving
  { id: 'p6', name: 'Beard Styling', category: 'Beard & Shaving', popular: true },
  { id: 'p7', name: 'Beard Trimming', category: 'Beard & Shaving' },
  { id: 'p8', name: 'Shaving', category: 'Beard & Shaving' },

  // Hair & Beard Coloring
  { id: 'p10', name: 'Beard Coloring', category: 'Hair & Beard Coloring' },
  { id: 'p11', name: 'Beard Special Color', category: 'Hair & Beard Coloring' },
  { id: 'p12', name: 'Hair Dye', category: 'Hair & Beard Coloring' },
  { id: 'p13', name: 'Hair Bleaching', category: 'Hair & Beard Coloring' },
  { id: 'p14', name: 'Garnier Color', category: 'Hair & Beard Coloring' },
  { id: 'p15', name: 'L\'oreal Color', category: 'Hair & Beard Coloring' },
  { id: 'p16', name: 'Hair Color L\'oreal Ammonia Free', category: 'Hair & Beard Coloring', popular: true },
  { id: 'p17', name: 'Hi-Speedy Color Ammonia Free', category: 'Hair & Beard Coloring' },
  { id: 'p18', name: 'Bigen Color', category: 'Hair & Beard Coloring' },
  { id: 'p19', name: 'Keratin Color', category: 'Hair & Beard Coloring' },
  { id: 'p20', name: 'Brimles Color', category: 'Hair & Beard Coloring' },

  // Spa & Treatments
  { id: 'p21', name: 'Face Massage', category: 'Spa & Treatments' },
  { id: 'p22', name: 'Hair Massage', category: 'Spa & Treatments' },
  { id: 'p23', name: 'Head Oil Massage', category: 'Spa & Treatments', popular: true },
  { id: 'p24', name: 'Facial Treatment', category: 'Spa & Treatments' },
  { id: 'p25', name: 'Dandruff Treatment', category: 'Spa & Treatments' },
  { id: 'p26', name: 'Face Bleaching', category: 'Spa & Treatments' },
  { id: 'p27', name: 'Waxing', category: 'Spa & Treatments' },
  { id: 'p28', name: 'Hair Waxing', category: 'Spa & Treatments' },
  { id: 'p29', name: 'Threading', category: 'Spa & Treatments' }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Alexander Rostova',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    review: 'The absolute finest grooming experience in Dubai. From the warm greetings at reception to Karim\'s unmatched skill with straight razor styling, every detail is absolute luxury.',
    date: '2 days ago'
  },
  {
    id: 't2',
    name: 'Fahad Al-Mansoori',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    review: 'I go to Youssef for the beard sculpt and hot towel treatment. The massage chair, ambient lighting, and gold facial left me feeling like a new man. Essential monthly treatment!',
    date: '1 week ago'
  },
  {
    id: 't3',
    name: 'David Beckmann',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    review: 'Marcus gave me a flawless skin fade. The tools are sanitized right in front of you, the coffee is premium espresso, and the soundtrack is tasteful. Recommended 10/10.',
    date: '2 weeks ago'
  }
];

export const blogs: BlogPost[] = [
  {
    slug: '5-dubai-grooming-trends',
    title: '5 Luxury Grooming Trends Every Dubai Gentleman Must Adopt',
    category: 'Grooming',
    date: 'June 18, 2026',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read',
    excerpt: 'Discover the latest haircut shapes, beard sculpting methodologies, and skincare formulations taking Dubai by storm this season.',
    content: `<p>Maintaining a sharp and elegant look is not just a preference in Dubai—it is a lifestyle. As the summer season reaches its peak, the modern gentleman requires techniques that offer both sophisticated aesthetics and structural resilience against the intense climate.</p>
              <p>In this post, we discuss the top five luxury grooming trends that our Master Barbers are implementing daily at Al Dhahabi Al Jadid Gents Salon.</p>
              <h3>1. The Return of the Executive Pompadour</h3>
              <p>While fades remain extremely popular, we are seeing a shift towards classical length. The mid-length pompadour with a clean side-part offers a timeless silhouette that transitions perfectly from board meetings in DIFC to evening yacht events.</p>
              <h3>2. Straight Razor Sculpting</h3>
              <p>Beards are no longer just trimmed; they are architecturally sculpted. Utilizing standard single-bevel straight razors allows our barbers to define crisp cheek lines that enhance the masculine jaw structure.</p>
              <h3>3. Anti-Pollution Gold Facials</h3>
              <p>The city dust and humidity can take a heavy toll on pores. Pure 24K gold foil facials serve as an antioxidant shield, restoring skin moisture and collagen elasticity instantly.</p>
              <h3>4. Organic Beard Hydration</h3>
              <p>Using cold-pressed jojoba and sandalwood oils keeps the beard soft and scented throughout the day, preventing dryness and flaky skin underneath.</p>`,
    author: {
      name: 'Karim Al-Masri',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
    },
    featured: true
  },
  {
    slug: 'perfect-beard-shape',
    title: 'The Science of Shaping a Beard for Your Face Structure',
    category: 'Beard Care',
    date: 'June 05, 2026',
    image: 'https://images.unsplash.com/photo-1605497746444-ac9dbd39f4a5?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read',
    excerpt: 'Your beard is a tool of proportion. Learn how to identify your face shape and craft a beard layout that highlights your best features.',
    content: `<p>A great beard can completely transform a man\'s face shape. The key is balance: using length and angles to make your overall profile as symmetrical and aesthetically pleasing as possible.</p>
              <p>Our expert beard sculptors share the core design concepts used to define beard layouts for different skull structures.</p>
              <h3>Square Face Shape</h3>
              <p>If you have a naturally strong jaw, you want to soften the edges. Keep the sides of your beard relatively short and close-cropped, while adding a slight roundness and length at the chin to elongate the face.</p>
              <h3>Round Face Shape</h3>
              <p>For rounder profiles, the objective is to add length and create angles. Keep the cheeks trimmed very short, and sculpt a boxier, square shape at the bottom of the chin to create the illusion of a stronger jaw structure.</p>
              <h3>Oval Face Shape</h3>
              <p>The oval face is highly symmetrical. Most beard shapes suit this profile. The key here is maintenance, ensuring sharp borders and clean neck skin lines to maintain the natural balance.</p>`,
    author: {
      name: 'Youssef Mansour',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=100'
    },
    featured: false
  },
  {
    slug: 'mens-skincare-essentials',
    title: 'Men\'s Skincare: Why Soap & Water Just Won\'t Cut It Anymore',
    category: 'Skincare',
    date: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read',
    excerpt: 'Masculine skin is thicker, oilier, and undergoes the daily micro-trauma of shaving. Here is a simplified but highly effective luxury skincare routine.',
    content: `<p>For years, men have overlooked skincare, relying on basic body wash or water. However, active masculine skin is structurally unique—it contains larger pores, produces double the sebum, and deals with razor abrasion.</p>
              <p>A luxury skincare routine is not about vanity; it is about preservation, cellular health, and preventing premature aging.</p>
              <h3>Step 1: Double Cleanse</h3>
              <p>Cleanse twice a day. Use an organic foaming gel containing salicylic acid to clear excess oils and pollutants trapped deep in the pores.</p>
              <h3>Step 2: Hydrate Internally</h3>
              <p>Apply a lightweight hyaluronic acid gel. Unlike heavy creams, gels absorb instantly, locking in water without leaving a greasy sheen on the forehead or nose.</p>
              <h3>Step 3: SPF Defense</h3>
              <p>The Dubai sun emits heavy UVA and UVB rays. An oil-free SPF 50 moisturizer is non-negotiable for protection against skin damage and spot formation.</p>`,
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
    },
    featured: false
  }
];

export const openingHours: OpeningHour[] = [
  { day: 'Monday', hours: '07:30 AM - 12:00 AM' },
  { day: 'Tuesday', hours: '07:30 AM - 12:00 AM' },
  { day: 'Wednesday', hours: '07:30 AM - 12:00 AM' },
  { day: 'Thursday', hours: '07:30 AM - 12:00 AM' },
  { day: 'Friday', hours: '07:30 AM - 12:00 PM, 02:00 PM - 12:00 AM' },
  { day: 'Saturday', hours: '07:30 AM - 12:00 AM' },
  { day: 'Sunday', hours: '07:30 AM - 12:00 AM' }
];

export const statistics: Statistic[] = [
  { id: 'st1', value: 5, suffix: '+', label: 'Years Experience' },
  { id: 'st2', value: 25, suffix: 'K', label: 'Happy Clients' },
  { id: 'st3', value: 4, suffix: '', label: 'Master Barbers' },
  { id: 'st4', value: 100, suffix: '%', label: 'Satisfaction Rate' }
];
