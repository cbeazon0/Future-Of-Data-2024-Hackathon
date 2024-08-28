import React from "react";
import "./Section.css";

function Section() {
    return (
        <div className="section">
            <div className="sub-section">
                <div classNamme="text">
                    <h2>Section Title</h2>
                    <p>Section Description, loads of great stuff here about great stuff just great stuffing all over the place</p>
                </div>
                <div className="image">
                    <img src="https://via.placeholder.com/150" alt="placeholder" />
                </div>
            </div>

            <div className="sub-section">
                <div classNamme="text">
                    <h2>Section Title</h2>
                    <p>Section Description, loads of great stuff here about great stuff just great stuffing all over the place</p>
                </div>
                <div className="image">
                    <img src="https://via.placeholder.com/150" alt="placeholder" />
                </div>
            </div>

            <div className="sub-section">
                <div classNamme="text">
                    <h2>Section Title</h2>
                    <p>Section Description, loads of great stuff here about great stuff just great stuffing all over the place</p>
                </div>
                <div className="image">
                    <img src="https://via.placeholder.com/150" alt="placeholder" />
                </div>
            </div>
        </div>
    );
}

export default Section;