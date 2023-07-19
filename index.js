import child_process from 'child_process';

const exe = 'file://dist/main.sh';

try {
    console.log(`start`);
    child_process.execFileSync(exe, {stdio: 'inherit'});
    console.log(`finish`);
} catch (e) {
    process.exit(e.status);
}
