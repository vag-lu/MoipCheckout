import TinyEmitter from "tiny-emitter";
import Request from "browser-request";

class Checkout extends TinyEmitter{
    constructor(){
        super();
        this.request = Request;
        this.URL = "http://localhost:3000";
    }
}
module.exports = Checkout;