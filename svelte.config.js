import adapter from '@sveltejs/adapter-static';

const isDev = process.env.NODE_ENV === 'development';

const base = isDev ? '' : '/AmandaJardimLeite.github.io'; 

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html',
        }),
        paths: {
            base,  
        },
        
    }
};
