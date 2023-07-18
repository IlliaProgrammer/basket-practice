import React, {useContext, useState} from 'react';
import "./checkout.css"
import {FaCcPaypal, FaCcVisa} from "react-icons/fa"
import { ShopContext } from '../../contex/shop-context';

const Checkout = () => {
    const {getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount().toFixed(2);
    const [selectedPayment, setSelectedPayment] = useState(true);

    const handlePaymentChange = () => {
        setSelectedPayment(!selectedPayment);
    };
  
    return (
        <div class="container">
                <div class="card__container">
                    <div class="card">
                        <div class="row paypal">
                            <div class="left">
                                <input id="pp" type="radio" name="payment" />
                                <div className={selectedPayment === true ? 'radio' : 'selected'}></div>
                                <label for="pp" onClick={handlePaymentChange}>Paypal</label>
                            </div>
                            <div class="right">
                                <FaCcPaypal/>
                            </div>
                        </div>
                        <div class="row paypal">
                            <div class="left">
                                <input id="vs" type="radio" name="payment" />
                                <div className={selectedPayment === false ? 'radio' : 'selected'}></div>
                                <label for="pp"  onClick={handlePaymentChange}>Visa</label>
                            </div>
                            <div class="right">
                                <FaCcVisa/>
                            </div>
                        </div>
                        <div class="row cardholder">
                            <div class="info">
                                <label for="cardholdername">Name</label>
                                <input placeholder="e.g. Richard Bovell" id="cardholdername" type="text" />
                            </div>
                        </div>
                        <div class="row number">
                            <div class="info">
                                <label for="cardnumber">Card number</label>
                                <input id="cardnumber" type="text" pattern="[0-9]{16,19}" maxlength="19" placeholder="8888-8888-8888-8888"/>
                            </div>
                        </div>
                        <div class="row details">
                            <div class="left">
                                <label for="expiry-date">Expiry</label>
                                <select id="expiry-date">
                                    <option>MM</option>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                    <option value="7">07</option>
                                    <option value="8">08</option>
                                    <option value="9">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <span>/</span>
                                <select id="expiry-date">
                                    <option>YYYY</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                </select>
                            </div>
                            <div class="right">
                                <label for="cvv">CVC/CVV</label>
                                <input type="text" maxlength="4" placeholder="123"/>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button">
                    <button type="submit"><i class="ion-locked"></i> Confirm and Pay {totalAmount}$</button>
                </div>
            </div>
    );
};

export default Checkout;