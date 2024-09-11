import React from "react";
import { ElementCardsSuccesscard } from "../../components/ElementCardsSuccesscard";
import { ElementControls } from "../../components/ElementControls";
import { ElementControlsButtons } from "../../components/ElementControlsButtons";
import { ElementEmoji } from "../../components/ElementEmoji";
import { ElementIconsImage } from "../../components/ElementIconsImage";
import { ElementNavigationBack } from "../../components/ElementNavigationBack";
import "./style.css";

export const TotalFrame = () => {
  return (
    <div className="total-frame">
      <div className="total-wrapper">
        <div className="overlap-group-wrapper">
          <div className="overlap-11">
            <div className="cover-2" />
            <div className="main-intro-frame">
              <img className="vector-6" alt="Vector" src="/img/vector.png" />
              <div className="intro-text-2">
                <div className="hey-text-2">Hey!</div>
                <p className="intro-text-3">
                  I’m Nick and this is a little about me!
                </p>
                <a href="#main-work-frame" className="two-controls-buttons-link">

                <ElementControlsButtons
                  buttonTypes="primary"
                  className="two-controls-buttons"
                  darkMode
                  divClassName="design-component-instance-node"
                  states="default"
                  text="Learn more ⬇️"
                />
                </a>
              </div>
            </div>
            <img
              className="work-background"
              alt="Work background"
              src="/img/work-background.png"
            />
            <div className="main-work-frame">
              <div className="rocket-slide-wrapper">
                <div className="rocket-slide">
                  <div className="overlap-12">
                    <div className="element-cards-case-study-wrapper">
                      <div className="element-cards-case-study-2">
                        <div className="frame-20">
                          <div className="image-3" />
                        </div>
                      </div>
                    </div>
                    <div className="frame-21">
                      <div className="image-3" />
                    </div>
                    <div className="rocket-coding-logos-2">
                      <img className="AWS-2" alt="Aws" src="/img/aws.png" />
                      <img
                        className="logos-python-5"
                        alt="Logos python"
                        src="/img/logos-python-original-1.png"
                      />
                      <div className="overlap-group-8">
                        <div className="element-icons-image-26" />
                        <div className="element-icons-image-27" />
                        <div className="element-icons-image-28" />
                        <img
                          className="logos-numpy-original-3"
                          alt="Logos numpy original"
                          src="/img/logos-numpy-original-wordmark-1.png"
                        />
                      </div>
                      <div className="element-icons-image-29" />
                      <div className="element-icons-image-30" />
                      <div className="element-icons-image-31" />
                      <div className="element-icons-image-32" />
                      <img
                        className="vector-7"
                        alt="Vector"
                        src="/img/vector-4.png"
                      />
                      <div className="img-wrapper">
                        <img
                          className="vector-8"
                          alt="Vector"
                          src="/img/vector-5.png"
                        />
                      </div>
                      <img
                        className="vector-9"
                        alt="Vector"
                        src="/img/vector-2.png"
                      />
                    </div>
                    <ElementControlsButtons
                      buttonTypes="primary"
                      className="skills-button-rocket"
                      darkMode
                      divClassName="element-controls-buttons-instance"
                      states="hover-over"
                      text="🧰"
                    />
                    <p className="data-science-and">
                      <span className="span">
                        Data Analyst
                        Intern&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span className="text-wrapper-10">🚀</span>
                    </p>
                    <p className="description-23">
                      (I) Analyzed Rocket Mortgage&#39;s Reddit reputation using
                      NLP sentiment analysis.
                      <br />
                      (II) Developed a new strategy for call center routing
                      using Machine Learning. <br />
                      (III) Developed and implement data-driven solutions
                      through creation of an automated performance dashboard.
                    </p>
                    <img
                      className="vector-10"
                      alt="Vector"
                      src="/img/vector-1.png"
                    />
                    <div className="element-facts-grouped">
                      <div className="first-fact-2">
                        <div className="overlap-group-9">
                          <div className="four-cards-successcard-wrapper">
                            <ElementCardsSuccesscard
                              className="four-cards-successcard-instance"
                              darkMode
                              descriptionClassName="design-component-instance-node"
                              hasFrame={false}
                              successMetrics="retention"
                              text1="(I)"
                            />
                          </div>
                          <div className="frame-22">
                            <div className="group-4">
                              <div className="frame-23">
                                <div className="description-24">20.1%</div>
                                <div className="description-25">
                                  Negative Sentiment
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="second-fact-2">
                        <div className="overlap-group-9">
                          <div className="element-cards-successcard-instance-wrapper">
                            <ElementCardsSuccesscard
                              className="element-cards-successcard-6"
                              darkMode
                              descriptionClassName="element-cards-successcard-7"
                              hasFrame={false}
                              successMetrics="adoption"
                              text="(II)"
                            />
                          </div>
                          <div className="frame-24">
                            <div className="group-5">
                              <div className="frame-25">
                                <div className="description-26">36.75m+</div>
                                <div className="description-25">
                                  Foretasted Revenue Increase
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="third-fact-2">
                        <div className="overlap-13">
                          <div className="four-cards-successcard-wrapper">
                            <ElementCardsSuccesscard
                              className="element-cards-successcard-8"
                              darkMode
                              descriptionClassName="element-cards-successcard-9"
                              hasFrame={false}
                              successMetrics="adoption"
                              text="(III)"
                            />
                          </div>
                          <div className="frame-26">
                            <div className="group-6">
                              <div className="frame-27">
                                <div className="description-27">++ Clarity</div>
                                <div className="description-25">
                                  For Call Center Leaders
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ElementEmoji className="three-emoji" types="designer" />
                  </div>
                </div>
              </div>
              <div className="JDF-slide-2">
                <div className="overlap-14">
                  <div className="element-cards-case-study-wrapper">
                    <div className="element-cards-case-study-2">
                      <div className="frame-20">
                        <div className="image-3" />
                      </div>
                    </div>
                  </div>
                  <ElementControlsButtons
                    buttonTypes="primary"
                    className="two-controls-buttons-instance"
                    darkMode
                    hasDiv={false}
                    states="hover-over"
                  />
                  <p className="co-founder-lead-2">
                    <span className="span">
                      Co-Founder &amp; Software
                      Engineer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="text-wrapper-11">🛠️</span>
                  </p>
                  <img
                    className="vector-11"
                    alt="Vector"
                    src="/img/vector-3.png"
                  />
                  <div className="jdf-logos-2">
                    <img className="AWS-3" alt="Aws" src="/img/aws-1.png" />
                    <img
                      className="logos-nodejs-plain-3"
                      alt="Logos nodejs plain"
                      src="/img/logos-nodejs-plain-wordmark-1-2x.png"
                    />
                    <img
                      className="java-script-2"
                      alt="Java script"
                      src="/img/javascript.png"
                    />
                    <div className="element-icons-image-33" />
                    <div className="element-icons-image-34" />
                    <div className="element-icons-image-35" />
                    <img
                      className="frame-28"
                      alt="Frame"
                      src="/img/frame.png"
                    />
                    <img
                      className="logos-css-original"
                      alt="Logos original"
                      src="/img/logos-css3-original-wordmark-2x.png"
                    />
                  </div>
                  <ElementControlsButtons
                    buttonTypes="primary"
                    className="skills-button-rocket-2"
                    darkMode
                    divClassName="element-controls-buttons-instance"
                    states="hover-over"
                    text="🧰"
                  />
                  <p className="description-28">
                    (I) Co-founded JDF Data, developing and deploying a
                    full-stack application for document automation and retrieval
                    for 4 small local businesses. <br />
                    (II) Partnered with an industry expert with over 35 years of
                    experience, currently expanding business opportunities.
                  </p>
                  <div className="fact">
                    <div className="overlap-group-10">
                      <div className="i-fact-2">
                        <ElementCardsSuccesscard
                          className="element-cards-successcard-10"
                          darkMode
                          descriptionClassName="design-component-instance-node"
                          hasFrame={false}
                          successMetrics="retention"
                          text1="(I)"
                        />
                      </div>
                      <div className="element">
                        <div className="frame-29">
                          <div className="description-24">52.5%</div>
                          <div className="description-25">Reduced workload</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fact-2">
                    <div className="overlap-group-10">
                      <div className="II-fact-2">
                        <ElementCardsSuccesscard
                          className="element-cards-successcard-11"
                          darkMode
                          descriptionClassName="element-cards-successcard-12"
                          hasFrame={false}
                          successMetrics="adoption"
                          text="(II)"
                        />
                      </div>
                      <div className="element-k">
                        <div className="frame-30">
                          <div className="description-29">30 k +</div>
                          <div className="description-25">
                            Initial Evaluation
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fact-wrapper">
                    <div className="fact-3">
                      <div className="overlap-group-11">
                        <div className="III">
                          <ElementCardsSuccesscard
                            className="element-cards-successcard-10"
                            darkMode
                            descriptionClassName="element-cards-successcard-13"
                            hasFrame={false}
                            successMetrics="adoption"
                            text="(III)"
                          />
                        </div>
                        <div className="ease">
                          <div className="frame-31">
                            <div className="description-30">++ Ease</div>
                            <div className="description-25">
                              For Local Businesses.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="background-slide-wrapper">
              <div className="background-slide">
                <div className="overlap-group-12">
                  <div className="background">
                    <div className="second-slide">
                      <div className="presentation-picture-2" />
                      <div className="computer-science-2" />
                    </div>
                    <img
                      className="mich-intro-group"
                      alt="Mich intro group"
                      src="/img/mich-intro-group.png"
                    />
                    <div className="luke-nick-fistbump-2" />
                    <div className="SF-picture" />
                  </div>
                  <img
                    className="background-text-2"
                    alt="Background text"
                    src="/img/image.png"
                  />
                </div>
              </div>
            </div>
            <div className="projects-wrapper">
              <div className="projects">
                <div className="overlap-group-13">
                  <div className="group-7">
                    <div className="overlap-group-13">
                      <div className="projects-and-3">
                        <div className="frame-32" />
                      </div>
                      <div className="frame-33">
                        <div className="text-wrapper-12">
                          Projects and Competitions
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group-8">
                    <div className="skill-button-qcf-wrapper">
                      <a
                        className="tag-wrapper"
                        href="https://github.com/nickjohnsondls/Trading-Project"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="tag-2">🧰</div>
                      </a>
                    </div>
                    <div className="overlap-15">
                      <div className="deloitte-slide-2">
                        <div className="right-icon" />
                        <div className="titles-5">
                          <p className="project-title-3">
                            Michigan Ross x Deloitte Datathon: Finalist
                          </p>
                          <p className="description-31">
                            Finalist in the Deloitte &amp; Michigan Ross
                            Business+Tech Datathon among 41 teams, advising
                            ExxonMobil on boosting profitability through
                            detailed analysis of emissions, financial, and
                            operational data using SQL, Python, and Tableau to
                            identify key environmental impact correlations and
                            develop mitigation strategies.
                          </p>
                        </div>
                        <div className="element-icons-image-36" />
                        <div className="right-icon-2" />
                      </div>
                      <ElementIconsImage
                        className="three-icons-image-appicon"
                        elementIconsImage="/img/03-icons-image-appicon-23.png"
                      />
                      <div className="deloitte-tech-stack-2">
                        <div className="overlap-group-14">
                          <div className="element-icons-image-37" />
                          <div className="element-icons-image-38" />
                        </div>
                        <img
                          className="SQL-logo-deloitte-2"
                          alt="Sql logo deloitte"
                          src="/img/vector-4.png"
                        />
                        <img
                          className="tablue-logo-2"
                          alt="Tablue logo"
                          src="/img/tablue-logo-2x.png"
                        />
                        <ElementNavigationBack
                          className="projects-right"
                          darkMode
                          states="default"
                          type="right"
                        />
                        <img
                          className="logos-python-6"
                          alt="Logos python"
                          src="/img/logos-python-original-2.png"
                        />
                      </div>
                      <a
                        className="skill-button-2"
                        href="https://docs.google.com/presentation/d/13YsueennRrd_2T5qdX0I_OKwc6kaKdVeQ-Ygz97HJu8/edit?usp=sharing"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="tag-2">🧰</div>
                      </a>
                    </div>
                  </div>
                  <div className="MDST-google">
                    <div className="overlap-15">
                      <div className="MDST-3">
                        <div className="right-icon" />
                        <div className="titles-5">
                          <p className="project-title-3">
                            Michigan Data Science Team: K-Means Machine Learning
                          </p>
                          <p className="description-31">
                            Worked in a team of six to enhance Codenames
                            gameplay, developing AI bots using Q-Learning and
                            K-means to refine decision making strategy.
                          </p>
                        </div>
                        <div className="element-icons-image-36" />
                        <div className="right-icon-2">
                          <ElementNavigationBack
                            className="one-navigation-back-button"
                            darkMode
                            states="default"
                            type="right"
                          />
                        </div>
                      </div>
                      <ElementIconsImage
                        className="element-icons-image-instance"
                        elementIconsImage="/img/03-icons-image-appicon-24.png"
                      />
                      <img
                        className="MDST-tech-stack"
                        alt="Mdst tech stack"
                        src="/img/mdst-tech-stack.png"
                      />
                    </div>
                    <div className="google-frame-2">
                      <div className="overlap-group-15">
                        <div className="google-slide">
                          <div className="right-icon" />
                          <div className="element-icons-image-36" />
                          <div className="right-icon-2">
                            <ElementNavigationBack
                              className="one-navigation-back-button"
                              darkMode
                              states="default"
                              type="right"
                            />
                          </div>
                        </div>
                        <div className="titles-6">
                          <p className="project-title-3">
                            Google x MHacks AI Hackathon
                          </p>
                          <p className="description-31">
                            Developed &#34;Threaded Semantic Syntax Search&#34;
                            to provide a GitHub and document search tool for
                            software engineers learning large codebases (&gt;20
                            million tokens) and company documents.
                          </p>
                        </div>
                        <ElementIconsImage
                          className="three-icons-image-appicon-instance"
                          elementIconsImage="/img/google-icon.png"
                        />
                        <a
                          className="tech-stack-google-2"
                          href="https://devpost.com/software/tsss-threaded-semantic-syntax-search"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="tag-2">🧰</div>
                        </a>
                        <img
                          className="google-tech-stack-2"
                          alt="Google tech stack"
                          src="/img/google-tech-stack.png"
                        />
                        <div className="picture-tsss-picture">
                          <div className="element-icons-image-39" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-group-wrapper">
              <div className="navbar-group-2">
                <div className="overlap-group-16">
                  <div className="navbar" />
                  <a
                    href="mailto:njjohns@umich.edu"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="gmail-button-bottom-3"
                      alt="Gmail button bottom"
                      src="/img/gmail-button-bottom.png"
                    />
                  </a>
                  <img
                    className="face-intro-text-2"
                    alt="Face intro text"
                    src="/img/face-intro-text.png"
                  />
                  <a
                    className="frame-34"
                    href="https://www.linkedin.com/in/nick-johnson-michigan"
                    rel="noopener noreferrer"
                    target="_blank"
                  />
                  <div className="element-controls-fab-2" />
                  <a
                    href="https://github.com/nickjohnsondls"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="github-logo-3"
                      alt="Github logo"
                      src="/img/github-logo-2.png"
                    />
                  </a>
                  <a
                    className="resume-button-bottom-3"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="tag-3">📄</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-group-frame-2">
              <div className="overlap-16">
                <div className="bottom-group-2">
                  <div className="overlap-group-17">
                    <div className="element-home-work-contact" />
                    <img
                      className="frame-35"
                      alt="Frame"
                      src="/img/frame-4501.png"
                    />
                    <p className="text-wrapper-13">
                      Made by Nick Johnson, 2024
                    </p>
                    <div className="reach-out-for-more-wrapper">
                      <img
                        className="reach-out-for-more-2"
                        alt="Reach out for more"
                        src="/img/reach-out-for-more.png"
                      />
                    </div>
                    <div className="frame-36">
                      <div className="text-wrapper-14">About</div>
                      <div className="text-wrapper-14">Work</div>
                      <div className="text-wrapper-14">Projects</div>
                    </div>
                  </div>
                </div>
                <ElementControls
                  className="two-controls-emailinput"
                  darkMode
                  divClassName="design-component-instance-node"
                  text="Email your email here!"
                />
                <div className="presentation-picture-3" />
                <ElementControlsButtons
                  buttonTypes="secondary"
                  className="element-controls-buttons-3"
                  darkMode
                  divClassName="design-component-instance-node"
                  states="default"
                  text1="Back up!"
                />
                <ElementControlsButtons
                  buttonTypes="primary"
                  className="element-controls-buttons-4"
                  darkMode
                  divClassName="design-component-instance-node"
                  states="default"
                  text="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
