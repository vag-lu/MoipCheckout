import BuyerInfo from "./componentes/buyerinfo_comp.js";

class App{
    constructor(body){
        this.buyerinfo = new BuyerInfo(body);
    }
    init(){
        this.buyerinfo.render();
        this.addEventListener();
    }    
    addEventListener(){
        this.buyerInfoEvents();
    }
    buyerInfoEvents(){
        this.buyerinfo.on("error", (error) => alert(error));
        this.buyerinfo.on("submit", (res) => {
            alert(`ID: ${res.id_transaction} \n ${res.return}`);
        });
    }
}
module.exports = App;