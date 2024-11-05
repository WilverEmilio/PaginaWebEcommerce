import { productsType } from "@/interFace/interFace"
import thumb1 from "../../public/assets/img/product/product4.png";
import thumb2 from "../../public/assets/img/product/product1.png";
import thumb3 from "../../public/assets/img/product/product2.png";
import thumb4 from "../../public/assets/img/product/product3.png";
import thumb5 from "../../public/assets/img/product/05.png";
import thumb6 from "../../public/assets/img/product/06.png";
import thumb7 from "../../public/assets/img/product/07.png";
import thumb8 from "../../public/assets/img/product/08.png";
import thumb9 from "../../public/assets/img/product/09.png";
import thumb10 from "../../public/assets/img/product/10.png";
import thumb11 from "../../public/assets/img/product/11.png";
import thumb12 from "../../public/assets/img/product/12.png";


const products_data:productsType[] = [
    {
        id: 1,
        image: thumb1,
        title: "Blackberries Head",
        category:"Vegetables",
        price: 49.99,
        rating: 5,
        quantity:0,
        data:[
          {id: 1,
            image: thumb1,
            title: "Blackberries Head",
            category:"Vegetables",
            price: 49.99,
            rating: 5,
            quantity:0,},
            {id: 2,
              image: thumb2,
              category:"Orange",
              title: "Broccoli Head",
              price: 32.99,
              rating: 5,
              quantity:0},
              {
                id: 3,
                image: thumb3,
                category:"Pumpkin",
                title: "Avocado Head",
                price: 29.99,
                rating: 5,
                quantity:0,
              },
              {
                id: 4,
                image: thumb4,
                category:"Shallot",
                title: "Breadfruit Head",
                price: 25.99,
                rating: 4,
                quantity:0
              }
        ]
      },
    {
        id: 2,
        image: thumb2,
        category:"Orange",
        title: "Broccoli Head",
        price: 32.99,
        rating: 5,
        quantity:0,
        data:[
          {id: 1,
            image: thumb4,
            category:"Shallot",
            title: "Breadfruit Head",
            price: 25.99,
            rating: 4,
            quantity:0,},
            {id: 2,
              image: thumb2,
              category:"Orange",
              title: "Broccoli Head",
              price: 32.99,
              rating: 5,
              quantity:0},
              {
                id: 3,
                image: thumb3,
                category:"Pumpkin",
                title: "Avocado Head",
                price: 29.99,
                rating: 5,
                quantity:0,
              },
              {
                id: 4,
                image: thumb1,
                title: "Blackberries Head",
                category:"Vegetables",
                price: 49.99,
                rating: 5,
                quantity:0
              }
        ]
      },
    {
        id: 3,
        image: thumb3,
        category:"Pumpkin",
        title: "Avocado Head",
        price: 29.99,
        rating: 5,
        quantity:0,
        data:[
          {id: 1,
            image: thumb2,
            category:"Orange",
            title: "Broccoli Head",
            price: 32.99,
            rating: 5,
            quantity:0,},
            {id: 2,
              image: thumb4,
              category:"Shallot",
              title: "Breadfruit Head",
              price: 25.99,
              rating: 4,
              quantity:0},
              {
                id: 3,
                image: thumb1,
                title: "Blackberries Head",
                category:"Vegetables",
                price: 49.99,
                rating: 5,
                quantity:0
              },
              {
                id: 4,
                image: thumb3,
                category:"Pumpkin",
                title: "Avocado Head",
                price: 29.99,
                rating: 5,
                quantity:0
              }
        ]
      },
    {
        id: 4,
        image: thumb4,
        category:"Shallot",
        title: "Breadfruit Head",
        price: 25.99,
        rating: 4,
        quantity:0,
        data:[
          {id: 1,
            image: thumb2,
            category:"Orange",
            title: "Broccoli Head",
            price: 32.99,
            rating: 5,
            quantity:0,},
            {id: 2,
              image: thumb4,
                category:"Shallot",
                title: "Breadfruit Head",
                price: 25.99,
                rating: 4,
                quantity:0},
              {
                id: 3,
                image: thumb3,
                category:"Pumpkin",
                title: "Avocado Head",
                price: 29.99,
                rating: 5,
                quantity:0,
              },
              {
                id: 4,
                image: thumb1,
            title: "Blackberries Head",
            category:"Vegetables",
            price: 49.99,
            rating: 5,
            quantity:0
              }
        ]
      },
      //shop page data
      {
        id: 5,
        image: thumb2,
        category:"New Product",
        title: "Broccoli Head",
        price: 49.99,
        rating: 5,
        quantity:0,
      },
      {
        id: 6,
        image: thumb3,
        category:"Top Sales",
        title: "Avocado Head",
        price: 35.00,
        rating: 5,
        quantity:0,
      },
      {
        id: 7,
        image: thumb4,
        category:"Top Sales",
        title: "New Product",
        price: 25.99,
        rating: 4,
        quantity:0,
      },
      {
        id: 8,
        image: thumb1,
        category:"Top Sales",
        title: "New Product",
        price: 36.99,
        rating: 5,
        quantity:0,
      },
      {
        id: 9,
        image: thumb5,
        category:"Top Sales",
        title: "Broccoli Head",
        price: 48.99,
        rating: 4,
        quantity:0,
      },
      {
        id: 10,
        image: thumb6,
        category:"New Product",
        title: "Avocado Head",
        price: 29.99,
        rating: 5,
        quantity:0,
      },
      {
        id: 11,
        image: thumb7,
        category:"Top Sales",
        title: "Breadfruit Head",
        price: 32.99,
        rating: 5,
        quantity:0,
      },
      {
        id: 12,
        image: thumb8,
        category:"New Product",
        title: "Blackberries Head",
        price: 28.99,
        rating: 4,
        quantity:0,
      },
      {
        id: 13,
        image: thumb9,
        category:"Top Sales",
        title: "Broccoli Head",
        price: 44.99,
        rating: 5,
        quantity:0,
      },
      {
        id: 14,
        image: thumb10,
        category:"Top Sales",
        title: "Avocado Head",
        price: 44.99,
        rating: 5,
        quantity:0,
      },
      {
        id: 15,
        image: thumb11,
        category:"New Product",
        title: "Breadfruit Head",
        price: 25.99,
        rating: 4,
        quantity:0,
      },
      {
        id: 16,
        image: thumb12,
        category:"Top Sales",
        title: "Blackberries Head",
        price: 52.99,
        rating: 5,
        quantity:0,
      },
   
    
]

export default products_data;