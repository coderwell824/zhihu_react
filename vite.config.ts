import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import postCssPxToCss from "postcss-pxtorem";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },

  //本地服务开发
  server: {
    host: true,  //host设置为true才可以使用network的形式, 以IP访问项目
    port: 5173,
    strictPort: true,//如果端口已占用直接退出
    proxy: {
      "/api": {
        target: "http://localhost:7100",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, "")  //重写路径
      }
    }
  },

  //移动端适配
  css: {
    postcss: {
      plugins: [
        postCssPxToCss({
          rootValue: 75,  //1rem的大小
          propList: ["*"]  //需要转换的属性, 这里选择全部都进行转换
        })
      ]
    }
  }
})
