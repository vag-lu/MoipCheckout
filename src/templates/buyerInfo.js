exports.render = () => {
    return `<form>
        <div class="list">
            <label class="item item-input item-stacked-label">
                <span class="input-label">Name:</span>
                <input type="text" data-name/>
            </label>
            <label class="item item-input item-stacked-label">
                <span class="input-label">E-mail:</span>
                <input type="text" data-email/>
            </label>
            <label class="item item-input item-stacked-label">
                <span class="input-label">CPF:</span>
                <input type="text" data-inputmask="'mask': '999.999.999-99'" data-cpf/>
            </label>
            <label class="item item-input item-stacked-label">
                <span class="input-label">Amount:</span>
                <input type="text" data-amount/>
            </label>
            <label>
                <span class="input-label">Payment type:</span>
                <input type="radio" name="type" onClick="showCard(this)" checked radio-cc>Credit Card</input>
                <input type="radio" name="type" onClick="hideCard(this)" radio-boleto>Boleto</input>
            </label>
            <div id="cc">
                <label class="item item-input item-stacked-label">
                    <span class="input-label">Card number:</span>
                    <input type="text" data-inputmask="'mask': '9999 9999 9999 9999'" data-cc-number/>
                </label>
                <label class=item item-input item-stacked-label">
                    <span class="input-label">Holder name:</span>
                    <input type="text" data-holder-name/>
                </label>
                <label class="item item-input item-stacked-label">
                    <span class="input-label">CVV:</span>
                    <input type="text" data-inputmask="'mask': '999'" data-cvv/>
                </label>
                <label class="item item-input item-stacked-label">
                    <span class="input-label">Expiration date:</span>
                    <input type="text" data-inputmask="'mask': '99/9999'" data-exp-date/>
                </label>
            </div>
        </div>
    
        <div class="padding">
            <button class="button botton-positive button-block" data-submit>
                <i class="ion-cash"></i> Submit
            </button>
        </div>
    </form>`;
};