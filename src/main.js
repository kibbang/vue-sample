import { createApp } from "vue"; // vue 라이브러리에서 createApp 이라는 함수를 가져옴
import App from "@/App.vue"; // App 컴포넌트를 가져옴  @는 숏컷 jsconfig.json 참조
import "@/assets/tailwind.css";

createApp(App).mount("#app");

/*
    구성요소를 가져와서 집어넣고 렌더 후 배치
 */
