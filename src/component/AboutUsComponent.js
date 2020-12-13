import React from 'react';
import '../css/AboutUsComponent.css';
import AddIcon from '@material-ui/icons/Add';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Helmet from 'react-helmet';
const TeamPage = () => {
  return (
    <div className="bg-white">
      <Helmet title="About Us" />
      <section id="team" className="pb-5">
        <div className="container">
          <div
            className="title-about section-title"
            style={{ fontFamily: "Ubuntu" }}
          >
            About Us
          </div>
          <div
            className="about-body mb-4"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Ingenuity is the official campus media body of the Indian Institute
            of Information Technology,Pune run by the students under patronage
            of Government of India.After 4 years of development,Ingenuity has
            rolled out as student media body to offer news and needs for the
            amelioration of everyone through this website.
          </div>
          <hr />
        </div>
        <div className="container">
          <h5 className="section-title h1" style={{ fontFamily: "Ubuntu" }}>
            Founders
          </h5>
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-6 col-md-4 ">
              <div
                className="image-flip"
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src="https://lh3.googleusercontent.com/pw/ACtC-3fNsgxqXl25plWp6V0ecKQ3ry4C87Gf1nBI7ufJGHZwtykMEXcyA05JpymSVm3LerQriGKBXQJEmvtZHxpIZmbsI15FEBlzLCDm0BZMqcIMppW41p8eJXaYKUKMfawZSO9K4Ms1fmGtrtJabAxvYSRb=s200-no?authuser=0"
                            alt="img"
                          />
                        </p>
                        <h4 className="card-title">Rohan Lekhwani </h4>
                        <p className="card-text">Co-Founder</p>
                        <a
                          href="https://ingenuity.iiitp.ac.in/"
                          className="btn btn-primary btn-sm"
                        >
                          <AddIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Rohan Lekhwani</h4>
                        <p className="card-text">
                          I enjoy building cool stuff and taking part in
                          Hackathons and have been in the Top 1% in several of
                          them.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://www.instagram.com/rohanlekhwani/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <InstagramIcon />
                            </a>
                          </li>

                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://www.linkedin.com/in/rohanlekhwani/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkedInIcon />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://github.com/RonLek"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GitHubIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src="https://lh3.googleusercontent.com/pw/ACtC-3d3fuQJXvPkIx9zVy_uI7y3lAPAgWyBmB4otohL98ub0IXCJKNh-eFfUMBQwPJveu1NX3mb9RZGYABUp6HSHr0VT1AdsYP6W7G1HIA0sA0MmxFYtn0TRbmSZAlpykuDryvq7lQ0b1DuRovDHrCPbwg=s200-no?authuser=0"
                            alt="img"
                          />
                        </p>
                        <h4 className="card-title">Saksham Mahajan</h4>
                        <p className="card-text">Co-Founder and Chief Editor</p>
                        <a href="/home" className="btn btn-primary btn-sm">
                          <AddIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card ">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Saksham Mahajan</h4>
                        <p className="card-text">
                          <br />
                          Just another Sophomore who's exploring new things.
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://www.instagram.com/sakshammahajan_/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <InstagramIcon />
                            </a>
                          </li>

                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://www.linkedin.com/in/saksham-mahajan/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkedInIcon />
                            </a>
                          </li>

                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://github.com/mahajansaksham"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GitHubIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h5 className="section-title h1" style={{ fontFamily: "Ubuntu" }}>
            Web Development Team
          </h5>
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src="https://lh3.googleusercontent.com/pw/ACtC-3e-aSF_2pHTO4K8rIZfHAPQ3wglsXS2VduhotkGlLRJaLRlW1B6Rbf5vgsx8WtWT7-yOhL_S1Fi3Dx5bupSDw17M1uYNne5OulRXy7BojK6oA5Ls4ZwqfpEAEvWw2sAFsqY7uJJqdgC7gLltD6_T6R0=s200-no?authuser=0"
                            alt=".."
                          />
                        </p>
                        <h4 className="card-title">Mukhrit Gupta</h4>
                        <p className="card-text">Web Manager</p>
                        <a
                          href="https://ingenuity.iiitp.ac.in/"
                          className="btn btn-primary btn-sm"
                        >
                          <AddIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Mukhrit Gupta</h4>
                        <p className="card-text">
                          'Every act of creation is first an act of
                          destruction.' ~Pablo Picasso
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://www.instagram.com/mukuboi/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <InstagramIcon />
                            </a>
                          </li>

                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://www.linkedin.com/in/mukhrit-gupta-553196194/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkedInIcon />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://github.com/Mukhrit"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GitHubIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="image-flip"
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className="mainflip">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className=" img-fluid"
                            src="https://lh3.googleusercontent.com/pw/ACtC-3dHGZ6pihFr_q08pnaDyeB-bqG_noPjPwcUlif_sVaUJ6luVpfoAgJXxI0i9sIwVtg8A3BvYJSbluR55_HnP9WdAHMfPuod8eeLKKfjwxaogfiKcYhMjmBhKVvhofHkeqdSMdE2eIUs98UUoI7_do3S=s200-no?authuser=0"
                            alt=".."
                          />
                        </p>
                        <h4 className="card-title">Rakshit Jain</h4>
                        <p className="card-text">Web Manager</p>
                        <a
                          href="https://ingenuity.iiitp.ac.in/"
                          className="btn btn-primary btn-sm"
                        >
                          <AddIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="backside">
                    <div className="card">
                      <div className="card-body text-center mt-4">
                        <h4 className="card-title">Rakshit Jain</h4>
                        <p className="card-text">
                          Everthing is connected.What if everything that came
                          from the frontend was influenced by the backend .{" "}
                        </p>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://www.instagram.com/rakshitjain13/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <InstagramIcon />
                            </a>
                          </li>

                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://www.linkedin.com/in/rakshit-jain-9b83b5170/?originalSubdomain=in"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkedInIcon />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon text-xs-center"
                              href="https://github.com/rakshitjain13"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GitHubIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default TeamPage;
