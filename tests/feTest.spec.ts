/*
Povoleni exekuce .sh scriptu
 
chmod u+x *.sh



import { test } from '@playwright/test'

test("Sample Frontend", async({ page }) =>{
    await page.goto("https://www.seznam.cz")
})

*/

import { test } from '@playwright/test'
import { LoginPage } from '../src/pom/feClass'
 
test("Sample Frontend", async({ page }) => {
    const loginPage = new LoginPage(page, test)
    
    await page.goto("https://www.seznam.cz")
})