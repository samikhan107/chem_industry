import { Component } from "react";

class Product extends Component{
    render(){
        return(
            <div className="item">
                <img src={require('../img/product-img1.jpg')} className="img-fluid" alt="Pakistan Bobz Checm Industry" />
                <label>Product Name</label>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
            </div>
        )
    }
}

export default Product;