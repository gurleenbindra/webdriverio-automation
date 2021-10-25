describe("getting started",()=>{
    it("should open a webpage",()=>{
       // browser.url("https://the-internet.herokuapp.com/");
       browser.url("/auth/login/");
       
       browser.pause(100000);
    });
    it("should enter username and password",()=>{
        const username=$("//input[@placeholder='Username']");
       const pass=$("//input[@placeholder='Password']");
       username.setValue('admin');
       browser.pause(5000);
       pass.setValue('adminadmin');
       browser.pause(10000);

    });
    it("should click on login",()=>{
        const login=$("//button[normalize-space()='Sign in']");
        login.click();
        browser.pause(9000);
    })
});