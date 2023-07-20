import { expect, test } from '@playwright/test';

import '../../../setup';

test('Drag & Drop', async ({ page }) => {
  const canvas = page.locator('canvas').nth(1);
  console.log(await canvas.getAttribute('style'));
  await canvas.click({
    position: {
      x: 127,
      y: 50,
    },
  });
  await page.mouse.dblclick(127, 50);
  await canvas.hover({
    position: {
      x: 127,
      y: 40,
    },
  });
  await page.mouse.down();
  await page.mouse.move(0, 140, { steps: 40 });
  await page.mouse.move(240, 140, { steps: 40 });
  expect(await canvas.screenshot()).toMatchSnapshot({ name: 'drop:before' });
  await page.mouse.up();
  expect(await canvas.screenshot()).toMatchSnapshot({ name: 'drop' });
});
