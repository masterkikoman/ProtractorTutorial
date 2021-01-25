const { element, browser } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe('Synchronization samples', function() {
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);

    it('Synchronization', function() {
        
        browser.get('https://www.itgeared.com/demo/1506-ajax-loading.html');
        
        element(by.css("a[href*='loadAjax")).click().then(function(){
            browser.sleep(5000);
        });

        var loader= element(by.id("loader"));
        var EC= protractor.ExpectedConditions;
        
        
        browser.wait(EC.invisibilityOf(loader),8000);
        
        element(by.id("results")).getText().then(function(text){

            console.log(text);
        })
        
        
        
    })
    


});