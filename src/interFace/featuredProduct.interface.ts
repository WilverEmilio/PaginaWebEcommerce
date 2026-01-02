// src/interFace/featuredProduct.interface.ts
import { StaticImageData } from "next/image";

export interface FeaturedProductType {
  id: number;
  image: StaticImageData;
  title: string;
  category: {
    slug: string;
    nameCategory: string;
  };
  price: number;
  rating: number;
  quantity: number;
}
