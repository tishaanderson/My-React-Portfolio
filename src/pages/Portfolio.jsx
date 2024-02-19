import horiseon from '../images/horiseon-icon.png'
import codingGame from '../images/Coding-Quiz-Game.png'
import dailyPlanner from '../images/DailyPlanner9AM.png'
import project1 from '../images/Taste-Buds-Unite.png'
import project2 from '../images/PlantPal.png'
import techTalk from '../images/TechTalk.png'
import '../styles/Portfolio.css'

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='half-page'>
        <a href="https://tishaanderson.github.io/Horiseon-site/" target="_blank" >
        <img className="icons" id="horiseon-icon" src={horiseon} alt="horiseon logo personalized with dotted border around it" />
      </a>

      <p>
        Horiseon Site: Refactoring the Horiseon website was my first challenge within SMU Coding Bootcamp. Check it out by clicking the Horiseon icon.
      </p>

      <a href="https://tishaanderson.github.io/Web-APIs-Coding-Quiz/" target="_blank" >
        <img className="icons" id="game-icon" src={codingGame} alt="coding quiz game header as icon" />
      </a>
      <p>
        Coding Quiz Game: Building a Java Script Quiz "game" was my 4th assignment within the SMU program.
      </p>

      <a href="https://tishaanderson.github.io/Daily-Planner/" target="_blank" >
        <img className="icons" id="planner-icon" src={dailyPlanner} alt="9AM button from daily planner as icon" />
      </a>
      <p>
        Daily Planner/Scheduler: Workday scheduler was my 5th assignment within the SMU program.
      </p>
      </div>

      <div className='half-page'>
        <a href="https://tishaanderson.github.io/TasteBudsUnite/" target="_blank" >
        <img className="icons" id="project1-icon" src={project1} alt="Taste Buds Unite page header as icon" />
      </a>
      <p>
        Taste Buds Unite: My first group project, 8 weeks into the SMU program.
      </p>

      <a href="https://tisha-anderson-plant-pal-7344ed2b4c7b.herokuapp.com/" target="_blank" >
        <img className="icons" id="project2-icon" src={project2} alt="Plant Pal homepage as icon" />
      </a>
      <p>
        Plant Pal: Second group project, 16 weeks into the SMU program. Deployed on Heroku.
      </p>

      <a href="https://welcome-to-my-tech-talk-65e41c57bb43.herokuapp.com/" target="_blank" >
        <img className="icons" id="techTalk-icon" src={techTalk} alt="Partial header from the Welcome to My Tech Talk website as icon" />
      </a>
      <p>
        Welcome to My Tech Talk: Challenge #14.Deployed on Heroku.
      </p>
      </div>
    </div>
  );
}