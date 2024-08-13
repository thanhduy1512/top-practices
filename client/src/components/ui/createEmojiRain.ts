import React from "react";

const createEmojiRain = (
  buttonRef: React.RefObject<HTMLButtonElement>,
  icon?: string
) => {
  if (!buttonRef.current) return;

  const buttonRect = buttonRef.current.getBoundingClientRect();
  const emojiContainer = document.createElement("div");
  emojiContainer.className = "emoji-rain";
  emojiContainer.style.position = "absolute";
  emojiContainer.style.left = `${buttonRect.left + window.scrollX}px`; // Account for scrolling
  emojiContainer.style.top = `${
    buttonRect.top + window.scrollY - buttonRect.height + 30
  }px`; // Start above the button
  emojiContainer.style.width = `${buttonRect.width}px`;
  emojiContainer.style.height = "0px"; // No height for container
  emojiContainer.style.pointerEvents = "none"; // Prevent blocking clicks

  for (let i = 0; i < 20; i++) {
    const emoji = document.createElement("span");
    emoji.className = "emoji";
    emoji.innerText = "👍";
    emoji.innerText = icon || "👍";
    emoji.style.position = "absolute";
    emoji.style.left = `${Math.random() * buttonRect.width}px`; // Random horizontal position within button width
    emoji.style.fontSize = "24px"; // Adjust the size as needed
    emoji.style.transform = `scale(${1 + Math.random()})`; // Random scale for different sizes

    // Randomize the animation duration and slight rotation
    emoji.style.animationDuration = `${2 + Math.random() * 1.5}s`;
    // emoji.style.animationDelay = `${Math.random() * 0.5}s`; // Random delay

    // Random horizontal offset for pop-out
    const randomOffset = Math.random() * 120 - 60; // Random offset between -10px and 10px
    const randomRotation = randomOffset * 1; // Random rotation between -20deg and 20deg

    emoji.style.setProperty("--random-offset", `${randomOffset}px`); // Custom property for random offset
    emoji.style.setProperty("--random-rotation", `${randomRotation}deg`); // Custom property for random rotation

    // Add the animation timing function

    emojiContainer.appendChild(emoji);
  }

  document.body.appendChild(emojiContainer);

  // Remove the emojis after the animation ends
  setTimeout(() => {
    document.body.removeChild(emojiContainer);
  }, 4000); // 4 seconds should be enough to let the animation complete
};

export default createEmojiRain;
