import { createApp } from "vue";
import App from "./vue/App.vue";
import router from "./router";

// start of font-awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faPlusSquare, faTrash);

import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
// end of font-awesome icons

import "./bootstrap";
import "../sass/app.scss";
import * as bootstrap from "bootstrap";

createApp(App)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");



