export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  businessName: string;
  city: string;
  avatarUrl: string;
  metric: string;
  quote: string;
  verified: boolean;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface LiveComment {
  id: string;
  user: string;
  avatar: string;
  text: string;
  time: string;
  isOrder?: boolean;
  amount?: string;
}
