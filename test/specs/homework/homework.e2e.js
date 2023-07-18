describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

    await browser.reloadSession();

    await browser.url ("/registrace")

    const windowSize = await browser.getWindowSize();
    console.log(windowSize);

    await browser.saveScreenshot('register_page.png');



    });

});
