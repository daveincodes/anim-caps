import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './App.css';
import { Environment, ScrollControls, Scroll, Html, useScroll } from '@react-three/drei';
import Model from './DIEGO CAPSULA';

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
          </Scroll>
        </ScrollControls>
        <Environment preset="warehouse" />
      </Canvas>

    </div>
  );
};

export default App;

