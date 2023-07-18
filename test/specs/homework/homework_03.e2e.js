import {username, password} from '../../fixtures.js'

describe('Homework', async () => {

    it('should fill registration page', async () => {

    await browser.reloadSession();

    await browser.url ("/registrace")

    const nameSelector = $('[name="email"]');
    console.log(await nameSelector.getHTML());
    await nameSelector.setValue(userFullName);

    const emailSelector = $('#email');
    console.log(await emailSelector.getHTML());
    await emailSelector.setValue(username);

    const passwordSelector = $('[type="password"]');
    console.log(await passwordSelector.getHTML());
    await passwordSelector.setValue(password);

    const passwordConfirmSelector = $('#password-confirm');
    console.log(await passwordConfirmSelector.getHTML());
    await passwordConfirmSelector.setValue(password);

    const registrationSelector = $('.btn-primary');
    console.log(await registrationSelector.getHTML());
    await registrationSelector.click();

});

});