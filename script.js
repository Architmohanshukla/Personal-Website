/* Custom Javascript - Archit Mohan Shukla Portfolio */

// --- Navigation & Anchor Links ---
function navigateToHomePage() {
    window.location.href = "index.html";
}

// --- Book Summary Data ---
const bookData = {
    belief: {
        title: "The Biology of Belief",
        author: "Dr. Bruce H. Lipton",
        summary: "A ground-breaking book in epigenetics. Dr. Lipton, a cellular biologist, demonstrates how cells receive and process environmental signals, showing that our genes and DNA do not control our biology; instead, they are controlled by signals from outside the cell, including our thoughts and beliefs. This aligns perfectly with Archit's interest in the intersection of biology, environment, energy, and vibrations."
    },
    monk: {
        title: "Think Like a Monk",
        author: "Jay Shetty",
        summary: "Shetty draws on his time as a monk in India to show us how to clear our minds, conquer negativity, and find purpose in our daily lives. The book provides actionable steps on overcoming anxiety, developing a growth mindset, cultivating healthy habits, and discovering your unique talents to make a positive impact on the world."
    },
    mindset: {
        title: "The Mindset: The New Psychology of Success",
        author: "Carol S. Dweck, Ph.D.",
        summary: "Dr. Dweck explains the power of our mindset. She shows that individuals with a 'fixed mindset'—those who believe abilities are innate—are less likely to flourish than those with a 'growth mindset'—who believe abilities can be developed through dedication and hard work. It provides deep insights into resilience, learning, and self-actualization."
    },
    subconscious: {
        title: "The Power of Your Subconscious Mind",
        author: "Dr. Joseph Murphy",
        summary: "A classic guide to self-reprogramming. Dr. Murphy explains how spiritual wisdom and scientific research reveal that the subconscious mind controls all the vital functions of our bodies and is receptive to the thoughts we feed it. By harnessing visual therapy, positive belief, and mental alignment, one can unlock new potentials in healing, focus, and creativity."
    },
    limits: {
        title: "Life Without Limits",
        author: "Nick Vujicic",
        summary: "Nick Vujicic, born without arms or legs, shares his inspiring journey of overcoming physical disabilities to live a rich, purposeful, and limit-free life. The book offers encouragement to find your life's purpose, hold onto hope even when facing major setbacks, and build the resilience required to manifest positive changes."
    }
};

