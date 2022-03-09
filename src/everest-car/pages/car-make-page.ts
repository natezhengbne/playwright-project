import { expect, Locator, Page } from '@playwright/test';

import { AbstractQuestionJourneyPage } from '../abstract-question-journey-page';

type CarMakePageFormData = {
    carMake: string
};

export class CarMakePage extends AbstractQuestionJourneyPage<CarMakePageFormData> {

    constructor(page: Page) {
        super(page);
    }

    async fill(data: Required<CarMakePageFormData>): Promise<void> {
        await this.page.locator('id=helpers.makeLabel').fill(data.carMake);
        await this.page.locator('id=react-autowhatever-1--item-0').click();
        
    }

    async verifyRendered(): Promise<void> {
    }

    async formValidated(): Promise<void> {
    }

    async back(): Promise<void> {
    }

    async next(): Promise<void> {
        await this.page.locator('id=car_make.nextButton').click({ force: true });
    }
}

const carMakePageFixture = async ({ page }, use) => {
    const carMakePage = new CarMakePage(page);
    await use(carMakePage);
};

export { carMakePageFixture };