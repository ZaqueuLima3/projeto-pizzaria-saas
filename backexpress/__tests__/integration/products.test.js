const request = require("supertest");

const { Product, ProductsType } = require("../../src/app/models");
const app = require("../../src/server");
const truncate = require("../utils/truncate");
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
  it("should be able to create a new product type when user is admin and all fields setted", async () => {
    const user = await factory.create("User");
    const product = await Product.create({
      name: "Pizza"
    });

    const response = await request(app)
      .post("/products/newtype")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({
        type: "Calabreza",
        product: product.id
      });

    expect(response.status).toBe(200);
  });
  it("should not be able to create a new product type without the type or the field type written wrong", async () => {
    const user = await factory.create("User");

    const product = await Product.create({
      name: "Pizza"
    });

    const response = await request(app)
      .post("/products/newtype")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({
        types: "Calabreza",
        product: product.id
      });

    expect(response.status).toBe(401);
  });
  it("should be able to create a new product description when user is admin and all fields setted", async () => {
    const user = await factory.create("User");

    const product = await Product.create({
      name: "Pizza"
    });

    const productType = await ProductsType.create({
      name: "Calabreza",
      product_id: product.id
    });

    const response = await request(app)
      .post("/products/newsize")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send({
        size: "Grande",
        price: "50,00",
        productType: productType.id
      });

    expect(response.status).toBe(200);
  });
  it("should be able to access the list of the products when authenticated", async () => {
    const user = await factory.create("User", {
      admin: false
    });

    const response = await request(app)
      .get("/products")
      .set("Authorization", `Bearer ${user.generateToken()}`)
      .send();

    expect(response.status).toBe(200);
  });
});
