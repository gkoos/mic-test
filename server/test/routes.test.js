const request = require("supertest");

const server = require("../index.js");

afterAll(() => {
    server.close();
});

describe("routes: /api/create", () => {
    test("should return error on empty post", async () => {
        const response = await request(server).post("/api/create");
        expect(response.status).toEqual(400);
    });

    test("should return error on missing post data", async () => {
        const response = await request(server)
            .post("/api/create")
            .send({email: 'john@doe.com'});

        expect(response.status).toEqual(400);
    });

    test("should return error on malformed field posted", async () => {
        const response = await request(server)
            .post("/api/create")
            .send({
                email: 'xxx@dsfsdf.co',
                business_name: 'My Business',
                telephone_number: 'wrong number',
                name: 'John Doe'
            });

        expect(response.status).toEqual(400);
    });

    test("should return status 201 on malformed field posted", async () => {
        const response = await request(server)
            .post("/api/create")
            .send({
                email: 'xxx@dsfsdf.co',
                business_name: 'My Business',
                telephone_number: '07469874949',
                name: 'John Doe'
            });

        expect(response.status).toEqual(201);
    });
});