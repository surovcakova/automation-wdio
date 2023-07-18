import {username, password} from '../../fixtures.js'

describe('Checking the registration form', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url("/registrace");
    });

it('should check state of field in console', async () => {

    const pageTitle = await $("h1");
    await expect (await pageTitle.getText()).toEqual('Registrace');
    console.log('Page title s displayed: ' + await pageTitle.isDisplayed());
    console.log('Page title s enabled: ' + await pageTitle.isEnabled());

    const nameField = $('[name="email"]');
    cconsole.log('Name field s displayed: ' + await nameField.isDisplayed());
    console.log('Name field s enabled: ' + await nameField.isEnabled());

    const emailField = $('#email');
    console.log('Email field s displayed: ' + await emailField.isDisplayed());
    console.log('Email field s enabled: ' + await emailField.isEnabled());

    const passwordField = $('[type="password"]');
    console.log('Password field s displayed: ' + await passwordField.isDisplayed());
    console.log('Password field s enabled: ' + await passwordField.isEnabled());

    const passwordConfirmField = $('#password-confirm');
    console.log('Password confirm field s displayed: ' + await passwordConfirmField.isDisplayed());
    console.log('Password confirm field s enabled: ' + await passwordConfirmField.isEnabled());

    const registrationField = $('.btn-primary');
    console.log('Registration field s displayed: ' + await registrationField.isDisplayed());
    console.log('Registration field s enabled: ' + await registrationField.isEnabled());

});

it('should register with with valid email', async () => {
    
    const emailField = $('#email');
    const passwordField = $('[type="password"]');
    const passwordConfirmField = $('#password-confirm');
    const registrationField = $('.btn-primary');

    await nameField.setValue('Nesmysl Nesmysl');
    await emailField.setValue('nesmysl@nesmysl.cz');
    await passwordField.setValue('Nesmysl123');
    await passwordConfirmField.setValue('Nesmysl123');
    await registrationField.click();

    const nameField = await $(".navbar-right").$('[data-toggle="dropdown"]');
    console.log ((nameField.getText()).toEqual('Nesmysl Nesmysl'));

});

it('should not register with an existing email', async () => {
    
    const emailField = $('#email');
    const passwordField = $('[type="password"]');
    const passwordConfirmField = $('#password-confirm');
    const registrationField = $('.btn-primary');

    await nameField.setValue('Nesmysl Nesmysl');
    await emailField.setValue('invalid');
    await passwordField.setValue('Nesmysl123');
    await passwordConfirmField.setValue('Nesmysl123');
    await registrationField.click();

    const invalidEmail = $('div').$('#email').$('.invalid-feeback');

    console.log('Error: ' + await invalidEmail.getText());

    console.log('Email field is dislayed: ' + await emailField.isDisplayed());

});

it('should not register  with a numeric password only', async () => {
    
    const emailField = $('#email');
    const passwordField = $('[type="password"]');
    const passwordConfirmField = $('#password-confirm');
    const registrationField = $('.btn-primary');

    await nameField.setValue('Nesmysl Nesmysl');
    await emailField.setValue('nesmysl@nesmysl.cz');
    await passwordField.setValue('123');
    await passwordConfirmField.setValue('123');
    await registrationField.click();

    const invalidPassword = $('div').$('#password').$('.invalid-feeback');
    const toastMessage = $(".toast-message");
    
    console.log('Error: ' + await invalidPassword.getText());
    console.log('Password field is dislayed: ' + await PasswordField.isDisplayed());
    console.log('Error: ' + await toastMessage.getText());

    console.log('Password field is dislayed: ' + await toastMessage.isDisplayed());


});

});