import { test, expect } from '../../src/everest-car/everest-car-fixture';

test('basic test @everest-car @prod', async ({ page, startPage, carMakePage }) => {
  await startPage.goto();
  await startPage.fill({ rego: '140xxb' });
  await startPage.enterCarDetailsManually();

  await carMakePage.fill({ carMake: 'LAND ROVER' });
  await carMakePage.next();

  await page.waitForTimeout(5000);

});