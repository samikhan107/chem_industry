function Contact() {
    return (
    <>
    <section className="banner">
        <div className="container">
            <div className="page-title">Contact Us</div>
        </div>
    </section>

    <section className="contact">
        <div className="container">
            <div className="contact-info">
                <p>Email us with any questions or inquiries or call <span>0300 8246 608.</span> </p>
                <p>We would be happy to answer your questions and set up a meeting with you.</p>
            </div>
            <form action="">
                <div className="row">
                    <div className="col-sm-6 col-xs-12">
                        <label>Your Name</label>
                        <input type="text" />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <label>Subject</label>
                        <input type="text" />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <label>Phone Number</label>
                        <input type="text" />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="col-sm-12 col-xs-12">
                        <label>Message</label>
                        <textarea></textarea>
                    </div>
                    <button type="button" className="submit btn-primary">Submit</button>
                </div>
            </form>
        </div>

        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27180.092377046738!2d74.21960166240294!3d31.619841450270375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191deba2c64af7%3A0xc15cf4017074c21f!2sKot%20Abdul%20Malik%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1580148948575!5m2!1sen!2s" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
        </div>
    </section>
    </>
    )
}

export default Contact;