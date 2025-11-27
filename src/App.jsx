import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './App.css';
import { Environment, ScrollControls, Scroll, Html, useScroll } from '@react-three/drei';
import Model from './DIEGO CAPSULA';


export function HeaderSNE() {
  useEffect(() => {
    const nav = document.getElementById("siteNav");
    const btn = document.getElementById("navToggle");
    const overlay = document.getElementById("navOverlay");
    const navChip = document.querySelector(".nav-chip");
    if (!nav || !btn || !overlay) return;

    // *** el scroll REAL de drei no es window ***
    const virtualScrollContainer = document.querySelector(".scroll-html");

    const handleScroll = () => {
      const y = virtualScrollContainer?.scrollTop || 0;
      if (y > 10) {
        navChip?.classList.add("scrolled");
        nav?.classList.add("scrolled");
      } else {
        navChip?.classList.remove("scrolled");
        nav?.classList.remove("scrolled");
      }
    };

    virtualScrollContainer?.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      virtualScrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="overlay" id="navOverlay" hidden aria-hidden="true"></div>

      <header className="site-header">
        <div className="container">
          <div className="nav-chip">
            <button id="navToggle" className="toggle">
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <ul id="siteNav" className="nav">
              <li className="logo-nav">
                <img src="https://cdn.prod.website-files.com/68ddba1faf3f222fd7f626dc/68ddbf7bd63c6397c0d89bc9_sne_blanco.png" alt="" />
              </li>

              <li><a className="link" href="/">Inicio</a></li>
              <li><a className="link active" href="/nosotros">Nosotros</a></li>
              <li><a className="link" href="/soluciones">Soluciones</a></li>
              <li><a className="link" href="/proyectos">Proyectos</a></li>

              <li className="has-dd">
                <button className="link dd-btn">
                  Productos <span className="caret"></span>
                </button>
                <div className="dropdown">
                  <a href="/productos/sistemas">Sistemas neumáticos</a>
                  <a href="/productos/capsulas">Cápsulas</a>
                  <a href="/productos/tuberia">Tubería y accesorios</a>
                  <a href="/productos/software">Software</a>
                </div>
              </li>

              <li><a className="link" href="#servicio">Servicio y Mantenimiento</a></li>
              <li><a className="link" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}


export function HeroEquipos() {
  return (
    <section className="hero-equipos">
      <div className="container hero-equipos__inner">
        <h1 className="hero-equipos__title">
          Nuestros
          <span>Equipos</span>
        </h1>
      </div>
    </section>
  );
}

export function TabsEquipos() {
  return (
    <div className="equipos-tabs">
      <span className="equipos-tab">Unidireccionales</span>
      <span className="equipos-tab">Bidireccionales</span>
      <span className="equipos-tab">Multipunto</span>
    </div>
  );
}


export function EquipoSinen() {
  return (
    <div className="equipos-tipo-block">
      <h3 className="equipos-tipo-title">Sinen:</h3>
      <p className="equipos-tipo-text">Bajo costo, sin mecanismos automáticos.</p>
      <em className="equipos-tipo-meta">
        Aplicaciones: gasolineras, oficinas pequeñas, comercios.
      </em>
    </div>
  );
}

export function EquipoDesliz() {
  return (
    <div className="equipos-tipo-block">
      <h3 className="equipos-tipo-title">Deslizable:</h3>
      <p className="equipos-tipo-text">Puerta corrediza para mayor control.</p>
      <em className="equipos-tipo-meta">
        Aplicaciones: hospitales, industrias, centros logísticos.
      </em>
    </div>
  );
}

export function EquipoFlap() {
  return (
    <div className="equipos-tipo-block">
      <h3 className="equipos-tipo-title">Flap:</h3>
      <p className="equipos-tipo-text">Apertura tipo trampilla, rápida y compacta.</p>
      <em className="equipos-tipo-meta">
        Aplicaciones: bancos, supermercados, clínicas medianas.
      </em>
    </div>
  );
}


export function SistemasEquipos() {
  return (
    <section className="equipos-sistemas">
      <article className="sistema-block">
        <h2>Sistema Punto a Punto</h2>
        <p>
          Un Sistema Neumático de Envíos Punto a Punto conecta únicamente dos
          estaciones mediante una ruta directa y fija, sin desvíos en ambas
          direcciones.
        </p>
      </article>

      <article className="sistema-block">
        <h2>Sistema Multipunto</h2>
        <p>
          Sistema automatizado que conecta tres o más estaciones mediante
          tuberías y desviadores inteligentes, controlado por un software
          central.
        </p>
        <p>
          Permite envíos simultáneos y cruzados con gestión eficiente del
          tráfico.
        </p>
        <em>Aplicaciones: hospitales, industrias, bancos, corporativos.</em>
      </article>
    </section>
  );
}

export function RefrigeradoresFarmaceuticos() {
  return (
    <section className="products-section" aria-label="Refrigeradores farmacéuticos">
      <div className="container container--narrow">
        
        <h2 className="products-section__title">
          Refrigeradores farmacéuticos (2°C a 16°C)
        </h2>

        <p className="products-section__subtitle">
          Garantiza la estabilidad de medicamentos, vacunas y muestras sensibles 
          con un control preciso de temperatura y cumplimiento de las normativas 
          más exigentes.
        </p>

        <div className="products-grid">

          <article className="product-card">
            <div className="product-card__image" aria-hidden="true"></div>
            <h3>Lorem ipsum dolor sit</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>

          <article className="product-card">
            <div className="product-card__image" aria-hidden="true"></div>
            <h3>Lorem ipsum dolor sit</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>

          <article className="product-card">
            <div className="product-card__image" aria-hidden="true"></div>
            <h3>Lorem ipsum dolor sit</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>

        </div>

      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contacto" className="site-footer">
      <div className="container fgrid">
        
        {/* Columna 1 */}
        <div>
          <div className="fbrand">
            <img
              src="https://cdn.prod.website-files.com/68ddba1faf3f222fd7f626dc/68ddbf7b75de97c070e13a27_sne_rojo.png"
              alt="SNE - Sistemas Neumáticos de Envíos"
              width="150"
              height="150"
            />
          </div>
          <p className="small">
            Ventas: 55 5377 2170 ext.2483 ·{" "}
            <a href="mailto:ventas@motioncorp.com.mx">
              ventas@motioncorp.com.mx
            </a>
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <strong>Nosotros</strong>
          <div className="flist">
            <a href="#nosotros">Trabaja con nosotros</a>
            <a href="#contacto">Contacto</a>
            <a href="#terminos">Términos y condiciones</a>
          </div>
        </div>

        {/* Columna 3 */}
        <div>
          <strong>Ayuda</strong>
          <div className="flist">
            <a href="#preguntas">Preguntas</a>
            <a href="#privacidad">Política de privacidad</a>
          </div>
        </div>

        {/* Columna 4 */}
        <div>
          <strong>Síguenos</strong>
          <div className="social">
            <a href="#" aria-label="Facebook" title="Facebook">
              <img
                src="https://cdn.prod.website-files.com/68ddba1faf3f222fd7f626dc/691d00db3c23387bb5169ea1_Facebook.svg"
                alt="Facebook"
                width="80"
                height="80"
              />
            </a>
            <a href="#" aria-label="Instagram" title="Instagram">
              <img
                src="https://cdn.prod.website-files.com/68ddba1faf3f222fd7f626dc/691d00dc9cafd49e0689fc6f_Instagram.svg"
                alt="Instagram"
                width="80"
                height="80"
              />
            </a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn">
              <img
                src="https://cdn.prod.website-files.com/68ddba1faf3f222fd7f626dc/691d00dcbf75e267865d0433_LinkedIn.svg"
                alt="LinkedIn"
                width="80"
                height="80"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-section">
        <div className="copyright-container">
          <p className="copyright">
            ©2025 Motion Corp - Todos los derechos reservados
          </p>
          <p className="copyright">
            Blvd. Adolfo Mateos 2777, Col. Progreso, Alc. Álvaro Obregón, 01080,
            Ciudad de México.
          </p>
        </div>
      </div>
    </footer>
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
              <HeaderSNE />
             <HeroEquipos />
             <TabsEquipos />
              <div style={{ position: 'absolute', top: '80vh', left: '5vw' }}>
                <EquipoSinen />
              </div>

              <div style={{ position: 'absolute', top: '120vh', left: '5vw' }}>
                <EquipoDesliz />
              </div>

              <div style={{ position: 'absolute', top: '180vh', left: '5vw' }}>
                <EquipoFlap />
              </div>
             

              <div style={{ position: 'fixed', top: '220vh', left: '5vw', right: '5vw' }}>
                <SistemasEquipos />
              </div>

              <div style={{ position: 'absolute', top: '320vh', left: '5vw', right: '5vw' }}>
                <RefrigeradoresFarmaceuticos />
              </div>
              
              <div style={{ position: 'absolute', top: '562vh'}}>
                 <Footer />
              </div>
             
          </Scroll>
          
        </ScrollControls>
        <Environment preset="warehouse" />
      </Canvas>

    </div>
  );
};

export default App;

