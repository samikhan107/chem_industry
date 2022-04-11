function About(){
    return(
    <>
    <section className="banner">
        <div className="container">
            <div className="page-title">About Us <i class='fa fa-home'></i></div>
        </div>
    </section>

    <section className="how-started">
        <div className="container">
            <h2>How we started</h2>
            <div className="row">
                <div className="col-lg-9 col-md-8 col-sm-6">
                    <p>Established in 2014, Pakistan Bobz Chem. Industry is a Commercial Importer and Trading company in Pakistan. We established longer and closer working relationships with our clients and supplier not only provide immediate and reliable service but to continually exceed expectations and goals.</p>
                    <p>Reasing and diversified demands of the customers. Being market leaders in defend market segments. Providing quality products & reliable services and sourcing from reputed manufacturers. Becoming professional marketing partners for our principals to meet the objectives of sales, market.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <img src={require('../img/about-img.jpg')} className="img-fluid" />
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="about-info">
                <p>We create commercial flows, import and export products, arranging and managing international projects with our partners. Supported our network, we are able to integrate all these functions with our fruitful experience. Our numerous competencies allow us to respond to the needs of industries looking for a new market.</p>
                <p>We look forward to welcoming you to our company and work to develop and enhance your current business in Pakistan.</p>
            </div>
            <div className="how-we-wrok">
                <h2>How we work</h2>
                <ul>
                    <li>Being market leaders in defend market segments.</li>
                    <li>Providing quality products & reliable services and sourcing from reputed manufacturers.</li>
                    <li>Becoming professional marketing partners for our principals to meet the objectives of sales, market information, and customer service.</li>
                    <li>Being the preferred supplier of our customers, with our products exceeding their quality requirements.</li>
                    <li>Giving timely information to the customers regarding trends of the market dynamics.</li>
                    <li>Harnessing the creative energies of all our people through team work, develop and a transparent work </li>
                </ul>
            </div>
        </div>
    </section>
    </>
    )
}

export default About;