var username = process.env.BROWSERSTACK_USERNAME;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
var buildName = process.env.BROWSERSTACK_BUILD_NAME;

var capabilities = {
  "os": "Windows",
  "os_version": "10",
  "browser": "chrome",
  "browser_version": "latest",
  "name": "BStack -[Jenkins] Sample Test", // test name
  "build": buildName, // CI/CD job name using BROWSERSTACK_BUILD_NAME env variable
  "browserstack.user": username,
  "browserstack.key": accessKey
};