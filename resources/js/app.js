import { createApp, VueElement } from "vue";
import App from "./vue/App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faPlusSquare, faTrash);

import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");



