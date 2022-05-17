const request = require("supertest");
const app = require("../app.js");

describe("GET /", () => {
  test("Return status: 200 and hello world message", (done) => {
    request(app)
      .get("/")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("status");
        expect(res.body).toHaveProperty("mesagge");
        expect(res.body.status).toBe(true);
        expect(res.body.message).toEqual("Hello World");
        done();
      });
  });
});

describe("GET /users", () => {
  test("Return status: 200 and hello world message", (done) => {
    request(app)
      .get("/users")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("status");
        expect(res.body).toHaveProperty("mesagge");
        expect(res.body.status).toBe(true);
        expect(res.body.message).toEqual("respond with a resource");
        done();
      });
  });
});
