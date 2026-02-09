
import {createSlice} from "@reduxjs/toolkit"

const bikeSlice = createSlice ({
    name:"bikeSlice",
    initialState:{

        bikes:JSON.parse(localStorage.getItem("bikes")) || [],
        error :null ,
        loading : false ,
        wishItems :JSON.parse(localStorage.getItem("wishItems")) || [],

    },
    reducers:{
     addbikes:(state ,action)=>{
        state.bikes.push(action.payload);
        localStorage.setItem('bikes' , JSON.stringify(state.bikes));
     },
     editBikes:(state , action)=>{
        const bikeIndex = state.bikes.findIndex((pr)=> pr.id === action.payload.id);

        if(bikeIndex !== -1){
            state.bikes[bikeIndex] =action.payload;
                    localStorage.setItem('bikes' , JSON.stringify(state.bikes));

        }


     },
      deleteBike:(state , action)=>{
        const bikeIndex = state.bikes.findIndex((pr)=> pr.id === action.payload);

        if(bikeIndex !== -1){
            state.bikes.splice(bikeIndex , 1);
                    localStorage.setItem('bikes' , JSON.stringify(state.bikes));

        }


     },
     addToWish : (state,action)=>{
        const itemIndex = state.wishItems.findIndex((pr)=>pr.id === action.payload.id);
        if(itemIndex !== -1){
            state.wishItems[itemIndex].quantity++;
        }else{
            state.wishItems.push({...action.payload,quantity:1});

        }
          localStorage.setItem("wishitems", JSON.stringify(state.wishItems));
        },

        incrementItemQuantity:(state ,action)=>{
            const itemIndex = state.wishItems.findIndex((pr) => pr.id ===action.payload);
            if(itemIndex !== -1){
                state.wishItems[itemIndex].quantity++;
                localStorage.setItem("wishItems", JSON.stringify(state.cartItems));

            }
        },

          decrementItemQuantity:(state ,action)=>{
            const itemIndex = state.wishItems.findIndex((pr) => pr.id ===action.payload);
            if(itemIndex !== -1){
                state.wishItems[itemIndex].quantity--;
                localStorage.setItem("wishItems", JSON.stringify(state.wishItems));

            }
        },

        
          removeWishItem:(state ,action)=>{
            const itemIndex = state.wishItems.findIndex((pr) => pr.id ===action.payload);
            if(itemIndex !== -1){
                state.wishItems.splice(itemIndex , 1);
                localStorage.setItem("wishItems", JSON.stringify(state.wishItems));

            }
        },


        

      

     

    }

});

export const {deleteBike,addbikes,addToWish,editBikes, incrementItemQuantity , decrementItemQuantity ,removeWishItem} = bikeSlice.actions;

export default bikeSlice.reducer; 