// --- Research Details Data ---
const researchDetails = {
    mpragati: {
        title: "mPRAGATI MedTech Gateway",
        badge: "Research Intern / MedTech",
        institution: "mPRAGATI, IIT Delhi (June 2025 - June 2026)",
        tags: ["Medical Devices", "Product Translation", "ISO 13485", "Additive Manufacturing"],
        image: "images/Research_me.JPG",
        link: "https://mpragati.in",
        description: `
            <p>During my pivotal tenure as a <strong>Research Intern at mPRAGATI, IIT Delhi (June 2025 - June 2026)</strong>, I was deeply involved in the translational gateway of clinical engineering. I worked closely on the frontlines of product development, helping bridge the gap between benchside medical prototypes and commercial medical devices.</p>
            <p>My primary responsibilities included testing prototypes, reviewing regulatory compliance standards under <strong>ISO 13485</strong> (Medical Devices Quality Management Systems) and <strong>ISO 17025</strong> (Testing and Calibration Laboratories), and assisting in establishing robust quality pipelines for innovative MedTech diagnostics.</p>
            <p>Through this experience, I gained practical knowledge of rapid prototyping methodologies, biomedical product lifecycle management, clinical validation design, and the complex pathways required for regulatory approvals in India and globally.</p>
        `
    },
    iitrpr: {
        title: "M.Tech Biomedical Research",
        badge: "M.Tech / Biomedical Engineering",
        institution: "Indian Institute of Technology Ropar (July 2024 - May 2026)",
        tags: ["Bio-Signals", "Sensor Development", "Cellular Biophysics", "MATLAB Analysis"],
        image: "images/Research.jpeg",
        link: "https://www.iitrpr.ac.in/",
        description: `
            <p>My academic dissertation during my M.Tech in Biomedical Engineering at <strong>IIT Ropar (July 2024 - May 2026)</strong> focused on exploring physiological signal acquisition and the development of responsive biological sensors. I worked on characterizing electrical signals at the interface of cellular membranes to build better diagnostic instruments.</p>
            <p>By using computational modeling and wet-lab experiments, I studied how cellular environments respond to high-frequency and low-frequency vibrations, aiming to improve the sensitivity and selectivity of early-stage diagnostic platforms.</p>
            <p>This research deepened my expertise in using MATLAB for data visualization and bio-signal processing, designing analog front-ends for medical sensors, and understanding advanced transport phenomena in microfluidic environments.</p>
        `
    },
    biomatrix: {
        title: "Bio-Matrix Development",
        badge: "B.Tech Project / Biomaterials",
        institution: "MIET, Meerut (AKTU Lucknow, UP)",
        tags: ["Cell Culture", "Cryopreservation", "Biomaterials", "Tissue Engineering"],
        image: "images/Final Year.jpg",
        link: "",
        description: `
            <p>In this final-year B.Tech research project at <strong>MIET, Meerut (July 2019 - June 2023)</strong>, I focused on addressing high logistics overheads in secondary animal cell culture. I developed novel biomaterials and biomatrix derivatives designed to stabilize cell lines during routine transport and long-term storage.</p>
            <p>By optimizing cryogenic conditions and exploring alternative cryoprotectant formulations, we achieved cell recovery rates that compete with traditional liquid nitrogen pathways, but at a fraction of the structural transport cost.</p>
            <p>This project gave me extensive, hands-on wet-lab experience in mammalian cell culture protocols, cell line subculturing, cytotoxicity assays, and mechanical characterization of soft polymeric biomaterials.</p>
        `
    },
    sristi: {
        title: "BIIS-SRISTI Mentorship",
        badge: "BIRAC Internship",
        institution: "BIRAC (Biotechnology Industry Research Assistance Council)",
        tags: ["Grassroots Innovation", "Frugal MedTech", "Public Health", "Mentorship"],
        image: "images/BIRAC.png",
        link: "https://drive.google.com/file/d/1NPAEGC7VsV4ImftBdmtAzFuU6prFwZ52/view?usp=drive_link",
        description: `
            <p>During this internship supported by the <strong>BIIS-SRISTI Mentorship program (BIRAC)</strong>, I engaged in designing frugal biomedical technologies tailored for grassroots communities in rural India.</p>
            <p>This mentorship gave me exposure to human-centered design principles and healthcare economics. I analyzed the accessibility challenges of diagnostics in resource-constrained clinics, leading to proposals for low-cost screening platforms.</p>
            <p>The program allowed me to pitch solutions, receive constructive feedback from industry experts, and understand how government funding schemes support biotech start-ups from proof-of-concept to pilot deployments.</p>
        `
    },
    iitindore: {
        title: "Drug Discovery Internship",
        badge: "IIT Indore Internship",
        institution: "IIT Indore",
        tags: ["Drug Discovery", "Cytotoxicity Assays", "Cell Screening", "Bioinformatics"],
        image: "images/IIT-Indore.png",
        link: "https://drive.google.com/file/d/1r_6xNcPU5jhduv6nt9aIat_w-FOmDL_5/view?usp=drive_link",
        description: `
            <p>During my research internship at <strong>IIT Indore</strong>, I worked inside the molecular therapeutics and diagnostic laboratory, focusing on computer-aided drug design and screening pipelines.</p>
            <p>I synthesized and screened experimental compounds against cell lines, executing viability assays (such as MTT/MTS) to quantify dose-dependent cytotoxicity and compute IC50 profiles.</p>
            <p>This internship provided solid foundational skills in modern bioinformatics software, molecular docking simulations, chemical extraction protocols, and high-throughput cell screening instrumentation.</p>
        `
    },
    erecta: {
        title: "Tagetes erecta Extraction",
        badge: "Publication / Biotech",
        institution: "International Journal of Plant Biotechnology",
        tags: ["Phytochemicals", "Bioprocessing", "Antioxidants", "Spectroscopy"],
        image: "images/erecta.png",
        link: "https://biotech.journalspub.info/?journal=IJPB&page=article&op=view&path%5B%5D=737",
        description: `
            <p><strong>Published Study (2022):</strong> "Studies on Qualitative and Quantitative Analysis of Phytochemicals from Petals and Leaves of Tagetes erecta" in the <em>International Journal of Plant Biotechnology</em>.</p>
            <p>This peer-reviewed research detailed the optimized extraction of therapeutic phytochemical compounds from marigold (<em>Tagetes erecta</em>). We analyzed active components such as lutein and other carotenoids known for anti-inflammatory and ophthalmic benefits.</p>
            <p>I led the comparative yield calculations using different solvent systems (ethanol, methanol, aqueous) and characterized the fractions through UV-Vis spectroscopy, proving that specific leaf extracts hold high antimicrobial properties.</p>
        `
    },
    officinale: {
        title: "Zingiber officinale Extraction",
        badge: "Publication / Pharmacology",
        institution: "Reviews & Research: A Journal of Pharmacology",
        tags: ["Flavonoids", "Pharmacology", "Drug Formulation", "Yield Optimization"],
        image: "images/Officinale.png",
        link: "https://pharmajournals.stmjournals.in/index.php/RRJoP/article/view/1172",
        description: `
            <p><strong>Published Study (2022):</strong> "Studies on Extraction of Flavonoids from Peel of Zingiber officinale" in <em>Reviews & Research: A Journal of Pharmacology</em>.</p>
            <p>This work focused on chemical extraction engineering, analyzing how agricultural by-products (ginger peel) can be recycled to harvest high-value antioxidant flavonoids for pharmaceutical applications.</p>
            <p>We studied kinetics of solvent-based extraction, investigating temperature, time, and solid-to-solvent ratios to define the optimal parameters for maximum phenolic yield, which is crucial for commercial-scale nutraceutical processes.</p>
        `
    },
    papaya: {
        title: "Carica Papaya Flavonoids",
        badge: "Conference Abstract",
        institution: "CBSD Conference, Annamalai University",
        tags: ["Flavonoids", "Phytochemistry", "Conference Presentation", "Natural Products"],
        image: "images/Anna.png",
        link: "https://drive.google.com/file/d/1hLN0hRdnoXpR1OAFGFz0ztM6YitUccMf/view?usp=drive_link",
        description: `
            <p><strong>Conference Presentation (2022):</strong> "Studies on Extraction of Flavonoids from Seeds of Carica Papaya" presented at the <em>4th International Conference by CBSD, Annamalai University</em>.</p>
            <p>This scientific abstract analyzed the bioactive profiles of extracts taken from papaya seeds, focusing on their potential therapeutic application as anthelmintic and anticancer agents.</p>
            <p>The research presented analytical chromatography profiles identifying key flavonoids and phenolic contents, providing a baseline for secondary screening assays in biotechnology pipelines.</p>
        `
    }
};

