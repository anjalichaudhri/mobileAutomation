describe('GS Baby App', () => {
    it('Find element by accessibility id', async () => {
        await driver.pause(1000);
        await $('~LoginEmailPhone').sendKeys("anjalistu2023@yopmail.com");        
        driver.hideKeyboard();
        await $('~LoginPassword').sendKeys("1qaz!QAZ");
    })
})