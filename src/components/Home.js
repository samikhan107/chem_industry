function Home(){
    return(
        <>
    <section className="hero">
        <div className="container">
            <h1>We create commercial flows</h1>
            <h2>Import and export products, arranging and managing international <br /> projects with our partners.</h2>
        </div>
    </section>

    <section className="welcome">
        <div className="container">
            <h2><span>Welcome to</span> Pakistan bobz chem industry</h2>
            <div className="row">
                <div className="col-lg-9 col-md-8 col-sm-6">
                    <p>Established in 2014, Pakistan Bobz Chem. Industry is a Commercial Importer and Trading company in Pakistan. We established longer and closer working relationships with our clients and supplier not only provide immediate and reliable service but to continually exceed expectations and goals.</p>
                    <p>Reasing and diversified demands of the customers. Being market leaders in defend market segments. Providing quality products & reliable services and sourcing from reputed manufacturers. Becoming professional marketing partners for our principals to meet the objectives of sales, market </p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <img src={require('../img/welcome-img.jpg')} alt="Pakistan Bobz Checm Industry" />
                </div>
            </div>
        </div>
    </section>

    <section className="intro">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <img src={require('../img/intro-img.jpg')} className="intro-img img-fluid" alt="Pakistan Bobz Checm Industry" />
            </div>
            <div className="col-md-5 col-sm-12">
                <div className="intro-text">
                    <p>Established in 2014, Pakistan Bobz Chem. Industry is a Commercial Importer and Trading company in Pakistan. We established longer and closer working relationships with our clients and supplier not only provide immediate and reliable service but to continually exceed expectations and goals.</p>
                    <p>Reasing and diversified demands of the customers. Being market leaders in defend market segments. Providing quality products & reliable services and sourcing from reputed manufacturers. Becoming professional marketing partners for our principals to meet the objectives of sales, market.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="home-products text-center">
        <div className="container">
            <h2>Pakistan bobz chem industry <span>Products</span></h2>
            <h4>Our product range is Guar Gum, Xanthan Gum, CMC, Yellow Iron Oxide, Sorbitol,<br /> 
                    Maize Starch and termaind Gum</h4>
            <div className="row home-products">
                <div className="col-lg-3 col-md-6 col-sm-6 item">
                    <img src={require('../img/home-product-img1.jpg')} alt="Pakistan Bobz Checm Industry" />
                    <label>Product Name</label>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 item">
                <img src={require('../img/home-product-img2.jpg')} alt="Pakistan Bobz Checm Industry" />
                    <label>Product Name</label>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 item">
                <img src={require('../img/home-product-img3.jpg')} alt="Pakistan Bobz Checm Industry" />
                    <label>Product Name</label>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 item">
                <img src={require('../img/home-product-img4.jpg')} alt="Pakistan Bobz Checm Industry" />
                    <label>Product Name</label>
                </div>
            </div>
            <a href="products.html" className="btn-primary btn">See All Products</a>
        </div>
    </section>
    </>
    )
}

export default Home;