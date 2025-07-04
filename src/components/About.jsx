
import "./about.css";
const About = () => {
  return (
    <div className="container">
  <h2>About TextUtils</h2>
  <p>
    <strong>TextUtils</strong> is a versatile text manipulation tool built with React.
    It provides quick and efficient utilities to analyze and modify your text in various ways.
  </p>
  
  <h4>Key Features:</h4>
  <ul>
    <li>Convert text to <strong>uppercase</strong> and <strong>lowercase</strong></li>
    <li><strong>Reverse</strong> your text</li>
    <li><strong>Copy</strong> text to clipboard</li>
    <li><strong>Reset</strong> text area instantly</li>
    <li>Shows <strong>word count, character count, reading time</strong>, and live preview</li>
  </ul>

  <p>
    TextUtils is especially useful for content writers, developers, and students looking to edit and analyze their text quickly and efficiently. 
    Whether you’re writing an article, cleaning code comments, or just playing with words—TextUtils has your back!
  </p>

  <p>
    Built using <strong>React.js</strong>, it’s fast, responsive, and user-friendly.
  </p>
</div>

  )
}

export default About
