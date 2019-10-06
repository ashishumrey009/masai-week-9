import React from 'react';
var total=0;
class OrderSuccess extends React.Component{
    constructor(props){
     super(props);
}
  render(){
      var total =this.props.cus.quantity * this.props.price;
      console.log(total);
      console.log("success page:"+this.props.cus.name)
        return(
           <div className="container sucessPage">
              <div class="jumbotron">
                <h1 class="display-4">Congratulation You have Successfully Placed Order</h1>
                <p class="lead">Order Details</p>
                <hr class="my-4" />
                 <p>Name : {this.props.cus.name}</p>
                 <p> Email :{this.props.cus.email}</p>
                 <p>Address:{this.props.cus.address}</p>
                 <p> Qutanity :{this.props.cus.quantity}</p>
                  <p> Price :{total} </p> 
                 <a class="btn btn-primary btn-sm"  role="button">Home</a>
                </div>
            </div>
                            
           
        );
    }

}
export default OrderSuccess;