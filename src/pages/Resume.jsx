import '../styles/Resume.css';


export default function Resume() {
  return (
    <div className='resume'>

      <div className='resume-card' id='education-section'>
        <h3 className='resume-section'>Education</h3>
        <h6>Bachelor of Science (B.S.) </h6>
        <p>University of North Texas</p>
        <h6>Full-Stack Coding Bootcamp (Certification) </h6>
        <p>Southern Methodist University</p>
      </div>

      <div className='resume-card' id='experience-section'>
        <h3 className='resume-section'>Experience</h3>

        <p className='job-years'>2020-2023</p>
        <h6 className='job-title'>Quality Assurance Lead <i className='company-name'>Custom Ink</i></h6>
        <ul className='job-responsibilities'>
          <li className='job-list'>Provide leadership and guidance to the quality assurance team, ensuring
            alignment with organizational goals and objectives.</li>
          <li className='job-list'>Assign tasks and delegate responsibilities effectively to ensure the
            team’s success.</li>
          <li className='job-list'>Develop and implement standard operating procedures (SOPs) to
            ensure consistent and efficient processes.</li>
          <li className='job-list'>Identify areas for process improvement and collaborate with other
            departments to properly implement solutions.</li>
          <li className='job-list'>Train and mentor quality assurance team members on quality standards,
            processes, and protocols.
          </li>
          <li className='job-list'>Maintain a customer-centric approach by prioritizing quality and
            ensuring customer satisfaction.</li>
          <li className='job-list'>Identify potential risks to quality and develop strategies to mitigate them.</li>
          <li className='job-list' id='last-job-list'>Proactively address issues that may impact product quality, safety or
            compliance.
          </li>
        </ul>

        <p className='job-years'>2016-2020</p>
        <h6 className='job-title'>Bartender <i className='company-name'>Buffalo Wild Wings</i></h6>
        <ul className='job-responsibilities'>
          <li className='job-list'>Provide exceptional customer service by taking orders accurately and
            engaging with patrons courteously.</li>
          <li className='job-list'>Mix and serve a variety of drinks according to standard recipes and
            customer preferences.</li>
          <li className='job-list'>Process payments accurately using cash registers or POS systems and
            maintain cash drawer integrity.
          </li>
          <li className='job-list' id='last-job-list'>Promote specials and upsell premium drinks to enhance sales and
            customer experience.
          </li>
        </ul>

        <p className='job-years'>Summer 2016</p>
        <h6 className='job-title'>Front Desk Associate <i className='company-name'>FYZICAL Therapy and Balance Centers</i></h6>
        <ul className='job-responsibilities'>
          <li className='job-list'>Communicate effectively via phone, email, and in-person with clients.</li>
          <li className='job-list'>Excel in multitasking clerical tasks</li>
          <li className='job-list' id='last-job-list'>Demonstrate excellent organizational skills
          </li>
        </ul>
      </div>

      <div className='resume-card' id='skills-section'>
        <h3 className='resume-section'>Skills</h3>
        <ul>
          <li>Full-Stack Development</li>
          <li>Quality Assurance</li>
          <li>Applied Behavior Analysis</li>
          <li>Programming Languages: 
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </li>
          <li>REACT</li>
          <li>Node</li>
          <li>Problem Solving</li>
          <li>Strategic Decision Making</li>
          <li>Reinforcement Strategies</li>
          <li>Organization and Time Management</li>
          <li>Knowledgeable on creating SOPs, effective streamline processes and cost-savings strategies</li>
          <li>Strong Analytical Abilities</li>
          <li>Deleloping Quality Standards</li>
          <li>Task Prioritization</li>
        </ul>
      </div>
    </div>
  );
}