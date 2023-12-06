import { PlaywrightTestConfig } from '@playwright/test';
import 'dotenv/config';

interface TestConfig extends PlaywrightTestConfig {
    baseUrl: string;
}

export const config: TestConfig = {
    baseUrl: process.env.BASE_URL ?? 'https://www.saucedemo.com/',

};
