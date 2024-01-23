import { Link } from "react-router-dom";
// import "../Components/HomePage.css"
import Footer from "./footer";
import RideRequestForm from "./RideRequestForm";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Text } from "@chakra-ui/react";
import styles from "../Styles/homePage.module.css"
const Homepage = () => {
  return (
    <>
      <div className={styles.Container} >
        <div
          className={styles.inputImage}
          style={{ height: "700px", width: "100%", backgroundColor: "black" }}
        >
          <RideRequestForm />
        </div>
      </div>
      <section className={styles.business}>
        <h1 className={styles.title}>Uber for Business</h1>
        <p>Transform the way your company moves and feeds its people.</p>
        <button className={styles.btn_dark}>See how</button>
      </section>
      {/* Safety */}
      <section className={styles.safety}>
        <h1 className={styles.title}>Focused on safety, wherever you go</h1>
        <div >
          <div>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
              alt="Safety Home"
            />
            <h2 className={styles.subtitle}>Our commitment to your safety</h2>
            <p className={styles.description}>
              With every safety feature and every standard in our Community
              Guidelines, we're committed to helping to create a safe
              environment for our users.
            </p>
            <Link></Link>
            <Text className={styles.description}>Read about our Community Guidelines</Text>
            <Text className={styles.description}>See all safety features</Text>
            {/* <a className="link-underline-inline description" href="">
              Read about our Community Guidelines
            </a>
            <a className="link-underline-inline description" href="">
              See all safety features
            </a> */}
          </div>
          <div>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"
              alt="Cities Home"
            />
            <h2 className={styles.subtitle}>Setting 10,000+ cities in motion</h2>
            <p className={styles.description}>
              The app is available in thousands of cities worldwide, so you can
              request a ride even when you’re far from home.
            </p>
            <a className={`${styles.description}`} href="">
              View all cities
            </a>
          </div>
        </div>
        <div >
          <div>
            <i className={`${styles.fas} ${styles.fa_user_friends}`}></i>
            <h2 className={styles.subtitle}>About us</h2>
            <p className={styles.description}>
              Find out how we started, what drives us, and how we’re igniting
              opportunity.
            </p>
            <a className={styles.description} href="">
              Learn more
            </a>
          </div>
          <div>
            <i className={`${styles.far} ${styles.fa_newspaper}`}></i>
            <h2 className={styles.subtitle}>Newsroom</h2>
            <p className={styles.description}>
              See announcements about our latest releases, initiatives, and
              partnerships.
            </p>
            <a className={styles.description} href="">
              Learn more
            </a>
          </div>
          <div>
            <i className={`${styles.fas} ${styles.fa_home}`}></i>
            <h2 className={styles.subtitle}>Global citizenship</h2>
            <p className={styles.description}>
              Read about our commitment to making a positive impact in the
              cities we serve.
            </p>
            <a className={styles.description} href="">
              Learn more
            </a>
          </div>
        </div>
      </section>
      {/* DownloadPArt */}
      <section className={styles.download}>
        <h1 className={styles.title}>There's more to love in the apps</h1>
        <div className={styles.download_cards}>
          <div className={styles.download_cards}>
            <div>
              <img
                src="https://raw.githubusercontent.com/Elson0509/uber-homepage-clone/main/imgs/driver-app-logo.png"
                alt={`${styles.Driver} ${styles.App} ${styles.Logo}`}
              />
            </div>
            <div>
              <p>Download the Driver app</p>
            </div>
            <div>
              <i className={`${styles.fas} ${styles.fa_arrow_right}`}></i>
            </div>
          </div>
          <div className={styles.download_card}>
            <div>
              <img
                src="https://raw.githubusercontent.com/Elson0509/uber-homepage-clone/main/imgs/rider-app-logo.png"
                alt={`${styles.Rider} ${styles.App} ${styles.Logo}`}
              />
            </div>
            <div>
              <p>Download the Uber app</p>
            </div>
            <div>
              <i className={`${styles.fas} ${styles.fa_arrow_right}`}></i>
            </div>
          </div>
        </div>
      </section>


      {/* SignUps */}
      <section className={styles.arrow_signup}>
  <div className={styles.arrow_signup_div}>
    <div>
      <h1 className={styles.title}>Sign up to drive</h1>
    </div>
    <div className={styles.arrow_signup_icons_div}>
      <i className={`${styles.fas}`}></i>
      <i className={`${styles.fas}`}></i>
    </div>
  </div>
  <div className={styles.arrow_signup_div}>
    <div>
      <h1 className={styles.title}>Sign up to ride</h1>
    </div>
    <div className={styles.arrow_signup_icons_div}>
      <i className={styles.fas}></i>
      <i className={styles.fas}></i>
    </div>
  </div>
</section>

{/* Fotter */}
<Footer/>
    </>
  );
};

export default Homepage;