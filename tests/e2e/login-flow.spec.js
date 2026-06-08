import { test, expect } from '@playwright/test'

test("admin logs in and reaches employee dashboard", async ({ page }) => {
  await page.goto("https://alexapop.github.io/ex-f5-admin-dashboard-app/src/pages/login-page.html")

  await page.fill("#email-login", "admindash@example.com")
  await page.fill("#password-login", "loginadmin12")
  await page.click(".login-btn")

  await expect(page).toHaveURL(/employee-directory\.html/, {
    timeout: 7000,
  })
})
