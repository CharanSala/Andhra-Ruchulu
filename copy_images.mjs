import fs from 'fs';
import path from 'path';

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
}

const images = [
    { src: 'C:/Users/salac/.gemini/antigravity/brain/df7e4c73-1cd7-4e5d-ab17-eb74c411be8a/hero_biryani_1775802060081.png', dest: 'hero_biryani.png' },
    { src: 'C:/Users/salac/.gemini/antigravity/brain/df7e4c73-1cd7-4e5d-ab17-eb74c411be8a/dish_gongura_1775802088259.png', dest: 'dish_gongura.png' },
    { src: 'C:/Users/salac/.gemini/antigravity/brain/df7e4c73-1cd7-4e5d-ab17-eb74c411be8a/dish_royyalu_1775802104193.png', dest: 'dish_royyalu.png' },
    { src: 'C:/Users/salac/.gemini/antigravity/brain/df7e4c73-1cd7-4e5d-ab17-eb74c411be8a/dish_pootharekulu_1775802121085.png', dest: 'dish_pootharekulu.png' }
];

images.forEach(img => {
    try {
        fs.copyFileSync(img.src, path.join(publicImagesDir, img.dest));
        console.log(`Successfully copied ${img.dest} into public/images/`);
    } catch (e) {
        console.log(`Failed to copy ${img.src}:`, e);
    }
});
