import { Page } from "@playwright/test";

export async function takeScreenshotOnFailure(page:Page, testName :String) {

    try{

    }catch (error)
    {
        const screenshotPath = `C:\\Users\\ViVoBook\\Desktop\\New folder (5)\\${testName}_failed.png`;
        await page.screenshot({ path: screenshotPath });
        throw error; // لا تنسى ترمي الخطأ ع
    }
    
}