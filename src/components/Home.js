import React from "react"
import Preloader from "./Preloader";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { motion , useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import ScrollAnimation from 'react-animate-on-scroll';


function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        x:0,
        transition: {
          type:"spring",
          stiffness: 30
        }
      })
    }
  }, [controls, inView]);

  return (
    <div>
        <Preloader />
        <Sidebar />
        <Header />

  {/* Hero Section Begin */}
  <section className="hero-section">
    <div className="hero__slider owl-carousel">
    <div className="hero__item set-bg" data-setbg="img/hero/hero-1.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero__text">
                <h5>Starting At Only $ 2.8/month</h5>
                <h2>
                  Welcome to the best
                  <br /> hosting company
                </h2>
                <a href="#" className="primary-btn">
                  Get started now
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <motion.div 
              className="hero__img"
              animate={{
                x: 0,
                opacity: 1,
                // rotate:360
              }}
              initial={{
                opacity:0.1,
                x:1800
              }}
              transition={{
                type:"spring",
                stiffness: 30
              }}
              >
                <img src="img/hero/hero-right.png" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__item set-bg" data-setbg="img/hero/hero-1.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero__text">
                <h5>Starting At Only $ 2.8/month</h5>
                <h2>
                  Welcome to the best
                  <br /> hosting company
                </h2>
                <a href="#" className="primary-btn">
                  Get started now
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero__img">
                <img src="img/hero/hero-right.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Hero Section End */}
  {/* Register Domain Section Begin */}
  <section className="register-domain spad">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <div className="register__text">
          <ScrollAnimation animateIn='fadeInLeft' duration={1}>
            <div className="section-title">
              <h3>Register Your Domain Now!</h3>
            </div>
            </ScrollAnimation>
            <div className="register__form">
            <ScrollAnimation animateIn='fadeInLeft' duration={2}>
              <form action="#">
                <input type="text" placeholder="ex: cloudhost" />
                <div className="change__extension">
                  .com
                  <ul>
                    <li>.net</li>
                    <li>.org</li>
                    <li>.me</li>
                  </ul>
                </div>
                <button type="submit" className="site-btn">
                  Search
                </button>
              </form>
              </ScrollAnimation>
            </div>
            <div className="register__result">
              <ul>
                <li>
                  .com <span>$1.95</span>
                </li>
                <li>
                  .net <span>$1.95</span>
                </li>
                <li>
                  .org <span>$1.95</span>
                </li>
                <li>
                  .us <span>$1.95</span>
                </li>
                <li>
                  .in <span>$1.95</span>
                </li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Register Domain Section End */}
  {/* Services Section Begin */}
  <section className="services-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h3>Choose the right hosting solution</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6">
      <ScrollAnimation animateIn='fadeInRight' duration={1}>
          <div className="services__item">
            <h5>Shared Hosting</h5>
            <span>Starts At $1.84</span>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </ScrollAnimation>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
        <ScrollAnimation animateIn='fadeInRight' duration={2}>
          <div className="services__item">
            <h5>Wordpress Hosting</h5>
            <span>Starts At $1.84</span>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          </ScrollAnimation>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
        <ScrollAnimation animateIn='fadeInRight' duration={3}>
          <div className="services__item">
            <h5>Dedicated Hosting</h5>
            <span>Starts At $1.84</span>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          </ScrollAnimation>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
        <ScrollAnimation animateIn='fadeInRight' duration={1}>
          <div className="services__item">
            <h5>SSL certificate</h5>
            <span>Starts At $1.84</span>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          </ScrollAnimation>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
        <ScrollAnimation animateIn='fadeInRight' duration={2}>
          <div className="services__item">
            <h5>Web Hosting</h5>
            <span>Starts At $1.84</span>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          </ScrollAnimation>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
        <ScrollAnimation animateIn='fadeInRight' duration={3}>
          <div className="services__item">
            <h5>Cloud server</h5>
            <span>Starts At $1.84</span>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </section>
  {/* Services Section End */}
  {/* Pricing Section Begin */}
  <section className="pricing-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-7">
          <div className="section-title normal-title">
            <h3>Choose your plan</h3>
          </div>
        </div>
        <div className="col-lg-5 col-md-5">
        <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>         
          <div className="pricing__swipe-btn">
            <label htmlFor="month" className="active">
              Monthly
              <input type="radio" id="month" />
            </label>
            <label htmlFor="yearly">
              Yearly
              <input type="radio" id="yearly" />
            </label>
          </div>
        </ScrollAnimation>
        </div>
      </div>
      <div className="row monthly__plans active">
        <div className="col-lg-3 col-md-6 col-sm-6">
        <ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' duration={1}>
          <div className="pricing__item">
            <h4>Started</h4>
            <h3>
              $15.90 <span>/ month</span>
            </h3>
            <ul>
              <li>2,5 GB web space</li>
              <li>Free site buiding tools</li>
              <li>Free domain registar</li>
              <li>24/7 Support</li>
              <li>Free marketing tool</li>
              <li>99,9% Services uptime</li>
              <li>30 day money back</li>
            </ul>
            <a href="#" className="primary-btn">
              Choose plan
            </a>
          </div>
          </ScrollAnimation>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
        <ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' duration={2}>
          <div className="pricing__item">
            <h4>Business</h4>
            <h3>
              $25.90 <span>/ month</span>
            </h3>
            <ul>
              <li>90 GB web space</li>
              <li>Free site buiding tools</li>
              <li>Free domain registar</li>
              <li>24/7 Support</li>
              <li>Free marketing tool</li>
              <li>99,9% Services uptime</li>
              <li>30 day money back</li>
            </ul>
            <a href="#" className="primary-btn">
              Choose plan
            </a>
          </div>
          </ScrollAnimation>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
        <ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' duration={3}>
          <div className="pricing__item">
            <h4>Premium</h4>
            <h3>
              $35.90 <span>/ month</span>
            </h3>
            <ul>
              <li>150 GB web space</li>
              <li>Free site buiding tools</li>
              <li>Free domain registar</li>
              <li>24/7 Support</li>
              <li>Free marketing tool</li>
              <li>99,9% Services uptime</li>
              <li>30 day money back</li>
            </ul>
            <a href="#" className="primary-btn">
              Choose plan
            </a>
          </div>
          </ScrollAnimation>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
        <ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' duration={4}>
          <div className="pricing__item">
            <h4>Dedicated</h4>
            <h3>
              $45.90 <span>/ month</span>
            </h3>
            <ul>
              <li>Unlimited web space</li>
              <li>Free site buiding tools</li>
              <li>Free domain registar</li>
              <li>24/7 Support</li>
              <li>Free marketing tool</li>
              <li>99,9% Services uptime</li>
              <li>30 day money back</li>
            </ul>
            <a href="#" className="primary-btn">
              Choose plan
            </a>
          </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="row yearly__plans">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="pricing__item">
            <h4>Started</h4>
            <h3>
              $150 <span>/ month</span>
            </h3>
            <ul>
              <li>2,5 GB web space</li>
              <li>Free site buiding tools</li>
              <li>Free domain registar</li>
              <li>24/7 Support</li>
              <li>Free marketing tool</li>
              <li>99,9% Services uptime</li>
              <li>30 day money back</li>
            </ul>
            <a href="#" className="primary-btn">
              Choose plan
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="pricing__item">
            <h4>Business</h4>
            <h3>
              $250 <span>/ month</span>
            </h3>
            <ul>
              <li>90 GB web space</li>
              <li>Free site buiding tools</li>
              <li>Free domain registar</li>
              <li>24/7 Support</li>
              <li>Free marketing tool</li>
              <li>99,9% Services uptime</li>
              <li>30 day money back</li>
            </ul>
            <a href="#" className="primary-btn">
              Choose plan
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="pricing__item">
            <h4>Premium</h4>
            <h3>
              $350 <span>/ month</span>
            </h3>
            <ul>
              <li>150 GB web space</li>
              <li>Free site buiding tools</li>
              <li>Free domain registar</li>
              <li>24/7 Support</li>
              <li>Free marketing tool</li>
              <li>99,9% Services uptime</li>
              <li>30 day money back</li>
            </ul>
            <a href="#" className="primary-btn">
              Choose plan
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="pricing__item">
            <h4>Dedicated</h4>
            <h3>
              $450 <span>/ month</span>
            </h3>
            <ul>
              <li>Unlimited web space</li>
              <li>Free site buiding tools</li>
              <li>Free domain registar</li>
              <li>24/7 Support</li>
              <li>Free marketing tool</li>
              <li>99,9% Services uptime</li>
              <li>30 day money back</li>
            </ul>
            <a href="#" className="primary-btn">
              Choose plan
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Pricing Section End */}
  {/* Achievement Section Begin */}
  <section
    className="achievement-section set-bg spad"
    data-setbg="img/achievement-bg.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="achievement__item">
            <span className="fa fa-user-o" />
            <h2 className="achieve-counter">2468</h2>
            <p>Clients</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="achievement__item">
            <span className="fa fa-edit" />
            <h2 className="achieve-counter">2468</h2>
            <p>Domains</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="achievement__item">
            <span className="fa fa-clone" />
            <h2 className="achieve-counter">2468</h2>
            <p>Server</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
          <div className="achievement__item">
            <span className="fa fa-cog" />
            <h2 className="achieve-counter">2468</h2>
            <p>Installs</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Achievement Section End */}
  {/* Work Section Begin */}
  <section className="work-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h3>HOW TO BUILD YOUR WEBSITE ONLINE TODAY?</h3>
          </div>
          <div className="work__text">
            <div className="row">
              <div className="col-lg-6">
        <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutLeft' duration={2}>
                <div className="work__item">
                  <i className="fa fa-desktop" />
                  <span>CREATE YOUR OWN WEBSITE WITH OUR</span>
                  <h3>WEB SITE BUILDER</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida facilisis.{" "}
                  </p>
                  <a href="#" className="primary-btn">
                    Read More
                  </a>
                </div>
          </ScrollAnimation>
              </div>
              <div className="col-lg-6">
        <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' duration={2}>
                <div className="work__item">
                  <i className="fa fa-shopping-bag" />
                  <span>EASY CREATE, MANAGE &amp; SELL</span>
                  <h3>ONLINE STORE</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida facilisis.{" "}
                  </p>
                  <a href="#" className="primary-btn">
                    Read More
                  </a>
                </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Work Section End */}
  {/* Choose Plan Section Begin */}
  <section className="choose-plan-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
        <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutLeft' duration={3}>
          <img src="img/choose-plan.png" />
          </ScrollAnimation>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="plan__text">
            <h3>
              up to 70% discount with free domain name registration included!
            </h3>
            <ul>
        <ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' duration={1}>
              <li>
                <span className="fa fa-check" /> FREE Domain Name
              </li>
              </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' duration={2}>
              <li>
                <span className="fa fa-check" /> FREE Email Address
              </li>
              </ScrollAnimation>
              <ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' duration={3}>
              <li>
                <span className="fa fa-check" /> Plently of disk space
              </li>
              </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' duration={4}>
              <li>
                <span className="fa fa-check" /> FREE Website Bullder
              </li>
              </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' duration={5}>
              <li>
                <span className="fa fa-check" /> FREE Marketing Tools
              </li>
              </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInDown' animateOut='bounceOutLeft' duration={6}>
              <li>
                <span className="fa fa-check" /> 1-Click WordPress Install
              </li>
              </ScrollAnimation>
            </ul>
            <a href="#" className="primary-btn">
              Get start now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

    </div>
  );
}

export default Home;
