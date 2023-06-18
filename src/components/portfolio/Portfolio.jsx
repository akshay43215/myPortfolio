import React from "react";
import "./portfolio.css";
import img1 from "../../assets/form.png";
import img2 from "../../assets/contacts.png";
import img3 from "../../assets/movieApp.png";
import img4 from "../../assets/crudTodo.png";
import img5 from "../../assets/demo.png";
import img6 from "../../assets/stackOverflow.png";
import img7 from "../../assets/imageGallery.png";
import img8 from "../../assets/moreCode.webp";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container portfolio__content">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img7} alt="no image" />
            <h3> Image Gallery with multer </h3>
            <small>
               An app with image uploadings and preview image . A complete responsive css framework with smoother user experiance.
               multer package used for image handling in the backend with inbuild methods. client form submission handled by axios with formData() instance. 
               cors errors has been handled and added file size restriction above 1MB.
            </small>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/akshay43215/MERN-StackOverfkow-From-Scratch"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img1} alt="no image" />
            <h3>Interactive Web Form</h3>
            <small>
              A real time web form with error checking and input validation with corresponding
              messages.React hooks with custom validationing . styled from scratch using css .
              build with Vite by faster and leaner development.
            </small>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/akshay43215/custom_form_handler"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://custom-form-handler.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img3} alt="no image" />
            <h3>Movies App</h3>
            <small>
             A app with movies lists and details arround it . There are options for search filtering and tags genres.
             This app offers video option for trailers playbacks for individual movies. TMDB api is where all these data from .
              The website is deployed using vercel.
            </small>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/akshay43215/Movie-Store"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img4} alt="no image" />
            <h3>CRUD App</h3>
            <small>
             This CRUD app is developed using Vite with Express in the back-end.This is features on users for Add,Delete,Update
             with addon cross over style for marked as completed . Cors issue is fixed with cors package and implemenetd get, post,
             put,delete http methods with axios.
              The website is deployed using vercel.
            </small>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/akshay43215/taskManager"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img2} alt="no image" />
            <h3>Contacts App</h3>
            <small>
               My first app with react router with multiple pages . The website Collects users data and
              bookmark them in its memory . There is an option for favorite and it can be routed through navbar Links
              images. The website is deployed using vercel.
            </small>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/akshay43215/contact-app"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://contact-app-silk-nine.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img5} alt="no image" />
            <h3>BodyMassIndex(BMI) App</h3>
            <small>
            This app perfom calculation to figure out the BMI value acoording to the user input. 
              The arithmatic operation resultend in the front end. The website is deployed using vercel.
            </small>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/akshay43215/BMI-App"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img6} alt="no image" />
            <h3>MERN Stack SyackOverflow</h3>
            <small>
               An app which mimic the features of stackOverflow. Responsive designs and designing are from scratch using css.
               There are multiple packages implemented in this projects which helps on the authentication and integration parts.
               Mongoose ODM for data storage and jwt for token based requests.  The website is deployed using vercel.
            </small>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/akshay43215/MERN-StackOverfkow-From-Scratch"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={img8} alt="no image" />
            <h3>Rest Apps</h3>
            <small>
            These are all other projects which i'm hosted publically on gitHub. you can also check out these. some of them are on changes
            and can be changed .
            </small>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/akshay43215/BMI-App"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="/"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

      </div>

    </section>
  );
}

export default Portfolio;
