import React from 'react';

const HeroVideo = () => {
  return (
    <section className="w-full bg-stone-50">
      <div className="relative w-full h-[100dvh] md:h-[70vh] overflow-hidden rounded-none md:rounded-2xl shadow-sm">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/856340/856340-uhd_2560_1440_24fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Calm nature video background"
        />
        {/* Subtle gradient for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/10" />
        <div className="pointer-events-none absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10 flex items-end">
          <h1 className="text-stone-100/90 text-3xl md:text-5xl font-light tracking-tight">
            Slow luxury for little worlds
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
