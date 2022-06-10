///<reference types ="cypress"/>

//css selector
export const NAV_BAR = ".container .navbar-nav >li"
export const HOME_MENU = ".nav.navbar-nav>li>a[href='Index.html']"
export const REGISTER_MENU = ".nav.navbar-nav>li>a[href='Register.html']"
export const WEB_TABLE_MENU = ".nav.navbar-nav>li>a[href='WebTable.html']"
export const SWITCH_TO_MENU = ".nav.navbar-nav>li>a[href='SwitchTo.html']"
export const WIDGET_MENU = ".nav.navbar-nav>li>a[href='Widgets.html']"
export const INTERACTION_MENU = ".nav.navbar-nav>li>a[href='Interactions.html']"
export const VIDEO_MENU = ".nav.navbar-nav>li>a[href='SwitchTo.html']"
export const WYSIWYG_MENU = ".nav.navbar-nav>li>a[href='WYSIWYG.html']"
export const MORE_MENU = ".nav.navbar-nav>li>a[href='#']"
export const PRACTISE_SITE_MENU = ".nav.navbar-nav>li>a[href='http://practice.automationtesting.in/']"
export const REGISTER_PAGE_HEADER = '.container.center>h2'
export const FIRST_NAME_TEXT_BOX = "[placeholder='First Name']"
export const LAST_NAME_TEXT_BOX = "[placeholder='Last Name']"
export const ADDRESS_TEXT_BOX = "[ng-model='Adress']"
export const EMAIL_TEXT_BOX = '#eid>input[type=email]'
export const PHONE_TEXT_BOX = "[ng-model='Phone']"
export const MALE_RADIO_BTN = '[type=radio][value=Male]'
export const CHECKBOX1 = '#checkbox1'
export const CHECKBOX2 = '#checkbox2'
export const CHECKBOX3 = '#checkbox3'
export const CHECKBOX = '[type=checkbox]'
export const LANGUAGES = '#msdd'
export const LANGUAGE_LIST_ITEM = '.ng-scope'
export const PASSWORD = '#firstpassword'
export const SKILLS = '#Skills'
export const COUNTRIES_DROP_DOWN = '[role=combobox]'
export const COUNTRY_SEARCH_TEXTBOX = '.select2-search__field'
export const YEAR_DROP_DOWN = '#yearbox'
export const MONTH_DROP_DOWN = "[placeholder='Month']"
export const DAY_DROP_DOWN = '#daybox'
export const CONFIRM_PASSWORD = '#secondpassword'
export const SUBMIT_BTN = '#submitbtn'
export const REFRESH = '#Button1'

class AutomationDemoPage {

    visit() {
        cy.visit("http://demo.automationtesting.in/Register.html")
    }

    getNavBarItem(){
        return cy.get(NAV_BAR);
    }

    getHomeMenu() { 
        return cy.get(HOME_MENU, {timeout: 10000}) 
    }

    getRegisterMenu() {
        return cy.get(REGISTER_MENU);
    }

    getWebTableMenu() {
        return cy.get(WEB_TABLE_MENU);
    }

    getSwitchToMenu() {
        return cy.get(SWITCH_TO_MENU);
    }

    getWidgetMenu() {
        return cy.get(WIDGET_MENU);
    }

    getInteractionMenu() {
        return cy.get(INTERACTION_MENU);
    }

    getVideoMenu() {
        return cy.get(VIDEO_MENU);
    }

    getWYSIWYGMenu() {
        return cy.get(WYSIWYG_MENU);
    }

    getMoreMenu() {
        return cy.get(MORE_MENU);
    }

    getPractiseSiteMenu() {
        return cy.get(PRACTISE_SITE_MENU);
    }

    getRegisterPageHeader() {
        return cy.get(REGISTER_PAGE_HEADER);
    }

    getFirstNameTextbox() {
        return cy.get(FIRST_NAME_TEXT_BOX);
    }

    getLastNameTextbox() {
        return cy.get(LAST_NAME_TEXT_BOX);
    }

    getAddressTextbox() {
        return cy.get(ADDRESS_TEXT_BOX);
    }

    getEmailTextbox() {
        return cy.get(EMAIL_TEXT_BOX);
    }

    getPhoneTextbox() {
        return cy.get(PHONE_TEXT_BOX);
    }

    getMaleRadioBtn() {
        return cy.get(MALE_RADIO_BTN);
    }

    getCheckbox1() {
        return cy.get(CHECKBOX1);
    }

    getCheckbox2() {
        return cy.get(CHECKBOX2);
    }

    getCheckbox3() {
        return cy.get(CHECKBOX3);
    }

    getCheckbox() {
        return cy.get(CHECKBOX);
    }

    getLanguages() {
        return cy.get(LANGUAGES);
    }

    getLanguageListItem() {
        return cy.get(LANGUAGE_LIST_ITEM);
    }

    getPassword() {
        return cy.get(PASSWORD);
    }

    getSkills() {
        return cy.get(SKILLS);
    }

    getCountriesDropDown() {
        return cy.get(COUNTRIES_DROP_DOWN);
    }

