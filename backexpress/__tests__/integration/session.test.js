const request = require("supertest");

const app = require("../../src/server");
const truncate = require("../utils/truncate");
const factory = require("../factories");

describe("Authentication", async () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to authenticate with valid credentials", async () => {
    const user = await factory.create("User", {
      password: "123456"
    });

    const response = await request(app)
      .post("/signin")
      .send({
        email: user.email,
        password: "123456"
      });

    expect(response.status).toBe(200);
  });

  it("should not be able to authenticate with invalid password", async () => {
    const user = await factory.create("User", {
      password: "123456"
    });

    const response = await request(app)
      .post("/signin")
      .send({
        email: user.email,
        password: "123456456"
      });

    expect(response.status).toBe(401);
  });

  it("should not be able to authenticate with invalid email", async () => {
    const user = await factory.create("User", {
      password: "123456"
    });

    const response = await request(app)
      .post("/signin")
      .send({
        email: "invalidemail@email.com",
        password: "123456"
      });

    expect(response.status).toBe(401);
  });

  it("should return jwt token when authenticated", async () => {
    const user = await factory.create("User", {
      password: "123456"
    });

    const response = await request(app)
      .post("/signin")
      .send({
        email: user.email,
        password: "123456"
      });

    expect(response.body).toHaveProperty("token");
  });

  it("should be able to access privete routes when authenticated", async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
  });

  it("should not be able to access privete routes when not authenticated", async () => {
    const response = await request(app).get("/dashboard");

    expect(response.status).toBe(401);
  });

  it("should not be able to access privete routes when not authenticated", async () => {
    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", "Bearer 123456");

    expect(response.status).toBe(401);
  });
});
