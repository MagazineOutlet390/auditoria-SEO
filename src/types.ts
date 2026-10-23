export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNumeric: number;
  highlighted?: boolean;
  deliverables: string[];
  description: string;
  whatsappMessage: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  actionLabel: string;
  actionUrl: string;
}

export type SocialProofItem =
  | {
      id: string;
      type: 'youtube-video';
      videoId: string;
      title: string;
      author?: string;
      subtitle?: string;
      youtubeUrl: string;
      thumbnailUrl: string;
    }
  | {
      id: string;
      type: 'google-review-screenshot';
      title: string;
      author?: string;
      screenshotUrl?: string;
      directReviewUrl: string;
      isPendingScreenshot?: boolean;
      description?: string;
    };

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TargetSegment {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefit: string;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  body: string[]; // Portable Text blocks or markdown paragraphs
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  mainImage?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
  seoTitle?: string;
  metaDescription?: string;
  readingTimeMinutes: number;
}
