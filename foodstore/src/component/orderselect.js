import React from 'react';
class OrderSelect extends React.Component{
    constructor(props){
     super(props);{
     
     }
    }
    render(){
       
        return(
            <div className="col-4">
               <div className="mt-2 ml-2 m-5">
                 <div className="card mb-3 shdow" style={{"maxWidth": "540px"}}>
                               <div className="row no-gutters">
                                   <div className="card col-md-5">
                                   <img src={this.props.item.img} className="card-img" alt="..."/>
                                   </div>
                                   <div className="col-md-7">
                                   <div className="card-body">
                                       <h5 className="card-title">{this.props.item.name}</h5>
                                       <p className="card-text">Price :{this.props.item.pricing}</p>
                                       <p className="card-text">{this.props.item.resName}</p>
                                       <button className="btn btn-primary" onClick={()=>this.props.order(this.props.index,this.props.item.name,this.props.item.resName,this.props.item.pricing)}>Order Now</button>
                                   </div>
                                   </div>
                               </div>
                   </div>
                  
               </div>
            </div>
        );
    }
}
export default OrderSelect;