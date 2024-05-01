import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/PatelPriyanshu-24/gofood" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://gofood-sepia.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>GO-FOOD <h4>online food ordering website</h4></h3>
              <p> Discover  Go Food , a dynamic food ordering website crafted with Angular, Node.js, and Express. Effortlessly browse restaurants, track orders in real-time, and enjoy secure payments. Tailor your experience with customizable preferences while relishing a seamless interface. Join the culinary revolution and indulge in convenience, variety, and quality, all at your fingertips with Go Food . </p>
            </div>
            <footer> <ul className="tech-list"> <li>Angular</li> <li>API Gateway</li> <li>Mongo DB</li><li>Node</li>  </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Patelpriyanshu311/Kalakrutee" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://github.com/Patelpriyanshu311/Kalakrutee" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>KalaKrutee <h4>Online E-commerce website for home decor products</h4></h3>
              <p>
              Step into the past with KalaKrutee, where antiquity meets modern technology. Crafted with React.js for seamless interactivity, Tailwind CSS for sleek aesthetics, and vanilla JavaScript for dynamic functionality, our e-commerce platform offers a nostalgic journey through time.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React js</li>
                <li>TailWind CSS</li>
                <li>React-Router</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Patelpriyanshu311/Ecommerce_Web" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/Patelpriyanshu311/Ecommerce_Web" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>E-commerce Website <h4>MERN</h4></h3>
              <p>
              Presenting an innovative e-commerce marvel: a Node.js backend coupled with a React.js frontend. Seamlessly blending robust functionality with stunning aesthetics, this platform delivers an unparalleled shopping experience. From dynamic product listings to secure payment processing, every aspect is meticulously crafted for efficiency and elegance. Elevate your online presence with this cutting-edge solution, designed to inspire and captivate
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Nodejs</li>
                <li>Express</li>
                <li>Mongo DB</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Patelpriyanshu311/git_user_fetch" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/Patelpriyanshu311/git_user_fetch" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Git User Fetch</h3>
              <p>Introducing a Git user fetch app built with Node.js and APIs. Effortlessly retrieve user data, track contributions, and explore repositories. Enhance collaboration and streamline project management. Elevate your development experience with this essential tool for Git enthusiasts.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>API</li>
                <li>Node js</li>
                <li>Express</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/PatelPriyanshu-24/weather-web-app" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://weather-web-app-rust.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Weather App</h3>
              <p>Experience weather in style with our Angular and Tailwind-powered app. Seamlessly access real-time temperature data for any city worldwide. Stay informed, plan your day, and embrace the elements with confidence. Your go-to weather companion awaits.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular Js</li>
                <li>API</li>
                <li>TailWind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>FireBase Authentication</h3>
              <p>
              Secure your app with Firebase Authentication and Angular. Safeguard user data, manage access, and ensure a seamless login experience. Elevate your app's security with ease and confidence.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>FireBase</li>
                <li>Angular</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}