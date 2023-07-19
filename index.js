import child_process from 'child_process';
const core = require('@actions/core');

const exe = `.${__dirname}/main.sh`
const workspace = process.env.GITHUB_WORKSPACE;
const packagePathInput = core.getInput('package-path');
const packagePath = `${workspace}/${packagePathInput}`
const command = `"PACKAGE_PATH=${packagePath}; ${exe}"`

try {
    console.log(`__dirname: ${__dirname}`);
    console.log(`__filename: ${__filename}`);
    console.log(`exe: ${exe}`);
    console.log(`packagePathInput: ${packagePathInput}`);
    console.log(`packagePath: ${packagePath}`);
    console.log(`command: ${command}`);
    child_process.execFileSync(command, {stdio: 'inherit'});
} catch (e) {
    console.log(`failure: ${e.message}`);
    process.exit(e.status);
}
