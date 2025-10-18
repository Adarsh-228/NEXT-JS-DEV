"use client";

import { useState } from "react";

interface DnsSectionProps {
  title: string;
  content: string;
  items: { title: string; description: string }[];
}

export const DnsSection = ({ title: initialTitle, content: initialContent, items: initialItems }: DnsSectionProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [items, setItems] = useState(initialItems);

  const handleItemChange = (index: number, field: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  return (
    <section
      style={{
        backgroundColor: "#424242",
        padding: "2rem",
        borderRadius: "10px",
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
          minHeight: "50px",
        }}
      />
      <ul style={{ listStyleType: "none", paddingLeft: 0, marginTop: "1.5rem" }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "1rem",
              backgroundColor: "#2D2D2D",
              padding: "1rem",
              borderRadius: "5px",
            }}
          >
            <input
              type="text"
              value={item.title}
              onChange={(e) => handleItemChange(index, "title", e.target.value)}
              style={{
                color: "#F5F5F5",
                marginBottom: "0.5rem",
                backgroundColor: "transparent",
                border: "none",
                width: "100%",
                fontSize: "1.2rem",
              }}
            />
            <textarea
              value={item.description}
              onChange={(e) => handleItemChange(index, "description", e.target.value)}
              style={{
                color: "#E0E0E0",
                backgroundColor: "transparent",
                border: "none",
                width: "100%",
                minHeight: "50px",
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
