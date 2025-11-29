import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './App.css';
import { Environment, ScrollControls, Scroll, Html, useScroll } from '@react-three/drei';
import Model from './DIEGO CAPSULA';


export function Header() {
  useEffect(() => {
    const nav = document.getElementById("siteNav");
    const btn = document.getElementById("navToggle");
    const overlay = document.getElementById("navOverlay");
    const navChip = document.querySelector(".nav-chip");
    if (!nav || !btn || !overlay) return;

    const mqMobile = window.matchMedia("(max-width: 991px)");
    let focusable = [];
    let firstFocusable = null;
    let lastFocusable = null;

    function updateFocusable() {
      focusable = Array.from(
        nav.querySelectorAll(
          "a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])"
        )
      ).filter((el) => !el.disabled && el.offsetParent !== null);

      firstFocusable = focusable[0] || null;
      lastFocusable = focusable[focusable.length - 1] || null;
    }

    function handleTrap(e) {
      if (e.key !== "Tab") return;
      updateFocusable();
      if (!firstFocusable) return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }

    function handleScroll() {
      if (window.scrollY > 10) {
        navChip?.classList.add("scrolled");
        nav?.classList.add("scrolled");
      } else {
        navChip?.classList.remove("scrolled");
        nav?.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const open = () => {
      nav.classList.add("is-open");
      overlay.classList.add("is-open");
      overlay.hidden = false;
      overlay.setAttribute("aria-hidden", "false");

      nav.setAttribute("aria-modal", "true");
      nav.setAttribute("role", "dialog");
      btn.setAttribute("aria-expanded", "true");

      document.documentElement.style.overflow = "hidden";

      updateFocusable();
      const first = firstFocusable || nav.querySelector("a,button");
      first && first.focus();

      if (mqMobile.matches) document.addEventListener("keydown", handleTrap);
    };

    const close = () => {
      nav.classList.remove("is-open");
      overlay.classList.remove("is-open");
      setTimeout(() => (overlay.hidden = true), 250);

      overlay.setAttribute("aria-hidden", "true");
      btn.setAttribute("aria-expanded", "false");

      nav.removeAttribute("aria-modal");
      nav.removeAttribute("role");

      document.documentElement.style.overflow = "";
      btn.focus();

      document.removeEventListener("keydown", handleTrap);
    };

    const toggle = () => (nav.classList.contains("is-open") ? close() : open());

    btn.addEventListener("click", toggle);
    overlay.addEventListener("click", close);

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        if (mqMobile.matches) close();
      })
    );

    const parents = nav.querySelectorAll(".has-dd");

    function closeAccs(except) {
      parents.forEach((p) => {
        if (p !== except) {
          p.classList.remove("is-open");
          const b = p.querySelector(".dd-btn");
          b && b.setAttribute("aria-expanded", "false");
        }
      });
    }

    parents.forEach((p) => {
      const b = p.querySelector(".dd-btn");

      b?.addEventListener("click", () => {
        if (mqMobile.matches) {
          const isOpen = p.classList.toggle("is-open");
          b.setAttribute("aria-expanded", String(isOpen));
          if (isOpen) closeAccs(p);
        } else {
          const isOpen = b.getAttribute("aria-expanded") === "true";
          b.setAttribute("aria-expanded", String(!isOpen));
        }
      });

      p.addEventListener("mouseenter", () => {
        if (!mqMobile.matches) {
          p.classList.add("is-open");
          const b = p.querySelector(".dd-btn");
          b?.setAttribute("aria-expanded", "true");
        }
      });

      p.addEventListener("mouseleave", () => {
        if (!mqMobile.matches) {
          p.classList.remove("is-open");
          const b = p.querySelector(".dd-btn");
          b?.setAttribute("aria-expanded", "false");
        }
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      btn.removeEventListener("click", toggle);
      overlay.removeEventListener("click", close);
      window.removeEventListener("keydown", handleTrap);
    };
  }, []);

  return (
    <header className="site-header" role="banner" aria-label="Navegación principal">
      <div className="container">
        <div className="nav-chip">
          <button className="toggle" id="navToggle">☰</button>

          <ul className="nav" id="siteNav" role="menubar">
            <li className="logo-nav">
              <img src="https://cdn.prod.website-files.com/68ddba1faf3f222fd7f626dc/68ddbf7bd63c6397c0d89bc9_sne_blanco.png" />
            </li>
            <li role="none">
              <a className="link" href="https://sitio-sne-code.webflow.io/" role="menuitem" target='_top'>Inicio</a>
            </li>
            <li role="none">
              <a className="link" href="https://sitio-sne-code.webflow.io/nosotros" role="menuitem" target='_top'>Nosotros</a>
            </li>
            <li role="none">
              <a className="link" href="https://sitio-sne-code.webflow.io/soluciones" role="menuitem" target='_top'>Soluciones</a>
            </li>
            <li role="none">
              <a className="link" href="https://sitio-sne-code.webflow.io/proyectos" role="menuitem" target='_top'>Proyectos</a>
            </li>

            <li className="has-dd" role="none">
              <button
                className="link dd-btn"
                type="button"
                aria-expanded="false"
                aria-haspopup="true"
                role="menuitem"
              >
                Productos<span className="caret"></span>
              </button>
              <div className="dropdown" role="menu" aria-label="Submenú Productos">
                <a href="https://sitio-sne-code.webflow.io/productos" role="menuitem" target='_top'>Productos</a>
                <a href="https://sitio-sne-code.webflow.io/nuestras-capsulas" role="menuitem" target='_top'>Cápsulas</a>
                <a href="https://sitio-sne-code.webflow.io/otros" role="menuitem" target='_top'>Otros</a>
              </div>
            </li>

            <li role="none">
              <a className="link" href="https://sitio-sne-code.webflow.io/servicio" role="menuitem" target='_top'
              >Servicio y Mantenimiento</a
              >
            </li>
            <li role="none">
              <a className="link" href="https://sitio-sne-code.webflow.io/contacto" role="menuitem" target='_top'>Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="navOverlay" className="overlay" />
    </header>
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


export function ModelosControl() {
  return (
    <section className="modelos-section">
      <div className="container container--narrow">

        <h2 className="modelos-title">Modelos de Control</h2>

        <div className="modelos-grid">
          <article className="modelo-card">
            <h3 className="modelo-title">AC 660</h3>
            <p className="modelo-desc">
              Hasta 99 estaciones, sin zonas independientes. Control por microprocesador autónomo,
              registro de hasta 5,000 transacciones e interfaz básica mediante botones.
            </p>
            <em className="modelo-meta">
              Ideal para casetas de peaje, retail y bancos.  
              Nivel de automatización: <strong>medio</strong>.
            </em>
          </article>

          <article className="modelo-card">
            <h3 className="modelo-title">AC 3000</h3>
            <p className="modelo-desc">
              Hasta 500 estaciones, 64 zonas independientes. Control mediante PC con software
              Windows, trazabilidad con RFID y log completo. Compatible con pantallas y lectores.
            </p>
            <em className="modelo-meta">
              Ideal para hospitales grandes e industrias medianas.  
              Nivel de automatización: <strong>alto</strong>.
            </em>
          </article>

          <article className="modelo-card">
            <h3 className="modelo-title">AC 4000</h3>
            <p className="modelo-desc">
              Estaciones y zonas ilimitadas. Control por software cliente-servidor (Linux/Windows),
              trazabilidad avanzada con RFID e historial en SQL. Interfaz táctil con favoritos y RFID.
            </p>
            <em className="modelo-meta">
              Ideal para hospitales de alta complejidad y centros logísticos.  
              Nivel de automatización: <strong>muy alto</strong>.
            </em>
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
            Ventas: 55 5377 2170 ext.2483 ·
            <a href="mailto:ventas@motioncorp.com.mx"
            >ventas@motioncorp.com.mx</a
            >
          </p>
        </div>
        <div>
          <strong>Nosotros</strong>
          <div className="flist">
            <a
              href="https://motioncorp.com.mx/contacto-bolsadetrabajo/"
              target="_blank"
            >Trabaja con nosotros</a
            >
            <a href="/contacto">Contacto</a>
          </div>
        </div>
        <div>
          <strong>Ayuda</strong>
          <div className="flist">
            <a href="#privacidad">Política de privacidad</a>
          </div>
        </div>
        <div>
          <strong>Síguenos</strong>
          <div className="social">
            <a
              href="https://www.facebook.com/snemotioncorp"
              target="_blank"
              aria-label="Facebook"
              title="Facebook"
            >
              <img
                src="https://cdn.prod.website-files.com/68ddba1faf3f222fd7f626dc/691d00db3c23387bb5169ea1_Facebook.svg"
                alt="Facebook"
                width="80"
                height="80"
              />
            </a>
            <a
              href="https://www.instagram.com/sistemasneumaticosdeenvios?igsh=NnJhMGtjYzhubWxv"
              target="_blank"
              aria-label="Instagram"
              title="Instagram"
            >
              <img
                src="https://cdn.prod.website-files.com/68ddba1faf3f222fd7f626dc/691d00dc9cafd49e0689fc6f_Instagram.svg"
                alt="Instagram"
                width="80"
                height="80"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/sistemas-neumaticos-de-envio-sne/posts/?feedView=all"
              target="_blank"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
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
      <Header />
      <Canvas className="canvas-background" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1 }}
        camera={{ position: [0, 0, 5], fov: 750 }}>
        <ScrollControls pages={6} distance={2}>
          <Model />


          <Scroll html style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
            {/* DOM contents in here will scroll along */}

            <HeroEquipos />
            <TabsEquipos />
            <div className="scroll-wrapper scroll-sinen">
              <EquipoSinen />
            </div>

            <div className="scroll-wrapper scroll-desliz">
              <EquipoDesliz />
            </div>

            <div className="scroll-wrapper scroll-flap">
              <EquipoFlap />
            </div>

            <div className="scroll-wrapper scroll-sistemas">
              <SistemasEquipos />
            </div>

            <div className="scroll-wrapper scroll-modelos">
              <ModelosControl />
            </div>

            <div className="scroll-wrapper-footer scroll-footer">
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

