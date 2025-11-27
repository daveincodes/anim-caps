import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './App.css';
import { Environment, ScrollControls, Scroll, Html, useScroll } from '@react-three/drei';
import Model from './DIEGO CAPSULA';

function HeroSection() {
  return (
    <section className="landing-section">
      <div className="left-section">
        <div className="image-placeholder">

        </div>
        <p className="welcome-text">
          Bienvenido a SNE, donde la tecnología y la confianza se unen para transformar las operaciones en cada sector industrial y comercial.
        </p>
      </div>

      <div className="right-section">
      <div className="logo-container">
        <img src="/sne_logo.png" alt="SNE Logo" className="sne-logo" width={'300px'}/>
      </div>


        <div className="headline-container">
          <h1 className="headline">
            35 AÑOS
            <br />
            LIDERANDO
            <br />
            SEGURIDAD Y
            <br />
            EFICIENCIA EN
            <br />
            EL MANEJO DE
            <br />
            VALORES.
          </h1>
        </div>
      </div>

      <div className="background-circles">
       
      </div>
    </section>
  )
}

function SolutionsSection() {
  return (
    <section className="landing-section solutions-section">
      <div className="solutions-left">
        <h2 className="solutions-headline">
          SOLUCIONES PARA EL 
          <br />
          SECTOR COMERCIAL
        </h2>

        <p className="solutions-description">
          Optimizamos procesos para garantizar la seguridad en cada transacción, desde pequeños negocios hasta grandes cadenas.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid white', margin: '10px 0' }} />
        <div className="benefits-container">
          <h3 className="benefits-title">BENEFICIOS</h3>
          <ul className="benefits-list">
            <li>Transporte seguro de efectivo</li>
            <li>Reducción de riesgos y costos</li>
          </ul>
        </div>
      </div>

      <div className="solutions-right">
        {/* <div className="solutions-image-placeholder">
        <Canvas  style={{ width: '100%', height: '100%' }}>
        <Model />
        <Environment preset="warehouse" />
      </Canvas>
        </div> */}
      </div>

      <div className="background-circles left">
     
      </div>
    </section>
  )
}

function AutomationSection() {
  return (
    <section className="landing-section automation-section">
      <h2 className="automation-headline">AUTOMATIZACIÓN EN INDUSTRIAS</h2>

      <div className="automation-content">
        <div className="automation-left">
          <p className="automation-description">
            En la industria, cada segundo cuenta. Nuestros sistemas garantizan un flujo continuo y seguro de materiales críticos.
          </p>
        </div>

        <div className="automation-center">
        </div>
       
        <div className="automation-right">
        
          <div className="automation-benefits">
         
            <h3 className="benefits-title">BENEFICIOS</h3>
            <ul className="benefits-list">
              <li>Mejor experiencia para el cliente</li>
              <li>Procesos rápidos y seguros</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="background-circles dual">
        
      </div>
    </section>
  )
}

function BankingSection() {
  return (
    <section className="landing-section banking-section">
      <div className="banking-left">
        {/* <div className="banking-image-placeholder">
        <Canvas  style={{ width: '100%', height: '100%' }}>
          <Model />
          <Environment preset="warehouse" />
        </Canvas>
        </div> */}
      </div>
      
      <div className="banking-right">
        <h2 className="banking-headline">
          Eficiencia en<br />
          el sector<br />
          bancario
        </h2>
        
        <p className="banking-description">
          Desde sucursales hasta módulos de autoservicio, estamos reinventando la forma en que los bancos operan y atienden a sus clientes.
        </p>
        <hr style={{ border: 'none', borderTop: '1px solid white', margin: '10px 0' }} />
        <div className="banking-benefits">
          <h3 className="benefits-title">BENEFICIOS</h3>
          <ul className="benefits-list">
            <li>Mejor experiencia para el cliente</li>
            <li>Procesos rápidos y seguros</li>
          </ul>
        </div>
      </div>
      
      <div className="background-circles right">
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="landing-section stats-section">
      <div className="stats-container">
        <h2 className="stats-headline">
          15,000 SISTEMAS INSTALADOS
          <br />
          EN TODO EL MUNDO
        </h2>
{/* 
        <div className="map-placeholder"><Canvas  style={{ width: '100%', height: '100%' }}>
          <Model />
          <Environment preset="warehouse" />
        </Canvas></div> */}

        <p className="stats-description">
          Con más de 15,000 sistemas instalados, somos líderes globales en transporte neumático seguro y eficiente.
        </p>
      </div>

      <div className="background-circles right">
      </div>
    </section>
  )
}

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="landing-section contact-section">
      <div className="contact-left">
        <h2 className="contact-headline">
          Descubre cómo<br />
          podemos<br />
          transformar tu<br />
          negocio
        </h2>
        
        <p className="contact-description">
          Da el siguiente paso hacia la seguridad y eficiencia. Hablemos.
        </p>
      </div>
      <hr style={{ 
  border: 'none', 
  borderLeft: '1px solid white', // Change to borderLeft for vertical line
  height: '90%', // Set the height of the vertical line
  margin: '0 10px' // Adjust margins as needed
}} />
      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Nombre completo:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phoneNumber">Número de teléfono:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </div>
      
    </section>
  );
}

const App = () => {
  return (
    <div className="app-container" style={{ position: 'relative', overflow: 'scroll', height: '100vh' }}>
      {/* <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 10 }}>
        <Model/>

      </Canvas> */}
      <Canvas className="canvas-background" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1 }}
     camera={{ position: [0, 0, 5], fov: 750 }}>
        <ScrollControls pages={6} distance={2}>
          <Model />
          
      
          <Scroll html style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
            {/* DOM contents in here will scroll along */}
            {/* <HeroSection />
            <SolutionsSection />
            <AutomationSection />
            <BankingSection />
            <StatsSection />
            <ContactSection />*/}

          </Scroll>
        </ScrollControls>
        <Environment preset="warehouse" />
      </Canvas>

    </div>
  );
};

export default App;

