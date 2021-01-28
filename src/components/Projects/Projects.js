import React from "react";
import "./index.css";

function Projects() {
    return (
        <div>
            <div className="container work-grid">
                <div className="row">
                    <div className="work col">
                        <a href="https://github.com/mgmoreno22/BuzzKill"><img className="work-images img-thumbnail" id="work" alt="" src="./images/buzzkill.png"/></a>
                    </div>
                    <div className="work col">
                        <a href="https://github.com/csbryant/HotRestaurant"><img className="work-images img-thumbnail" id="work" alt="" src="./images/hotrestaurant.png"/></a>
                    </div>
                    <div className="work col">
                        <a href="https://github.com/teresam3/stunning-journey"><img className="work-images img-thumbnail" id="work" alt="" src="./images/portv2.png"/></a>
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="row">
                    <div className="work col">
                        <a href="https://github.com/teresam3/no-pain-no-gain"><img className="work-images img-thumbnail" id="work" alt="" src="./images/fitness-tracker.png"/></a>
                    </div>
                    <div className="work col">
                        <a href="https://github.com/teresam3/wits-end"><img className="work-images img-thumbnail" id="work" alt="" src="./images/wits-end.png"/></a>
                    </div>
                    <div className="work col">
                        <a href="https://github.com/teresam3/worker-direct"><img className="work-images img-thumbnail" id="work" alt="" src="./images/worker-direct.png"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;