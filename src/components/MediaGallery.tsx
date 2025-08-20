import React from "react";
import { Image, Video } from "lucide-react";
import "./MediaGallery.css";

interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
  caption?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
  title?: string;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({
  items,
  title = "Media Gallery",
}) => {
  return (
    <div className="media-gallery">
      <div className="gallery-header">
        <h4 className="gallery-title">{title}</h4>
        <p className="gallery-subtitle">Screenshots and demos from the app</p>
      </div>

      <div className="media-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className="media-item"
          >
            <div className="media-thumbnail">
              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    poster={item.thumbnail}
                    controls
                    playsInline
                    className="media-video"
                    preload="metadata"
                    onError={() => {
                      console.error("Video failed to load:", item.src);
                    }}
                  />
                  <div className="video-badge">
                    <Video size={12} />
                    <span>Video</span>
                  </div>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="media-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const thumbnail = target.parentElement!;
                    thumbnail.style.background =
                      "linear-gradient(135deg, #f3f4f6, #e5e7eb)";
                    thumbnail.style.display = "flex";
                    thumbnail.style.alignItems = "center";
                    thumbnail.style.justifyContent = "center";

                    if (!thumbnail.querySelector(".fallback-icon")) {
                      const fallbackIcon = document.createElement("div");
                      fallbackIcon.className = "fallback-icon";
                      fallbackIcon.innerHTML = `
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <path d="M21 15l-5-5L5 21"></path>
                        </svg>
                      `;
                      thumbnail.appendChild(fallbackIcon);
                    }
                  }}
                />
              )}
            </div>

            {item.caption && <p className="media-caption">{item.caption}</p>}
          </div>
        ))}

        {/* Placeholder items for when you don't have media yet */}
        {items.length === 0 && (
          <>
            <div className="media-item placeholder">
              <div className="media-thumbnail">
                <div className="placeholder-content">
                  <Image size={32} />
                  <span>App Screenshots</span>
                </div>
              </div>
              <p className="media-caption">Screenshots coming soon</p>
            </div>

            <div className="media-item placeholder">
              <div className="media-thumbnail">
                <div className="placeholder-content">
                  <Video size={32} />
                  <span>Demo Videos</span>
                </div>
              </div>
              <p className="media-caption">Demo videos coming soon</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;
