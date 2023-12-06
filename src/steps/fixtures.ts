// Import necessary modules and dependencies
import { test as base } from 'playwright-bdd';
import { StepDefinition } from './StepDefinition';

// Define a test suite using Playwright BDD
export const test = base.extend<{ stepDefinition: StepDefinition }>({
    // Define a step definition for the scenario
    stepDefinition: async ({ page }, use) => use(new StepDefinition(page)),
});
