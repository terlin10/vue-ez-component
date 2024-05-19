// vite.config.mjs
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/terlin10/Documents/vue-ez-component/.yarn/__virtual__/vite-virtual-ddc916935d/3/.yarn/berry/cache/vite-npm-5.2.11-fa468e8533-10c0.zip/node_modules/vite/dist/node/index.js";
import eslintPlugin from "file:///Users/terlin10/Documents/vue-ez-component/.yarn/__virtual__/vite-plugin-eslint-virtual-019241ba53/3/.yarn/berry/cache/vite-plugin-eslint-npm-1.8.1-844ad445f5-10c0.zip/node_modules/vite-plugin-eslint/dist/index.mjs";
import path from "path";
import vue from "file:///Users/terlin10/Documents/vue-ez-component/.yarn/__virtual__/@vitejs-plugin-vue-virtual-f4caa96f88/3/.yarn/berry/cache/@vitejs-plugin-vue-npm-5.0.4-e08dc8c74a-10c0.zip/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/terlin10/Documents/vue-ez-component";
var __vite_injected_original_import_meta_url = "file:///Users/terlin10/Documents/vue-ez-component/vite.config.mjs";
function removeDataTestid(node) {
  if (node.type === 1) {
    node.props = node.props.filter((prop) => prop.type === 6 ? prop.name !== "data-testid" : true);
  }
}
var clientDomain = "https://www.demo.com";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "compoennts/index.ts"),
      name: "VueEzComponents",
      fileName: "vue-ez-components"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [
    vue({
      template: {
        // transformAssetUrls,
        compilerOptions: {
          nodeTransforms: removeDataTestid
        }
      }
    }),
    eslintPlugin({
      include: ["src/**/*.js", "src/**/*.ts", "src/**/*.vue", "src/*.js", "src/*.ts", "src/*.vue"]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@tests": path.resolve(__vite_injected_original_dirname, "./tests"),
      $public: path.resolve("./public"),
      $assets: path.resolve("./src/assets")
    }
  },
  server: {
    port: 8888,
    proxy: {
      "/api": {
        target: clientDomain,
        changeOrigin: true,
        headers: {}
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3RlcmxpbjEwL0RvY3VtZW50cy92dWUtZXotY29tcG9uZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdGVybGluMTAvRG9jdW1lbnRzL3Z1ZS1lei1jb21wb25lbnQvdml0ZS5jb25maWcubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy90ZXJsaW4xMC9Eb2N1bWVudHMvdnVlLWV6LWNvbXBvbmVudC92aXRlLmNvbmZpZy5tanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCc7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5cbmZ1bmN0aW9uIHJlbW92ZURhdGFUZXN0aWQobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgPT09IDEgLyogTm9kZVR5cGVzLkVMRU1FTlQgKi8pIHtcbiAgICAgICAgbm9kZS5wcm9wcyA9IG5vZGUucHJvcHMuZmlsdGVyKChwcm9wKSA9PiAocHJvcC50eXBlID09PSA2ID8gcHJvcC5uYW1lICE9PSAnZGF0YS10ZXN0aWQnIDogdHJ1ZSkpO1xuICAgIH1cbn1cblxuY29uc3QgY2xpZW50RG9tYWluID0gJ2h0dHBzOi8vd3d3LmRlbW8uY29tJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgYnVpbGQ6IHtcbiAgICAgICAgbGliOiB7XG4gICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdjb21wb2VubnRzL2luZGV4LnRzJyksXG4gICAgICAgICAgICBuYW1lOiAnVnVlRXpDb21wb25lbnRzJyxcbiAgICAgICAgICAgIGZpbGVOYW1lOiAndnVlLWV6LWNvbXBvbmVudHMnXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxuICAgICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgdnVlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtQXNzZXRVcmxzLFxuICAgICAgICAgICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBub2RlVHJhbnNmb3JtczogcmVtb3ZlRGF0YVRlc3RpZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGVzbGludFBsdWdpbih7XG4gICAgICAgICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLmpzJywgJ3NyYy8qKi8qLnRzJywgJ3NyYy8qKi8qLnZ1ZScsICdzcmMvKi5qcycsICdzcmMvKi50cycsICdzcmMvKi52dWUnXVxuICAgICAgICB9KVxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgICAnQHRlc3RzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vdGVzdHMnKSxcbiAgICAgICAgICAgICRwdWJsaWM6IHBhdGgucmVzb2x2ZSgnLi9wdWJsaWMnKSxcbiAgICAgICAgICAgICRhc3NldHM6IHBhdGgucmVzb2x2ZSgnLi9zcmMvYXNzZXRzJylcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICAgIHBvcnQ6IDg4ODgsXG4gICAgICAgIHByb3h5OiB7XG4gICAgICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGNsaWVudERvbWFpbixcbiAgICAgICAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVCxTQUFTLGVBQWUsV0FBVztBQUVyVixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFVBQVU7QUFDakIsT0FBTyxTQUFTO0FBTGhCLElBQU0sbUNBQW1DO0FBQW9KLElBQU0sMkNBQTJDO0FBTzlPLFNBQVMsaUJBQWlCLE1BQU07QUFDNUIsTUFBSSxLQUFLLFNBQVMsR0FBMkI7QUFDekMsU0FBSyxRQUFRLEtBQUssTUFBTSxPQUFPLENBQUMsU0FBVSxLQUFLLFNBQVMsSUFBSSxLQUFLLFNBQVMsZ0JBQWdCLElBQUs7QUFBQSxFQUNuRztBQUNKO0FBRUEsSUFBTSxlQUFlO0FBR3JCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLE9BQU87QUFBQSxJQUNILEtBQUs7QUFBQSxNQUNELE9BQU8sUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxNQUMvQyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDZDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ1gsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDTCxLQUFLO0FBQUEsUUFDVDtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsSUFBSTtBQUFBLE1BQ0EsVUFBVTtBQUFBO0FBQUEsUUFFTixpQkFBaUI7QUFBQSxVQUNiLGdCQUFnQjtBQUFBLFFBQ3BCO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBLElBQ0QsYUFBYTtBQUFBLE1BQ1QsU0FBUyxDQUFDLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxZQUFZLFdBQVc7QUFBQSxJQUMvRixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUNwRCxVQUFVLEtBQUssUUFBUSxrQ0FBVyxTQUFTO0FBQUEsTUFDM0MsU0FBUyxLQUFLLFFBQVEsVUFBVTtBQUFBLE1BQ2hDLFNBQVMsS0FBSyxRQUFRLGNBQWM7QUFBQSxJQUN4QztBQUFBLEVBQ0o7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNILFFBQVE7QUFBQSxRQUNKLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQztBQUFBLE1BQ2Q7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
