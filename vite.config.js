import path from "path";

export default {
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: path.resolve(__dirname, "src/index.html"),
    },
  },
};
