import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com/",
    reporter: "cypress-testrail-reporter",
    reporterOptions: {
      host: "https://testtestrail23123.testrail.io",
      username: "jordanewills@gmail.com",
      password: "a5RwjApZV0/Bjz8gxZqD-VQ/twICzgDC.sq5z/LgV",
      projectId: 1,
      suiteId: 1
    }
  },
});
