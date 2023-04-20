describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

    await browser.url ("/registrace")

    await browser.saveScreenshot('register_page.png');



    });

});
