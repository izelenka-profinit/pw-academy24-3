import { type TestType, type PlaywrightTestArgs, type PlaywrightTestOptions, type PlaywrightWorkerArgs, type PlaywrightWorkerOptions, type APIRequestContext, expect } from "@playwright/test";

export class BeUtils {
    protected _request: APIRequestContext
    protected _test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>

    constructor(
        request: APIRequestContext,
        test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
    ) {
        this._request = request
        this._test = test
    }

    // Metody
    protected async _httpGet(

    ) {

    }

    protected async _httpPost(

    ) {

    }

    protected async _httpDelete(

    ) {
        
    }
}