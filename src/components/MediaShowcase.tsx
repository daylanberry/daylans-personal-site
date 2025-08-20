import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Video, Image, Maximize2 } from "lucide-react";
import "./MediaShowcase.css";

interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
  caption?: string;
}

interface MediaShowcaseProps {
  items: MediaItem[];
  title?: string;
  autoPlay?: boolean;
  showThumbnails?: boolean;
  variant?: "default" | "hero" | "full-width";
}

const MediaShowcase: React.FC<MediaShowcaseProps> = ({
  items,
  title = "Media Showcase",
  autoPlay = true,
  showThumbnails = true,
  variant = "default",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance
  useEffect(() => {
    if (autoPlay && items.length > 1 && items[currentIndex]?.type === "image") {
      const timer = setTimeout(() => {
        goToNext();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, autoPlay, items]);

  if (!items || items.length === 0) {
    return (
      <div className={`media-showcase ${variant}`}>
        <div className="showcase-placeholder">
          <Image size={64} />
          <p>No media available</p>
        </div>
      </div>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <div className={`media-showcase ${variant} ${isFullscreen ? 'fullscreen' : ''}`}>
      {title && variant !== "hero" && (
        <div className="showcase-header">
          <h3 className="showcase-title">{title}</h3>
          <span className="showcase-counter">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      )}

      <div className="showcase-container">
        <div className="showcase-main">
          {/* Navigation arrows */}
          {items.length > 1 && (
            <>
              <button 
                className="showcase-nav showcase-nav-prev"
                onClick={goToPrevious}
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>

              <button 
                className="showcase-nav showcase-nav-next"
                onClick={goToNext}
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Content area */}
          <div className="showcase-content">
            {currentItem.type === "video" ? (
              <div className="showcase-media-wrapper">
                <video
                  src={currentItem.src}
                  poster={currentItem.thumbnail}
                  controls
                  playsInline
                  className="showcase-video"
                />
                <div className="media-type-badge video">
                  <Video size={12} />
                  Video
                </div>
              </div>
            ) : (
              <div className="showcase-media-wrapper">
                <img
                  src={currentItem.src}
                  alt={currentItem.alt}
                  className="showcase-image"
                />
                {variant === "hero" && (
                  <button 
                    className="fullscreen-toggle"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    aria-label="Toggle fullscreen"
                  >
                    <Maximize2 size={16} />
                  </button>
                )}
              </div>
            )}

            {/* Caption overlay */}
            {currentItem.caption && (
              <div className="showcase-caption">
                <p>{currentItem.caption}</p>
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail strip */}
        {showThumbnails && items.length > 1 && (
          <div className="showcase-thumbnails">
            {items.map((item, index) => (
              <button
                key={item.id}
                className={`showcase-thumb ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              >
                <img
                  src={item.type === "video" ? (item.thumbnail || item.src) : item.src}
                  alt={item.alt}
                />
                {item.type === "video" && (
                  <div className="thumb-video-indicator">
                    <Video size={8} />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Progress dots */}
        <div className="showcase-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div className="fullscreen-overlay" onClick={() => setIsFullscreen(false)}>
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="fullscreen-close"
            onClick={() => setIsFullscreen(false)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default MediaShowcase;
