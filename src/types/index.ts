import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  price: string;
  pricePeriod: string;
  features: string[];
  Icon: LucideIcon;
  popular?: boolean;
}

export interface Template {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  price: string;
}