// --- Slide-Out Details Drawer Hub Logic ---
function openDetailsDrawer(projectKey) {
    const data = researchDetails[projectKey];
    if (!data) return;

    // Populate drawer elements
    const drawer = document.getElementById('details-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    
    document.getElementById('drawer-title').textContent = data.title;
    document.getElementById('drawer-badge').textContent = data.badge;
    document.getElementById('drawer-inst').innerHTML = `<strong>Institution:</strong> ${data.institution}`;
    document.getElementById('drawer-desc').innerHTML = data.description;
    
    // Set banner image
    const imgEl = document.getElementById('drawer-img');
    if (data.image) {
        imgEl.src = data.image;
        imgEl.style.display = 'block';
    } else {
        imgEl.style.display = 'none';
    }

    // Populate tags
    const tagsContainer = document.getElementById('drawer-tags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'drawer-meta-tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    // Populate link button
    const linkBtn = document.getElementById('drawer-link');
    if (data.link) {
        linkBtn.href = data.link;
        linkBtn.style.display = 'inline-block';
        if (data.badge.includes('Publication')) {
            linkBtn.textContent = 'Read Paper';
        } else if (data.badge.includes('Conference')) {
            linkBtn.textContent = 'View Abstract';
        } else {
            linkBtn.textContent = 'Learn More';
        }
    } else {
        linkBtn.style.display = 'none';
    }

    // Trigger animations by adding active/open classes
    if (backdrop && drawer) {
        backdrop.classList.add('active');
        drawer.classList.add('open');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
    }
}

// Global helper to close details drawer
function closeDetailsDrawer() {
    const drawer = document.getElementById('details-drawer');
    const backdrop = document.getElementById('drawer-backdrop');

    if (drawer && backdrop) {
        drawer.classList.remove('open');
        backdrop.classList.remove('active');
        document.body.style.overflow = ''; // Unlock background scrolling
    }
}

// --- Theme Switching Logic ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersLightTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (savedTheme === 'light' || (!savedTheme && prefersLightTheme)) {
        body.classList.add('light-theme');
        if (themeIcon) themeIcon.innerHTML = '☀️';
    } else {
        body.classList.remove('light-theme');
        if (themeIcon) themeIcon.innerHTML = '🌙';
    }
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    body.classList.toggle('light-theme');
    
    const isLightTheme = body.classList.contains('light-theme');
    themeIcon.innerHTML = isLightTheme ? '☀️' : '🌙';
    
    // Save preference to localStorage
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    
    // Update map style and canvas colors if they exist
    if (window.updateMapTileLayer) {
        window.updateMapTileLayer(isLightTheme);
    }
    if (window.updateCanvasColors) {
        window.updateCanvasColors(isLightTheme);
    }
}

