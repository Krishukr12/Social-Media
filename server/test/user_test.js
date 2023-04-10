const supertest = require("supertest");

const request = supertest("http://localhost:8080");

describe("User", () => {
  it("should get a response from GET request", () => {
    return request.get("/").then((res) => {
      console.log(res.text);
    });
  });
});
