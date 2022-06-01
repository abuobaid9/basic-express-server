`use strict `
const server=require("../src/server")
const supertest= require('supertest')
const request= supertest(server.app)

describe("API server", () =>{
    test('getting data from home route / >>>  home route is working', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Wlcome to home page');
    });
test("handle page not found", async ()=>{
    const respons= await request.get('/anas')
    expect(respons.status).toEqual(404);
    
})

test("Handle server error", async ()=>{
    const respons = await request.get('/person?1')
    expect(respons.status).toEqual(500);
} )

})