import React from "react";
import { Play, Video } from "lucide-react";
// import VideoModal from "./VideoModal";
import "./VideoGallery.css";

interface VideoItem {
  id: string;
  src: string;
  thumbnail?: string;
  alt: string;
  caption?: string;
  title?: string;
}

interface VideoGalleryProps {
  videos: VideoItem[];
  title?: string;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos,
  title = "Demo Videos",
}) => {
  // const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("VideoGallery received videos:", videos);

  const handleVideoClick = (video: VideoItem) => {
    console.log("Video clicked:", video);

    // Temporarily use the old behavior to debug
    window.open(video.src, "_blank");

    // Comment out modal for now
    // setSelectedVideo(video);
    // setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing video modal");
    // setIsModalOpen(false);
    // setSelectedVideo(null);
  };

  if (videos.length === 0) {
    console.log("No videos found, showing placeholder");
    return (
      <div className="video-gallery">
        <div className="video-gallery-header">
          <h4 className="video-gallery-title">{title}</h4>
          <p className="video-gallery-subtitle">Demo videos coming soon</p>
        </div>
        <div className="video-placeholder">
          <div className="video-placeholder-content">
            <Video size={48} />
            <span>Videos will be available here</span>
          </div>
        </div>
      </div>
    );
  }

  console.log("Rendering video gallery with", videos.length, "videos");

  return (
    <>
      <div className="video-gallery">
        <div className="video-gallery-header">
          <h4 className="video-gallery-title">{title}</h4>
          <p className="video-gallery-subtitle">
            Click any video to watch in full screen
          </p>
        </div>

        <div className="video-grid">
          {videos.map((video) => (
            <div
              key={video.id}
              className="video-item"
              onClick={() => handleVideoClick(video)}
              title="Click to play video"
            >
              <div className="video-thumbnail">
                <img
                  src={video.thumbnail || video.src}
                  alt={video.alt}
                  className="video-thumbnail-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const thumbnail = target.parentElement!;
                    thumbnail.style.background =
                      "linear-gradient(135deg, #667eea, #764ba2)";
                    thumbnail.style.display = "flex";
                    thumbnail.style.alignItems = "center";
                    thumbnail.style.justifyContent = "center";

                    if (!thumbnail.querySelector(".fallback-icon")) {
                      const fallbackIcon = document.createElement("div");
                      fallbackIcon.className = "fallback-icon";
                      fallbackIcon.innerHTML = `
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <polygon points="10,8 16,12 10,16"></polygon>
                        </svg>
                      `;
                      fallbackIcon.style.opacity = "0.8";
                      thumbnail.appendChild(fallbackIcon);
                    }
                  }}
                />

                <div className="video-play-overlay">
                  <div className="video-play-button">
                    <Play size={32} fill="white" strokeWidth={0} />
                  </div>
                </div>

                <div className="video-duration-badge">
                  <Video size={14} />
                  <span>Video</span>
                </div>
              </div>

              {video.caption && (
                <p className="video-caption">{video.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Temporarily disabled for debugging */}
      {/* {selectedVideo && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoSrc={selectedVideo.src}
          title={selectedVideo.title || selectedVideo.alt}
        />
      )} */}
    </>
  );
};

export default VideoGallery;
