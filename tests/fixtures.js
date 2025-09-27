// fixtures.js - Reusable fixtures for Playwright tests
const base = require('@playwright/test');

// Export extended test object with custom fixtures
exports.test = base.test.extend({
  // Shared browser context with common setup
  sharedContext: async ({ browser }, use) => {
    // Create a new browser context
  const context = await browser.newContext({
    // Don't set any viewport or device scaling
    // Just let the browser use its default window size 
  });

    // Optional: Setup auth state, cookies, localStorage if needed
    // await context.addCookies([/* your auth cookies */]);
    
    await use(context);
    await context.close();
  },

  // Generic page fixture that can be used with any page object
  pageObject: async ({ sharedContext }, use, testInfo) => {
    // Create a new page from the shared context
    const page = await sharedContext.newPage();
    
    // This object will be populated by the test with the specific page object
    const pageWrapper = { 
      page,
      // Method to set the current page object
      setPageObject: (PageObjectClass) => {
        pageWrapper.currentPage = new PageObjectClass(page);
        return pageWrapper.currentPage;
      }
    };
    
    await use(pageWrapper);
  }
});

// Export expect for convenience
exports.expect = base.expect;