import child_process from 'child_process';

//const exe = '${GITHUB_WORKSPACE}/dist/main.sh';
const workspace = process.env.GITHUB_WORKSPACE;

try {
    console.log(__filename);
    console.log(__dirname);
    console.log(workspace);

//    console.log(`spawning ${exe}`);
//    child_process.execFileSync(exe, {stdio: 'inherit'});
//    console.log(`done`);
} catch (e) {
    console.log(`failure: ${e.message}`);
    process.exit(e.status);
}
