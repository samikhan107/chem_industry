function Footer(){
    return(
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-sm-3 col-xs-6">
                    <ul>
                        <h4>Links</h4>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="Products.html">Products</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-3 col-xs-6">
                    <ul>
                        <h4>Address</h4>
                        <li>Plot No. 23A, Shed No.1, Kot Abdul Malik, <br />
                                Lahore-54000, Pakistan.</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6">
                    <ul>
                        <h4>Social Links</h4>
                        <li><a href="#"><i className="fab fa-facebook-f"></i> facebook</a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i> twitter</a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g"></i> gplus</a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i> linkedin</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6">
                    <ul>
                        <h4>Contact</h4>
                        <li><i className="fa fa-mobile-alt"></i> +92-042-34578587 & 35479658</li>
                        <li><i className="fa fa-fax"></i> +92-042-37475859</li>
                        <li><i className="fa fa-envelope"></i> info@pakistanbobzchem.com.pk</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                Copyright © 2020. All rights are reserved. www.pakistanbobzchem.com.pk
            </div>
        </div>
    </footer>
    )
}

export default Footer;