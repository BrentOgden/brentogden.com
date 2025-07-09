import React, { useState, useEffect } from "react";

export default function Hex({ imageUrl, onClick }) {
  const fadeDuration = 6000;

  const [currentBg, setCurrentBg] = useState(imageUrl);
  const [prevBg,    setPrevBg]    = useState(null);
  const [isCrossFading, setIsCrossFading] = useState(false);

  useEffect(() => {
    if (imageUrl !== currentBg) {
      setPrevBg(currentBg);
      setCurrentBg(imageUrl);
      setIsCrossFading(true);
      const t = setTimeout(() => {
        setIsCrossFading(false);
        setPrevBg(null);
      }, fadeDuration);
      return () => clearTimeout(t);
    }
  }, [imageUrl, currentBg]);

  return (
    <div
      className="hex"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {/* OLD IMAGE */}
      {prevBg && (
        <div
          className="hex-image old"
          style={{
            backgroundImage: `url(${prevBg})`,
            opacity: isCrossFading ? 1 : 0,
            transition: `opacity ${fadeDuration}ms ease-in-out`,
          }}
        />
      )}

      {/* NEW IMAGE */}
      <div
        className="hex-image current"
        style={{
          backgroundImage: `url(${currentBg})`,
          opacity: isCrossFading ? 0 : 1,
          transition: `opacity ${fadeDuration}ms ease-in-out`,
        }}
      />

      {/* COLOR OVERLAY */}
      <div className="hex-overlay" />
    </div>
  );
}
