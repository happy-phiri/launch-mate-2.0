import { createContext, useContext, useState, useEffect } from "react";

const CanvasContext = createContext();

export function CanvasContextProvider({ children }) {
  const [canvasData, setCanvasData] = useState(() => {
    const stored = localStorage.getItem("leanCanvas");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem("leanCanvas", JSON.stringify(canvasData));
  }, [canvasData]);

  const updateBlock = (blockName, value) => {
    setCanvasData((prev) => ({ ...prev, [blockName]: value }));
  };

  localStorage.clear();

  return (
    <CanvasContext.Provider value={{ canvasData, updateBlock }}>
      {children}
    </CanvasContext.Provider>
  );
}

export function useCanvas() {
  return useContext(CanvasContext);
}
