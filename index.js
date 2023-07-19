import child_process from 'child_process';

//const exe = '${GITHUB_WORKSPACE}/dist/main.sh';

try {
    console.log(__filename);
    console.log(__dirname);
    console.log(`workspace: ${GITHUB_WORKSPACE}`);

//    console.log(`spawning ${exe}`);
//    child_process.execFileSync(exe, {stdio: 'inherit'});
//    console.log(`done`);
} catch (e) {
    console.log(`failure: ${e.message}`);
    process.exit(e.status);
}
