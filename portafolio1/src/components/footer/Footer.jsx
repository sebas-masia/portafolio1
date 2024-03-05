import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">SebDev</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/sebmasia/" className="footer__social-link" target="_blank">
                        <i class='bx bxl-linkedin'></i>
                    </a>

                    <a href="https://github.com/sebas-masia" className="footer__social-link" target="_blank">
                        <i class='bx bxl-github' ></i>
                    </a>

                    <a href="https://wa.me/584125674380" className="footer__social-link" target="_blank">
                        <i class='bx bxl-whatsapp' ></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; SebDev. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer