import React, { useEffect, useRef } from "react";

export const JobDetailsModal = ({ show, content, onHide }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onHide();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div
        ref={modalRef}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={onHide}>
          &times;
        </button>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};
