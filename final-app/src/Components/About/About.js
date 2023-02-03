import React from 'react'
import  './about.css'
import img from '../../images/about-img.png'
const About = () => {
  return (
    <>
    <main className='about_main'>
        <section className='about_story'>
            <h2>Our story</h2>
            <article>
                <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, similique blanditiis non maxime, a
                    met veniam ea facere reprehenderit sunt fuga voluptatum itaque corporis fugiat. Odit iste rem maiores vitae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, similique blanditiis non maxime, a <br /><br />
                    met veniam ea facere reprehenderit sunt fuga voluptatum itaque corporis fugiat. Odit iste rem maiores vitae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, similique blanditiis non maxime, a
                    met veniam ea facere reprehenderit sunt fuga voluptatum itaque corporis fugiat. Odit iste rem maiores vitae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, similique blanditiis non maxime, a <br /> <br />
                    met veniam ea facere reprehenderit sunt fuga voluptatum itaque corporis fugiat. Odit iste rem maiores vitae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, similique blanditiis non maxime, a
                    met veniam ea facere reprehenderit sunt fuga voluptatum itaque corporis fugiat. Odit iste rem maiores vitae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa, similique blanditiis non maxime, a
                    met veniam ea facere reprehenderit sunt fuga voluptatum itaque corporis fugiat. Odit iste rem maiores vitae!
                </p>
            </article>
        </section>
        <section>
          <img src={img} alt="" />
        </section>
        <h1 className='about_heading'>About Us</h1>
    </main>
    <footer className='contacts'>
      <div className="address">
        <h4>E-mail</h4>
        <p>TrendBoutique@gmail.com</p>
      </div>
      <div className="address">
          <h4>Office Address</h4>
          <p>Symphony Offices, Gustav Mahlerplein 3-117 Amsterdam - Netherlands</p>
      </div>
      <div className="address">
      <h4>Call Center</h4>
          <p>+099-123-2255-678 <br /><br />+0659-123-4265-698</p>
      </div>
    </footer>
    </>

  )
}

export default About