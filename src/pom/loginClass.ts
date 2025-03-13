import type { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, Page } from "@playwright/test";
import { TestConfig, TestSecrets } from "../types/globalTypes";
import { FeUtils } from "../lib/frontend";

export class LoginPage extends FeUtils {
    protected _testConfig: TestConfig
    protected _testSecrets: TestSecrets

    constructor(
        page: Page,
        test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
        testConfig: TestConfig,
        testSecrets: TestSecrets
    ) {
        super(page, test)
        this._testConfig = testConfig
        this._testSecrets = testSecrets
    }

    // Metody
    public async openHomepage() {
        await this._page.goto(this._testConfig.endpointUrl)
    }
}
 