import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../.ssr/App.js';
import {salon,pages,groups} from '../src/data.js';

const original=await fs.readFile('dist/index.html','utf8');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
for(const page of pages){
  const title=page.file==='index.html'?'ONYEKA Hair & Beauty Salon | Croydon':`${page.label} | ONYEKA Hair & Beauty Salon, Croydon`;
  const description=page.file==='index.html'?'ONYEKA Hair & Beauty Salon is now open in Croydon. Explore hair, beauty, nails, barbering, wigs and products. Call or WhatsApp 07956 627542.':page.file==='about.html'?'Meet ONYEKA Hair & Beauty Salon, now open in Croydon. Explore salon services and hairdresser chair rental enquiries.':page.file==='contact.html'?'Contact ONYEKA Hair & Beauty Salon on 07956 627542. Find us at 59B Lower Adiscombe Road, Croydon, CR0 6PQ. Call, WhatsApp or email.':`Explore ${page.label.toLowerCase()} at ONYEKA Hair & Beauty Salon in Croydon. Contact us for service details, prices and availability on 07956 627542.`;
  const schema={'@context':'https://schema.org','@type':'BeautySalon',name:salon.name,telephone:salon.telephone,email:salon.email,address:{'@type':'PostalAddress',streetAddress:salon.street,addressLocality:salon.town,postalCode:salon.postcode,addressCountry:'GB'},hasOfferCatalog:{'@type':'OfferCatalog',name:'Salon services',itemListElement:groups.map(g=>({'@type':'OfferCatalog',name:g.label,itemListElement:g.items.map(s=>({'@type':'Offer',itemOffered:{'@type':'Service',name:s.name}}))}))}};
  let metadata=`<meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:type" content="website"><script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>`;
  if(salon.origin){const origin=salon.origin.replace(/\/$/,'');const pagePath=page.file==='index.html'?'/':'/'+page.file.replace(/\.html$/,'');metadata+=`<link rel="canonical" href="${escape(origin+pagePath)}"><meta property="og:url" content="${escape(origin+pagePath)}"><meta property="og:image" content="${escape(origin+'/assets/editorial-hero.webp')}"><meta property="og:site_name" content="ONYEKA Hair &amp; Beauty Salon"><meta property="og:locale" content="en_GB">`;}
  let html=original.replace(/<title>.*?<\/title>/,`<title>${escape(title)}</title>`).replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${escape(description)}">`).replace('</head>',metadata+'</head>').replace('<div id="root"></div>',`<div id="root">${renderToString(React.createElement(App,{page:page.file}))}</div>`);
  if(salon.approvedForPublication)html=html.replace('<meta name="robots" content="noindex,nofollow">','<meta name="robots" content="index,follow">');
  await fs.writeFile(path.join('dist',page.file),html);
}
if(salon.approvedForPublication){await fs.writeFile('dist/robots.txt','User-agent: *\nAllow: /\n'+(salon.origin?`Sitemap: ${salon.origin.replace(/\/$/,'')}/sitemap.xml\n`:''));}
if(salon.origin&&salon.approvedForPublication){await fs.writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(p=>`<url><loc>${escape(salon.origin.replace(/\/$/,'')+(p.file==='index.html'?'/':'/'+p.file.replace(/\.html$/,'')))}</loc></url>`).join('')}</urlset>`);}
console.log(`Prerendered ${pages.length} React pages. Publication approved: ${salon.approvedForPublication}.`);
