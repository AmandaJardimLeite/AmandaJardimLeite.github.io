import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const base = dev ? '' : '/AmandaJardimLeite.github.io'; // Caminho base para o GitHub Pages

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html'
        }),
        paths: {
            base // Usando o caminho base configurado
        }
    }
};
