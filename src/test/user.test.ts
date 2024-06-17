import supertest from "supertest";
import { web } from "../application/web";
import { logger } from "../application/logging";
import { UserTest } from "./test-util";

describe('POST /api/users', () => {

    afterEach(async () => {
        await UserTest.delete();
    });

    it('should reject register new user if request is invalid', async () => {
        const response = await supertest(web)
            .post("/api/users")
            .send({
                username: "",
                password: "",
                name: ""
            });

        logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    });

    it('should register new user', async()=>{
        const response = await supertest(web)
            .post("/api/users")
            .send({
                username:"test",
                email:"test",
                password:"test"
            });

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.username).toBe("test");
        expect(response.body.data.email).toBe("test");

    });
});

describe('POST /api/users/login', () =>{

    beforeEach(async () => {
        await UserTest.create();
    });

    afterEach(async () => {
        await UserTest.delete();
    });

    it('should be able to login,', async()=>{
        const response = await supertest(web)
        .post("/api/users/login")
        .send({
            username:"test",
            password:"test"
        });

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.username).toBe("test");
        expect(response.body.data.email).toBe("test@example.com");
        expect(response.body.data.token).toBeDefined();
         
    });

    it('reject login due wrong password ,', async()=>{
        const response = await supertest(web)
        .post("/api/users/login")
        .send({
            username:"test",
            password:"test1"
        });

        logger.debug(response.body);
        expect(response.status).toBe(401);
        expect(response.body.errors).toBeDefined();
         
    });

    it('reject login due wrong username ,', async()=>{
        const response = await supertest(web)
        .post("/api/users/login")
        .send({
            username:"test1",
            password:"test"
        });

        logger.debug(response.body);
        expect(response.status).toBe(401);
        expect(response.body.errors).toBeDefined();
         
    });
});

describe('GET /api/users/current', () =>{

    beforeEach(async () => {
        await UserTest.create();
    });

    afterEach(async () => {
        await UserTest.delete();
    });

    it('get user', async()=>{
        const response = await supertest(web)
        .get("/api/users/current")
        .set("X-API-TOKEN","test");

        logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.username).toBe("test");
        expect(response.body.data.email).toBe("test@example.com");
    });

    it('reject get user due wrong token', async()=>{
        const response = await supertest(web)
        .get("/api/users/current")
        .set("X-API-TOKEN","wrong");

        logger.debug(response.body);
        expect(response.status).toBe(401);
        expect(response.body.errors).toBeDefined();
    });

});