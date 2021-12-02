import './productList.css'
import Product from '../product/Product'
import {products} from '../../data';

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My work</h1>
                <p className="pl-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat fugit sed ab nemo veritatis, harum rerum porro in molestias quis impedit dolorem sunt, sint consequuntur.</p>
            </div>
            <div className="pl-list">
                {
                  products.map((item) => {
                      return (
                          
                          <Product key={item.id} img={item.img} link={item.link} />
                      )
                  })  
                }
            </div>
        </div>
    )
}

export default ProductList
