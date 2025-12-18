import React, { useState, useEffect, useRef } from 'react';
import './index.css';

// Text Constants
const TEXT_BEITEA = `Titre du projet : Growth Hacking & Stratégie d'Acquisition Omni-canale

À propos du projet
Déploiement d'un écosystème complet d'acquisition et de fidélisation pour Beïtea, une marque de Bubble Tea située sur les Champs-Élysées. L'objectif : structurer le funnel de vente pour maximiser la Lifetime Value (LTV) client.

Les leviers activés

Acquisition Automatisée (Outbound) : Mise en place de stratégies de Scraping (ciblage des followers concurrents) couplées à des séquences de Cold Emailing via PhantomBuster pour générer du trafic qualifié.

Gamification & Revenu (BOFU) : Conception de mécaniques psychologiques (Tickets à gratter, offre Mystère) pour inciter au réachat et augmenter le panier moyen au-delà de 12€.

Optimisation de la Conversion (CRO) : Création et AB Testing de Landing Pages dédiées pour transformer l'audience sociale en base de données clients exploitable.

Stack technique
PhantomBuster • Scraping & Data Enrichment • AB Testing • Marketing Automation`;

const TEXT_NORTHWIND = `Titre du projet : Audit de Rentabilité & Optimisation des Marges (Northwind)

À propos du projet
Conception d'une architecture de données et d'un tableau de bord de pilotage pour une entreprise de fournitures générant 2,3 millions de dollars de revenus. Le but : identifier les fuites de revenus et assainir la marge nette (actuellement à 12,47%).

Les enjeux traités

Data Modeling (Engineering) : Structuration de la base de données brute en Schéma en Étoile (Star Schema), connectant les tables Transactions, Clients et Produits pour rendre la donnée exploitable.

Stratégie de Pricing : Analyse de l'élasticité-prix démontrant une chute critique de la rentabilité au-delà de 20% de remise. Recommandation stratégique : Plafonnement immédiat des remises commerciales.

Rationalisation du Catalogue : Identification des produits déficitaires (notamment la sous-catégorie "Tables" en perte nette) face aux vaches à lait ("Copiers", "Phones") pour réorienter la stratégie d'achat.

Stack technique
SQL & Data Modeling • Google Looker Studio • Business Intelligence`;

const TEXT_VIDEO = `Titre du projet : Production Vidéo Publicitaire & IA Générative

À propos du projet
Création de contenus publicitaires haute définition via les outils d'Intelligence Artificielle Générative (Text-to-Video / Image-to-Video). Ce pôle de compétences permet de produire des spots commerciaux ultra-réalistes ou stylisés avec des coûts et des délais de production réduits.

Types de réalisations
Product Showcase (Tech/Beauté) : Mise en scène photoréaliste de produits avec gestion précise des éclairages et des textures pour un rendu "studio".

Brand Storytelling (EcoWise) : Animation de mascottes et d'univers de marque 3D pour renforcer l'identité visuelle de projets RSE.

Cinematography (Food & Beverage) : Création d'ambiances immersives et appétissantes pour des marques de boissons, jouant sur le ralenti et les particules.

Stack technique
Generative AI • Kling AI • Prompt Engineering • Montage & Sound Design`;

const TEXT_ECOWISE = `Titre du projet : Stratégie de Gamification & Design Comportemental (EcoWise)

À propos du projet
Conception d'un écosystème numérique incitatif visant à réduire de 20% les déchets sur les campus étudiants en l'espace de 3 mois. Le projet transforme la contrainte du tri sélectif en une expérience ludique et compétitive.

Les leviers activés
Mécanique de Nudge (Le Hook) : Mise en place d'une boucle d'engagement cognitif : Déclencheur (QR Code) -> Action (Preuve photo du tri) -> Récompense Variable (Points, Badges "Eco-Hero", Café gratuit).

Preuve Sociale & Viralité : Création d'une dynamique de groupe via des classements inter-écoles et inter-promos, exploitant l'esprit de compétition pour maximiser l'adoption par la cible 18-26 ans.

UX & Parcours Utilisateur : Design d'un parcours "Mobile First" fluide, validant les missions via la reconnaissance d'image pour débloquer des avantages réels instantanés.

Compétences clés
Gamification Strategy • Behavioral Design • User Experience (UX) • Prototyping`;

