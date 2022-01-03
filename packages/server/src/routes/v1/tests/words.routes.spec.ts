import app from "../../../app";
import supertest from "supertest";

const request = supertest(app);

describe("Words route", () => {
  it("GET /words?lang=ru should show all russian words", () => {
    request.get('/words?lang=ru"').then((res) => {
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining("json"));
      expect(res.body).toBeDefined();
    });
  });

  it("GET /words?lang=en should show all english words", () => {
    request.get('/words?lang=en"').then((res) => {
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining("json"));
      expect(res.body).toBeDefined();
    });
  });

  it("GET /words should show status 400", () => {
    request.get("/words").then((res) => {
      expect(res.status).toEqual(400);
    });
  });
});
