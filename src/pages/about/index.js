import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Hex from "./hex";
import { JobDetailsModal } from "./jobDetailsModal";
import { SkillDetailsModal } from "./skillDetailsModal";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  const [showJobModal, setShowJobModal] = useState(false);
  const [jobModalContent, setJobModalContent] = useState("");
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [skillModalContent, setSkillModalContent] = useState("");
  const [currentSkills, setCurrentSkills] = useState([]);

  // Preload all skill images
  useEffect(() => {
    skills.forEach(({ imageUrl }) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);

  // Fisher–Yates shuffle
  const shuffleArray = (array) => {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // Handlers to open modals
  const handleJobClick = (job) => {
    setJobModalContent(`
      <div style="padding:20px;">
        <p><strong>${job.jobtitle}</strong></p>
        <p>Location: ${job.where}</p>
        <p>${job.jobDescription}</p>
      </div>
    `);
    setShowJobModal(true);
  };

  const handleSkillClick = (skill) => {
    setSkillModalContent(`
      <div style="padding:20px; text-align:center;">
        <h2 style="padding-bottom: 20px;">${skill.name}</h2>
        <p><strong>Years of Experience:</strong> ${skill.experience}</p>
        <p><strong>Skill Level:</strong> ${skill.proficiency}</p>
      </div>
    `);
    setShowSkillModal(true);
  };

  // Setup random swapping
  // inside About component
  useEffect(() => {
    // initialize with 7 random skills
    setCurrentSkills(shuffleArray(skills).slice(0, 7));

    let timeoutId;

    const swapOne = () => {
      setCurrentSkills(prev => {
        const updated = [...prev];
        // pick a random index in the currentSkills array
        const idx = Math.floor(Math.random() * updated.length);

        // build a pool of skills not already shown
        const pool = skills.filter(
          s => !prev.some(u => u.name === s.name)
        );

        // if there’s any left, replace exactly one slot
        if (pool.length) {
          updated[idx] = pool[Math.floor(Math.random() * pool.length)];
        }

        return updated;
      });

      // schedule the next single swap (every 2–5 seconds)
      const delay = Math.random() * 2000 + 2000;
      timeoutId = setTimeout(swapOne, delay);
    };

    // kick off the first swap after 3s
    timeoutId = setTimeout(swapOne, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Intro */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">My Story</h1>
            <h3 className="tagline">
              A creative path shaped by curiosity, passion, and continuous growth.
            </h3>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* About Me */}
        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="8" className="d-flex align-items-center">
            <p>{dataabout.aboutme}</p>
          </Col>
        </Row>

        {/* Experience */}
        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Experience Along the Way</h3>
            <p className="tagline">Milestones, lessons, and a few bold moves.</p>
          </Col>
          <Col lg="8">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((job) => (
                  <tr key={job.id}>
                    <th
                      scope="row"
                      onClick={() => handleJobClick(job)}
                      className="job-title"
                    >
                      {job.jobtitle}
                    </th>
                    <td>{job.where}</td>
                    <td>{job.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>

        {/* Skills */}
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Skills That Drive My Work</h3>
            <p className="tagline">
              The creative and technical edge behind every project.
            </p>
            <div className="hexagon-layout">
              <div className="hex-row hex-row-2">
                {currentSkills.slice(0, 2).map((skill) => (
                  <Hex
                    key={skill.name}
                    imageUrl={skill.imageUrl}
                    onClick={() => handleSkillClick(skill)}
                    
                  />
                ))}
              </div>
              <div className="hex-row hex-row-3">
                {currentSkills.slice(2, 5).map((skill) => (
                  <Hex
                    key={skill.name}
                    imageUrl={skill.imageUrl}
                    onClick={() => handleSkillClick(skill)}
                    
                  />
                ))}
              </div>
              <div className="hex-row hex-row-2">
                {currentSkills.slice(5, 7).map((skill) => (
                  <Hex
                    key={skill.name}
                    imageUrl={skill.imageUrl}
                    onClick={() => handleSkillClick(skill)}
                    
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Services */}
        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Strengths In Action</h3>
            <p className="tagline">
              Turning ideas into results, one project at a time.
            </p>
          </Col>
          <Col lg="8">
            {services.map((svc, i) => (
              <div className="service_ py-4" key={i}>
                <h5 className="service__title">{svc.title}</h5>
                <p className="service_desc">{svc.description}</p>
              </div>
            ))}
          </Col>
        </Row>

        {/* Render both modals */}
        <JobDetailsModal
          show={showJobModal}
          content={jobModalContent}
          onHide={() => setShowJobModal(false)}
        />
        <SkillDetailsModal
          show={showSkillModal}
          content={skillModalContent}
          onHide={() => setShowSkillModal(false)}
        />
      </Container>
    </HelmetProvider>
  );
};
