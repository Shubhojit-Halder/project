import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import img1 from "../public/images/unsplash.jpg";
import msit from "../public/images/MSIT.png";
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.creation}>
          <p>
            Created with ❤ by{" "}
            <span className={styles.footerTeamName}>Team HexaOverflow</span>
          </p>
        </div>
        <div className={styles.allDetails}>
          <div className={styles.clgDetails}>
            <h2 className={styles.brand}>HexaOverflow</h2>
            <Image
              src={msit}
              alt="Picture of the author"
              width={70}
              height={70}
              className={styles.clglogo}
            />
            <p className={styles.clgAddress}>
              Meghnad Saha Institute of Technology
              <br />
              Techno complex, Mundapara, Beside NRI Complex, Post: Ucchepota,
              Kolkata-700150
            </p>
          </div>
          <div className={styles.membersArea}>
            <h3>Team members</h3>
            <div className={styles.allNames}>
              <div className={styles.memberClass}>
                <Image
                  src={img1}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  className={styles.ourImg}
                />
                <p className={styles.ourNames}>Subhradeep Pal</p>
              </div>
              <div className={styles.memberClass}>
                <Image
                  src={img1}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  className={styles.ourImg}
                />
                <p className={styles.ourNames}>Aryadeep Chakraboty</p>
              </div>
              <div className={styles.memberClass}>
                <Image
                  src={img1}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  className={styles.ourImg}
                />
                <p className={styles.ourNames}>Shubhojit Halder</p>
              </div>
              <div className={styles.memberClass}>
                <Image
                  src={img1}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  className={styles.ourImg}
                />
                <p className={styles.ourNames}>Pubali Dey</p>
              </div>
              <div className={styles.memberClass}>
                <Image
                  src={img1}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  className={styles.ourImg}
                />
                <p className={styles.ourNames}>Priyanka Banerjee</p>
              </div>
              <div className={styles.memberClass}>
                <Image
                  src={img1}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  className={styles.ourImg}
                />
                <p className={styles.ourNames}>Debargha Chowdhury</p>
              </div>
            </div>
          </div>
          <div className={styles.mentors}>
            <h3>Mentors</h3>
            <div className={styles.allNames}>
              <div className={styles.memberClass}>
                <Image
                  src={img1}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  className={styles.ourImg}
                />
                <p className={styles.ourNames}>Dr. Sudip Dogra</p>
              </div>
              <div className={styles.memberClass}>
                <Image
                  src={img1}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                  className={styles.ourImg}
                />
                <p className={styles.ourNames}>Mrs.Nibedita Neogi</p>
              </div>
              <div className={styles.contact_details}>
                <h3>Contact Us</h3>
                <p>Ph no: <br/>+91 99032 47560</p>
                <p>Email:<br/> admin@hexaoverflow.com </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
