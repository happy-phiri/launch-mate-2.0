# 🚀 LaunchMate – Lean Canvas Builder

LaunchMate is a web-based tool that helps entrepreneurs, startup founders, and product builders **understand and complete the Lean Canvas**—a one-page business model framework. This tool combines a **step-by-step educational guide** with an **interactive canvas builder** to make planning your startup faster and clearer.

## Visit the website https://launch-mate.netlify.app/

## ✨ Features

1. 🧭 **Step-by-Step Lean Canvas Guide**  
   Walk through each of the 9 Lean Canvas blocks with clear descriptions and real-world context to better understand their purpose.

2. 🧩 **Interactive Canvas Tool**  
   Fill in each section of your Lean Canvas, one block at a time. Your responses are saved automatically.

3. 💾 **Local Storage Persistence**  
   Your inputs are saved locally in your browser, so you won’t lose progress even if you refresh or leave the page.

4. 📄 **Download as PDF**  
   When you're done, export a professional, printable PDF version of your completed Lean Canvas.

---

## 🛠️ Tech Stack

- ⚡ [Vite](https://vitejs.dev/) – Fast build tool for React
- ⚛️ [React](https://reactjs.org/)
- 🧭 [React Router](https://reactrouter.com/) – For client-side routing
- 📦 [Context API](https://reactjs.org/docs/context.html) – For global state management
- 💨 [Tailwind CSS](https://tailwindcss.com/) – For utility-first styling
- 🧾 [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/) – To generate and download PDF exports

---

## 📂 Project Structure

src/
├── assets/ # Logos and illustrations
├── components/ # Reusable UI elements
├── context/ # Canvas state using Context API
├── pages/
│ ├── Guide/ # Educational pages for each Lean Canvas block
│ ├── GenerateCanvas/ # Interactive form pages
│ └── DownloadPDF.jsx # PDF summary layout
├── App.jsx # Main app layout and routing
└── main.jsx # Vite + React entry point

## 📌 To-Do / Future Enhancements

🔒 Optional user login to sync canvas to the cloud

🧠 AI-assisted suggestions for each block

🧰 More startup planning templates

## 📃 License

MIT License

Built with ❤️ to help makers and founders bring their ideas to life, one canvas at a time.
