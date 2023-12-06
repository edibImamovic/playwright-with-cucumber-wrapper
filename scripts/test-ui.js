// scripts/test.js

const { execSync } = require('child_process');

try {
  // Run the test command
  const testCommand = 'npx bddgen && npx playwright test --ui';
  const options = { stdio: 'inherit' };

  execSync(testCommand, options);
} catch (error) {
  // Log the error if the test command fails
  console.error('Test failed:', error);
}

// Generate the report
const options = { stdio: 'inherit' };

execSync(options);
