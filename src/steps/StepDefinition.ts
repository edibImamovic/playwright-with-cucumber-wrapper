import {Page, expect} from '@playwright/test';
import {Fixture, Given, When, Then} from 'playwright-bdd/decorators';
import type {test} from './fixtures';
import {MainPage} from "../pages/MainPage";

export
@Fixture<typeof test>('stepDefinition')
class StepDefinition {
    private readonly mainPage: MainPage;

    constructor(public page: Page) {
        this.mainPage = new MainPage(page);
    }

    @Given('I navigate to the sauceDemo page')
    async openSauceDemoPage() {
        await this.mainPage.loginPage.open();
    }

    @Given('I should be on the {string} page')
    async validateLoginPage(logoText: string) {
        expect(await this.mainPage.loginPage.logoText()).toEqual(logoText)
    }

    @When('I login using {string} and {string}')
    async loginWithUsernameAndPassword(username: string, password: string) {
        await this.mainPage.loginPage.enterUsernameAndPassword(username, password)
    }



}
