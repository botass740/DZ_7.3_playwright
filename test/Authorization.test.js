const { chromium } = require("playwright");
const user = require("../test/user");
const { test, expect } = require("@playwright/test");

test("test success authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]', user.email);
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', user.password);
  await page.click('[data-testid="login-submit-btn"]');

  await expect(page.locator("Моё обучение")).toBeVisible;

  await page.screenshot({
    path: "./Screenshots/SuccessAuthorization.png",
    fullPage: true,
  });
});
