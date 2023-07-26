async function registrationPage() {
    await browser.reloadSession();
    await browser.url('/registrace');
}

function getNameField() {
    return $('#name');
}

function  getEmailField() {
    return $('#email');
}

function  getPasswordField() {
    return $('#password');
}

function  getPasswordConfirmField() {
    return $('#password-confirm');
}

function  getSubmitButton() {
    return $('.btn-primary');
}

function getNameFieldDropdown() {
    return $('.navbar-right').$('[data-toggle="dropdown"]');
}

function  getError() {
    return $('.invalid-feedback');
}

function getToastMessage() {
    return $('.toast-message');
}

describe("Registration page homework", async () => {

 beforeEach('should open login page', async () => {
    await browser.reloadSession();
    await browser.url('/registrace');

  })

  it('should open login page', async () => {

    await browser.saveScreenshot('registration.png');
    await expect(getNameField()).toBeDisplayed();
    await expect(getNameField()).toBeEnabled();
    await expect(getEmailField()).toBeDisplayed();
    await expect(getEmailField()).toBeEnabled();
    await expect(getPasswordField()).toBeDisplayed();
    await expect(getPasswordField()).toBeEnabled();
    await expect(getPasswordConfirmField()).toBeDisplayed();
    await expect(getPasswordConfirmField()).toBeEnabled();
    await expect(getSubmitButton()).toBeDisplayed();
    await expect(getSubmitButton()).toBeEnabled();
    await expect(getSubmitButton()).toHaveText('Zaregistrovat')

})

it ('should register with valid email', async () => {

    await getNameField().setValue('Nesmysl Nesmysl');
    await getEmailField().setValue('nesmysl@nesmysl.cz');
    await getPasswordField().setValue('Nesmysl123');
    await getPasswordConfirmField().setValue('Nesmysl123');
    await getSubmitButton().click();
    await expect(getNameFieldDropdown()).toHaveText('Nesmysl Nesmysl');

  })

it('should not register with an existing email', async () => {
 
    await getNameField().setValue('Nesmysl Nesmysl');
    await getEmailField().setValue('nesmysl@nesmysl.cz');
    await getPasswordField().setValue('Nesmysl123');
    await getPasswordConfirmField().setValue('Nesmysl123');
    await getSubmitButton().click();
    await expect(getError()).toBeDisplayed();
    await expect (getError()).toHaveText('Zadaná adresa neexistuje, zkontrolujte překlepy');
    await expect(getToastMessage()).toBeDisplayed();
    await expect (getToastMessage()).toHaveText('Některé pole obsahuje špatně zadanou hodnotu');
    await expect(getSubmitButton()).toBeDisplayed();
    
  })

it('should not register with a numeric password only', async () => {

    await getNameField().setValue('Nesmysl Nesmysl');
    await getEmailField().setValue('cayennep364@gmail.com');
    await getPasswordField().setValue('1234');
    await getPasswordConfirmField().setValue('1234');
    await getSubmitButton().click();
    await expect(getError()).toBeDisplayed();
    await expect(getError()).toHaveText('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');
    await expect(getToastMessage()).toBeDisplayed();
    await expect(getToastMessage()).toHaveText('Některé pole obsahuje špatně zadanou hodnotu');

  })

 });
