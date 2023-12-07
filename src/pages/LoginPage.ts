// Import the 'Page' class from the "@playwright/test" module
import {Page} from '@playwright/test';

// Import the 'config' object from the '../../config' file
import {config} from '../../config';

// Define a class for interacting with the page
export class LoginPage {
    // Store a reference to the 'Page' instance
    private readonly page: Page;

    // Constructor to initialize the 'page' property
    constructor(page: Page) {
        this.page = page;
    }

    // Locators for various elements on the page encapsulated
    protected get logoTextEle() {
        return this.page.locator('[class="login_logo"]');
    }

    protected get usernameInput() {
        return this.page.getByPlaceholder('Username');
    }

    protected get passwordInput() {
        return this.page.getByPlaceholder('Password');
    }

    protected get loginButtonEle() {
        return this.page.getByText('Login');
    }

    protected get productTextEle() {
        return this.page.locator('[class="title"]');
    }

    // Method to open the desired page
    async open() {
        await this.page.goto(`${config.baseUrl}`);
    }

    // Methods for test validation
    async logoText() {
        return this.logoTextEle.textContent();
    }

    // Method for enter username and password fields in the login form and login
    async enterUsernameAndPassword(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        return this.loginButtonEle.click();
    }

    async productText() {
        return this.productTextEle.textContent();
    }


}
