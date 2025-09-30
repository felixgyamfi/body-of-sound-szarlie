import React, { useState } from "react";

interface QuadrantButtonProps {
  key: number;
  sound: string | undefined;
  children?: React.ReactNode;
}

const QuadrantButton = ({ key, sound, children }: QuadrantButtonProps) => {
  const [play, setPlay] = useState(false);

  const playSound = (soundFile: string) => {
    if (!soundFile) return;
    const audio = new Audio(soundFile);
    void audio.play();
  };

  return (
    <button
      className="quadrant"
      key={key}
      onClick={() => {
        playSound(sound!);
        setPlay(!play);
      }}
    >
      {children}
    </button>
  );
};

export default QuadrantButton;
