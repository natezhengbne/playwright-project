import { test as base } from '@playwright/test';

import { StartPage, startPageFixture } from './pages/start-page';
import { CarMakePage, carMakePageFixture } from './pages/car-make-page';

type EverestCarFixtures = {
    startPage: StartPage,
    carMakePage: CarMakePage
};

export const test = base.extend<EverestCarFixtures>({
    page: async ({ page }, use) => {
      page.on("pageerror", (err) => {
        console.log(err)
      })
      page.on("console", (message) => {
        console.log(message)
      })
      await use(page);
    },
    startPage: startPageFixture,
    carMakePage: carMakePageFixture
  });

export { expect } from '@playwright/test';

