import React from "react";
import { ElementCardsSuccesscard } from "../../components/ElementCardsSuccesscard";
import "./style.css";

export const Total = () => {
  return (
    <div className="total">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="cover" />
          <div className="intro-frame">
            <div className="intro-text">
              <div className="hey-text">Hey!</div>
              <p className="p">I’m Nick and this is a little about me!</p>
              <div className="learn-more-scroll">
                <a href="#background-frame" className="learn-more-link">
                  <div className="text-wrapper-2">Learn more ⬇️</div>
                </a>
              </div>
            </div>
            <div className="element-icons-image-2" />
          </div>
          <div id="work-frame" className="work-frame">
            <div className="rocket-frame">
              <div className="overlap-group">
                <div className="element-cards-case-study">
                  <div className="frame-wrapper">
                    <div className="frame-4">
                      <div className="image-2" />
                    </div>
                  </div>
                </div>
                <div className="rocket-coding-logos">
                  <img className="AWS" alt="Aws" src="/img/aws.png" />
                  <img
                    className="logos-python"
                    alt="Logos python"
                    src="/img/logos-python-original-1.png"
                  />
                  <div className="overlap-group-2">
                    <div className="element-icons-image-3" />
                    <div className="element-icons-image-4" />
                    <div className="element-icons-image-5" />
                    <img
                      className="logos-numpy-original"
                      alt="Logos numpy original"
                      src="/img/logos-numpy-original-wordmark-1.png"
                    />
                  </div>
                  <div className="element-icons-image-6" />
                  <div className="element-icons-image-7" />
                  <div className="element-icons-image-8" />
                  <div className="element-icons-image-9" />
                  <img
                    className="vector"
                    alt="Vector"
                    src="/img/vector-4.png"
                  />
                  <div className="vector-wrapper">
                    <img
                      className="vector-2"
                      alt="Vector"
                      src="/img/vector-5.png"
                    />
                  </div>
                  <img
                    className="vector-3"
                    alt="Vector"
                    src="/img/vector-2.png"
                  />
                </div>
                <p className="text-wrapper-3">
                  Data Analyst Intern
                </p>
                <p className="description-7">
                  (I) Analyzed Rocket Mortgage&#39;s Reddit reputation using NLP
                  sentiment analysis.
                  <br />
                  (II) Developed a new strategy for call center routing using
                  Machine Learning. <br />
                  (III) Developed and implement data-driven solutions through
                  creation of an automated performance dashboard.
                </p>
                <img
                  className="vector-4"
                  alt="Vector"
                  src="/img/vector-2x.png"
                />
                <div className="first-fact">
                  <div className="overlap-2">
                    <div className="group">
                      <div className="element-cards-successcard-2">
                        <div className="description-8">(I)</div>
                      </div>
                    </div>
                    <div className="frame-5">
                      <div className="div-wrapper">
                        <div className="frame-6">
                          <div className="description-9">20.1%</div>
                          <div className="description-10">
                            Negative Sentiment
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="second-fact">
                  <div className="overlap-2">
                    <div className="element-cards-successcard-wrapper">
                      <div className="element-cards-successcard-3">
                        <div className="description-11">(II)</div>
                      </div>
                    </div>
                    <div className="frame-7">
                      <div className="group-2">
                        <div className="frame-8">
                          <div className="description-12">13.75 m+</div>
                          <p className="description-10">
                            Predicted gains from the improved strategy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="third-fact">
                  <div className="overlap-3">
                    <div className="group">
                      <ElementCardsSuccesscard
                        className="four-cards-successcard"
                        darkMode
                        descriptionClassName="element-cards-successcard-instance"
                        hasFrame={false}
                        successMetrics="adoption"
                        text="(III)"
                      />
                    </div>
                    <div className="frame-9">
                      <div className="group-3">
                        <div className="frame-10">
                          <div className="description-13">++ Clarity</div>
                          <div className="description-10">
                            For Call Center Leaders
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="JDF-slide">
              <p className="co-founder-lead">
                Co-Founder &amp; Software Engineer
              </p>
              <div className="text-wrapper-4">JDF DATA</div>
              <div className="overlap-4">
                <div className="jdf-logos">
                  <img
                    className="logos-nodejs-plain"
                    alt="Logos nodejs plain"
                    src="/img/logos-nodejs-plain-wordmark-1-2x.png"
                  />
                  <img
                    className="java-script"
                    alt="Java script"
                    src="/img/javascript-2x.png"
                  />
                  <div className="element-icons-image-10" />
                  <div className="element-icons-image-11" />
                  <div className="element-icons-image-12" />
                  <img className="frame-11" alt="Frame" src="/img/frame.png" />
                  <div className="saas" />
                </div>
                <p className="description-14">
                  (I) Co-founded JDF Data, developing and deploying a full-stack
                  application for document automation and retrieval for 4 small
                  local businesses. <br />
                  (II) Partnered with an industry expert with over 35 years of
                  experience, currently expanding business opportunities.
                </p>
              </div>
              <div className="i-fact">
                <div className="overlap-group-3">
                  <div className="description-wrapper">
                    <div className="description-15">(I)</div>
                  </div>
                  <div className="frame-12">
                    <div className="description-9">52.5%</div>
                    <div className="description-10">Reduced workload</div>
                  </div>
                </div>
              </div>
              <div className="II-fact">
                <div className="overlap-group-3">
                  <div className="element-cards-successcard-4">
                    <div className="description-16">(II)</div>
                  </div>
                  <div className="frame-13">
                    <div className="description-17">30 k +</div>
                    <div className="description-10">Initial Evaluation</div>
                  </div>
                </div>
              </div>
              <div className="III-fact">
                <div className="overlap-5">
                  <div className="element-cards-successcard-5">
                    <div className="description-18">(III)</div>
                  </div>
                  <div className="frame-14">
                    <div className="description-19">++ Ease</div>
                    <div className="description-10">For Local Businesses.</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="work-text-header"
              alt="Work text header"
              src="/img/work-text-header.png"
            />
          </div>
          <div id="background-frame" className="background-frame">
            <div className="text-bubble">
              <p className="mich-intro-text">
                I go to the University of Michigan where I’m a rising sophomore
                studying Computer Science and Data Science! Outside of school,
                I’m currently based in the beautiful San Francisco Bay Area!
                <br />
                <br />
                With over 3.5 years of experience in programming, I’m passionate
                about applying my technical skills to drive impact for
                businesses through AI, software engineering and data science.
              </p>
            </div>

            {/* <div className="custom-buttom">
            <a href="#work-frame" className="custom-buttom">
              <div class="text-wrapper-2">Now to my work🚀🛠️</div></a>
           </div> */}

            <img
              className="background-text"
              alt="Background text"
              src="/img/background-text-header.png"
            />
            <div className="overlap-6">
              <div className="computer-science" />
              <div className="presentation-picture" />
            </div>
          </div>
          <div id="projects-and" className="projects-and">
            <div className="projects-and-2">
              <div className="QCF">
                <div className="overlap-group-4">
                  <div className="div-2">
                    <div className="titles">
                      <p className="project-title">
                        Quant Project Lead, Trading Team
                      </p>
                      <p className="description-20">
                        Led a team of eight students to develop simple trading
                        algorithms such as RSI Mean Reversion, Pairs Trading,
                        and SMA strategies using Python libraries.
                      </p>
                    </div>
                    <div className="element-icons-image-13" />
                  </div>
                  <div className="QCF-tech-stack">
                    <img
                      className="element-icons-image-14"
                      alt="Element icons image"
                      src="/img/03-icons-image-placeholder-19.png"
                    />
                    <img
                      className="element-icons-image-15"
                      alt="Element icons image"
                      src="/img/03-icons-image-placeholder-20.png"
                    />
                    <div className="element-icons-image-16" />
                    <img
                      className="logos-python-2"
                      alt="Logos python"
                      src="/img/logos-python-original-1-2x.png"
                    />
                  </div>
                  <img
                    className="qcf-logo"
                    alt="Qcf logo"
                    src="/img/qcf-logo.png"
                  />
                  <a
                    href="https://github.com/nickjohnsondls/Trading-Project"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="skill-button-qcf"
                      alt="Skill button qcf"
                      src="/img/skill-button-qcf.png"
                    />
                  </a>
                </div>
              </div>
              <div className="MDST">
                <div className="overlap-7">
                  <div className="MDST-2">
                    <div className="titles-2">
                      <p className="project-title-2">
                        Michigan Data Science Team: K-Means Machine Learning
                      </p>
                      <p className="description-21">
                        Worked in a team of six to enhance Codenames gameplay,
                        developing AI bots using Q-Learning and K-means to
                        refine decision making strategy.
                      </p>
                    </div>
                    <div className="overlap-group-5">
                      <div className="element-icons-image-17" />
                      <div className="element-icons-image-18" />
                    </div>
                    <div className="MDST-skills" />
                  </div>
                  <img
                    className="element-icons-image-19"
                    alt="Element icons image"
                    src="/img/03-icons-image-appicon-24.png"
                  />
                  <a
                    className="skills-button-mdst"
                    href="https://github.com/nickjohnsondls/codenames"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="tag">🧰</div>
                  </a>
                </div>
              </div>
              <div className="deloitte-slide">
                <div className="overlap-8">
                  <div className="titles-3">
                    <p className="project-title-2">
                      Michigan Ross x Deloitte Datathon: Finalist
                    </p>
                    <p className="description-21">
                      Advised ExxonMobil to boost profits through analysis of
                      emissions, financial, and operational data to identify key
                      environmental impact correlations and develop mitigation
                      strategies.
                    </p>
                  </div>
                  <div className="element-icons-image-20" />
                </div>
                <div className="deloitte-tech-stack">
                  <div className="overlap-group-6">
                    <img
                      className="element-icons-image-21"
                      alt="Element icons image"
                      src="/img/03-icons-image-placeholder-15.png"
                    />
                    <div className="element-icons-image-22" />
                  </div>
                  <img
                    className="SQL-logo-deloitte"
                    alt="Sql logo deloitte"
                    src="/img/vector-4.png"
                  />
                  <img
                    className="tablue-logo"
                    alt="Tablue logo"
                    src="/img/tablue-logo.png"
                  />
                  <img
                    className="logos-python-3"
                    alt="Logos python"
                    src="/img/logos-python-original-2-2x.png"
                  />
                </div>
                <a
                  href="https://docs.google.com/presentation/d/13YsueennRrd_2T5qdX0I_OKwc6kaKdVeQ-Ygz97HJu8/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="skill-button"
                    alt="Skill button"
                    src="/img/skill-button-qcf.png"
                  />
                </a>
                <img
                  className="element-icons-image-23"
                  alt="Element icons image"
                  src="/img/03-icons-image-appicon-2.png"
                />
              </div>
              <div className="google-frame">
                <div className="overlap-group-4">
                  <div className="div-2">
                    <p className="text-wrapper-5">
                      Google x MHacks AI Hackathon
                    </p>
                    <div className="element-icons-image-24" />
                  </div>
                  <div className="titles-4">
                    <p className="description-22">
                      Developed &#34;Threaded Semantic Syntax Search&#34; to
                      provide a GitHub and document search tool for software
                      engineers learning large codebases (&gt;20 million tokens)
                      and company documents.
                    </p>
                  </div>
                  <img
                    className="google-icon"
                    alt="Google icon"
                    src="/img/google-icon.png"
                  />
                  <a
                    href="https://devpost.com/software/tsss-threaded-semantic-syntax-search"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="tech-stack-google"
                      alt="Tech stack google"
                      src="/img/skill-button-qcf.png"
                    />
                  </a>
                  <div className="google-tech-stack">
                    <img
                      className="vector-5"
                      alt="Vector"
                      src="/img/vector-2-2x.png"
                    />
                    <img
                      className="frame-15"
                      alt="Frame"
                      src="/img/frame-2x.png"
                    />
                    <img
                      className="logos-python-4"
                      alt="Logos python"
                      src="/img/logos-python-original-3.png"
                    />
                    <img
                      className="logos-original"
                      alt="Logos original"
                      src="/img/logos-css3-original-wordmark.png"
                    />
                    <img
                      className="logos-numpy-original-2"
                      alt="Logos numpy original"
                      src="/img/logos-numpy-original-wordmark-1-2x.png"
                    />
                    <div className="element-icons-image-25" />
                    <img
                      className="logos-nodejs-plain-2"
                      alt="Logos nodejs plain"
                      src="/img/logos-nodejs-plain-wordmark-1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="work-text-header-2"
              alt="Work text header"
              src="/img/work-text-header-1.png"
            />
          </div>
          <div id="navbar-frame" className="navbar-frame">
            <div className="overlap-9">
              <div className="navbar-group">
                <div className="overlap-group-7">
                  <a
                    href="mailto:njjohns@umich.edu"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="gmail-button-bottom"
                      alt="Gmail button bottom"
                      src="/img/gmail-button-bottom.png"
                    />
                  </a>
                  <img
                    className="face-intro-text"
                    alt="Face intro text"
                    src="/img/face-intro-text-2.png"
                  />
                  <a
                    className="frame-16"
                    href="www.linkedin.com/in/nick-johnson-michigan"
                    rel="noopener noreferrer"
                    target="_blank"
                  />
                  <img
                    className="element-controls-fab"
                    alt="Element controls fab"
                    src="/img/02-controls-fab.png"
                  />
                  <a
                    href="https://github.com/nickjohnsondls"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="github-logo"
                      alt="Github logo"
                      src="/img/github-logo.png"
                    />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/11O03FOnRz7E6QVJiOQl5w7GIPdQfQ5NM/view?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="resume-button-bottom"
                      alt="Resume button bottom"
                      src="/img/resume-button-bottom.png"
                    />
                  </a>
                </div>
              </div>
              <div className="options">
                <div className="element-navigation">
                  <div className="buttons">
                    <a href="#background-frame" className="text-wrapper-6">
                      Background
                    </a>
                  </div>
                  <img
                    className="highlighter"
                    alt="Highlighter"
                    src="/img/highlighter.png"
                  />
                </div>
                <div className="element-navigation">
                  <div className="buttons">
                    <a href="#work-frame" className="text-wrapper-7">
                      Work
                    </a>
                  </div>
                  <img
                    className="highlighter-2"
                    alt="Highlighter"
                    src="/img/highlighter-1.png"
                  />
                </div>
                <div className="element-navigation">
                  <div className="buttons">
                    <a href="#projects-and" className="text-wrapper-7">
                      Project
                    </a>
                  </div>
                  <img
                    className="highlighter-3"
                    alt="Highlighter"
                    src="/img/highlighter-1.png"
                  />
                </div>
                <div className="element-navigation">
                  <div className="buttons">
                    <a href="#bottom-group-frame" className="text-wrapper-7">
                      Contact
                    </a>
                  </div>
                  <img
                    className="highlighter-4"
                    alt="Highlighter"
                    src="/img/highlighter-1.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="bottom-group-frame" className="bottom-group-frame">
            <div className="overlap-10">
              <div className="bottom-group">
                <img
                  className="frame-17"
                  alt="Frame"
                  src="/img/frame-4501.png"
                />
                <p className="text-wrapper-8">Made by Nick Johnson, 2024</p>
                <div className="contact-info">
                  <img
                    className="reach-out-for-more"
                    alt="Reach out for more"
                    src="/img/reach-out-for-more-2.png"
                  />
                </div>
                <div className="frame-18">
                  <div className="text-wrapper-9">
                    <a href="#background-frame" className="nav-link">
                      <div className="text-wrapper-9">About</div>
                    </a>
                  </div>

                  <div className="text-wrapper-9">
                    <a href="#work-frame" className="nav-link">
                      <div className="text-wrapper-9">Work</div>
                    </a>
                  </div>

                  <div className="text-wrapper-9">
                    <a href="#projects-and" className="nav-link">
                      <div className="text-wrapper-9">Projects</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="element-controls-buttons-2">
                <a href="#navbar-frame" className="nav-link">
                  <div className="text-wrapper-6">Back up</div>
                </a>
              </div>

              <a
                href="mailto:njjohns@umich.edu"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="gmail-button-bottom-2"
                  alt="Gmail button bottom"
                  src="/img/gmail-button-bottom.png"
                />
              </a>
              <a
                className="frame-19"
                href="www.linkedin.com/in/nick-johnson-michigan"
                rel="noopener noreferrer"
                target="_blank"
              />
              <a
                href="https://github.com/nickjohnsondls"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="github-logo-2"
                  alt="Github logo"
                  src="/img/github-logo.png"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/11I7Te1zspGAys8I1IOcdR-zYOuN86LB6/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="resume-button-bottom-2"
                  alt="Resume button bottom"
                  src="/img/resume-button-bottom-1.png"
                />
              </a>
            </div>
          </div>

          <div className="luke-nick-fistbump" />
        </div>
      </div>
    </div>
  );
};
