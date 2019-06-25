const request = require("supertest");

const app = require("../../src/server");
const truncate = require("../utils/truncate");
const Product = require("../../src/app/models");
const factory = require("../factories");

describe("Products", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to create new products when user is admin and all fields setted", async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .post("/products")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({
        name: "pizza"
      });

    expect(response.status).toBe(200);
  });
  it("should not be able to create new products when user is not admin", async () => {
    const user = await factory.create("User", {
      admin: false
    });

    const response = await request(app)
      .post("/products")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({
        name: "pizza"
      });

    expect(response.status).toBe(401);
  });
  it("should not be able to create new products without the name or the field name written wrong", async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .post("/products")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({
        neme: "pizza"
      });

    expect(response.status).toBe(401);
  });
});
