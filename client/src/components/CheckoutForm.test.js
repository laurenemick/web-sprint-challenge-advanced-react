import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async() => {
    render(<CheckoutForm />);

    // inputs: first name, last name, address, city, state, zip
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const adressInput = screen.getByTestId(/addressInput/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByTestId(/zipInput/i);

    // events with RTL 
    fireEvent.change(firstNameInput, { target: { value: 'Lauren' } });
    fireEvent.change(lastNameInput, { target: { value: 'Emick' } });
    fireEvent.change(adressInput, { target: { value: '42 Wallaby Way' } });
    fireEvent.change(cityInput, { target: { value: 'Seattle' } });
    fireEvent.change(stateInput, { target: { value: 'WA' } });
    fireEvent.change(zipInput, { target: { value: '98102' } });

    // click submit button
    const checkoutButton = screen.getByTestId(/button/i);
    fireEvent.click(checkoutButton);

    // assert that verification message and form details are displayed
    const successMessage = await screen.findByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();
});
