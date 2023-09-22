import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const titles = [
  'archieada.ms',
  'archieada.ms',
  'archiead.ams',
  'archiea.dams',
  'archie.adams',
  'archie_adams',
  'archie adams',
  'Archie Adams',
  'Archie Adams',
  'Archie Adams',
  'archie_adams',
  'archie.adams',
  'archiea.dams',
  'archiead.ams',
  'archieada.ms',
  'archieada.ms',
];
let index = 0;

setInterval(()=>{
  document.title = titles[index % titles.length];
  index++;
}, 800)