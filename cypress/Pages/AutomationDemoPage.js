///<reference types ="cypress"/>

//css selector
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
export const COUNTRIES = '#countries'
export const COUNTRIES_DROP_DOWN = '[role=combobox]'
export const COUNTRY_SEARCH_TEXTBOX = '.select2-search__field'
export const YEAR_DROP_DOWN = '#yearbox'
export const MONTH_DROP_DOWN = "[placeholder='Month']"
export const DAY_DROP_DOWN = '#daybox'
export const CONFIRM_PASSWORD = '#secondpassword'
export const SUBMIT_BTN = '#submitbtn'

class AutomationDemoPage {

    visit() {
        cy.visit("http://demo.automationtesting.in/Register.html")
    }

    get HomeMenu() { 
        return cy.get(HOME_MENU, {timeout: 10000}) 
    }

    get RegisterMenu() {
        return cy.get(REGISTER_MENU);
    }

    get WebTableMenu() {
        return cy.get(WEB_TABLE_MENU);
    }

    get SwitchToMenu() {
        return cy.get(SWITCH_TO_MENU);
    }

    get WidgetMenu() {
        return cy.get(WIDGET_MENU);
    }

    get InteractionMenu() {
        return cy.get(INTERACTION_MENU);
    }

    get VideoMenu() {
        return cy.get(VIDEO_MENU);
    }

    get WYSIWYGMenu() {
        return cy.get(WYSIWYG_MENU);
    }

    get MoreMenu() {
        return cy.get(MORE_MENU);
    }

    get PractiseSiteMenu() {
        return cy.get(PRACTISE_SITE_MENU);
    }

    get RegisterPageHeader() {
        return cy.get(REGISTER_PAGE_HEADER);
    }

    get FirstNameTextbox() {
        return cy.get(FIRST_NAME_TEXT_BOX);
    }

    get LastNameTextbox() {
        return cy.get(LAST_NAME_TEXT_BOX);
    }

    get AddressTextbox() {
        return cy.get(ADDRESS_TEXT_BOX);
    }

    get EmailTextbox() {
        return cy.get(EMAIL_TEXT_BOX);
    }

    get PhoneTextbox() {
        return cy.get(PHONE_TEXT_BOX);
    }

    get MaleRadioBtn() {
        return cy.get(MALE_RADIO_BTN);
    }

    get Checkbox1() {
        return cy.get(CHECKBOX1);
    }

    get Checkbox2() {
        return cy.get(CHECKBOX2);
    }

    get Checkbox3() {
        return cy.get(CHECKBOX3);
    }

    get Checkbox() {
        return cy.get(CHECKBOX);
    }

    get Languages() {
        return cy.get(LANGUAGES);
    }

    get LanguageListItem() {
        return cy.get(LANGUAGE_LIST_ITEM);
    }

    get Password() {
        return cy.get(PASSWORD);
    }

    get Skills() {
        return cy.get(SKILLS);
    }

    get Countries() {
        return cy.get(COUNTRIES);
    }

    get CountriesDropDown() {
        return cy.get(COUNTRIES_DROP_DOWN);
    }

    get CountrySearchTextbox() {
        return cy.get(COUNTRY_SEARCH_TEXTBOX);
    }

    get YearDropDown() {
        return cy.get(YEAR_DROP_DOWN);
    }

    get MonthDropDown() {
        return cy.get(MONTH_DROP_DOWN);
    }

    get DayDropDown() {
        return cy.get(DAY_DROP_DOWN);
    }

    get ConfirmPassword() {
        return cy.get(CONFIRM_PASSWORD)
    }

    get SubmitBtn() {
        return  cy.get(SUBMIT_BTN);
    }
}
export default new AutomationDemoPage()