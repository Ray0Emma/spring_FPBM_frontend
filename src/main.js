import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import axios from "axios";

const app = createApp(App);

app.use(router, axios);

app.mount("#app");
