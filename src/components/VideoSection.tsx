import React, { useState, useRef, useEffect } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [audioEnabled, setAudioEnabled] = useState(false); // To track if audio is enabled
  const [isPlaying, setIsPlaying] = useState(false); // To track if video is playing
  const [hasClicked, setHasClicked] = useState(false); // To track if video has been clicked for the first time

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Auto play the video without audio initially
      videoRef.current.muted = true; // Start with muted audio
    }
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (hasClicked) {
        // If video was clicked before, toggle play/pause from current position
        if (isPlaying) {
          videoRef.current.pause(); // Pause the video
          setIsPlaying(false); // Update state to paused
        } else {
          videoRef.current.play(); // Play the video
          setIsPlaying(true); // Update state to playing
        }
      } else {
        // On first click, start video from the beginning with audio
        videoRef.current.currentTime = 0; // Set the video to start from the beginning
        videoRef.current.play(); // Play the video
        videoRef.current.muted = false; // Unmute the audio
        setAudioEnabled(true); // Enable audio
        setIsPlaying(true); // Update state to playing
        setHasClicked(true); // Mark that the video has been clicked
      }
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        muted={!audioEnabled} // Initially muted, unmute on first click
        onClick={handleVideoClick} // Click to toggle play/pause and unmute
      >
        <source src="/src/components/relavancelab.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Controls and Name */}
      {audioEnabled && (
        <div className="absolute bottom-5 right-5 flex items-center space-x-4">
          {/* Relavance Labs Name */}
          <div className="text-white text-xl font-semibold">Relavance Lab</div>
        </div>
      )}
      <div className="text-white text-xl font-semibold">Relavance Lab</div>
    </div>
  );
};

export default VideoSection;
