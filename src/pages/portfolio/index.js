import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Project Gallery
            | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="3">
            <h1 className="display-4 mb-4"> Project Gallery
            </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-1 col-12 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item">
              {data.video
                ? <video
                  className="preview-video"
                  src={data.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onEnded={e => {
                // rewind to 0 and restart
                e.currentTarget.currentTime = 0;
                e.currentTarget.play();
              }}
                />
                : <img src={data.img} alt={data.description} />
              }
              {/* <img src={data.img} alt="" /> */}
              <div className="content">
                <p>{data.description}</p>
                {data.link && (
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
