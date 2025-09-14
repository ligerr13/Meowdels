import React from 'react';
import { createRoot } from 'react-dom/client';
import Canvas from './components/canvas.jsx';
import './style/index.css';

const container = document.getElementById('root-container');
const root = createRoot(container);
root.render(<Canvas />);
