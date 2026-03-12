# 🦧 ApenIcons Project Documentation

> **Status:** `Version 1.0.6` | **Build:** `Passing` | **UI:** `React 19`

A professional, monorepo-style icon library featuring a manual component architecture and a Vite-powered showcase.

---

## 🛠️ Quick Start (Bash)

### 1. Installation
To use the library in your own React project:
```bash
npm install apenicons

# Clone the repository
git clone [https://github.com/your-username/apen-icons.git](https://github.com/your-username/apen-icons.git)
cd apen-icons

# Install root dependencies (Library)
npm install

# Install website dependencies (Showcase)
cd website && npm install && cd ..

# Start the local development server (Vite)
npm run dev

# Build everything
npm run build

# Or build specifically
npm run build:lib      # Compiles icons to ./dist
npm run build:website  # Compiles gallery to ./website/dist