const TEXT_BAAC = `Titre du projet : Sécurité Routière - Analyse BAAC

À propos du projet
Ce projet d'analyse de données vise à améliorer la sécurité routière en exploitant la base de données nationale BAAC (Bulletin d'Analyse des Accidents Corporels).

Les enjeux traités
Pilotage de la performance : Surveillance en temps réel des indicateurs de gravité.
Segmentation géographique : Identification des zones à haut risque pour cibler les interventions.
Comparaison Thermique vs Électrique : Analyse des spécificités accidentologiques selon la motorisation.
Optimisation : Création de tableaux de bords interactifs pour les décideurs publics.

Stack technique
Python • Data Visualization • Analytics`;

// Helpers
const getImages = (projNum: number, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/projet_${projNum}_page_${i + 1}.png`);

interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  icon: string;
  accentClass: string;
  visualHint: string;
  folder: string;
  image: string;
  gallery: string[];
}

const projects: Project[] = [
  {
    id: 'frame_1_beitea',
    name: 'Beïtea - Growth Hacking',
    category: 'Marketing',
    description: 'Stratégie d\'acquisition et gamification pour une marque de Bubble Tea.',
    fullDescription: TEXT_BEITEA,
    techStack: ['PhantomBuster', 'Automation', 'Looker Studio'],
    icon: '🧋',
    accentClass: 'frame-beitea',
    visualHint: 'Bubble Tea, scratch tickets, Instagram',
    folder: 'Projet 2',
    image: '/images/beitea.png',
    gallery: getImages(2, 13),
  },
  {
    id: 'frame_2_fournitures',
    name: 'Société de Fournitures',
    category: 'Data BI',
    description: 'Audit complet et optimisation des processus pour une société de fournitures de bureau.',
    fullDescription: TEXT_NORTHWIND,
    techStack: ['Data Analysis', 'Reporting', 'Strategy'],
    icon: '📊',
    accentClass: 'frame-northwind',
    visualHint: 'Office supplies, charts, blue theme',
    folder: 'Projet 3',
    image: '/images/northwind.png',
    gallery: getImages(3, 4),
  },
  {
    id: 'frame_3_video',
    name: 'Edu Quiet - Production Vidéo',
    category: 'GenAI',
    description: 'Création de contenus publicitaires haute définition via Intelligence Artificielle Générative.',
    fullDescription: TEXT_VIDEO,
    techStack: ['Kling AI', 'Prompting', 'Video Editing'],
    icon: '🎬',
    accentClass: 'frame-video',
    visualHint: 'Video timeline, AI watermark, products',
    folder: 'Projet 6',
    image: '/images/video_ai.png',
    gallery: getImages(4, 13),
  },
  {
    id: 'frame_4_ecowise',
    name: 'EcoWise - Gamification',
    category: 'UX Design',
    description: 'Application de gamification pour réduire de 20% les déchets sur les campus étudiants.',
    fullDescription: TEXT_ECOWISE,
    techStack: ['Gamification', 'UX/UI', 'Behavioral Design'],
    icon: '🌿',
    accentClass: 'frame-ecowise',
    visualHint: '3D cactus mascot, badges, recycling',
    folder: 'Projet 5',
    image: '/images/ecowise.png',
    gallery: getImages(5, 4),
  },
  {
    id: 'frame_5_securite',
    name: 'Sécurité Routière - Analyse',
    category: 'Analysis',
    description: 'Analyse de la base de données BAAC pour identifier les facteurs de gravité des accidents.',
    fullDescription: TEXT_BAAC,
    techStack: ['Python', 'Data Viz', 'Analytics'],
    icon: '🚗',
    accentClass: 'frame-baac',
    visualHint: 'Car blueprints, heatmaps, grid',
    folder: 'Projet 1',
    image: '/images/baac.png',
    gallery: getImages(1, 1),
  },
];

const framePositions = [
  'frame-1',
  'frame-2',
  'frame-3',
  'frame-4',
  'frame-5',
];

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleProjectClick = (project: Project, e: React.MouseEvent<HTMLButtonElement>) => {
    // Calculate zoom transform
    const rect = e.currentTarget.getBoundingClientRect();
    const frameCenterX = rect.left + rect.width / 2;
    const frameCenterY = rect.top + rect.height / 2;

    // Target: Center of screen
    const windowCenterX = window.innerWidth / 2;
    const windowCenterY = window.innerHeight / 2;

    // Move frame center to window center
    const translateX = windowCenterX - frameCenterX;
    const translateY = windowCenterY - frameCenterY;

    // Scale factor
    const scale = 5;

    // Apply transform to the WRAPPER
    // We want to pivot around the frame center? 
    // Actually, translate then scale is easier
    setZoomStyle({
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      transformOrigin: `${frameCenterX}px ${frameCenterY}px`
    });
    // Wait, if origin is frameCenter, scale keeps frameCenter fixed.
    // So translate moves frameCenter to windowCenter.
    // Yes, this logic should work for "Camera moves to frame".

    setIsZooming(true);
    setTimeout(() => {
      setActiveProject(project);
    }, 1000);
  };

  const handleBack = () => {
    setActiveProject(null);
    setZoomStyle({}); // Reset zoom
    setTimeout(() => {
      setIsZooming(false);
    }, 100);
  };

  return (
    <div className="portfolio-container">
      {/* Zoomable Wrapper containing Wall and Frames */}
      <div
        className="zoom-wrapper"
        style={isZooming ? zoomStyle : undefined}
      >
        <div className="portfolio-bg" />

        {/* Spotlight following mouse */}
        <div
          className="spotlight-layer"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, transparent 10%, rgba(0,0,0,0.4) 60%)`,
            opacity: isZooming ? 0 : 1 // Fade out spotlight on zoom
          }}
        />

        {/* Hero Title */}
        <div
          className="hero-title"
          style={{
            opacity: isZooming ? 0 : 1,
            transition: 'opacity 0.5s ease'
          }}
        >
          <h1 className="hero-name">
            OREHN
            <span>ANSELLEM</span>
          </h1>
          <p className="hero-subtitle">Creative Portfolio</p>
        </div>

        {/* Frames */}
        <div className="frames-container">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`project-frame ${framePositions[index]} ${project.accentClass}`}
              onClick={(e) => handleProjectClick(project, e)}
              style={{
                pointerEvents: isZooming || activeProject ? 'none' : 'auto',
                // disable parallax when zooming to avoid jitter
                transform: isZooming ? 'none' : `
                  translateZ(0)
                  rotateY(${(mousePos.x - 50) * 0.02}deg)
                  rotateX(${(50 - mousePos.y) * 0.02}deg)
                `
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="frame-image"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Project Detail View (Overlay) */}
      <div className={`project-view ${activeProject ? 'active' : ''}`}>
        {activeProject && (
          <>
            <button className="project-back-btn" onClick={handleBack}>
              ← Retour à la galerie
            </button>

            <header className="project-header">
              <span className="project-category-badge">{activeProject.category}</span>
              <h2 className="project-title">{activeProject.name}</h2>
              <ul className="project-tech-stack">
                {activeProject.techStack.map((tech) => (
                  <li key={tech} className="tech-badge">{tech}</li>
                ))}
              </ul>
            </header>

            <div className="project-content">
              {/* Main Visual */}
              <div className="project-detail-frame">
                <div className="project-detail-frame-inner">
                  <img
                    src={activeProject.image}
                    alt={activeProject.name}
                    className="project-detail-image"
                  />
                </div>
              </div>

              {/* Full Description */}
              <div className="full-description">
                {activeProject.fullDescription}
              </div>

              {/* Gallery Grid */}
              <div className="project-gallery-grid">
                {activeProject.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Page ${idx + 1}`}
                    className="gallery-item"
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
