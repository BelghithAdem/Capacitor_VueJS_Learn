// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './styles/tailwind.css' 
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);
const app = createApp(App);
app.use(router);
app.mount("#app");
