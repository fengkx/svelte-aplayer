const sveltePreprocess = require('svelte-preprocess')

const customElement = process.env.CUSTOM_ELEMENT !== '0' && process.env.CUSTOM_ELEMENT !== 'false';
module.exports = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: sveltePreprocess(),
    compilerOptions: {customElement}
}
