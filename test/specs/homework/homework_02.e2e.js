describe('Homework', async () => {

    it('should find selector', async () => {

    await browser.reloadSession();

    await browser.url ("/registrace")

    const nameSelector = $('[name="email"]');
    console.log(await nameSelector.getHTML());

    const emailSelector = $('#email');
    console.log(await emailSelector.getHTML());

    const passwordSelector = $('[type="password"]');
    console.log(await passwordSelector.getHTML());

    const passwordConfirmSelector = $('#password-confirm');
    console.log(await passwordConfirmSelector.getHTML());

    const registrationSelector = $('.btn-primary');
    console.log(await registrationSelector.getHTML());

});

});