const location = window.location.toString().replace(/[^/]*$/gu, "");
const scriptLocation =
  document
    .querySelector('script[src$="app.js"]')
    ?.getAttribute("src")
    ?.replace("app.js", "") ?? "";

console.log(`${location}${scriptLocation}`);

export const baseURL = `${location}${scriptLocation}`;
