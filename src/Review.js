import React from "react";


// Todo move sendemail and savetotable

require('dotenv').config()
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


class Review extends React.Component {
    state = {
        ...this.props,
        fullName: this.props.firstName + " " + this.props.lastName
    }


    render() {


        return (


            <div className="block">
                <h1>Does everything look right?</h1>
                <form>
                    <table>
                        <tr>
                            <td
                                align="justify">Name
                            </td>
                            <td
                                align="justify">
                                <input type="text" id="fullname" value={this.state.fullName}/>

                            </td>
                        </tr>

                        <tr>
                            <td
                                align="justify"> Pies :
                            </td>
                            <td
                                align="justify">
                                <input type="text" id="Pies" value={this.state.pies}/>

                            </td>
                        </tr>


                        <tr>
                            <td
                                align="justify">Fries :
                            </td>
                            <td
                                align="justify">
                                <input type="text" id="Fries" value={this.state.fries}/>

                            </td>
                        </tr>

                        <tr>
                            <td
                                align="justify">Total : $
                            </td>
                            <td
                                align="justify">
                                <input type="text" id="Total"
                                       value={this.state.totalPricePies + this.state.totalPriceFries}/>

                            </td>
                        </tr>

                        <tr>
                            <td align="justify">

                                Mobile Number
                            </td>
                            <td align="justify">


                                <input type="text" id="phone number" value={this.state.phoneNumber} required/>

                            </td>

                        </tr>


                        <tr>
                            <td align="justify">
                                Email address

                            </td>
                            <td align="justify">

                                <input type="text" id="email" value={this.state.email}/>


                            </td>

                        </tr>

                        <tr>
                            <td align="justify">
                                Address

                            </td>
                            <td align="justify">

                                <input type="text" id="address" value={this.state.address}/>


                            </td>

                        </tr>

                        <tr>
                            <td align="justify">
                                City

                            </td>
                            <td align="justify">


                                <input type="text" id="Citi" value={this.state.city}/>

                            </td>

                        </tr>

                        <tr>
                            <td align="justify">
                                Zip

                            </td>
                            <td align="justify">


                                <input type="text" id="Zip" value={this.state.zip}/>

                            </td>

                        </tr>


                    </table>


                    <br/>


                    <button type='submit' onClick={this.onClick}>submit</button>
                    <button onClick={this.returnToOrderPage}>edit your order</button>

                    <button onClick={this.returnToCustomerInfo}>Edit your Address</button>
                    <button onClick={this.returnToPaymentInfo}> Edit Payment Info</button>
                </form>
            </div>


        );
    }


    onClick = (event) => {


        var abbreviatedState = {
            name: this.state.fullName,
            email: this.state.email,
            pies: this.state.pies,
            totalPies: this.state.totalPricePies,
            fries: this.state.fries,
            totalFries: this.state.totalPriceFries,
            total: +this.state.totalPriceFries + +this.state.totalPricePies,
            paymentInfo: this.state.paymentInfo,


            phone: this.state.phoneNumber,
            address: this.state.address,
            city: this.state.city,
            zip: this.state.zip,
            orderTime: new Date().toLocaleString()
        }


        fetch("https://pies-and-fries.netlify.app/.netlify/functions/airTable", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(abbreviatedState),
        })
          .then(response => response.text())
          .then(data => {
              console.log('Success:', data);
          })
            .catch((error) => {
                console.error('Error:', error);
            });


        fetch("https://pies-and-fries.netlify.app/.netlify/functions/sendEmail", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(abbreviatedState),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        // this.props.methodToPassToChild();
    }
    returnToOrderPage = () => {
        this.props.methodToPassToChild('ordered');
    }

    returnToCustomerInfo = () => {
        this.props.methodToPassToChild('infoSubmitted');

    }

    returnToPaymentInfo = () => {

        this.props.methodToPassToChild('paymentSubmitted');
    }


}

export default Review

