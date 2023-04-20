import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './manifest.json'
// import 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
window.addEventListener('load', () => {
	registerSW();
	});

	// Register the Service Worker
	async function registerSW() {
	if ('serviceWorker' in navigator) {
		try {
		await navigator
				.serviceWorker
				.register('serviceworker.js');
		}
		catch (e) {
		console.log('SW registration failed');
		}
	}
	}