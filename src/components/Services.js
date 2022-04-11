function Services() {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="page-title">Our Services</div>
                </div>
            </section>

            <section className="how-started">
                <div className="container">
                    <p>We create commercial flows, import and export products, arranging and managing international projects with our partners.Supported our network, we are able to integrate all these functions with our fruitful experience. Our numerous competencies allow us to respond to the needs of industries looking for a new market.We look forward to welcoming you to our company and work to develop and enhance your current business in Pakistan.</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <img src={require('../img/services-img1.jpg')}  className="img-fluid" alt="Pakistan Bobz Checm Industry" />
                        </div>
                        <div className="col-sm-6 col-xs-12">
                        <img src={require('../img/services-img2.jpg')}  className="img-fluid" alt="Pakistan Bobz Checm Industry" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="how-we-wrok">
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

export default Services;