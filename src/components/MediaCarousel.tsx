import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Video } from "lucide-react";
import "./MediaCarousel.css";

interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
  caption?: string;
}

interface MediaCarouselProps {
  items: MediaItem[];
  title?: string;
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({
  items,
  title = "Media Gallery",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setIsPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const handlePlayClick = () => {
    const video = document.querySelector(".carousel-video") as HTMLVideoElement;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  // Auto-advance for images (but not when video is playing)
  useEffect(() => {
    if (items[currentIndex]?.type === "image" && !isPlaying) {
      const timer = setTimeout(() => {
        goToNext();
      }, 4000); // 4 seconds per image

      return () => clearTimeout(timer);
    }
  }, [currentIndex, isPlaying, items]);

  if (!items || items.length === 0) {
    return (
      <div className="media-carousel">
        <div className="carousel-header">
          <h4 className="carousel-title">{title}</h4>
          <p className="carousel-subtitle">Media coming soon</p>
        </div>
        <div className="carousel-placeholder">
          <Video size={64} />
          <p>No media available</p>
        </div>
      </div>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <div className="media-carousel">
      <div className="carousel-header">
        <h4 className="carousel-title">{title}</h4>
        <p className="carousel-subtitle">
          {currentIndex + 1} of {items.length}
        </p>
      </div>

      <div className="carousel-container">
        {/* Main display area */}
        <div className="carousel-main">
          <button
            className="carousel-nav carousel-nav-prev"
            onClick={goToPrevious}
            aria-label="Previous media"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-content">
            {currentItem.type === "video" ? (
              <div className="carousel-video-wrapper">
                <video
                  src={currentItem.src}
                  poster={currentItem.thumbnail}
                  controls
                  playsInline
                  className="carousel-video"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                  <div className="video-play-overlay" onClick={handlePlayClick}>
                    <div className="video-play-button">
                      <Play size={32} fill="white" strokeWidth={0} />
                    </div>
                  </div>
                )}
                <div className="video-badge">
                  <Video size={14} />
                  <span>Video</span>
                </div>
              </div>
            ) : (
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="carousel-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18' fill='%236b7280'%3EImage not found%3C/text%3E%3C/svg%3E";
                }}
              />
            )}
          </div>

          <button
            className="carousel-nav carousel-nav-next"
            onClick={goToNext}
            aria-label="Next media"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Caption */}
        {currentItem.caption && (
          <div className="carousel-caption">
            <p>{currentItem.caption}</p>
          </div>
        )}

        {/* Thumbnail navigation */}
        <div className="carousel-thumbnails">
          {items.map((item, index) => (
            <button
              key={item.id}
              className={`thumbnail ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              {item.type === "video" ? (
                <div className="thumbnail-video">
                  <img
                    src={item.thumbnail || item.src}
                    alt={item.alt}
                    className="thumbnail-image"
                  />
                  <div className="thumbnail-play-icon">
                    <Play size={12} fill="white" strokeWidth={0} />
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="thumbnail-image"
                />
              )}
            </button>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaCarousel;
