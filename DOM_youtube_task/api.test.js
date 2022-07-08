import { expect } from "chai"
import supertest from "supertest"
const request=supertest("https://www.googleapis.com/youtube/v3/")
const apikey="AIzaSyAW-zQvjJViksupPobdcgFkwAn3uVBW1gM"
describe('Testing the API',()=>{
    it("GET/api data",(done)=>{
        let searchval="tom";
        request.get("search?key="+apikey+"&type=video&part=snippet&maxResults=5&q="+searchval).end((err,res)=>{
            expect(res.body.items).to.not.be.empty;
            done();
            
        })
    })
    it("checking max results per page ",(done)=>{
        let searchval="tom";
        let maxres=11;
        request.get("search?key="+apikey+"&type=video&part=snippet&maxResults="+maxres+"&q="+searchval).end((err,res)=>{
            expect(res.body.items.length).to.be.deep.equal(maxres);
            done();
            
        })
    })
})