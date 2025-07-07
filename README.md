# Portfolio Website - Mounir Banni

This is a professional portfolio website for Mounir Banni, a Riad Hospitality Specialist in Marrakech. The website is built with clean HTML, CSS, and JavaScript, and is fully responsive and ready for deployment on Netlify.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern Animations** - Smooth scrolling, fade-in effects, and interactive elements
- **Professional Layout** - Clean, modern design with excellent typography
- **Contact Form** - Functional contact form with validation
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Fast Loading** - Optimized code and assets for quick loading times
- **Cross-Browser Compatible** - Works on all modern browsers

## 📁 File Structure

```
portfolio_replica/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # JavaScript functionality
├── assets/
│   ├── images/
│   │   ├── profile.jpg     # Profile photo
│   │   └── zellige_pattern-cpjhdgzf.jpg
│   └── icons/              # Icon assets (if needed)
├── favicon.ico             # Website favicon
└── README.md              # This file
```

## 🎨 Customization Guide

### 1. Personal Information

**Location:** `index.html` - Hero Section
```html
<h1 class="hero-title">Mounir Banni</h1>
<h2 class="hero-subtitle">Riad Hospitality Specialist | Marrakech</h2>
```

**What to change:**
- Replace "Mounir Banni" with your name
- Update the subtitle with your profession and location
- Modify the hero description paragraph

### 2. Profile Photo

**Location:** `assets/images/profile.jpg`

**How to update:**
1. Replace `profile.jpg` with your professional photo
2. Ensure the image is square (recommended: 400x400px or larger)
3. Keep the filename as `profile.jpg` or update the HTML reference

### 3. Contact Information

**Locations to update:**

**Phone/WhatsApp:**
- Search for `+212 XXX-XXXXXX` in `index.html` and `js/script.js`
- Replace with your actual phone number

**Email:**
- Search for `mounir.banni@email.com` in both files
- Replace with your actual email address

**Social Media:**
- Update LinkedIn profile URL in `js/script.js`
- Modify social media links in the footer

### 4. Experience Section

**Location:** `index.html` - Timeline Section

**How to customize:**
1. Update job titles, company names, and dates
2. Modify job descriptions and responsibilities
3. Add or remove timeline items by copying the `timeline-item` structure

Example:
```html
<div class="timeline-item" data-aos="fade-right">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3 class="job-title">Your Job Title</h3>
            <span class="company">Your Company</span>
            <span class="duration">Start - End Date</span>
        </div>
        <p class="job-description">Your job description...</p>
        <!-- Add responsibilities list -->
    </div>
</div>
```

### 5. Skills Section

**Location:** `index.html` - Skills Section

**How to update skills:**
1. Modify skill names and percentages
2. Update the `data-width` attribute to match the percentage
3. Add or remove skills by copying the `skill-item` structure

Example:
```html
<div class="skill-item">
    <div class="skill-header">
        <span class="skill-name">Your Skill Name</span>
        <span class="skill-percentage">85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-width="85%"></div>
    </div>
</div>
```

### 6. Services Section

**Location:** `index.html` - Services Section

**How to customize:**
1. Update service titles and descriptions
2. Change icons by modifying Font Awesome classes
3. Add or remove service cards

Example:
```html
<div class="service-card" data-aos="fade-up" data-aos-delay="100">
    <div class="service-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3 class="service-title">Your Service Title</h3>
    <p class="service-description">Your service description...</p>
</div>
```

### 7. Achievements & Statistics

**Location:** `index.html` - Achievements Section

**How to update:**
1. Modify numbers and labels in achievement cards
2. Update impact statistics
3. Change testimonial content and ratings

### 8. Colors and Styling

**Location:** `css/style.css`

**Primary Colors:**
- Primary Blue: `#3498db`
- Dark Blue: `#2980b9`
- Dark Gray: `#2c3e50`
- Light Gray: `#f8f9fa`

**How to change colors:**
1. Search for color codes in the CSS file
2. Replace with your preferred colors
3. Update gradient backgrounds if needed

### 9. Content Sections

**About Section:**
- Update the personal description and quote
- Modify location information

**Certifications:**
- Add or remove certification items
- Update titles, issuers, and years

**Testimonials:**
- Replace with actual client testimonials
- Update names, countries, and ratings

## 🛠️ Technical Setup

### Prerequisites
- No special requirements - pure HTML, CSS, and JavaScript
- Works with any web server or hosting platform

### Local Development
1. Open `index.html` in your web browser
2. For live reloading during development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

### Deployment on Netlify

1. **Drag and Drop Method:**
   - Zip the entire project folder
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the zip file to deploy

2. **Git Integration:**
   - Push code to GitHub/GitLab
   - Connect repository to Netlify
   - Auto-deploy on code changes

3. **Manual Upload:**
   - Upload all files to Netlify dashboard
   - Set `index.html` as the main file

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Flexible grid layouts
- Touch-friendly navigation
- Optimized images for different screen sizes
- Hamburger menu for mobile devices

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Features

- Optimized CSS and JavaScript
- Lazy loading for images
- Smooth animations with CSS transitions
- Minimal external dependencies
- Fast loading times

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Clean URL structure

## 📞 Support

If you need help customizing the website:

1. **Text Content:** All text can be edited directly in `index.html`
2. **Styling:** Modify colors and layouts in `css/style.css`
3. **Functionality:** Update interactive features in `js/script.js`
4. **Images:** Replace files in the `assets/images/` folder

## 🚀 Quick Start Checklist

- [ ] Replace profile photo (`assets/images/profile.jpg`)
- [ ] Update personal information in hero section
- [ ] Modify contact details (phone, email, social media)
- [ ] Customize experience and job history
- [ ] Update skills and percentages
- [ ] Modify services offered
- [ ] Replace testimonials with real ones
- [ ] Update achievements and statistics
- [ ] Test on mobile devices
- [ ] Deploy to Netlify

## 📝 License

This website template is provided as-is for personal use. Feel free to modify and customize according to your needs.

---

**Built with ❤️ using HTML, CSS, and JavaScript**

*Ready for deployment on Netlify and other static hosting platforms*

