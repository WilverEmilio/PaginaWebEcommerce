import { productsType } from "@/interFace/interFace";

const products_data: productsType[] = [
  {
    id: 1,
    productName: "Blackberries Head",
    slug: "blackberries-head",
    description: "Fresh blackberries directly from the farm.",
    price: 49.99,
    quantity: 0,
    stock: 20,
    images: [
      { id: 1, url: "/assets/img/product/product4.png" }
    ],
    category: {
      slug: "vegetables",
      nameCategory: "Vegetables",
    },
  },
  {
    id: 2,
    productName: "Broccoli Head",
    slug: "broccoli-head",
    description: "Organic broccoli full of nutrients.",
    price: 32.99,
    quantity: 0,
    stock: 15,
    images: [
      { id: 1, url: "/assets/img/product/product1.png" }
    ],
    category: {
      slug: "orange",
      nameCategory: "Orange",
    },
  },
  {
    id: 3,
    productName: "Avocado Head",
    slug: "avocado-head",
    description: "Creamy avocado with perfect ripeness.",
    price: 29.99,
    quantity: 0,
    stock: 18,
    images: [
      { id: 1, url: "/assets/img/product/product2.png" }
    ],
    category: {
      slug: "pumpkin",
      nameCategory: "Pumpkin",
    },
  },
  {
    id: 4,
    productName: "Breadfruit Head",
    slug: "breadfruit-head",
    description: "High quality breadfruit product.",
    price: 25.99,
    quantity: 0,
    stock: 10,
    images: [
      { id: 1, url: "/assets/img/product/product3.png" }
    ],
    category: {
      slug: "shallot",
      nameCategory: "Shallot",
    },
  },
];

export default products_data;
