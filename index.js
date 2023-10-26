import child_process from 'child_process';
const core = require('@actions/core');

const exe = `${__dirname}/main.sh`
const workspace = process.env.GITHUB_WORKSPACE;
const packagePathInput = core.getInput('package-path');
const packagePath = `${workspace}/${packagePathInput}`;
const githubToken = core.getInput('github-token');

try {
    child_process.execFileSync(
        exe,
        {
            stdio: 'inherit',
            env: {
                ...process.env,
                PACKAGE_PATH: packagePath,
                GITHUB_TOKEN: githubToken,
		SWIFT_CICD_CI: true
            }
        }
    );
} catch (e) {
    process.exit(e.status);
}
