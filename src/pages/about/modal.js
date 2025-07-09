const JobDetailsModal = ({ show, content, onHide }) => {
  if (!show) return null;

  return (
    <div className="modal" onClick={onHide}>
      <div className="modal-content">
        <span className="close" onClick={onHide}>&times;</span>
        <p>{content}</p>
      </div>
    </div>
  );
};
