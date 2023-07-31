import ReactDOM from "react-dom/client";
import Nprogress from "nprogress";

import App from "./App";
import zhCN from "antd-mobile/es/locales/zh-CN";
import { ConfigProvider } from "antd-mobile";
import { handleDeviceMax } from "@/utils/utils";

import "normalize.css";
import "lib-flexible";
import "@/assets/css/reset.scss";

Nprogress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
  parent: "#root",
});

// 适配最大宽度
handleDeviceMax();
window.addEventListener("resize", handleDeviceMax);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
