import AutomationDemoPage from "../Pages/AutomationDemoPage";

describe('Validate form register of Automation Demo Site', () => {
  

    it('Validate page header', () => {
        AutomationDemoPage.visit();
        cy.title('eq', 'Register');
    })

    it('Validate menu items', () => {
        AutomationDemoPage.verifyNavBarItem();
        AutomationDemoPage.verifyHomeMenu();
        AutomationDemoPage.verifyRegisterMenu();
        AutomationDemoPage.verifyWebTableMenu();
        AutomationDemoPage.verifySwitchToMenu();
        AutomationDemoPage.verifyWidgetsMenu();
        AutomationDemoPage.verifyInteractionMenu();
        AutomationDemoPage.verifyVideoMenu();
        AutomationDemoPage.verifyWYSIWYGMenu();
        AutomationDemoPage.verifyMoreMenu();
        AutomationDemoPage.verifyPracticeSiteMenu();
    })

    it('Validate Full name input box', () => {
        AutomationDemoPage.verifyRegisterPageHeader();
        AutomationDemoPage.typeFirstNameTextBox();
        AutomationDemoPage.typeLastNameTextBox();
    })

    it("Validate address textarea", () => {
        AutomationDemoPage.typeAddressTextBox();
    })

    it('Validate email and phone input box', () => {
        AutomationDemoPage.typeEmailTextBox();
        AutomationDemoPage.typePhoneTextBox();
    })
    
    it("Validate gender radio button", () => {
        AutomationDemoPage.clickMaleRadioBtn();
    })

    it('Validate Hobbies checkboxes', () => {    
        //check boxes one by one
        AutomationDemoPage.verifyCheckbox1Check();
        AutomationDemoPage.verifyCheckbox2Check();
        AutomationDemoPage.verifyCheckbox3Check();
        //uncheck boxes one by one
        AutomationDemoPage.verifyCheckbox1Uncheck();
        AutomationDemoPage.verifyCheckbox2Uncheck();
        AutomationDemoPage.verifyCheckbox3Uncheck();
        //check all box in one line
        AutomationDemoPage.verifyCheckbox();
    })

    it('Validate Languages multiselect option', () => {
        AutomationDemoPage.clickLanguages();
        AutomationDemoPage.clickLanguageListItem();
        AutomationDemoPage.verifyLanguageListItem();
        AutomationDemoPage.clickConfirmPassword();
    })

    it('Validat skills dropdown', () => {
        AutomationDemoPage.verifySkills();
    })

    it('Validate countries selection from searchable drop down', () => {
        AutomationDemoPage.clickCountriesDropDown();
        AutomationDemoPage.typeCountrySearchTextbox();
    })

    it('Validate date of bith dropdowns', () => {
        AutomationDemoPage.verifyYearDropDown();
        AutomationDemoPage.verifyMonthDropDown();
        AutomationDemoPage.verifyDayDropDown();
    })

    it('Validate password fields', () => {
        AutomationDemoPage.typePassword();
        AutomationDemoPage.typeConfirmPassword();
    })

    it('Validate form submission', () => {
       AutomationDemoPage.clickSubmitBtn();
    })

    it('Validate Refresh Button',()=>{
        AutomationDemoPage.clickRefreshBtn();
        AutomationDemoPage.verifyRefreshBtn();
    })

})