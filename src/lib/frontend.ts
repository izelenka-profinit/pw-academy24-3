import { type TestType, type PlaywrightTestArgs, type PlaywrightTestOptions, type PlaywrightWorkerArgs, type PlaywrightWorkerOptions, type Page, expect } from "@playwright/test";

export class FeUtils {
    protected _page: Page
    protected _test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>

    constructor(
        page: Page,
        test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
    ) {
        this._page = page
        this._test = test
    }

    // Metody
    protected async _goTo(
        url: string
    ) {
        await this._test.step("Navigate to page", async () => {
            await this._page.goto(url, { waitUntil: 'load' })
        })
    }

    protected async _clickBySelectro(
        selector: string
    ) {
        await this._test.step("Click by selector", async () => {
            await this._page.locator(selector).nth(0).click()
        })
    }

    protected async _fillBySelector(
        selector: string,
        value: string | number
    ) {
        await this._test.step("Navigate to page", async () => {
            await this._page.locator(selector).nth(0).fill(value.toString())
        })
    }
}