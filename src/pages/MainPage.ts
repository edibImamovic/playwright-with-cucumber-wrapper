// Import the page class for LoginPage ( and all other in the future)
import {LoginPage} from './LoginPage';

// Import the 'Page' class from the "@playwright/test" module
import {Page} from '@playwright/test';

// Define a class for the main page that manages other page instances
export class MainPage {
    // Store a reference to the 'Page' instance
    public readonly page: Page;

    // Create instances of the LoginPage (and all other in the future)
    public loginPage: LoginPage;

    // Constructor to initialize the 'page' property and page instances
    constructor(page: Page) {
        this.page = page;

        // Initialize instances of the LoginPage (and all other in the future)
        this.loginPage = new LoginPage(page);

    }
}
