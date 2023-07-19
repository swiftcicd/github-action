import child_process from 'child_process';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const exe = path.resolve(__dirname, 'main.sh');
try {
    child_process.execFileSync(exe, {stdio: 'inherit'});
} catch (e) {
    process.exit(e.status);
}
