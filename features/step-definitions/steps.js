const { Before, Given, When, Then } = require('@wdio/cucumber-framework');

Before(() => {
  console.log('HOOK: Cucumber Before');
});

Given('I start', () => {
  console.log('Given Step');
});

When('I continue', () => {
  console.log('When Step');
});

Then('I finish', () => {
  console.log('Then Step');
});