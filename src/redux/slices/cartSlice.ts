import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/interFace/interFace";
import { toast } from "react-toastify";

interface CartState {
 cartProducts: Product[];
}

const initialState: CartState = {
 cartProducts: [],
};

export const cartSlice = createSlice({
 name: "cart",
 initialState,
 reducers: {
   cart_product: (state, { payload }: PayloadAction<Product>) => {
     const productIndex = state.cartProducts.findIndex(
       (item) => item.id === payload.id
     );
     
     if (productIndex >= 0) {
       state.cartProducts[productIndex].quantity! += 1;
       toast.info(`Increased quantity of ${payload.productName}`, {
         position: "top-left",
       });
     } else {
       const tempProduct = { ...payload, quantity: 1 };
       state.cartProducts.push(tempProduct);
       toast.success(`${payload.productName} se agregó al carrito`, {
         position: "top-left",
       });
     }
   },

   decrease_quantity: (state, { payload }: PayloadAction<Product>) => {
     const cartIndex = state.cartProducts.findIndex(
       (item) => item.id === payload.id
     );
     
     if (cartIndex >= 0) {
       const totalCart = state.cartProducts[cartIndex].quantity ?? 0;
       if (totalCart > 1) {
         state.cartProducts[cartIndex].quantity = totalCart - 1;
         toast.error(`Decreased quantity of ${payload.productName}`, {
           position: "top-left",
         });
       } else {
         state.cartProducts = state.cartProducts.filter(
           (item) => item.id !== payload.id
         );
         toast.error(`${payload.productName} se eliminó del carrito`, {
           position: "top-left",
         });
       }
     }
   },

   remove_cart_product: (state, { payload }: PayloadAction<Product>) => {
     state.cartProducts = state.cartProducts.filter(
       (item) => item.id !== payload.id
     );
     toast.error(`${payload.productName} se eliminó del carrito`, {
       position: "top-left",
     });
   },

   clear_cart: (state) => {
     const confirmMsg = window.confirm(
       "¿Estás seguro de que quieres eliminar todos los artículos de tu carrito?"
     );
     if (confirmMsg) {
       state.cartProducts = [];
       toast.error("Carrito vaciado", {
         position: "top-left",
       });
     }
   },

   // Nuevo reducer para limpiar el carrito después del pago exitoso
   clearCartAfterPayment: (state) => {
     state.cartProducts = [];
     toast.success("¡Pago exitoso! Gracias por tu compra", {
       position: "top-left",
     });
   },
 },
});

export const {
 cart_product,
 remove_cart_product,
 clear_cart,
 decrease_quantity,
 clearCartAfterPayment
} = cartSlice.actions;

export default cartSlice.reducer;