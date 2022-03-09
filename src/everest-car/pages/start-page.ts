import { expect, Locator, Page } from '@playwright/test';

import { AbstractQuestionJourneyPage } from '../abstract-question-journey-page';

type StartPageFormData = {
    rego: string
};

export class StartPage extends AbstractQuestionJourneyPage<StartPageFormData> {

    constructor(page: Page) {
        super(page);
    }

    async goto(): Promise<void>{
        await this.page.goto('/car-insurance/journey/start');
        await expect(this.page).toHaveTitle(/Welcome - Car Quote/);
    }

    async fill(data: Required<StartPageFormData>): Promise<void> {
        await this.page.locator('id=helpers.regoLabel').fill(data.rego);
    }

    async enterCarDetailsManually() {
        await this.page.locator('id=car_manual_lookup').click();
    }

    async verifyRendered(): Promise<void> {
    }

    async formValidated(): Promise<void> {
    }

    async back(): Promise<void> {
    }

    async next(): Promise<void> {
        await this.page.locator('id=start.nextButton').click({ force: true });
    }
}

const startPageFixture = async ({ page }, use) => {
    const startPage = new StartPage(page);
    await use(startPage);
};

export { startPageFixture }