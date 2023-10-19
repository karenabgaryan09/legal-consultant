import { Button, Field } from "@/components";
import localData from "@/localdata";

export const metadata = {
    title: "Contact",
    description: "this is Contact page description",
};

const Contact = () => {
    const { phone, email, location, user, emailOutlined } = localData.svgs;

    return (
        <main className="contact-page markup-custom-style">
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col col-left">
                            <h1 className="contact-title display-3">contact</h1>
                            <p className="contact-description text-muted">
                                Fill up the form below to contact
                            </p>
                            <br />
                            <br />
                            <a href="tel:+381 64 275 8040">
                                <Button name="+381 64 275 8040" startIcon={phone} color="dark" />
                            </a>
                            <br />
                            <br />
                            <a href="mailto:office@most-legal.com" target="_blank">
                                <Button name="office@most-legal.com" startIcon={email} color="dark" />
                            </a>
                            <br />
                            <br />
                            <a href="https://maps.app.goo.gl/kcRAWrwi19gDP7iS6" target="_blank">
                                <Button name="Kralja Petra 69, Belgrade" startIcon={location} color="dark" />
                            </a>
                            <br />
                            <br />
                            <br />
                            <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.010257269306!2d20.45435097672558!3d44.821355676099365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a654b1225159f%3A0x7700ec809e52ad53!2sKralja%20Petra%2069%2C%20Beograd%2011000%2C%20Serbia!5e0!3m2!1sen!2sam!4v1697613258639!5m2!1sen!2sam"
                                    width="600"
                                    height="450"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        <div className="col col-right">
                            <Field name="name" label="Your Name" color="secondary" startIcon={user} />
                            <Field name="mail" label="Mail" color="secondary" startIcon={emailOutlined} />
                            <Field
                                name="message"
                                label="Message"
                                Tag="textarea"
                                placeholder="message"
                                color="secondary"
                            />
                            <Button variant="contained" name="Send Message" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
