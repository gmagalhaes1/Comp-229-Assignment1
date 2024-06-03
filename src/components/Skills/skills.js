import React from 'react';
import './skills.css';
import SCentennial from '../../assets/centennial-student.png';
import FVolunteer from '../../assets/first-volunteer.png';
import CBrazilian from '../../assets/brazil-flag.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am student, volunteer and a mother of the most beatifull black Lab in the whole world</span>
        <div className="skillBars">
            <div className="skillbar">
                <img src={SCentennial} alt="StudentCent" className="skillBarImg" />
                <div className="skillbarText">
                    <h2>Centennial Student</h2>
                    <p>I`m 3rd Semester of Software Engineering</p>
                </div>
            </div>

            <div className="skillbar">
                <img src={FVolunteer} alt="FirstVol" className="skillBarImg" />
                <div className="skillbarText">
                    <h2>FIRST Volunteer</h2>
                    <p> I`m volunteer in FIRST Robotic Competitions</p>
                </div>
            </div>

            <div className="skillbar">
                <img src={CBrazilian} alt="CitzenBra" className="skillBarImg" />
                <div className="skillbarText">
                    <h2>Brazilian</h2>
                    <p>I am Brazilian</p>
                </div>
            </div>

        </div>

        

    </section>
  );
}

export default Skills;
