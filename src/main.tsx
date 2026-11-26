import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { preloadRouteForPath } from './lib/routeRegistry';
import './index.css';

async function bootstrap() {
  await preloadRouteForPath(window.location.pathname);

  const rootElement = document.getElementById('root')!;
  const hasSsrContent = rootElement.innerHTML.trim().length > 0;

  if (hasSsrContent) {
    hydrateRoot(rootElement, <App />);
  } else {
    createRoot(rootElement).render(<App />);
  }
}

bootstrap();
