import {username, password} from '../../fixtures.js'

describe('Checking the registration form', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url("/registrace");
    });

it('should register with valid email', async () => {
    
    const emailField = $('#email');
    await expect(emailField).toBeDisplayed();
    await expect(emailField).toBeEnabled();

    const passwordField = $('[type="password"]');
    await expect(passwordField).toBeDisplayed();
    await expect(passwordField).toBeEnabled();

    const passwordConfirmField = $('#password-confirm');
    await expect(passwordConfirmField).toBeDisplayed();
    await expect(passwordConfirmField).toBeEnabled();

    const registrationField = $('.btn-primary');
    await expect(registrationField).toBeDisplayed();
    await expect(registrationField).toBeEnabled();

    await nameField.setValue('Nesmysl Nesmysl');
    await emailField.setValue('nesmysl@nesmysl.cz');
    await passwordField.setValue('Nesmysl123');
    await passwordConfirmField.setValue('Nesmysl123');
    await registrationField.click();

    const nameField = await $(".navbar-right").$('[data-toggle="dropdown"]');
    
    await expect(await nameField.getText()).toEqual('Nesmysl Nesmysl');

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

    await browser.pause(3000);

    const invalidEmail = $('div').$('#email').$('.invalid-feeback');
    const toastMessage = $(".toast-message");


    await expect (await invalidEmail.getText()).toEqual ('Účet s tímto emailem již existuje');
    await expect (await toastMessage.getText()).toEqual ('Některé pole obsahuje špatně zadanou hodnotu');
    
    await expect(await nameField).toBeDisplayed();
    await expect(await emailField).toBeDisplayed();
    await expect(await passwordField).toBeDisplayed();
    await expect(await passwordField).toBeDisplayed();
    await expect(await registrationField).toBeDisplayed();
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

    await browser.pause(3000);

    const invalidPassword = $('div').$('#password').$('.invalid-feeback');

    await expect (await invalidPassword.getText()).toEqual ('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
    await expect (await toastMessage.getText()).toEqual ('Některé pole obsahuje špatně zadanou hodnotu');

    await expect(await nameField).toBeDisplayed();
    await expect(await emailField).toBeDisplayed();
    await expect(await passwordField).toBeDisplayed();
    await expect(await passwordField).toBeDisplayed();
    await expect(await registrationField).toBeDisplayed();
});

});