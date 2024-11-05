import { PricingPlanItemType } from "@/interFace/interFace"
import iconOne from '../../public/assets/img/icon/p1.png';
import iconTwo from '../../public/assets/img/icon/p2.png';
import iconThree from '../../public/assets/img/icon/p3.png';

const pricing_data: PricingPlanItemType[]=[
{
    id:1,
    image :iconOne,
    price:25.95,
    title:"Regular Plan",
    pricingList: [
        {id:1, info:"Money Back Guarantee"},
        {id:2, info:"India Organic Foods"},
        {id:3, info:"BD Pineaple Juice"},
        {id:4, info:"USA Organic Juice"},
        {id:5, info:"Fresh Food Item"},
        {id:6, info:"100% Pure Item"},
    ]
},
{
    id:2,
    image :iconTwo,
    price:25.95,
    title:"Premium Plan",
    active:"active",
    pricingList: [
        {id:1, info:"Money Back Guarantee"},
        {id:2, info:"India Organic Foods"},
        {id:3, info:"BD Pineaple Juice"},
        {id:4, info:"USA Organic Juice"},
        {id:5, info:"Fresh Food Item"},
        {id:6, info:"100% Pure Item"},
    ]
},
{
    id:3,
    image :iconThree,
    price:25.95,
    title:"Diamond Plan",
    pricingList: [
        {id:1, info:"Money Back Guarantee"},
        {id:2, info:"India Organic Foods"},
        {id:3, info:"BD Pineaple Juice"},
        {id:4, info:"USA Organic Juice"},
        {id:5, info:"Fresh Food Item"},
        {id:6, info:"100% Pure Item"},
    ]
},
]
export default pricing_data;