const sharp = require('sharp');
const fs = require('fs');

// Cores da paleta do site
const colors = {
  primary: '#6B4B3E',
  secondary: '#C4A484',
  accent: '#E8DCC8',
  white: '#FFFFFF',
  text: '#2C241F'
};

async function generatePlaceholders() {
  console.log('🎨 Gerando imagens placeholder...');
  
  // Hero image (1200x800)
  await sharp({
    create: {
      width: 1200,
      height: 800,
      channels: 3,
      background: colors.primary
    }
  })
  .jpeg({ quality: 80 })
  .toFile('public/images/beatriz-hero.jpg');
  console.log('✅ beatriz-hero.jpg');
  
  // Bio image (800x1000)
  await sharp({
    create: {
      width: 800,
      height: 1000,
      channels: 3,
      background: colors.secondary
    }
  })
  .jpeg({ quality: 80 })
  .toFile('public/images/beatriz-bio.jpg');
  console.log('✅ beatriz-bio.jpg');
  
  // Post images (600x400)
  for (let i = 1; i <= 6; i++) {
    await sharp({
      create: {
        width: 600,
        height: 400,
        channels: 3,
        background: i % 2 === 0 ? colors.primary : colors.secondary
      }
    })
    .jpeg({ quality: 80 })
    .toFile(`public/images/post${i}.jpg`);
    console.log(`✅ post${i}.jpg`);
  }
  
  // Testimonial images (200x200)
  for (let i = 1; i <= 3; i++) {
    await sharp({
      create: {
        width: 200,
        height: 200,
        channels: 3,
        background: colors.accent
      }
    })
    .jpeg({ quality: 80 })
    .toFile(`public/images/testimonial${i}.jpg`);
    console.log(`✅ testimonial${i}.jpg`);
  }
  
  // OG Image (1200x630)
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: colors.primary
    }
  })
  .jpeg({ quality: 80 })
  .toFile('public/images/og-image.jpg');
  console.log('✅ og-image.jpg');
  
  console.log('\n🎉 Todas as imagens placeholder foram geradas!');
}

generatePlaceholders().catch(console.error);
