"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <header>
          <a href="" className="logo-holder">
              <div className="logo">L</div>
              <div className="logo-text">Portfolio Website</div>
          </a>
          <nav>
              <ul id="menu" className={menuOpen ? "active" : ""}>
                  <li><a href="#">Home</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="mailto:98nicodominguez@gmail.com" className="button">Contact Me</a></li>
              </ul>

              <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
              </a>

          </nav>
      </header>
      <main>
          <section className="hero container">
              <div className="hero-blue">
                  <h1><small>Hi I'm</small>Nico Suave</h1>
                  <p>Designer and Developer in the US who creates react, js, html, and css websites to help generate more clicks. <span>I'm interested in AI topics which is why I also add things like ChatGPT into my projects these days.</span></p>
                  <div className="call-to-action">
                      <a href="/NicoDominguezResume.pdf" className="button black">View Resume</a>
                      <a href="mailto:98nicodominguez@gmail.com" className="button white">Contact Me</a>
                  </div>
                  <div className="social-links">
                      <a href="#">
                          <img src="imgs/github.png" alt="github" width="48"/>
                      </a>
                      <a href="#">
                          <img src="imgs/linkedin.png" alt="github" width="48"/>
                      </a>
                  </div>
              </div>
              <div className="hero-yellow">
                  <img src="imgs/hero-image.png" alt="Nico"/>
              </div>
          </section>

          <section className="logos container">
              <div className="marquee">
                  <div className="track">
                      <img src="imgs/html.png" alt="html" width="128"/>
                      <img src="imgs/css.png" alt="css" width="128"/>
                      <img src="imgs/javascript.png" alt="javascript" width="128"/>
                      <img src="imgs/react.png" alt="react" width="128"/>
                      <img src="imgs/vscode.png" alt="vscode" width="128"/>
                      <img src="imgs/nextjs.png" alt="nextjs" width="128"/>
                      <img src="imgs/sass.png" alt="sass" width="128"/>
                      <img src="imgs/html.png" alt="html" width="128"/>
                      <img src="imgs/css.png" alt="css" width="128"/>
                      <img src="imgs/javascript.png" alt="javascript" width="128"/>
                      <img src="imgs/react.png" alt="react" width="128"/>
                      <img src="imgs/vscode.png" alt="vscode" width="128"/>
                      <img src="imgs/nextjs.png" alt="nextjs" width="128"/>
                      <img src="imgs/sass.png" alt="sass" width="128"/>
                  </div>
              </div>
          </section>

          <section id="skills" className="skills container">
              <h2>
                  <small>About Me</small>
                  Skills
              </h2>
              <div className="holder-blue">
                  <div className="left-column">
                      <h3>Frontend</h3>
                      <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                          <li>React</li>
                          <li>Shadcn</li>                      
                      </ul>

                      <h3>Backend</h3>
                      <ul>
                          <li>Node.js</li>
                          <li>Express</li>
                          <li>Python</li>
                          <li>Php</li>                      
                          <li>Ruby</li>                      
                      </ul>


                  </div>
                  <div className="right-column">
                      <h3>A bit about me</h3>
                      <p>Hi, I'm Nico, a designer and developer who creates educational content on YouTube to teach others about html, css, and js. I'm interested in AI topics which is why I also add things like ChatGPT into my projects these days!</p>
                      <p>I'm currently working on a project that uses Azure AI to create a chatbot that can help anser questions about web development. I'm also working on a project that uses React and Next.js to create a Portfolio website.</p>
                  </div>
              </div>
          </section>

          <section className="work-experience container">
              <h2>
                  <small>Recent</small>
                  Work Experience
              </h2>
              <div className="jobs">
                  <article>
                      <figure>
                          <div>
                              <img src="imgs/workplace-1.jpg" alt="workplace-1" width="100%"/>
                              <figcaption>
                                  Workplace - 1
                              </figcaption>
                          </div>
                      </figure>
                      <h3>Workplace - 1</h3>
                      <div>2000 - 2020</div>
                      <p>This is an example description for a workplace.</p>
                  </article>

                  <article>
                      <figure>
                          <div>
                              <img src="imgs/workplace-2.jpg" alt="workplace-2" width="100%"/>
                              <figcaption>
                                  Workplace - 2
                              </figcaption>
                          </div>
                      </figure>
                      <h3>Workplace - 2</h3>
                      <div>2000 - 2020</div>
                      <p>This is an example description for a workplace.</p>
                  </article>

                  <article>
                      <figure>
                          <div>
                              <img src="imgs/workplace-3.jpg" alt="workplace-3" width="100%"/>
                              <figcaption>
                                  Workplace - 3
                              </figcaption>
                          </div>
                      </figure>
                      <h3>Workplace - 3</h3>
                      <div>2000 - 2020</div>
                      <p>This is an example description for a workplace.</p>
                  </article>

              </div>
          </section>

          <section id="projects" className="bento container">
              <h2>
                  <small>
                      Previous
                  </small>
                  Completed Projects
              </h2>
              <div className="bento-grid">
                  <a href="#" className="bento-item"><img src="imgs/bento-1.jpg" alt="bento-1" width="100%"/></a>
                  <a className="bento-item"><img src="imgs/bento-2.jpg" alt="" width="100%" /></a>
                  <a href="#" className="bento-item"><img src="imgs/bento-3.jpg" alt="" width="100%" /></a>
                  <a href="#" className="bento-item"><img src="imgs/bento-4.jpg" alt="" width="100%" /></a>
                  <a href="#" className="bento-item"><img src="imgs/bento-5.jpg" alt="" width="100%" /></a>
                  <a href="#" className="bento-item"><img src="imgs/bento-6.jpg" alt="" width="100%" /></a>
              </div>
          </section>

          <section className="chatbot container">
              <h2>
                  <small>Talk to me</small>
                  Chatbot
              </h2>
              <div className="chatbot-blue">
                  <div className="chat-info">
                      <h3>Azure AI Chatbot</h3>
                      <p>I've put together a chatbot here which knows all my skills, work eperience and has a copy of my CV/Resume. You can use it to ask questions bout me to get a better idea of who I am and what I've  done.</p>
                      <p>Ypu can also download my resume here if you want to take a look at it. I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
                      <a href="/NicoDominguezResume.pdf" className="button black">Download Resume</a>
                  </div>
                  <div className="chat-box">
                      <div className="scroll-area">
                          <ul id="chat-log">
                              <li>
                                  <span className="avatar user">AI</span>
                                  <div className="message">Hi, I'm a friendly chatbot that lets you interact with this portfolio and CV. How can I help?</div>
                              </li>

                              <li>
                                  <span className="avatar user">User</span>
                                  <div className="message">I have a question to ask you about this resume</div>
                              </li>
                          </ul>
                      </div>
                      <div className="chat-message">
                          <input 
                              type="text"
                              placeholder="Hey Nico, what skills are you best at?"
                          />
                          <button className="button black">Send</button>
                      </div>
                  </div>
              </div>
          </section>
      </main>
    </> 
  );
}
