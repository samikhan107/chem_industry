import Product from './Product';

function Products(){
    return(
        <>
        <section className="banner">
        <div className="container">
            <div className="page-title">Our Products</div>
        </div>
    </section>

    <section className="products-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-4 col-xs-6">
                    <Product />
                </div>
                <div className="col-md-3 col-sm-4 col-xs-6">
                    <Product />
                </div>
                <div className="col-md-3 col-sm-4 col-xs-6">
                    <Product />
                </div>
                <div className="col-md-3 col-sm-4 col-xs-6">
                    <Product />
                </div>
                <div className="col-md-3 col-sm-4 col-xs-6">
                    <Product />
                </div>
                <div className="col-md-3 col-sm-4 col-xs-6">
                    <Product />
                </div>
                <div className="col-md-3 col-sm-4 col-xs-6">
                    <Product />
                </div>
                <div className="col-md-3 col-sm-4 col-xs-6">
                    <Product />
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default Products;