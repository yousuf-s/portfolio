import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './assets/styles.css';

createApp(App).use(router).mount('#app');

// Portfolio Structure Overview
// - Home Section: Light grey background with word cloud effect and animated text.
// - About, Skills, Experience, Projects, Education, Contact: Each section with different light background colors.
// - Fixed Menu Bar: Transparent at Home section, creamy white for other sections.
// - Smooth scrolling and section navigation.
// - Responsive design for different screen sizes.