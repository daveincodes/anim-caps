import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './App.css';
import { Environment, ScrollControls, Scroll, Html, useScroll } from '@react-three/drei';
import Model from './DIEGO CAPSULA';
import { div } from 'three/examples/jsm/nodes/Nodes.js';


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
                {/* <a href="https://sitio-sne-code.webflow.io/otros" role="menuitem" target='_top'>Otros</a> */}
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

    <div>
       <h2 className="titulo-sistemas">Tipos de Sistemas</h2>
    </div>
    
  );
}


export function SistemasEquipos() {
  return (
    <section className="equipos-sistemas">
      <div className="cards-container">
        {/* Card 2 - Sistema Multipunto */}
        <article className="sistema-card">
          <h2>Sistema Multipunto</h2>
          <p>
            Un sistema neumático multipunto es una red automatizada que permite el envío y recepción entre tres o más estaciones con desviadores inteligentes y controlado por un software central; permite envíos simultáneos y cruzados con gestión eficiente del tráfico.
          </p>
          <p>
           Es ideal para instalaciones de alta demanda operativa, como hospitales, industrias, bancos o corporativos, donde se necesita conectar múltiples áreas funcionales.
          </p>
          <em>Aplicaciones: hospitales, industrias, bancos, corporativos.</em>
        </article>
      </div>
    </section>
  );
}


export function ModelosControl() {
  return (
    <section className="modelos-section">
      <div className="container container--narrow">
        <h2 className="modelos-main-title">Modelos de Control</h2>

        <div className="modelos-cards-grid">
          {/* Tarjeta AC 660 */}
          <article className="modelo-glass-card">
            <h3 className="modelo-glass-title">AC 660</h3>
            <p className="modelo-glass-desc">
              Diseñado para conectar hasta 99 estaciones a través de una red eficiente y controlada por microprocesador. Su operación es totalmente automática, sin necesidad de un PC dedicado, y permite el envío y recepción de cápsulas de forma bidireccional cuando se utilizan desviadores (diverters).
            </p>
            <em className="modelo-glass-meta">
              Aplicaciones principales:
              Por su tamaño compacto, fiabilidad y eficiencia, es ideal para aplicaciones que requieren agilidad y seguridad en espacios reducidos. Ideal para casetas de peaje, al permitir el traslado rápido y seguro de efectivo entre las cabinas y la oficina administrativa.
            </em>
          </article>

          {/* Tarjeta AC 3000 */}
          <article className="modelo-glass-card">
            <h3 className="modelo-glass-title">AC 3000</h3>
            <p className="modelo-glass-desc">
              Diseñado para instalaciones con múltiples áreas que necesitan envíos frecuentes, rápidos y seguros entre estaciones, ideal para edificios grandes o múltiples áreas;  Soporta múltiples rutas, desvíos y cápsulas en tránsito.
            </p>
            <em className="modelo-glass-meta">
              Hasta 500 estaciones conectadas en red,64 zonas independientes, control total mediante software Windows, Seguimiento con tecnología RFID y registro de auditoría

              Aplicaciones principales:
              Hospitales medianos o de alta especialidad, laboratorios centrales, industrias manufactureras, centros logísticos y corporativos con alto volumen de operaciones internas.
            </em>
          </article>

          {/* Tarjeta AC 4000 */}
          <article className="modelo-glass-card">
            <h3 className="modelo-glass-title">AC 4000</h3>
            <p className="modelo-glass-desc">
              Es la solución más avanzada de Aerocom, diseñada para adaptarse a cualquier tamaño sin límite de estaciones o zonas. Se caracteriza por su alto nivel de automatización, seguridad y trazabilidad.
            </p>
            <em className="modelo-glass-meta">
              •Escalabilidad ilimitada: soporta cualquier número de estaciones, líneas y zonas.
              •Interfaz moderna: pantalla táctil intuitiva con funciones de favoritos, directorio, prioridades y envío seguro.
              •Software cliente‑servidor, compatible con Linux o Windows, base de datos SQL para registros, auditoría y respaldo. 
              •Funcionalidad avanzada de seguridad: incluye opciones RFID para asegurar el envío de cápsulas y seguimiento. 

              Aplicaciones ideales:
              Hospitales grandes, laboratorios centrales, industrias complejas, centros logísticos y corporativos con muchas estaciones, donde se requiere máximo control, seguridad operativa y trazabilidad.
            </em>
          </article>
        </div>
      </div>
    </section>
  );
}


