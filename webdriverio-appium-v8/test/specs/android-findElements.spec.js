// // describe('Sample', () => {
// //     it('Sample Test', async () => {
// //         await driver.pause(5000);
// //     })
// // })
// describe('Android Elements Tests', () => {
//     it('Find element by accessibility id', async () => {
//         // find element by accessibility id
//         //find element by class name 
//         // find element by xpath

//         await driver.pause(10000);
//         const appOption = await $('~App');
        
//         //click on the element
//         await appOption.click();
//         // assertion - make sure specific element is there on the page
//         const actionBar = await $('~Action Bar');
        
//         await expect(actionBar).toBeExisting();
//     });

//     it('Find element by class name', async () => {
//         const className = await $('android.widget.TextView');
//         await expect(className).toHaveText("API Demos");
//     });
    
//     // it('Find element by xpath', async () => {
//         // find element by accessibility id
//         // find element by class name 
//         // find element by xpath
//         // find element by resource id
//         // const appOption = await $('~App');
//         // xpath - (//tagname[@attribute=value])
//         // await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click(); - need to uncomment

//         // UI Automator
//         // await $('android=new UiSelector().textContains("Alert")').click();

//         // xpath - resource id
//         // await $('//android.widget.Button[@resource-id=""]').click();

//         // find by text
//         // await $('//class-name[@text="txt"]');

//         // find by class - assertion
//         // const textAssertion = await $('//attr-name');
//         // await expect(textAssertion).toHaveText(" text");

//         // find multiple elements
//         // const textList = await $$('android.widget.TextView');

//     // });

//     it.only('Enter country name', async () => {
//         // const viewsOption = await $('//android.widget.TextView[@content-desc="Views"]');
        
//         // await expect(viewsOption).toBeExisting();
//         // viewsOption.click();
//         // await $('//*[@content-desc="Views"]').click(); // scrolling issue
//         await driver.pause(10000);

//         await $('~Views').click();
//         // const className = await $('android.widget.TextView');

//         // await expect(className).toHaveText("Auto Complete");
//         await $('//*[@content-desc="Auto Complete"]').click();

//         await $("//*[@text='1. Screen Top']").click();

//         const country = await $("//android.widget.EditText");
//         country.addValue('India');
                
//         await expect(country).toHaveText('India');
//         driver.pause(20000);
//     });
// })
