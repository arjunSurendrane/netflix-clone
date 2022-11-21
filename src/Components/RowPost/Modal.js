import React from "react";
import ReactPlayer from "react-player/youtube";
import "./modal.css";

// import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .9)",
  zIndex: 1000,
};
export default function Modal({ open, onClose, ytubeid, movieDetail }) {
  if (!open) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose} className="button">
          X
        </button>

        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${ytubeid}`}
          playing="false"
        />

        <h1>{movieDetail[0].original_title}</h1>
        <p>{movieDetail[0].overview}</p>
      </div>
    </>
  );
}
