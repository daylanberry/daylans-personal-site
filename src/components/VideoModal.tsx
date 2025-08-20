import React, { useEffect } from "react";
import { X } from "lucide-react";
import "./VideoModal.css";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoSrc,
  title,
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="video-modal-header">
          <h3 className="video-modal-title">{title}</h3>
          <button className="video-modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="video-container">
          <video
            controls
            autoPlay
            className="video-player"
            onError={() => {
              console.error("Video failed to load:", videoSrc);
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-modal-footer">
          <p className="video-instructions">
            Press <kbd>ESC</kbd> or click outside to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
