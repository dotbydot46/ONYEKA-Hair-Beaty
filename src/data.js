export const salon = {
  name: 'ONYEKA Hair & Beauty Salon', phone: '07956 627542', telephone: '+447956627542',
  whatsapp: 'https://wa.me/447956627542', email: 'realhairdress84@icloud.com',
  street: '59B Lower Adiscombe Road', town: 'Croydon', postcode: 'CR0 6PQ',
  booking: { enabled: false, url: null },
  origin: 'https://onyeka-hair-beauty.zaryabrawa.chatgpt.site', approvedForPublication: true,
};
export const whatsappUrl = (message = '') => salon.whatsapp + (message ? '?text=' + encodeURIComponent(message) : '');
export const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${salon.street}, ${salon.town} ${salon.postcode}`);
export const groups = [
  { id:'hair', image:'./assets/service-hair.webp', imageAlt:'Editorial portrait showing braided hair', file:'hair-services.html', label:'Hair Services', short:'Hair', icon:'hair', title:'Good hair days start with you.', intro:'A new style, a little colour, or something entirely different. Explore our hair services and tell us what you have in mind.', summary:'Micro bonding, weave-on, braids, cornrows & colouring.', tint:'sand', items:[
    {name:'Micro bonding', text:'Explore micro bonding for your next look. Speak to the salon about suitable options and the hair required.', prompt:'What look are you hoping for? Ask us about options, preparation and pricing.'},
    {name:'Weave-on', text:'Thinking about a weave-on? Share your preferred length and style so we can discuss the details.', prompt:'Let us know your preferred style and whether you plan to bring your own hair.'},
    {name:'Braids', text:'Bring your braid inspiration. Contact us to discuss the style, length and details you have in mind.', prompt:'A reference photo can help explain the braid style you would like.'},
    {name:'Cornrows', text:'From your chosen pattern to the finished look, start with a conversation about your cornrow ideas.', prompt:'Share a reference or describe the pattern you have in mind.'},
    {name:'Colouring', text:'A colour change starts with discussing your hair and the shade you are considering.', prompt:'Tell us about your current colour and any previous colouring before arranging your visit.'},
  ]},
  { id:'beauty', image:'./assets/service-beauty.webp', imageAlt:'Editorial close-up of a blush pink manicure with gold nail art', file:'beauty-nails.html', label:'Beauty & Nails', short:'Beauty & nails', icon:'beauty', title:'A little time for the details.', intro:'Explore waxing, nail art and hand and foot services. Get in touch to discuss the treatment or nail look you would like.', summary:'Waxing, nail art, manicures, pedicures & foot cleaning.', tint:'blush', items:[
    {name:'Waxing', text:'Enquire about waxing services and the treatment areas available.', prompt:'Tell us which treatment area you would like to discuss.'},
    {name:'Nail art', text:'A colour, a pattern, a little inspiration. Share the nail design you have in mind.', prompt:'Send a reference photo or describe your favourite colours and design.'},
    {name:'Manicure', text:'Take a moment for your hands. Ask about the manicure options available at the salon.', prompt:'Let us know the finish you are looking for.'},
    {name:'Pedicure', text:'Explore pedicure services and discuss your preferences with the salon.', prompt:'Ask about the treatment details and current availability.'},
    {name:'Foot cleaning', text:'Contact ONYEKA to find out more about foot cleaning services.', prompt:'Ask us what is included and how to prepare for your visit.'},
  ]},
  { id:'barbering', image:'./assets/service-barbering.webp', imageAlt:'Editorial profile showing a short fade haircut', file:'barbering.html', label:'Barbering', short:'Barbering', icon:'barber', title:'A fresh look. Your own style.', intro:'Barbers inside. Speak to ONYEKA about the look you want and current availability.', summary:'Speak to us about your next barbering visit.', tint:'sage', items:[
    {name:'Barbering', text:'Looking for your next fresh look? Contact the salon to discuss barbering services.', prompt:'Describe your preferred style or share an inspiration photo.'},
  ]},
  { id:'products', image:'./assets/service-products.webp', imageAlt:'Editorial display of a wavy wig, hair care bottle and brush', file:'wigs-products.html', label:'Wigs & Products', short:'Wigs & products', icon:'wig', title:'A new look, on your terms.', intro:'Explore hair, wigs and products at ONYEKA. Ask us what is currently available before visiting.', summary:'Hair, wigs & products. Enquire about current stock.', tint:'lilac', items:[
    {name:'Hair', text:'Ask about the hair options available in the salon.', prompt:'Tell us your preferred texture, length and intended style.'},
    {name:'Wigs', text:'Considering a wig? Get in touch to discuss your preferences and current availability.', prompt:'Share your preferred style, length and colour.'},
    {name:'Products', text:'Speak to us about products and current stock.', prompt:'If you are looking for a particular product, send us its name or a photo.'},
  ]},
];
export const pages = [{file:'index.html',label:'Home'},{file:'about.html',label:'About'},...groups.map(g=>({file:g.file,label:g.label})),{file:'contact.html',label:'Contact'}];
export const faq = [
  ['How do I enquire about a visit?', 'Call 07956 627542, send a WhatsApp message or email realhairdress84@icloud.com. Tell us which service you are interested in and ask about availability.'],
  ['Can I book online?', 'Online appointment booking is not available yet. Please contact the salon directly to discuss your visit.'],
  ['Where can I find prices?', 'Please ask the salon for a price for your chosen service. Describe your preferred style or treatment so we can discuss the details.'],
  ['What are your opening hours?', 'Contact us for current opening hours and availability before travelling to the salon.'],
  ['Can I bring a style inspiration photo?', 'Yes — you can share a reference image through WhatsApp to help explain the style you have in mind. Contact us to discuss what is possible.'],
  ['Is a hairdresser’s chair available to rent?', 'Chair rental enquiries are welcome. Contact us to discuss availability, terms and what is included.'],
];
