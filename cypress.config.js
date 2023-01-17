import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com/",
    reporter: "cypress-testrail-reporter",
    reporterOptions: {
      host: "https://{domain}.testrail.io",
      username: "TestRail email address",
      password: "TestRail API key",
      projectId: 1,
      suiteId: 1
    }
  },
});
