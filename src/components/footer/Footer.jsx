import localData from "@/localdata";

const Footer = () => {
    const { logo } = localData.images;
    return (
        <footer className="footer">
            <div className="container">
                <div className="link-group">
                    <div className="col">
                        <h4 className="title">Address</h4>
                        <a href="#/" className="footer-link">
                            Serbia
                        </a>
                        <a href="#/" className="footer-link">
                            Belgrade
                        </a>
                    </div>

                    <div className="col">
                        <h4 className="title">Contact</h4>
                        <a href="tel:381642758040" className="footer-link">
                            +381 64 275 8040
                        </a>
                        <a href="mailto:office@most-legal.com" target="_blank" className="footer-link">
                            office@most-legal.com
                        </a>
                    </div>

                    <div className="col">
                        <h4 className="title">Practice</h4>
                        <a href="#/" className="footer-link">
                            Civil Law
                        </a>
                        <a href="#/" className="footer-link">
                            Commercial Law
                        </a>
                    </div>

                    <div className="col">
                        <h4 className="title">Language</h4>
                        <a href="#/" className="footer-link">
                            English
                        </a>
                        <a href="#/" className="footer-link">
                            German
                        </a>
                        <a href="#/" className="footer-link">
                            Serbian
                        </a>
                    </div>
                </div>

                <a className="footer-brand" href="/">
                    <img src={logo.src} alt="" />
                </a>
            </div>
            <div className="copyright">
                <div className="container">© 2021 Mostlegal. All rights reserved</div>
            </div>
        </footer>
    );
};

export default Footer;
