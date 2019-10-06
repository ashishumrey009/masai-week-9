import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class SerachArea extends React.Component{
   constructor(props){
       super(props);
       this.state={
       }
   }
   render(){
       console.log(this.state.ResturantDetails);
       return(
           <div className="conatiner py-5 searchArea">
               <div className="imgProp">
                    <div className="container"> 
                        <div className="row">
                            <div className="col-lg-6 text-center">
                               <h1 className="display-3 mt-4 pt-5 ">  
                                Get Your Food Here</h1>
                            </div>
                            <div className ="col-lg-6 text-center">
                                <div className="mt-5 pt-5">
                                     <input type="text" className="form-control form-control-lg" placeholder="Enter the Location"/>
                                    <button className="btn btn-primary btn-lg mt-2"><i className="fa fa-envelope-open-o"></i> Search</button>
                                </div>
                           
                            </div>
                            {/* <div class="card w-20">
                                    <div >
                                    <div class="media">
                                    <img src="https://lorempixel.com/output/food-q-c-150-150-5.jpg" class="mr-3" alt="..."/>
                                    <div class="media-body">
                                        <h5 class="mt-0">Media heading</h5>
                                        Cras sit amet nibh libero,
                                         <a href="#" class="btn btn-primary">Button</a>
                                    </div>
                                    </div>
                                   
                                    </div>
                                    
                            </div> */}

                            {/* <div class="card" style={{"width": "18rem"}}>
                                    <img src="https://lorempixel.com/output/food-q-c-150-150-5.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                            </div> */}
                            
                                    
                        </div>
                    </div>
               </div>
              
            
           </div>
       );
   }
 }
 export default SerachArea;