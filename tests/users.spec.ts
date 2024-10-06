import {test} from "@playwright/test"

test.describe("all test user",()=>{
    test.beforeEach("before test",async({page})=>{
        await page.goto("/login")
    })
    test("create user",async({page})=>{
       
    await page.click('span.submit-login-text:has-text("Log In to Emma")');
    await page.locator('#username').fill('admin')
    await page.locator("#password").fill("Emma@2019")
    await page.locator("#kc-login").click()
    await page.locator(".user-role").click();
    await page.click('div[role="button"]:has-text("Start")');
    await page.click('div[role="button"].list-btn.main-list');
    await page.click('i.fa.fa-cogs');
    await page.click('.card');
    await page.click('button:has-text("Add +")');
    await page.locator("#name").fill("mohammed mahmoud")
    await page.locator("#email").fill("text@m.com")
    await page.locator("#phone").fill("0873646555")
    
    
    
    await page.waitForTimeout(4000)
    
    
    
    })
    test("edite user",async({page})=>{
       await page.locator('a:has-text("Users")').click();

    })

})
