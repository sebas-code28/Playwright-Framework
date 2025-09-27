exports.LoginPage = class LoginPage {
    
    constructor(page) {
        this.page = page;
        this._username = page.locator('#username');
        this._password = page.locator("#password");
        this._loginButton = page.locator("//button[text()='Login']");
        this._loggedInMessage = page.locator('text="You logged into a secure area!"');
    }

    async navigate() {
        await this.page.goto('/login');
    }

    // Getters
    get usernameField() { return this._username; }
    get passwordField() { return this._password; }
    get loggedInMessage() { return this._loggedInMessage; }

    // Setters
    async setUsername(value) { await this._username.fill(value); }
    async setPassword(value) { await this._password.fill(value); }

    async clickLoginButton() {
        await this._loginButton.click();
    }

}