// --- Scrolling Utilities ---
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function handleScrollEffects() {
    const body = document.body;
    const scrollBtn = document.querySelector('.scroll-to-top');
    const nav = document.querySelector('.top-bar');
    const scrollY = window.scrollY;

    // Scroll-to-top visibility
    if (scrollY > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }

    // Nav shrink
    if (scrollY > 50) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
}

// --- Image Carousel (About Me) ---
function initCarousel() {
    const imagePaths = [
        'images/Research_me.JPG',
        'images/Archit About Me.jpg',
        'images/Archit Camera.JPG',
        'images/ME Camera.jpeg',
        'images/AboutMEarchit.jpg',
        'images/ME3.jpg'
    ];

    let currentIdx = 0;
    const imageCarousel = document.getElementById('image-carousel');
    if (!imageCarousel) return;

    // Load initial image
    imageCarousel.innerHTML = `<img src="${imagePaths[currentIdx]}" alt="Archit's Bio Photo">`;

    function rotateImage() {
        currentIdx = (currentIdx + 1) % imagePaths.length;
        const img = imageCarousel.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.05)';
            img.style.opacity = '0.3';
            setTimeout(() => {
                img.src = imagePaths[currentIdx];
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            }, 400);
        }
    }

    setInterval(rotateImage, 5000);
}

// --- Leaflet Map Setup ---
let map;
let activeTileLayer;

function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Initialize map centered at central-north India
    map = L.map('map', {
        scrollWheelZoom: false
    }).setView([26.5000, 77.2000], 5);

    // Update map tile layers based on theme
    const isLight = document.body.classList.contains('light-theme');
    
    window.updateMapTileLayer = function(isLightTheme) {
        if (activeTileLayer) {
            map.removeLayer(activeTileLayer);
        }
        
        const tileUrl = isLightTheme 
            ? 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
            : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
            
        activeTileLayer = L.tileLayer(tileUrl, {
            attribution: '&copy; CartoDB contributors'
        }).addTo(map);
    };

    window.updateMapTileLayer(isLight);

    // Pinpoint locations of interest
    const locations = [
        { coords: [28.6139, 77.2090], popup: "<b>New Delhi</b><br>Residence & Research Core" },
        { coords: [28.6032, 77.0509], popup: "<b>Modern Convent School, Dwarka</b><br>Intermediate (2019) & High School (2016) Schooling" },
        { coords: [28.9631, 77.6410], popup: "<b>MIET Meerut</b><br>B.Tech (Affiliated with AKTU Lucknow, UP) • July 2019 - June 2023" },
        { coords: [30.9678, 76.5367], popup: "<b>IIT Ropar</b><br>M.Tech in Biomedical Engineering • July 2024 - May 2026" },
        { coords: [28.5450, 77.1926], popup: "<b>IIT Delhi (mPRAGATI)</b><br>Research Internship • June 2025 - June 2026" },
        { coords: [22.5204, 75.9207], popup: "<b>IIT Indore</b><br>Drug Discovery & Cytotoxicity Internship" },
        { coords: [33.0308, 74.9490], popup: "<b>Vaishno Devi Temple</b><br>Spiritual Visit" },
        { coords: [51.5074, -0.1278], popup: "<b>London, UK</b><br>Wishlist Academic & Travel Spot" }
    ];

    locations.forEach(loc => {
        L.marker(loc.coords).addTo(map).bindPopup(loc.popup);
    });
}

// --- Book Summary Modal Handlers ---
function openBookModal(bookKey) {
    const modal = document.getElementById('bookModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalSummary = document.getElementById('modalSummary');
    
    const book = bookData[bookKey];
    if (book && modal) {
        modalTitle.textContent = book.title;
        modalAuthor.textContent = `by ${book.author}`;
        modalSummary.textContent = book.summary;
        modal.classList.add('active');
    }
}

function closeBookModal() {
    const modal = document.getElementById('bookModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// --- Intersection Observer for Scroll Animations ---
function initObservers() {
    // Fade-in animation observer
    const fadeInElements = document.querySelectorAll('.fade-in, .section');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.15
    });

    fadeInElements.forEach(el => fadeObserver.observe(el));

    // Nav-link highlighter observer
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px' // Highlighting triggers near middle of viewport
    });

    sections.forEach(s => navObserver.observe(s));

    // Skills fill animator
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bars = skillsSection.querySelectorAll('.progress-bar');
                    bars.forEach(bar => {
                        const targetWidth = bar.getAttribute('data-width') || '0%';
                        bar.style.width = targetWidth;
                    });
                }
            });
        }, {
            threshold: 0.1
        });
        skillsObserver.observe(skillsSection);
    }
}

