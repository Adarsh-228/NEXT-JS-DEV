"use client";

import { useState } from "react";

interface FooterProps {
  text: string;
}

export const Footer = ({ text: initialText }: FooterProps) => {
  const [text, setText] = useState(initialText);

  return (
    <footer style={{ textAlign: "center", marginTop: "4rem", color: "#BDBDBD" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          textAlign: "center",
          width: "100%",
          color: "#BDBDBD",
        }}
      />
    </footer>
  );
};
