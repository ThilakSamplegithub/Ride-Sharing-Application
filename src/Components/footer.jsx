import { styled } from "@chakra-ui/react";
import React from "react";
// import "../Components/HomePage.css";
import styles from "../Styles/homePage.module.css"
function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          {/* <img
            className="logo"
            // src="https://raw.githubusercontent.com/Elson0509/uber-homepage-clone/main/imgs/logo.webp"
            src=""
            alt=""
          /> */}
        </div>
        <div>
          <a href="#" className={styles.footer_visit_link}>
            Visit Help Center
          </a>
        </div>
        <div className={styles.footer_themes}>
          <div>
            <ul>
              <h2>Company</h2>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Our offerings</a>
              </li>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">AI</a>
              </li>
              <li>
                <a href="#">Gift cards</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h2>Products</h2>
              <li>
                <a href="#">Ride</a>
              </li>
              <li>
                <a href="#">Drive</a>
              </li>
              <li>
                <a href="#">Eat</a>
              </li>
              <li>
                <a href="#">Uber for Business</a>
              </li>
              <li>
                <a href="#">Uber Freight</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h2>Global citizenship</h2>
              <li>
                <a href="#">Safety</a>
              </li>
              <li>
                <a href="#">Diversity and Inclusion</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_social}>
          <div className={styles.footer_social_icons}>
            <a href="#">
              <i className={`${styles.fab} ${styles.fa_facebook_square}`}></i>
            </a>
            <a href="#">
              <i className={`${styles.fab} ${styles.fa_twitter}`}></i>
            </a>
            <a href="#">
              <i className={`${styles.fab} ${styles.fa_youtube}`}></i>
            </a>
            <a href="#">
              <i className={`${styles.fab} ${styles.fa_linkedin}`}></i>
            </a>
            <a href="#">
              <i className={`${styles.fab} ${styles.fa_instagram}`}></i>
            </a>
          </div>
          <div>
            <div className={`${styles.footer_icon_text} ${styles.footer_social_icons}`}>
              <a href="#">
                <i className={`${styles.fas} ${styles.fa_globe}`}></i>
                <p>English</p>
              </a>
            </div>
            <div className={`${styles.footer_icon_text} ${styles.footer_social_icons}`}>
              <a href="#">
                <i className={`${styles.fas} ${styles.fa_map_marker_alt}`}></i>
                <p>London, Ont</p>
              </a>
            </div>
          </div>
          <div
            className={styles.stores}
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            <a href="#">
              <img
                src="https://raw.githubusercontent.com/Elson0509/uber-homepage-clone/1a5cb53774c547ac1b94ed2637084eff885b7638/imgs/googleplay.svg"
                alt="Google Play Store"
              />
            </a>
            <a href="#">
              <img
                src="https://raw.githubusercontent.com/Elson0509/uber-homepage-clone/1a5cb53774c547ac1b94ed2637084eff885b7638/imgs/appstore.svg"
                alt="Apple App Store"
              />
            </a>
          </div>
        </div>
        <div className={styles.footer_privacy}>
          <div>
            <p>© 2021 Uber Technologies Inc.</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;