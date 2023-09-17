import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

<link rel="stylesheet" href=
"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"></link>


const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Us</h1>

      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://ctmirror-images.s3.amazonaws.com/wp-content/uploads/2021/01/dummy-man-570x5701-1.png" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Team Member 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://ctmirror-images.s3.amazonaws.com/wp-content/uploads/2021/01/dummy-man-570x5701-1.png" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Team Member 2</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://ctmirror-images.s3.amazonaws.com/wp-content/uploads/2021/01/dummy-man-570x5701-1.png" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Team Member 3</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div class="container mt-5">
        <div class="accordion" id="ao-accordion">
            <div class="accordion-item">
                <h2 class="accordion-header" 
                    id="panelsStayOpen-headingOne">
                    <button class="accordion-button" 
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne" 
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne">
                        Know More
                    </button>
                </h2>
  
                <div id="panelsStayOpen-collapseOne" 
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id turpis a justo pellentesque varius a sed ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare condimentum diam, eu tempus erat vulputate at. Nam at nunc libero. Morbi a imperdiet libero. 
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" 
                    id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" 
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" 
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo">
                        Contact Us
                    </button>
                </h2>
  
                <div id="panelsStayOpen-collapseTwo" 
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id turpis a justo pellentesque varius a sed ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare condimentum diam, eu tempus erat vulputate at. Nam at nunc libero. Morbi a imperdiet libero. 
                    </div>
                </div>
            </div>
        </div>
    </div>
     </div>
      
    
  );
};

<script src=
"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js">
    </script>
export default About;
