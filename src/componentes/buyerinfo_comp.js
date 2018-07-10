import Checkout from "../checkout.js";
import Template from "../templates/buyerInfo.js";

class BuyerInfo extends Checkout{
    constructor(body){
        super();
        this.body = body;
    }
    render(){
        this.body.innerHTML = Template.render();
        this.body.querySelector("[data-name]").focus();
        this.addEventListener();
    }
    addEventListener(){
        this.formSubmit();
    }
    formSubmit(){
        const form = this.body.querySelector("form");
        const client_id = "001";
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const buyer_name = e.target.querySelector("[data-name]");
            const buyer_email = e.target.querySelector("[data-email]");
            const buyer_cpf = e.target.querySelector("[data-cpf]");
            const amount = e.target.querySelector("[data-amount]");
            const radio_cc = e.target.querySelector("[radio-cc]");
            let opts;
            if(radio_cc.checked){
                const card_number = e.target.querySelector("[data-cc-number]");
                const card_holder = e.target.querySelector("[data-holder-name]"); 
                const cvv = e.target.querySelector("[data-cvv]");
                const exp_date = e.target.querySelector("[data-exp-date]");
                opts = {
                    method: "POST",
                    url: `${this.URL}/creditcard`,
                    json: true,
                    body: {
                        client_id: client_id,
                        amount: amount.value,
                        buyer_name: buyer_name.value,
                        buyer_cpf: buyer_cpf.value,
                        buyer_email: buyer_email.value,
                        card_number: card_number.value,
                        cvv: cvv.value,
                        card_holder: card_holder.value,
                        exp_date: exp_date.value
                    }
                };
            }else{
                opts = {
                    method: "POST",
                    url: `${this.URL}/boleto`,
                    json: true,
                    body: {
                        client_id: client_id,
                        amount: amount.value,
                        buyer_name: buyer_name.value,
                        buyer_cpf: buyer_cpf.value,
                        buyer_email: buyer_email.value
                    }
                };
            }
            this.request(opts,(err,res,data) => {
                if(err || res.status === 412){
                    this.emit("error", err);
                }else{
                    this.emit("submit",data);
                }
            });
        });
    }
}
module.exports = BuyerInfo;