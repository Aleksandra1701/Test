`use strict`;

require("chromedriver");
const webdriver = require("selenium-webdriver");
const {By, Until, Key} = require("selenium-webdriver");
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;


describe.only("QA shop test", async function() {
    let pageRegister;
    let pageHome;


before (function(){
driver = new webdriver.Builder().forBrowser("chrome").build();
let registerPage = new pageRegister(driver);

})


after(async function() {
    await driver.quit();
})

it("Verify the site is open", async function() {
    await pageHome.goToPage("http://test.qa.rs/");
    const pageTitle = await pageHome.getPageTitle();
        expect (pageTitle).to.contain("QA FastFood");
})

it ("Find register link", async function() {
    await pageHome.clickOnregisterLink().to.contain('Register');
})
 
it("Successefuly registration", async function() {
    await pageRegister.getInputFirstName().sendKeys('Ivana');
    await pageRegister.getInputLastName().sendKeys('Perovic');
    await pageRegister.getInputEmail().sendKeys('ivanaperovic35@gmail.com');
    await pageRegister.getInputPassword().sendKeys('Ivana123');
    await pageRegister.getInputPasswordAgain().sendKeys('Ivana123');
})

})