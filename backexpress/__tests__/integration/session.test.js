const request = require("supertest");

const app = require("../../src/server");
const { User } = require("../../src/app/models");

describe("Authentication", () => {
  it("should be able to authenticate wihte valid credentials", async () => {
    const user = await User.create({
      name: "zaqueu",
      email: "zaqueulima1@gmail.com",
      password: "123456",
      admin: "ture"
    });

    const response = await request(app)
      .post("/signin")
      .send({
        email: "zaqueulima1@gmail.com",
        password: "123456"
      });

    expect(response.status).toBe(200);
  });
});
