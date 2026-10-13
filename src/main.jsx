import React from 'react';
import {createRoot,hydrateRoot} from 'react-dom/client';
import App,{resolvePage} from './App';
import './styles.css';
const root=document.getElementById('root');const page=resolvePage(window.location.pathname);
const app=<App page={page}/>;
if(root.hasChildNodes())hydrateRoot(root,app);else createRoot(root).render(app);
