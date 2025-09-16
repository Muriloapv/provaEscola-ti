import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importe BrowserRouter
import App from './App';

const rooElement = document.getElementById('root');

if (rooElement) {
  createRoot(rooElement).render(
    <StrictMode>
      <BrowserRouter>  {/* Adicione o BrowserRouter aqui */}
        <App />
      </BrowserRouter> {/* Feche a tag */}
    </StrictMode>
  );
} else {
  console.error('Falha ao encontrar o elemento raiz.');
}