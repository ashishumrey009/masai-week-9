const showItem = () =>({type:"SHOW"});
const orderSelItem =(index,value,rstr,price) =>({type:"SELL",index,value,rstr,price});
const nextStep = () =>({type:"INCSTEP"});
const addVal =(input) =>({type:"ADD",input})
const initalState={
  cusDetail:[],
    index:0,
    item:'',
    restr:'',
    price:0,
    step:1,
    name:'',
    email:'',
    address:'',
    quantity:0,
    
    
    ResturantDetails: [
        {
          name: 'Chicken do Pyaza',
          img: "https://lorempixel.com/output/food-q-c-150-150-6.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 3.6,
          totalVotes: 564,
          totalReview: 153,
          resName:'Imperio'

        },

        {
          name: 'Chicken Tandoori',
          img: "https://lorempixel.com/output/food-q-c-150-150-7.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 2.6,
          totalVotes: 654,
          totalReview: 123,
          resName:'Delhiwale'

        },
        {
          name: 'Chicken do Pyaza',
          img: "https://lorempixel.com/output/food-q-c-150-150-3.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 4.9,
          totalVotes: 487,
          totalReview: 123,
          resName:'PunJabi Tadka'

        },
        {
          name: 'Chicken Masala',
          img: "https://lorempixel.com/output/food-q-c-150-150-4.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 3.9,
          totalVotes: 444,
          totalReview: 83,
          resName:'Sgar Ratna'

        },
        {
          name: 'Chicken Curry',
          img: "https://lorempixel.com/output/food-q-c-150-150-9.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 2.2,
          totalVotes: 987,
          totalReview: 73,
          resName:'MTR'

        },
        {
          name: 'Chicken Garllic',
          img: "https://lorempixel.com/output/food-q-c-150-150-2.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 3.2,
          totalVotes: 354,
          totalReview: 93,
          resName:'KFC'

        },
        {
          name: 'Chicken Butter Masala',
          img: "https://lorempixel.com/output/food-q-c-150-150-4.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 1.2,
          totalVotes: 409,
          totalReview: 63,
          resName:'PunJabi Host'

        },
        {
          name: 'Chicken Grilled',
          img: "https://lorempixel.com/output/food-q-c-150-150-2.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 4.2,
          totalVotes: 324,
          totalReview: 33,
          resName:'PunJabi Tadka'

        },
        {
          name: 'Chicken Rice',
          img: "https://lorempixel.com/output/food-q-c-150-150-8.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 3.8,
          totalVotes: 554,
          totalReview: 13,
          resName:'PunJabi Tadka'

        },
        {
          name: 'Chicken Biryani',
          img: "https://lorempixel.com/output/food-q-c-150-150-5.jpg",
          pricing: 300,
          minimumOrder: 50,
          deliveryTime: 30,
          rating: 3.2,
          totalVotes: 984,
          totalReview: 23,
          resName:'PunJabi Tadka'

        }
      ]
}
const reducer = (state =initalState,action)=>{
    console.log(action);
    console.log(state.ResturantDetails);
    if(action.type ==="SHOW"){
        return{
            ResturantDetails:state.ResturantDetails
        }
       
    }
    if(action.type==="SELL"){
        console.log("clicked on order",action)
        return{
            index:action.index,
            item:action.value,
            restr:action.rstr,
            price:action.price,
            ResturantDetails:state.ResturantDetails,
            step:Number(state.step)+1,
            cusDetail:state.cusDetail,
            
        }
    }
    if(action.type==="INCSTEP"){
      console.log("clicked on increment");
        return{
            index:action.index,
            item:action.value,
            restr:action.rstr,
            price:action.price,
            ResturantDetails:state.ResturantDetails,
            step:Number(state.step)+1,
            cusDetail:state.cusDetail,
        }
    }
    if(action.type==="ADD"){
      console.log("adding user data",action.input.name)
      let temp={
        name:action.input.name,
        email:action.input.email,
        address:action.input.address,
        quantity:action.input.quantity
      }
      return{
        index:state.index,
        item:state.value,
        restr:state.rstr,
        price:state.price,
        ResturantDetails:state.ResturantDetails,
        cusDetail:[...state.cusDetail,temp],
        step:Number(state.step)+1,
      }
    }
    return state
}

export default reducer;
export{showItem,orderSelItem,nextStep,addVal}