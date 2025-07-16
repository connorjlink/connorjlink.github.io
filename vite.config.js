import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

function getHtmlInputs() {
    const tempDir = resolve(__dirname, 'temp');
    return fs.readdirSync(tempDir)
        .filter(file => file.endsWith('.html'))
        .reduce((inputs, file) => {
            inputs[file] = resolve(tempDir, file);
            return inputs;
        }, {});
}

function InjectorPlugin() {
    return {
        name: 'injector-plugin',
        handleHotUpdate({ file, server }) {
            if (
                file.endsWith('.html') ||
                file.startsWith(resolve(__dirname, 'partials'))
            ) {
                execSync('node injector.cjs');
                server.ws.send({ type: 'full-reload' });
            }
        }
    };
}


export default defineConfig({
    plugins: [InjectorPlugin()],
    // root: './docs/',
    server: {
        watch: {
            ignored: ['!**/temp/**']
        }
    },
    build: {
        outDir: './docs',
        rollupOptions: {
            input: getHtmlInputs()
        }
    }
});
