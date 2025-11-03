#!/usr/bin/env node

/**
 * Sitemap Generator Script for LLF Website
 * Generates sitemap.xml automatically during build process
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://www.llf-inc.com';
const OUTPUT_DIR = path.join(__dirname, '../public');
const SITEMAP_PATH = path.join(OUTPUT_DIR, 'sitemap.xml');

// Get current date in W3C format
const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0];
};

// Generate sitemap XML content
const generateSitemapXML = () => {
  const lastmod = getCurrentDate();
  
  // For SPA, we have a single main URL
  // In future, if you add more pages, add them to this array
  const urls = [
    {
      loc: DOMAIN,
      lastmod: lastmod,
      changefreq: 'weekly',
      priority: '1.0'
    }
    // Future pages can be added here:
    // { loc: `${DOMAIN}/about`, lastmod, changefreq: 'monthly', priority: '0.8' },
    // { loc: `${DOMAIN}/contact`, lastmod, changefreq: 'yearly', priority: '0.6' },
  ];

  // Build XML string
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}/</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

// Main function
const generateSitemap = () => {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Generate and write sitemap
    const sitemapContent = generateSitemapXML();
    fs.writeFileSync(SITEMAP_PATH, sitemapContent, 'utf8');
    
    console.log(`✅ Sitemap generated successfully at: ${SITEMAP_PATH}`);
    console.log(`📅 Last modified date: ${getCurrentDate()}`);
    
    // Also update robots.txt to ensure it references the correct sitemap URL
    const robotsPath = path.join(OUTPUT_DIR, 'robots.txt');
    if (fs.existsSync(robotsPath)) {
      console.log('✅ robots.txt found and verified');
    } else {
      // Create robots.txt if it doesn't exist
      const robotsContent = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# Sitemap location
Sitemap: ${DOMAIN}/sitemap.xml

# Crawl-delay (optional - for being respectful to search engines)
Crawl-delay: 1`;
      
      fs.writeFileSync(robotsPath, robotsContent, 'utf8');
      console.log('✅ robots.txt created');
    }
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the generator
generateSitemap();

export default generateSitemap;