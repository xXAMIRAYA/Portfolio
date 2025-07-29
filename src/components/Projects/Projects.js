import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/bank.png";
import main from "../../Assets/Projects/mainsolidaire.jpg";
import chatify from "../../Assets/Projects/abt.png";
// import bitsOfCode from "../../Assets/Projects/copains.png";
import hackathon from "../../Assets/Projects/hackathon.png";
import job from "../../Assets/Projects/job.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projet </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="RS6-Abt"
              description="Le site RS6-ABT est une plateforme dédiée à la présentation et à la mise en valeur de l'Audi RS6, modifiée par ABT Sportsline. Il permet de découvrir les améliorations de performance, le design unique et les caractéristiques techniques de ce modèle d'exception."
              ghLink="https://github.com/xAMIRAYA/r6s_car"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Copains"
              description="Lors d’un hackathon collaboratif, j’ai participé à la création de Copain d’Avant , une application visant à reconnecter des anciens amis ou collègues. 
              Ce projet ma permis dexplorer le travail en équipe sous pression et dappliquer des solutions innovantes en développement fullstack."
              ghLink="#"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gestion Bancaire"
              description="Cette application bancaire a été développée pour offrir une gestion simple et intuitive des comptes clients.
              elle met l'accent sur la sécurité des données et la fluidité de l'expérience utilisateur. Ce projet illustre mes compétences en développement backend et en conception de bases de données relationnelles."
              ghLink="https://github.com/xXAMIRAYA/Banking_App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={main}
              isBlog={false}
              title="Gestion des Donation"
              description="Développement d’une application web complète pour la gestion des dons (argent, matériel, bénévolat). 
              Elle intègre un tableau de bord dynamique pour les administrateurs, un système de validation des dons, un module de messagerie entre donateurs et responsables de campagnes, et des politiques de sécurité avancées via Supabase.

"
              ghLink="https://github.com/xXAMIRAYA/PSynthese"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hackathon}
              isBlog={false}
              title="application des Reservations"
              description="Conception d’une application innovante de réservation en ligne réalisée lors d’un hackathon, 
              intégrant l’authentification sécurisée par QR Code. Elle permet de réserver facilement des services/événements et d’assurer un accès rapide et fiable grâce au scan du code.

"
              ghLink="https://github.com/xXAMIRAYA/Hackathon2025"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job}
              isBlog={false}
              title="Plateforme d’offres d’emploi"
              description="Développement d’une application web moderne permettant l’affichage et la consultation des offres d’emploi. Elle offre une interface simple et intuitive,
               avec la possibilité de filtrer et rechercher les annonces selon les préférences des utilisateurs."
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