export function SistemasEquiposPAP() {
  return (
     <section className="equipos-sistemas">
      <div className="cards-container">
        {/* Card 1 - Sistema Punto a Punto */}
        <article className="sistema-card">
          <h2>Sistema Punto a Punto</h2>
          <p>
            Un Sistema Neumático de Envíos Punto a Punto conecta exclusivamente dos estaciones o áreas mediante una red directa, permitiendo el envío de cápsulas en una sola ruta fija y sin desvíos intermedios.
          </p>
        </article>
      </div>
    </section>
  );
}



export function ModelosAC() {
  return (
    <section className="modelos-ac">
      <div className="container container--narrow">

        <h2 className="modelos-ac__title_main">Modelos de Automatización</h2>

        <div className="modelos-ac__grid">

          {/* AC 1 */}
          <article className="modelo-ac">
            <h3 className="modelo-ac__title">AC 1</h3>
            <ul className="modelo-ac__list">
              <li>Transporte rápido y seguro (4–6 m/s) entre dos puntos.</li>
              <li>Comunicación en un solo sentido.</li>
              <li>Control autónomo por línea, con microprocesador que supervisa todo el sistema.</li>
              <li>Bajo consumo eléctrico (2A en stand by) y turbina de activación automática para mayor vida útil.</li>
              <li>
                Recepción segura y práctica: estación deslizable para el envío y recepción masiva de cápsulas,
                para el depósito en canastilla o caja fuerte, sin requerir personal fijo.
              </li>
              <li>Operación silenciosa, motor separado hasta 8 m y silenciador especializado.</li>
              <li>Instalación flexible aérea o subterránea, con tubería de protección.</li>
              <li>
                Disponible en diámetros de 80 mm y 110 mm, ideal para entornos donde se requiere control estricto,
                envío seguro y con alta frecuencia de envíos.
              </li>
              <li>
                Activación y apagado automático de la turbina por su sistema de sensores,
                incrementando el tiempo de vida útil de la misma.
              </li>
            </ul>
          </article>

          {/* AC GAS */}
          <article className="modelo-ac">
            <h3 className="modelo-ac__title">AC GAS</h3>
            <ul className="modelo-ac__list">
              <li>Es similar al AC 1 con un botón antiexplosivo.</li>
              <li>Red eléctrica canalizada en conduit C-40 y condulets antiexplosivos.</li>
              <li>
                Instalamos de acuerdo con la NOM-005-ASEA-2016 de diseño, construcción,
                operación y mantenimiento de estaciones de servicio.
              </li>
              <li>
                Activación y apagado automático de la turbina por su sistema de sensores,
                incrementando el tiempo de vida útil de la misma.
              </li>
            </ul>
          </article>

          {/* AC 2 */}
          <article className="modelo-ac">
            <h3 className="modelo-ac__title">AC 2</h3>
            <ul className="modelo-ac__list">
              <li>Transporte rápido y seguro de dinero y documentos, etc. (4–8 m/s) entre dos puntos.</li>
              <li>
                Intercomunicación de áreas de forma bidireccional mediante líneas independientes,
                tantas como se requieran.
              </li>
              <li>Control autónomo por línea con microprocesador, sin dependencia entre líneas.</li>
              <li>Bajo consumo eléctrico (2A en stand by) y turbina de activación automática para mayor vida útil.</li>
              <li>Desaceleración neumática de cápsulas para un arribo seguro.</li>
              <li>
                Funcionamiento silencioso gracias a ubicación remota del motor
                (hasta 8 metros) y silenciador especial.
              </li>
              <li>
                Instalación flexible aérea y/o subterránea, esta última con tubería
                de protección para mayor durabilidad.
              </li>
              <li>Turbina bifásica y trifásica de acuerdo con diseño.</li>
              <li>
                Control con base a microprocesador nacional o alemán
                de acuerdo con aplicación y diseño.
              </li>
              <li>Señales visuales y/o audibles como equipo adicional opcional.</li>
              <li>
                Activación y apagado automático de la turbina por su sistema de sensores,
                incrementando el tiempo de vida útil de la misma.
              </li>
            </ul>
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
            <div className="scroll-wrapper scroll-sistemas">
              <SistemasEquipos />
            </div>

            <div className="scroll-wrapper scroll-modelos">
              <ModelosControl />
            </div>

            <div className="scroll-wrapper scroll-sistemas-pap">
              <SistemasEquiposPAP />
            </div>

            <div className="scroll-wrapper scroll-modelos-ac">
              <ModelosAC />
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

