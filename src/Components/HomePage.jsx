import { Link } from "react-router-dom";
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
              src="data:image/jpeg;base64,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"
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
              src="data:image/jpeg;base64,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"
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