# Disclaimer

**Meowdels** is a **3D Model Viewer** built with React, Three.js, and Django.  

This project is **for learning and experimentation purposes** and should **not** be used in production.  
It may contain **bugs** and **unfinished features**. Use it at your own risk.

---

## Stack

- **Frontend:** React, Three.js, @react-three/fiber, Tailwind CSS, Webpack  
- **Backend:** Django  
- **Other:** GLTF/GLB 3D Models, Radix UI  

---

## Features

- Load .glb 3D model files from your computer
- Orbit, zoom, and rotate 3D models
- Auto-rotation of placeholder objects
- Tailwind CSS styled UI and buttons
- Simple dialog-based file loader

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ligerr13/Meowdels.git
cd Meowdels
```

## Backend Setup (Django)

Requires Python 3.10+ installed.
```bash
python -m venv venv
source venv/bin/activate  # Linux / macOS
venv\Scripts\activate     # Windows
```
### Run the Django Server
```bash
python manage.py migrate
python manage.py runserver
```

### Frontend 

Requires Node.js 18+ installed.

Install dependencies and build the bundle:

```bash
npm install
npm run dev       # start development server
npm run build     # production build
```
Open http://localhost:8000

## Media

![](https://i.imgur.com/BukvCyo.gif)

<!-- ![](https://imgur.com/a/rjFq1bG) -->



