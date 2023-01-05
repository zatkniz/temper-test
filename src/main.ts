import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import "./assets/styles.scss";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).mount("#app");
