import { StaticImageData } from 'next/image';
import React from 'react';
// context api data type
export interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  MenuCloseToggle?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  setInputValue:React.Dispatch<React.SetStateAction<boolean>>
  setSideMenuOpen:React.Dispatch<React.SetStateAction<boolean>>
  setCloseMenuItem:React.Dispatch<React.SetStateAction<boolean>>
  inputValue:boolean;
  closeMenuItem:boolean;
  inputTogglePage:() => void;
  // filterType, setFilterType
  filterType:string;
  setFilterType:React.Dispatch<React.SetStateAction<string>>;
}
//home-categories type
export interface categoriesType{
  id:number;
  icon:()=> JSX.Element;
  title:string;
  description:string;
}

//counter_data type
export interface counterType{
  id:number;
  countNum:number
  countTitle:string;
  counterIcon:string
}

// gallery type
export interface galleryType{
  id:number;
  image:StaticImageData;
  icon:string;
  category?:string;
  filterData?:any;
  title?:string;
  info?:string
}

// gallery category type
export interface galleryCategoryType{
  id:number;
  category:string
}
// team type
interface socialIconType{
  id:number;
  socialLink:string;
  icon:string;
}
export interface teamType{
  id:number;
  image:StaticImageData;
  authorName:string;
  destination:string;
  socialIcon:socialIconType[]
}


// product type
// Interfaz para productos destacados
export interface productsType {
  id: number;
  productName: string; // Cambia 'title' por 'productName'
  slug: string; // Agrega 'slug'
  description: string; // Agrega 'description'
  price: number;
  quantity: number;
  stock: number; // Agrega 'stock'
  images: {
    id: number;
    url: string;
  }[];
  category: {
    slug: string;
    nameCategory: string;
  };
}

//hero type
export interface heroType{
id:number;
image:StaticImageData;
title:string;
info:string;
desc:string;
}
//service type
export interface serviceType{
  id:number;
  image:StaticImageData;
  title:string;
  desc:string;
  active?:string
}

//productCategoryType
export interface productCategoryType{
  id:number;
  category:string;
  icon:string;
}
// id type
export interface idType {
  id: number;
}

// brands type
export interface brandsType {
  id: number;
  image: StaticImageData;
}

// testimonial type
export interface testimonialType {
  id: number;
  image: StaticImageData;
  description: string;
  authorName:string;
  destination:string;
}

// blog type
interface blogInfoType{
  id:number;
  icon:string;
  info:string;
}
export interface blogsType {
  id: number;
  image:StaticImageData;
  title:string;
  blogInfo?:blogInfoType[];
  desc?:string;
  date?:string
}

// pricing plan
interface PricingListItemType {
  id: number;
  info: string;
  icon?: string;
}

export interface PricingPlanItemType {
  id: number;
  image:StaticImageData;
  title: string;
  pricingList?: PricingListItemType[];
  price: number | string;
  active?:string;
}


//Interfaz para poder mostrar los productos destacados
export interface Product {
  id: number;
  productName: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  stock: number;
  images: {
    id: number;
    url: string;
  }[];
  category: {
    slug: string;
    nameCategory: string;
  }
}

// Interfaz corregida para poder mostrar las categorías de los productos
export interface Category {
  id: number;
  nameCategory: string;
  slug: string;
  image: {
    id: number;
    url: string;
  };
}


// Interfaz para mostrar los daots de la página de About
export interface About {
  id: number;
    Title: string;
    About_Us: string;
    phrase: string;
    What_We_Do_Description: string;
    What_We_Do_OneTitle: string;
    What_We_Do_OneDescription: string;
    What_We_Do_TwoTitle: string;
    What_We_Do_TwoDescription: string;
    What_We_Do_ThreeTitle: string;
    What_We_Do_ThreeDescription: string;
    About_Principal: {
        id: number;
          url: string;

    };
    About_Secundario: {

        id: number;
          url: string;

    };
    Question: {

        id: number;
          url: string;

    };
    image: {

        id: number;
          url: string;

    };
}

//Interfaz para mostrar los datos de las preguntas
export interface Questions {
  id: number;
    Question: string;
    Response: string;
}

export interface Home{
  id: number;
    phrase: string;
    info: string;
    description: string;
    image: {

        id: number;
          url: string;


    };
}

export interface Experience {
  id: number;
    number: number;
    counterIcon: string;
    Title: string;
}

export interface serviceType  {
  id: number; 
  Title: string;
  description: string;
  images: {
    id: number;
    url: string;
  }[];
}

export interface serviceType2  {
  id: number; 
  Title: string;
  description: string;
  phrase: string;
  images: {
    id: number;
    url: string;
  }[];
}

export interface serviceImgType {
  id: number;
  Title: string;
  description: string;
  start: {
    id: number;
    url: string;
  };
  imagen2: {
    id: number;
    url: string;
  };
}