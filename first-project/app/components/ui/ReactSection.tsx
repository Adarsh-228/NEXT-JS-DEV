"use client";

import { useState } from "react";

interface ReactSectionProps {
  title: string;
  content: string;
}

export const ReactSection = ({ title: initialTitle, content: initialContent }: ReactSectionProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  return (
    <section
      style={{
        backgroundColor: "#424242",
        padding: "2rem",
        borderRadius: "10px",
        marginBottom: "3rem",
        boxShadow: "0 10px 30px -15px rgba(0,0,0,0.7)",
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          fontSize: "2.5rem",
          color: "#F5F5F5",
          borderBottom: "2px solid #F5F5F5",
          paddingBottom: "0.5rem",
          marginBottom: "1.5rem",
          backgroundColor: "transparent",
          border: "none",
          width: "100%",
        }}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "#E0E0E0",
          backgroundColor: "transparent",
          border: "none",
          width: "100%",
          minHeight: "100px",
        }}
      />
    </section>
  );
};
