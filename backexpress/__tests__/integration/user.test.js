const request = require("supertest");

const app = require("../../src/server");
const truncate = require("../utils/truncate");
const factory = require("../factories");

describe("Users create", async () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to create a new user account with all informations", async () => {
    const response = await request(app)
      .post("/signup")
      .send({
        name: "zaqueu lima",
        email: "zaqueulima2@gmail.com",
        password: "123456",
        admin: true
      });

    expect(response.status).toBe(200);
  });
});
