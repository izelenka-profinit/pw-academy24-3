import type { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page } from "@playwright/test";
import { stringify } from "querystring";

export class LoginPage {
    // definice proměnných
    protected _page: Page
    protected _test: TestType<PlaywrightTestArgs & PlaywrightWorkerArgs, PlaywrightTestOptions & PlaywrightWorkerOptions>

    constructor(
        page: Page,
        test: TestType<PlaywrightTestArgs & PlaywrightWorkerArgs, PlaywrightTestOptions & PlaywrightWorkerOptions>
    ) {
            this._page = page
            this._test = test
    }
    // metody

    public async openHomepage(
        url: string
    ) {
        await this._page.goto(url)
    }
    
}

function example(vstupniParametr: string) {
    vstupniParametr = "ahoj"
}