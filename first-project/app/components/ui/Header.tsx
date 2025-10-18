"use client";

import { useState } from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title: initialTitle, subtitle: initialSubtitle }: HeaderProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [subtitle, setSubtitle] = useState(initialSubtitle);

  return (
    <header style={{ textAlign: "center", marginBottom: "4rem" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          fontSize: "4rem",
          color: "#F5F5F5",
          marginBottom: "1rem",
          backgroundColor: "transparent",
          border: "none",
          textAlign: "center",
          width: "100%",
        }}
      />
      <input
        type="text"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        style={{
          fontSize: "1.2rem",
          color: "#BDBDBD",
          backgroundColor: "transparent",
          border: "none",
          textAlign: "center",
          width: "100%",
        }}
      />
    </header>
  );
};
