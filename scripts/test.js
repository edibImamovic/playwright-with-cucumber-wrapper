const { execSync } = require('child_process');

// Function to check if running on GitHub Actions
const isGitHubActions = () => process.env.GITHUB_ACTIONS === 'true';

try {
  // Run the test command
  const testCommand = 'npx bddgen && npx playwright test';
  const options = { stdio: 'inherit' };

  execSync(testCommand, options);
} catch (error) {
  // Log the error if the test command fails
  console.error('Test failed:', error);
}

// Only generate and open the report if not running on GitHub Actions
if (!isGitHubActions()) {
  const reportCommand = `npx monocart show-report './test-results/report.html'`;
  const options = { stdio: 'inherit' };

  execSync(reportCommand, options);

  // Optional: Close the report after a set time (requires additional logic based on how the report is displayed)
  // setTimeout(() => { /* Logic to close report */ }, 10000); // Closes after 10 seconds
}
