const loginPage = require('../pages/loginpage')

const userObj = {
    user: 'qwerty',
    password: 'qwerty',
}
var assert = require('assert');
const loginpage = require('../pages/loginpage');

describe("login to the admin panel",()=>{
    it("enter username",()=>{

        browser.url(`${browser.options.baseUrl}/auth/login`);
        loginPage.enterUserName(userObj.user);
        assert.equal(userObj.user,loginpage.username.getValue());
        browser.pause(5000);
    });
    it("enter password",()=>{

        browser.url(`${browser.options.baseUrl}/auth/login`);
        loginPage.enterPassword(userObj.user);
        assert.equal(userObj.password,loginpage.password.getValue());
        browser.pause(5000);
    });
    it("click on login button",()=>{

        browser.url(`${browser.options.baseUrl}/auth/login`);
        loginPage.clickOnLoginBtn();
        browser.pause(5000);
    });

})
