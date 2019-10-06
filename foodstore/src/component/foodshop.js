import React from 'react';
import { connect } from "react-redux";
import{showItem,orderSelItem,nextStep,addVal} from '../foodstore';
import  NavBar from './navbar';
import SearchArea from './searcharea';
import OrderSelect from './orderselect';
import OrderConfirm from './orderconfirm';
import OrderSuccess from './ordersucess';
import Contact from "./contact";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";;
class FoodShop extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
        
         switch (this.props.value.step) {
            case 1:
                    return(
                        <div>
                        <div><NavBar /></div>
                           <SearchArea />
                        <div className="row">
                             {this.props.value.ResturantDetails.map((i,index)=>{return <OrderSelect item={i} index={index} order={this.props.sell} nextStep={this.props.step} />})}
                        </div>
                        </div>
                    );
                break;
            case 2:
                return(
                    <div>
                        <div><NavBar /></div>
                            <OrderConfirm itemName={this.props.value.item} itemRes={this.props.value.restr} addItem={this.props.add}/>
                       </div>
                );
            case 3:
                return(
                    <div>
                        <div><NavBar /></div>
                        {/* <OrderSuccess cusDetail={this.props.value.cusDetail}/> */}
                        {this.props.value.cusDetail.map((i)=>{return<OrderSuccess cus={i} price={this.props.value.price} />})}
                     </div>       
                );
            default:
                    return(
                       <div></div>
                    );
                break;
        }
        
    }
}

const mapStateToProps =state =>{
    console.log('map state',state)
    return {
       value:state.foodapp
    };
};
const mapDispatchToProps = dispatch =>{
    console.log("dispatch called");
    return({
      show: () => dispatch(showItem()),
      sell: (idx,val,rest,price) => dispatch(orderSelItem(idx,val,rest,price)) ,
      step: () => dispatch(nextStep),
      add:(val) => dispatch(addVal(val))
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodShop);