import React from 'react';
import portfolio1 from './works.css';
import portfolio2 from'../../assets/1.png';
import portfolio3 from'../../assets/2.png';
import portfolio4 from'../../assets/3.png';
import portfolio5 from'../../assets/4.png';
import portfolio6 from'../../assets/5.png';



const Works = () => {
  return (
   
    <section id='works'>
        <h2 className="workstitle">My Portfolio</h2>
        <span className="workDesc">See some works</span>
        <div>
            <img src={portfolio1} alt="" className="worksImg" />
            <img src={portfolio2} alt="" className="worksImg" />
            <img src={portfolio3} alt="" className="worksImg" />
            <img src={portfolio4} alt="" className="worksImg" />
            <img src={portfolio5} alt="" className="worksImg" />
            <img src={portfolio6} alt="" className="worksImg" />

        </div>



    </section>

  )
}

export default Works;