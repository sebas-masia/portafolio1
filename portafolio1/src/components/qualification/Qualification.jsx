import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="qualification section" id='portfolio'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Chemical Engineering</h3>
                                <span className="qualification__subtitle">Universidad Metropolitana</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Computer Science</h3>
                                <span className="qualification__subtitle">CodeCademy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022-2023
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Master of Business Administration</h3>
                                <span className="qualification__subtitle">IESA</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Full Stack Development</h3>
                                <span className="qualification__subtitle">4Geeks Academy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">IT Project Manager</h3>
                                <span className="qualification__subtitle">Ensource Financial</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Lead Web Dev & Process Optimizer</h3>
                                <span className="qualification__subtitle">Credit Junkies</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Dev</h3>
                                <span className="qualification__subtitle">Agricola Biofarm</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">System Integration Specialist</h3>
                                <span className="qualification__subtitle">ROK Lanes</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification