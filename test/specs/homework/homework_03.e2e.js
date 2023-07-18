import {username, password} from '../../fixtures.js'

describe('Homework', async () => {

    it('should fill registration page', async () => {

    await browser.reloadSession();

    await browser.url ("/registrace")

    const nameField = $('[name="email"]');
    cconsole.log('Name field s displayed: ' + await nameField.isDisplayed());
    console.log('Name field s enabled: ' + await nameField.isEnabled());
    await nameField.setValue(userFullName);

    const emailField = $('#email');
    console.log('Email field s displayed: ' + await emailField.isDisplayed());
    console.log('Email field s enabled: ' + await emailField.isEnabled());
    await emailField.setValue(username);

    const passwordField = $('[type="password"]');
    console.log('Password field s displayed: ' + await passwordField.isDisplayed());
    console.log('Password field s enabled: ' + await passwordField.isEnabled());
    await passwordField.setValue(password);

    const passwordConfirmField = $('#password-confirm');
    console.log('Password confirm field s displayed: ' + await passwordConfirmField.isDisplayed());
    console.log('Password confirm field s enabled: ' + await passwordConfirmField.isEnabled());
    await passwordConfirmField.setValue(password);

    const registrationField = $('.btn-primary');
    console.log('Registration field s displayed: ' + await registrationField.isDisplayed());
    console.log('Registration field s enabled: ' + await registrationField.isEnabled());
    await registrationField.click();

});

});