    getCountrySearchTextbox() {
        return cy.get(COUNTRY_SEARCH_TEXTBOX);
    }

    getYearDropDown() {
        return cy.get(YEAR_DROP_DOWN);
    }

    getMonthDropDown() {
        return cy.get(MONTH_DROP_DOWN);
    }

    getDayDropDown() {
        return cy.get(DAY_DROP_DOWN);
    }

    getConfirmPassword() {
        return cy.get(CONFIRM_PASSWORD)
    }

    getSubmitBtn() {
        return cy.get(SUBMIT_BTN);
    }

    getRefreshBtn(){
        return cy.get(REFRESH);
    }    

    //Action Methods
    typeFirstNameTextBox(){
        this.getFirstNameTextbox().type('Michael');
    }

    typeLastNameTextBox(){
        this.getLastNameTextbox().type("clark")
    }

    typeAddressTextBox(){
        this.getAddressTextbox().type('P3, Magarpatta');
    }
   
    typeEmailTextBox(){
        this.getEmailTextbox().type('test@user.com');
    }

    typePhoneTextBox(){
        this.getPhoneTextbox().type('123456789');
    }

    clickMaleRadioBtn(){
        this.getMaleRadioBtn().click();
    }


    clickSubmitBtn(){
        this.getSubmitBtn().click();
    }

    clickLanguages(){
        this.getLanguages().click();
    }

    // clickLanguageListItem(){
    //     let lang =['English','Dutch','Urdu'];
    //     this.getLanguageListItem().each(ele => {
    //         if(lang.includes(ele.text())){
    //             cy.wrap(ele).click();
    //         }
    //     })
    // }

    clickLanguageListItem(){
        this.getLanguageListItem().contains("English").click();          
    }

    clickConfirmPassword(){
        this.getConfirmPassword().click();
    }

    clickCountriesDropDown(){
        this.getCountriesDropDown().click();
    }

    typeCountrySearchTextbox(){
        this.getCountrySearchTextbox().type("India").type("{enter}")
    }

    typePassword(){
        this.getPassword().type('Test!@#345');
    }

    typeConfirmPassword(){
        this.getConfirmPassword().type('Test!@#345');
    }

    clickRefreshBtn(){
        this.getRefreshBtn().click();
    }
    

    

    //Verification Method

    verifyNavBarItem(){
        this.getNavBarItem().each(($el, $index) => {

         let productName = $el.text();

         cy.log("ProductName: " + productName + " " + " Index: " + $index);

        });

    }
    verifyHomeMenu(){
        this.getHomeMenu().should("contain","Home");
    }

    verifyRegisterMenu(){
        this.getRegisterMenu().should("contain", "Register");
    }

    verifyWebTableMenu(){
        this.getWebTableMenu().should("contain", "WebTable");
    }
    
    verifySwitchToMenu(){
        this.getSwitchToMenu().should("contain","SwitchTo");
    }

    verifyWidgetsMenu(){
        this.getWidgetMenu().should("contain", "Widgets");
    }

    verifyInteractionMenu(){
        this.getInteractionMenu().should("contain", "Interactions");
    }

    verifyVideoMenu(){
        this.getVideoMenu().should("contain","Video");
    }

    verifyWYSIWYGMenu(){
        this.getWYSIWYGMenu().should("contain","WYSIWYG");
    }

    verifyMoreMenu(){
        this.getMoreMenu().should("contain","More");
    }

    verifyPracticeSiteMenu(){
        this.getPractiseSiteMenu().should("contain","Practice Site");
    }

    verifyRegisterPageHeader(){
        this.getRegisterPageHeader().should("contain","Register");
    }
    
    verifyCheckbox1Check(){
        this.getCheckbox1().check().should('be.checked').and('have.value', 'Cricket');
    }

    verifyCheckbox1Uncheck(){
        this.getCheckbox1().uncheck().should('not.be.checked');
    }

    verifyCheckbox2Check(){
        this.getCheckbox2().check().should('be.checked').and('have.value', 'Movies');
    }

    verifyCheckbox2Uncheck(){
        this.getCheckbox2().uncheck().should('not.be.checked');
    }

    verifyCheckbox3Check(){
        this.getCheckbox3().check().should('be.checked').and('have.value', 'Hockey');
    }
    
    verifyCheckbox3Uncheck(){
        this.getCheckbox3().uncheck().should('not.be.checked');
    }

    verifyCheckbox(){
        this.getCheckbox().check(['Cricket','Movies','Hockey']);
    }

    verifyLanguageListItem(){
        this.getLanguageListItem().should("have.length",42);
    }

    verifySkills(){
        this.getSkills().select("Javascript").should('have.value', 'Javascript');
    }

    verifyYearDropDown(){
        this.getYearDropDown().select('1998').should('have.value', '1998');
    }

    verifyMonthDropDown(){
        this.getMonthDropDown().select('August').should('have.value', 'August');
    }

    verifyDayDropDown(){
        this.getDayDropDown().select('26').should('have.value', '26');
    }

    verifyRefreshBtn(){
        this.getFirstNameTextbox().should("have.text","")
    }

}
export default new AutomationDemoPage()