import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            My name is Hitesh Mantrabuddi and I am a second year student at Cornell University.
            I am majoring in Information Science with a concentration in Data Science. I am also
            minoring in Computer Science and Business. My freshman year of college I attended
            Pennsylvania State University, where I intended on majoring in Data Science with a minor
            in Information Systems Management. At Penn State, I was a member of the IST Honor society
            and Nittany Data Labs.

          </p>
          <p>
            Some of my skills include data analytics and web development. I have worked on various
            data analytics projects using Jupyter Notebook, Microsoft Azure, or Googel Collab. The
            analyses were completed by Python or SQL. I have also created websites using HTML, CSS,
            JavaScript, and Gatsby. This website was created using Gatsby. I have also taken
            courses to develop my skills in programming. I have taken Object Oriented programming 
            and Data Structures with both Python and JAVA, Functional Programming with OCaml, 
            Intro to Machine Learning with Python, and Fundamentals of Artificial Intelligence
            with Python. I have also taken a course on Business Management. I plan on learning
            app development and to take more computer science and business classes to 
            diversify my skillset.
              
          
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Projects</h2>
          <p>Analysis of NFL quarterbacks and their throwing hand</p>
          
          <ul>
            <li>This data anlysis project focused on an NFL player named Carson Wentz,
              who was playing for the Philadelphia Eagles at the time of the analysis. 
              I was able to acquire the Philadelphia Eagles' play by play data and
              filtered out Wentz's data to determine whether his handedness had an impact
              on his accuracy. I found that his handedness did not have as much of an
              impact, however, there were other in game factors that affected his accuracy.
              I then took this model and applied it to other quarterbacks in the NFL.
              Click <a href="https://github.coecis.cornell.edu/hm564/QBAnalysis">here</a> to read more about this analysis.
            </li>
          </ul>
          <p>Twitter sentiment analysis for climate change</p>
          <ul>
            <li>This data analysis and machine learning project focused on the topic
               of climate change to see how different people would react to the topic.
               I was able to acquire tweets that used hashtags such as #globalwarming,
               #climate, #climatechange, etc. Then, I used these tweets to create a
               decision tree which would see if the tweet contained a certain word or not.
               Once you reached the end of that branch, the node in that tree would
               tell the user if that tweet had a positive or negative sentiment towards
               climate change. Click <a href="https://github.coecis.cornell.edu/hm564/QBAnalysis"> here </a>
               to learn more about this analysis.
            </li>
          </ul>
          <p>Should NFL teams go for it on fourth down?</p>
          <ul>
            <li>This is a project I am currently working. Me and three other members
              are working on first building a decision tree model using current NFL
              play by play data we were able to acquire. The model will use various
              in-game factors and determine if the team will be successful on their
              fourth down attempt. The completed project will be posted 
              <a href="https://github.coecis.cornell.edu/hm564/QBAnalysis"> here </a>
              if you would like to learn more about the model. Please keep in mind that 
              since this is still in process, the project is subject to change.

            </li>
          </ul>
          <p>How do you determine happiness?</p>
          
          <ul>
            <li>This data analysis project was focused on analyzing how happiness
              is ranked. Here, I took the world happiness rankings of various nations
              and combined the rankings with other features such as GDP, GDP per Capita,
              Health(Life Expectancy), etc. There were many interesting findings that I
              did not expect to see. High life expectancies did not necessarily mean
              higher happiness rankings and the saem with the GDP and GDP per Capita.
              Click <a href="https://github.coecis.cornell.edu/hm564/QBAnalysis"> here</a> to learn more about this project.
            </li>
          </ul>
          
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">My Resume</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Download resume <a href="src/images/recent_resume.pdf" download="">here</a>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">

            <li>
              <a href="https://www.instagram.com/hitesh11man/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.coecis.cornell.edu/hm564"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hiteshmantrabuddi/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
