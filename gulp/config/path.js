import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';


export const path= {
    build: {
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        css:`${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
        svgicons: `${buildFolder}/fonts/`
        
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{hpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
        
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{hpg,jpeg,png,gif,ico,webp}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildfolder:buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: 'test'
}