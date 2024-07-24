import Image from "next/image";
import Link from "next/link";
import "./style.scss";

import instImg from "@/public/assets/icons/contact/instagram-icon.svg";
import fbImg from "@/public/assets/icons/contact/facebook-icon.svg";
import xImg from "@/public/assets/icons/contact/x-icon.svg";
import wpImg from "@/public/assets/icons/contact/whatsapp-icon.svg";
import mailImg from "@/public/assets/icons/contact/mail-icon.svg";
import LinkBtn from "@/components/LinkBtn/LinkBtn";

const ContactSection = () => {
  return (
    <footer className="contact-section relative">
      <section className="main-container fixed bottom-0 w-full xl:pt-12 md:pt-12">
        <div className="contact-container flex sm:items-end sm:flex-row flex-col">
          <aside className="contact-left-part w-2/5 pr-4  flex flex-col justify-between ">
            <div>
              <h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt suscipit officia
                sequi. Dolorem excepturi ipsa in velit veniam repellat id perferendis itaque ipsum
                fuga! Officiis maxime quidem incidunt asperiores facere?
              </h3>

              <LinkBtn link="/contacts" title="Learn More" extraClass="contact-link-btn" />
            </div>

            <div className="flex flex-col gap-8">
              <div className="contact-details flex flex-col gap-3">
                <h1>
                  <Image src={wpImg} alt="*" /> <span>: +91 7400093423</span>
                </h1>
                <h1>
                  <Image src={mailImg} alt="*" /> <span>: YourHome@gamil.com</span>
                </h1>
              </div>
              <div className="social-link">
                <div className="link-item">
                  <a href="">
                    <Image src={fbImg} alt="FaceBook" />
                  </a>
                </div>
                <div className="link-item">
                  {" "}
                  <a href="">
                    <Image src={instImg} alt="instagram" />
                  </a>
                </div>
                <div className="link-item">
                  {" "}
                  <a href="">
                    <Image src={xImg} alt="X" />
                  </a>
                </div>
              </div>
            </div>

            <div className="quick-nav">
              <ul className="flex justify-between">
                <li>
                  <Link href="/">Home</Link>
                </li>
                |
                <li>
                  <Link href="/#about">About</Link>
                </li>
                |
                <li>
                  <Link href="/#top-courses">Top Courses</Link>
                </li>
                |
                <li>
                  <Link href="/event">Events</Link>
                </li>
              </ul>
            </div>
          </aside>

          <aside className="contact-right part grow flex flex-col sm:justify-end  justify-start items-end">
            <h1>Join</h1>
            <h1>Us</h1>
            <h1>Today</h1>
          </aside>
        </div>
      </section>
    </footer>
  );
};

export default ContactSection;