exports.config = {
    runner: 'local',
    specs: ['./features/test.feature'],
    capabilities: [{ browserName: 'chrome' }],
    logLevel: 'trace',
    framework: 'cucumber',
    cucumberOpts: {
      require: ['./features/step-definitions/steps.js'],
      timeout: 60000
    },
    reporters: ['spec'],
    beforeHook: function () {
      console.log('HOOK: BeforeHook');
    }
  };