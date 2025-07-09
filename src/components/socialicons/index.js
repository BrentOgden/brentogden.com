import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaDochub,
  FaReadme,
  FaFilePdf,
  FaFileWord,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram} target="_blank">
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target="_blank">
              <FaGithub />
            </a>
          </li>
        )}
        {/* {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )} */}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="_blank">
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.resumePDF && (
          <li>
            <a href={socialprofils.resumePDF}>
              <FaFilePdf />
            </a>
          </li>
        )}
        {socialprofils.resumeWord && (
          <li>
            <a href={socialprofils.resumeWord}>
              <FaFileWord />
            </a>
          </li>
        )}
        {/* {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )} */}
      </ul>
      <p>My Profiles</p>
    </div>
  );
};
