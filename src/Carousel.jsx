import React from "react";
import { useSnapCarousel } from "react-snap-carousel";

export default function Carousel() {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <div className="container">
      <ul
        ref={scrollRef}
        style={{
          display: "flex",
          overflow: "auto",
          scrollSnapType: "x mandatory",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <li key={i} style={{ listStyle: "none" }}>
            <img
              src={`https://picsum.photos/500?${i}`}
              width="250"
              height="250"
              alt={`Item ${i}`}
            />
          </li>
        ))}
      </ul>

      <div>
        {activePageIndex + 1} / {pages.length}
      </div>
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        {pages.map((_, i) => (
          <button
            key={i}
            style={i !== activePageIndex ? { opacity: 0.5 } : {}}
            onClick={() => goTo(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