// --- Skills Hover Dynamics ---
// On hover, we fill the main progress bar of the active skill card to 100% to represent potential growth, as requested.
function initSkillsHover() {
    const skillCards = document.querySelectorAll('.skill');
    
    skillCards.forEach(card => {
        const bar = card.querySelector('.progress-bar');
        if (!bar) return;
        
        const originalWidth = bar.getAttribute('data-width') || '0%';
        
        card.addEventListener('mouseenter', () => {
            bar.style.width = '100%';
        });
        
        card.addEventListener('mouseleave', () => {
            // Restore original animated value
            bar.style.width = originalWidth;
        });

        // Hovering on subskills changes progress bar to reflect subskill value
        const subSkills = card.querySelectorAll('.sub-skill');
        subSkills.forEach(sub => {
            sub.addEventListener('mouseenter', (e) => {
                e.stopPropagation(); // Avoid card hover conflict
                const subWidth = sub.getAttribute('data-width');
                bar.style.width = subWidth;
            });
            sub.addEventListener('mouseleave', (e) => {
                e.stopPropagation();
                bar.style.width = '100%'; // Revert to parent card hover default
            });
        });
    });
}

// --- Cellular Vibration Canvas Simulation ---
function initCanvas() {
    const canvas = document.getElementById('bio-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 140 };

    // Handle styling metrics
    let particleColor = 'rgba(6, 182, 212, 0.4)'; // Cyan
    let lineColor = 'rgba(99, 102, 241, 0.1)';   // Indigo
    
    window.updateCanvasColors = function(isLightTheme) {
        if (isLightTheme) {
            particleColor = 'rgba(15, 118, 110, 0.35)'; // Dark Teal
            lineColor = 'rgba(13, 148, 136, 0.08)';    // Light Teal
        } else {
            particleColor = 'rgba(6, 182, 212, 0.4)';  // Cyan
            lineColor = 'rgba(99, 102, 241, 0.1)';     // Indigo
        }
    };

    window.updateCanvasColors(document.body.classList.contains('light-theme'));

    // Set dimensions
    function resizeCanvas() {
        const parent = canvas.parentElement;
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        initParticles();
    }

    // Particle construct representing a cell/energy node
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            // Slow background drift speed
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 3 + 2;
            // Cell vibration metrics
            this.vibeOffset = Math.random() * 100;
            this.vibeSpeed = 0.03 + Math.random() * 0.04;
        }

        update() {
            // Apply drift
            this.x += this.vx;
            this.y += this.vy;

            // Apply cellular shivering/vibration
            this.x += Math.sin(Date.now() * this.vibeSpeed + this.vibeOffset) * 0.25;
            this.y += Math.cos(Date.now() * this.vibeSpeed + this.vibeOffset) * 0.25;

            // Bounce off boundaries
            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

            // Cursor push/repulsion simulation
            if (mouse.x !== null && mouse.y !== null) {
                let dx = this.x - mouse.x;
                let dy = this.y - mouse.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    let force = (mouse.radius - dist) / mouse.radius;
                    // Push particles outwards
                    this.x += (dx / dist) * force * 3;
                    this.y += (dy / dist) * force * 3;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = particleColor;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        // Scale number of particles by canvas size
        const numParticles = Math.min(65, Math.floor((canvas.width * canvas.height) / 18000));
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    function connect() {
        // Draw connection lines representing neural/signal pathways
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        connect();
        requestAnimationFrame(animate);
    }

    // Mouse events inside home section
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        homeSection.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
}

// --- DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCarousel();
    initObservers();
    initSkillsHover();
    initMap();
    initCanvas();

    // Theme Toggle Handler
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Book Click handlers for interactive shelf
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach(book => {
        book.addEventListener('click', () => {
            const bookKey = book.getAttribute('data-book');
            openBookModal(bookKey);
        });
    });

    // Close modal on click outside content
    const modal = document.getElementById('bookModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeBookModal();
            }
        });
    }

    // Global ESC key listener to close active modal or drawer
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBookModal();
            closeDetailsDrawer();
        }
    });

    // Scroll event listener
    window.addEventListener('scroll', handleScrollEffects);
    handleScrollEffects();
});
