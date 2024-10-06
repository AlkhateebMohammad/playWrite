import {test,expect} from "@playwright/test"
import { takeScreenshotOnFailure } from "../helpers/takeScreenshotOnFailure";

test("should be able to login",async({page})=>{
    try {
        await page.goto("/login")
        await page.locator('span.submit-login-text').click();
        await page.locator("#username").fill("admin")
        await page.locator("#password").fill("Emma@20192")
        await page.locator("#kc-login").click();
        await page.waitForTimeout(4000)

     const expected=page.locator("#input-error")
     await expect(expected).not.toBeVisible()
    }
    catch (error) {
        // في حال فشل الاختبار، التقط لقطة الشاشة
        await takeScreenshotOnFailure(page, 'testName');
        throw error; // إعادة طرح الخطأ للإشارة إلى فشل الاختبار
      }
  

})