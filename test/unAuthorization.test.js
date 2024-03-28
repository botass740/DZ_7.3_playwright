const { chromium } = require("playwright");
const { test, expect } = require("@playwright/test");

test("authorization of failed testing", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]', "112@mail.ru");
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', "123456");
  await page.click('[data-testid="login-submit-btn"]');

  await page.click('[data-testid="login-error-hint"]');
  page.locator("data-testid=login-error-hint").isVisible;
  await expect(page.locator("[data-testid=login-error-hint]")).toContainText(
    "Вы ввели неправильно логин или пароль"
  );
  await page.screenshot({
    path: "./Screenshots/unSuccessAuthorization.png",
    fullPage: true,
  });
});
