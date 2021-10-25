const { default: $ } = require("webdriverio/build/commands/browser/$");

class LoginPage{

    get username()
    {
        return $("//input[@placeholder='Username']")
    }
    get password()
    {
        return $("//input[@placeholder='Password']")
    }
    get loginBtn()
    {
        return $("//button[normalize-space()='Sign in']S")
    }
    get form()
    {
        return $("//form[@class='mt-8 space-y-6']")
    }
    enterUserName(text)
    {
        //this.username.waitForDisplayed();
        this.username.setValue(text);
    }
    enterPassword(text)
    {
       // this.password.waitForDisplayed();
        this.password.setValue(text);
    }
    clickOnLoginBtn() 
    {
       // this.loginBtn.waitForDisplayed();
        this.loginBtn.click();
    }

}
module.exports= new LoginPage();