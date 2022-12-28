`use strict`;

const {By, Key, until} = require ("selenium-webdriver");
module exports = class registerPage {
    #driver;
    constructor(webdriver) {
        this.#driver= webdriver;
    }

    goToPage() {
        this.#driver.get("http://test.qa.rs/");
    }

    getRegisterLink(){
        return this.#driver.findElement(By.linkText('Register'));
    }

    getInputFirstName() {
        return this.#driver.findElement(By.name('firstname'));
    }
    getInputLastName() {
        return this.#driver.findElement(By.name('lastname'));
    }

    getInputEmail() {
        return this.#driver.findElement(By.name('email'));
    }
    
    getInputUsername() {
        return this.#driver.findElement(By.name('username'));
    }

    getInputPassword() {
        return this.#driver.findElement(By.name('password'));
    }
    getInputPasswordAgain() {
        return this.#driver.findElement(By.name('passwordAgain'));
    }



}