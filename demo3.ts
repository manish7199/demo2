import { test, expect } from "@playwright/test";

test("Login to OrangeHRM", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("//input[@placeholder='Username']").fill("Admin");
await page.waitForTimeout(3000);
    await page.locator("//input[@placeholder='Password']").fill("admin123");
await page.waitForTimeout(3000);
    await page.locator("//button[@type='submit']").click();
 await page.waitForTimeout(1000);  
    // // Assertion
    // await expect(page).toHaveURL(/dashboard/);

    // await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

});