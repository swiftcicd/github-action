import child_process from 'child_process';

const exe = 'dist/main.sh';

try {
    child_process.execFileSync(exe, {stdio: 'inherit'});
} catch (e) {
    process.exit(e.status);
}
