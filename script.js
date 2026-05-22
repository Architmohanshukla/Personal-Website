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
    if (window.updateNetworkColors) {
        window.updateNetworkColors(isLightTheme);
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

    // Clear and build preloaded images
    imageCarousel.innerHTML = '';
    imagePaths.forEach((path, idx) => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = `Archit's Bio Photo ${idx + 1}`;
        img.className = 'carousel-img' + (idx === 0 ? ' active' : '');
        imageCarousel.appendChild(img);
    });

    // Create corner brackets for clinical monitor style
    const brackets = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    brackets.forEach(dir => {
        const bracket = document.createElement('div');
        bracket.className = `hud-bracket hud-${dir}`;
        imageCarousel.appendChild(bracket);
    });

    // Create dot navigation
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    imagePaths.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
        dot.addEventListener('click', () => {
            goToImage(idx);
        });
        dotsContainer.appendChild(dot);
    });
    imageCarousel.appendChild(dotsContainer);

    // Create HUD overlay
    const hudOverlay = document.createElement('div');
    hudOverlay.className = 'carousel-hud';
    hudOverlay.innerHTML = `
        <div class="hud-top-bar">
            <span class="hud-label">SYS_VIZ: CLINICAL_MONITOR</span>
            <span class="hud-index" id="hud-index-display">01 / ${String(imagePaths.length).padStart(2, '0')}</span>
        </div>
        <div class="hud-bottom-bar">
            <span class="hud-status">STATUS: SYSTEM_CYCLE</span>
            <span class="hud-zoom" id="hud-zoom-display">MAG: 1.00x</span>
        </div>
    `;
    imageCarousel.appendChild(hudOverlay);

    let intervalId;

    function goToImage(idx) {
        const images = imageCarousel.querySelectorAll('.carousel-img');
        const dots = imageCarousel.querySelectorAll('.carousel-dot');
        const indexDisplay = document.getElementById('hud-index-display');
        const zoomDisplay = document.getElementById('hud-zoom-display');
        
        if (images.length === 0) return;

        // Remove active class
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Set active image and dot
        images[idx].classList.add('active');
        dots[idx].classList.add('active');
        currentIdx = idx;

        // Update telemetry data
        if (indexDisplay) {
            indexDisplay.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(imagePaths.length).padStart(2, '0')}`;
        }
        if (zoomDisplay) {
            const zoomVals = ['1.00x', '1.05x', '1.08x', '1.12x', '1.15x', '1.03x'];
            zoomDisplay.textContent = `MAG: ${zoomVals[idx % zoomVals.length]}`;
        }

        // Restart automatic cycle timer
        resetInterval();
    }

    function rotateImage() {
        const nextIdx = (currentIdx + 1) % imagePaths.length;
        goToImage(nextIdx);
    }

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(rotateImage, 5000);
    }

    resetInterval();
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

// --- Category Color Helper for Network Topology ---
function getCategoryColor(category, isLightTheme, alpha = 1) {
    let h, s, l;
    switch (category) {
        case "core": h = 190; s = 85; l = isLightTheme ? 40 : 50; break; // Cyan
        case "lab": h = 330; s = 80; l = isLightTheme ? 45 : 55; break; // Magenta/Pink
        case "computational": h = 260; s = 85; l = isLightTheme ? 50 : 60; break; // Purple/Indigo
        case "regulatory": h = 40; s = 90; l = isLightTheme ? 40 : 50; break; // Amber/Gold
        case "thesis": h = 15; s = 85; l = isLightTheme ? 45 : 55; break; // Coral
        case "tools": h = 155; s = 75; l = isLightTheme ? 35 : 45; break; // Emerald
        default: h = 200; s = 70; l = isLightTheme ? 40 : 50;
    }
    return `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
}

// --- Personalized Category Descriptions ---
const categoryPersonalizedDescriptions = {
    core: "Biomedical Engineering postgraduate from Indian Institute of Technology Ropar with interdisciplinary research exposure spanning biomaterials, biomechanics, translational biomedical engineering, and prototype-oriented healthcare innovation. Experienced in integrating engineering principles with biological systems through experimental design, biomedical prototyping, simulation-assisted analysis, and data-driven scientific evaluation.",
    lab: "Academic and research work has involved biomaterial characterization, conductive biomaterials, surface modification approaches, biocompatibility-oriented design thinking, and wearable biomedical system development, with exposure to mechanobiology-inspired concepts and biomedical device functionality. Demonstrates strong capability in scientific literature review, hypothesis development, validation studies, statistical interpretation, laboratory documentation, and structured research methodology development.",
    computational: "Possesses working exposure to biomedical data analysis, scientific computing, computational modeling, image analysis, and AI-assisted research workflows, including familiarity with biomedical visualization tools and interdisciplinary analytical approaches. Research experience includes prototype testing, gait and plantar-pressure analysis concepts, resistance characterization, finite element-assisted evaluation, and biomechanical interpretation for functional biomedical applications.",
    tools: "Technically proficient in tools and platforms including Microsoft Excel, GraphPad Prism, MATLAB, Python, ANSYS, SolidWorks, ImageJ, PowerPoint, Canva, and scientific literature databases such as PubMed and Google Scholar.",
    regulatory: "Familiar with modern medical device development workflows including validation & verification principles, risk analysis considerations, quality systems awareness, and regulatory frameworks such as ISO 13485 and FDA/MDR-oriented documentation environments.",
    thesis: "Demonstrates strong interdisciplinary coordination, technical communication, and research-to-prototype execution capability through collaborative innovation exposure at Indian Institute of Technology Delhi, including project leadership experience involving multi-team coordination and healthcare innovation ecosystem engagement. Interested in advancing translational healthcare technologies at the intersection of biomaterials, biomedical systems, wearable devices, biomechanics, AI-assisted healthcare research, and next-generation medical technology innovation."
};

// --- Interactive Force-Directed Network Graph Class ---
class NetworkTopologyGraph {
    constructor(canvasId, containerId) {
        this.canvas = document.getElementById(canvasId);
        this.container = document.getElementById(containerId);
        if (!this.canvas || !this.container) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.nodes = [];
        this.links = [];
        this.draggedNode = null;
        this.hoveredNode = null;
        this.isLoopRunning = false;
        this.mouse = { x: null, y: null, isDown: false };
        
        // Settings
        this.isLightTheme = document.body.classList.contains('light-theme');
        
        // Physics constants
        this.damping = 0.84;
        
        this.initNodesAndLinks();
        this.setupEvents();
        this.resize();
        this.setupIntersectionObserver();
    }
    
    initNodesAndLinks() {
        const hubDefs = [
            { id: "core", label: "Core BME" },
            { id: "lab", label: "Research & Lab" },
            { id: "computational", label: "Computational" },
            { id: "regulatory", label: "Device & Regulatory" },
            { id: "thesis", label: "Thesis Domain" },
            { id: "tools", label: "Tools & Software" }
        ];
        
        const hubMap = {};
        hubDefs.forEach((def, index) => {
            const angle = (index * 2 * Math.PI) / hubDefs.length;
            const node = {
                id: def.id,
                name: def.label,
                category: def.id,
                isHub: true,
                radius: 16,
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                angle: angle,
                visible: true,
                opacity: 1
            };
            this.nodes.push(node);
            hubMap[def.id] = node;
        });
        
        keywordsData.forEach((kw) => {
            const hub = hubMap[kw.category];
            if (!hub) return;
            
            const node = {
                name: kw.name,
                category: kw.category,
                isHub: false,
                radius: 5,
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                desc: kw.desc,
                subcat: kw.subcat || null,
                parentHub: hub,
                visible: true,
                opacity: 1
            };
            this.nodes.push(node);
            
            this.links.push({
                source: hub,
                target: node,
                length: 65,
                isHubLink: false,
                pulseOffset: Math.random()
            });
        });
        
        // Connect hubs in a ring to structure the network center
        const hubsList = this.nodes.filter(n => n.isHub);
        for (let i = 0; i < hubsList.length; i++) {
            const n1 = hubsList[i];
            const n2 = hubsList[(i + 1) % hubsList.length];
            this.links.push({
                source: n1,
                target: n2,
                length: 150,
                isHubLink: true,
                pulseOffset: Math.random()
            });
        }
    }
    
    resize() {
        const rect = this.container.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        
        this.ctx.resetTransform();
        this.ctx.scale(dpr, dpr);
        
        this.width = rect.width;
        this.height = rect.height;
        this.cx = this.width / 2;
        this.cy = this.height / 2;
        
        const isMobile = this.width < 768;
        
        // Adjust radii dynamically for mobile layouts
        this.nodes.forEach(node => {
            if (node.isHub) {
                node.radius = isMobile ? 12 : 16;
            } else {
                node.radius = isMobile ? 4 : 5;
            }
        });
        
        // Initial positioning around circular centers
        this.nodes.forEach(node => {
            if (node.isHub) {
                const dist = isMobile ? 95 : 135;
                const targetX = this.cx + Math.cos(node.angle) * dist;
                const targetY = this.cy + Math.sin(node.angle) * dist;
                
                if (node.x === 0 && node.y === 0) {
                    node.x = targetX;
                    node.y = targetY;
                    
                    // Explode keyword nodes slightly around their hub
                    this.nodes.forEach(child => {
                        if (!child.isHub && child.parentHub === node) {
                            const childAngle = Math.random() * 2 * Math.PI;
                            const childDist = 30 + Math.random() * 30;
                            child.x = node.x + Math.cos(childAngle) * childDist;
                            child.y = node.y + Math.sin(childAngle) * childDist;
                        }
                    });
                }
            }
        });
    }
    
    burst() {
        this.nodes.forEach(node => {
            const dx = node.x - this.cx;
            const dy = node.y - this.cy;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            node.vx += (dx / dist) * (node.isHub ? 3 : 7) * (Math.random() * 0.4 + 0.6);
            node.vy += (dy / dist) * (node.isHub ? 3 : 7) * (Math.random() * 0.4 + 0.6);
        });
    }
    
    updateFilter(filter, searchQuery) {
        // 1. Determine visibility of keyword nodes
        this.nodes.forEach(node => {
            if (!node.isHub) {
                const matchesCategory = (filter === "all" || node.category === filter);
                const matchesSearch = searchQuery === "" || 
                    node.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    node.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (node.subcat && node.subcat.toLowerCase().includes(searchQuery.toLowerCase()));
                node.visible = matchesCategory && matchesSearch;
            }
        });
        
        // 2. Determine visibility of hubs based on whether they contain visible children
        this.nodes.forEach(node => {
            if (node.isHub) {
                const hasVisibleChildren = this.nodes.some(child => !child.isHub && child.parentHub === node && child.visible);
                const matchesCategory = (filter === "all" || node.category === filter);
                node.visible = matchesCategory && (hasVisibleChildren || filter === node.category || (filter === "all" && searchQuery === ""));
            }
        });
    }
    
    showCategoryDetails(category) {
        const placeholder = document.getElementById('details-placeholder');
        const content = document.getElementById('details-content');
        const titleEl = document.getElementById('details-title');
        const catEl = document.getElementById('details-category');
        const descEl = document.getElementById('details-desc');
        const calloutEl = document.getElementById('details-context-callout');
        
        if (!placeholder || !content || !titleEl || !catEl || !descEl) return;
        
        let catName = "";
        let catDesc = "";
        switch(category) {
            case "core": 
                catName = "Core Biomedical Engineering"; 
                catDesc = categoryPersonalizedDescriptions.core;
                break;
            case "lab": 
                catName = "Research & Lab Competency"; 
                catDesc = categoryPersonalizedDescriptions.lab;
                break;
            case "computational": 
                catName = "Computational & Quantitative"; 
                catDesc = categoryPersonalizedDescriptions.computational;
                break;
            case "regulatory": 
                catName = "Medical Device & Regulatory"; 
                catDesc = categoryPersonalizedDescriptions.regulatory;
                break;
            case "thesis": 
                catName = "Thesis & Special Domain"; 
                catDesc = categoryPersonalizedDescriptions.thesis;
                break;
            case "tools": 
                catName = "Tools & Software"; 
                catDesc = categoryPersonalizedDescriptions.tools;
                break;
            default: 
                catName = "Biomedical Expertise";
                catDesc = "Scientific capability architecture and translational research.";
        }
        
        const isLightTheme = document.body.classList.contains('light-theme');
        catEl.style.color = getCategoryColor(category, isLightTheme, 0.95);
        catEl.textContent = "Expertise Hub";
        titleEl.textContent = catName;
        descEl.textContent = catDesc;
        if (calloutEl) calloutEl.style.display = 'none';
        
        placeholder.style.display = 'none';
        content.style.display = 'block';
        
        // Add micro-animation
        content.classList.remove('details-content-animate');
        void content.offsetWidth; // Trigger reflow to restart animation
        content.classList.add('details-content-animate');
    }
    
    setupEvents() {
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            this.mouse.x = mouseX;
            this.mouse.y = mouseY;
            
            if (this.mouse.isDown && this.draggedNode) {
                return;
            }
            
            let foundNode = null;
            // Scan for hovered nodes (hubs prioritized over keywords)
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                if (!node.visible) continue;
                
                const dx = node.x - mouseX;
                const dy = node.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const hitRadius = node.radius + (node.isHub ? 12 : 8);
                
                if (dist < hitRadius) {
                    foundNode = node;
                    break;
                }
            }
            
            if (foundNode !== this.hoveredNode) {
                this.hoveredNode = foundNode;
                
                if (foundNode) {
                    if (!foundNode.isHub) {
                        showKeywordDetails(foundNode);
                    } else {
                        this.showCategoryDetails(foundNode.category);
                    }
                } else {
                    clearKeywordDetails();
                }
            }
        });
        
        this.canvas.addEventListener('mousedown', (e) => {
            this.mouse.isDown = true;
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // Find which node is clicked
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                if (!node.visible) continue;
                
                const dx = node.x - mouseX;
                const dy = node.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < node.radius + 10) {
                    this.draggedNode = node;
                    break;
                }
            }
        });
        
        window.addEventListener('mouseup', () => {
            this.mouse.isDown = false;
            this.draggedNode = null;
        });
        
        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
            this.hoveredNode = null;
            clearKeywordDetails();
        });
        
        window.addEventListener('resize', () => {
            this.resize();
        });
    }
    
    setupIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.startLoop();
                    } else {
                        this.stopLoop();
                    }
                });
            }, { threshold: 0.05 });
            
            observer.observe(this.container);
        }
    }
    
    updatePhysics() {
        const isMobile = this.width < 768;
        const gravityStrength = isMobile ? 0.001 : 0.002;
        const springK = isMobile ? 0.015 : 0.025;
        
        if (this.draggedNode) {
            this.draggedNode.x = this.mouse.x;
            this.draggedNode.y = this.mouse.y;
            this.draggedNode.vx = 0;
            this.draggedNode.vy = 0;
        }
        
        // Gravity attraction to canvas center & Proximity Repulsion
        this.nodes.forEach(node => {
            if (!node.visible) return;
            const dx = this.cx - node.x;
            const dy = this.cy - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > 0) {
                const strength = node.isHub ? gravityStrength * 2.8 : gravityStrength;
                node.vx += (dx / dist) * dist * strength;
                node.vy += (dy / dist) * dist * strength;
            }
            
            // Subtle cursor magnetic repulsion (nodes within 100px shift away gently)
            if (this.mouse.x !== null && this.mouse.y !== null && node !== this.draggedNode) {
                const mdx = node.x - this.mouse.x;
                const mdy = node.y - this.mouse.y;
                const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                const maxRepelDist = 100;
                
                if (mdist < maxRepelDist && mdist > 0.1) {
                    const force = 0.45 * (1 - mdist / maxRepelDist);
                    node.vx += (mdx / mdist) * force;
                    node.vy += (mdy / mdist) * force;
                }
            }
        });
        
        // Link springs pulling nodes together
        this.links.forEach(link => {
            const A = link.source;
            const B = link.target;
            if (!A.visible || !B.visible) return;
            
            const dx = B.x - A.x;
            const dy = B.y - A.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 0.1;
            
            let desiredLen = link.length;
            if (isMobile) desiredLen *= 0.8;
            
            const force = (dist - desiredLen) * springK;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            
            A.vx += fx;
            A.vy += fy;
            B.vx -= fx;
            B.vy -= fy;
        });
        
        // Node-to-node repulsion forces
        for (let i = 0; i < this.nodes.length; i++) {
            const n1 = this.nodes[i];
            if (!n1.visible) continue;
            
            for (let j = i + 1; j < this.nodes.length; j++) {
                const n2 = this.nodes[j];
                if (!n2.visible) continue;
                
                const dx = n2.x - n1.x;
                const dy = n2.y - n1.y;
                const dist = Math.sqrt(dx * dx + dy * dy) || 0.1;
                
                let minDist = n1.radius + n2.radius + (n1.isHub || n2.isHub ? (isMobile ? 32 : 48) : (isMobile ? 12 : 22));
                
                if (dist < minDist) {
                    const force = (minDist - dist) * 0.08;
                    n1.vx -= (dx / dist) * force;
                    n1.vy -= (dy / dist) * force;
                    n2.vx += (dx / dist) * force;
                    n2.vy += (dy / dist) * force;
                } else {
                    const force = (n1.isHub || n2.isHub ? 55 : 25) / (dist * dist);
                    n1.vx -= (dx / dist) * Math.min(force, 0.45);
                    n1.vy -= (dy / dist) * Math.min(force, 0.45);
                    n2.vx += (dx / dist) * Math.min(force, 0.45);
                    n2.vy += (dy / dist) * Math.min(force, 0.45);
                }
            }
        }
        
        // Integration step & constraints
        const pad = 12;
        this.nodes.forEach(node => {
            if (!node.visible) return;
            if (node === this.draggedNode) return;
            
            node.x += node.vx;
            node.y += node.vy;
            
            node.vx *= this.damping;
            node.vy *= this.damping;
            
            const nodePad = node.radius + pad;
            if (node.x < nodePad) { node.x = nodePad; node.vx = 0; }
            if (node.x > this.width - nodePad) { node.x = this.width - nodePad; node.vx = 0; }
            if (node.y < nodePad) { node.y = nodePad; node.vy = 0; }
            if (node.y > this.height - nodePad) { node.y = this.height - nodePad; node.vy = 0; }
        });
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // 1. Draw Links
        this.links.forEach(link => {
            const A = link.source;
            const B = link.target;
            if (!A.visible || !B.visible) return;
            
            let baseAlpha = link.isHubLink ? 0.08 : 0.12;
            if (this.isLightTheme) {
                baseAlpha = link.isHubLink ? 0.12 : 0.18;
            }
            
            let alpha = baseAlpha;
            
            if (this.hoveredNode) {
                const isConnected = (A === this.hoveredNode || B === this.hoveredNode);
                alpha = isConnected ? 0.65 : 0.02;
            }
            
            this.ctx.beginPath();
            this.ctx.moveTo(A.x, A.y);
            this.ctx.lineTo(B.x, B.y);
            
            const category = A.isHub ? A.category : B.category;
            this.ctx.strokeStyle = getCategoryColor(category, this.isLightTheme, alpha);
            this.ctx.lineWidth = link.isHubLink ? 1.5 : 1;
            this.ctx.stroke();
            
            // Neural Signal flow pulse along category-to-keyword links
            if (!link.isHubLink && A.visible && B.visible) {
                let pulseAlpha = 0.65;
                if (this.hoveredNode) {
                    const isConnected = (A === this.hoveredNode || B === this.hoveredNode);
                    pulseAlpha = isConnected ? 1.0 : 0.05;
                }
                
                // Animate dot using Date.now()
                const speed = 0.0007; // Smooth speed
                const t = ((Date.now() * speed) + link.pulseOffset) % 1.0;
                
                const px = A.x + (B.x - A.x) * t;
                const py = A.y + (B.y - A.y) * t;
                
                const pulseColor = getCategoryColor(B.category, this.isLightTheme, pulseAlpha);
                
                this.ctx.beginPath();
                this.ctx.arc(px, py, 2.2, 0, Math.PI * 2);
                this.ctx.fillStyle = pulseColor;
                
                // Add high quality glow on hover/active
                if (pulseAlpha > 0.1) {
                    this.ctx.save();
                    this.ctx.shadowColor = pulseColor;
                    this.ctx.shadowBlur = 6;
                    this.ctx.fill();
                    this.ctx.restore();
                } else {
                    this.ctx.fill();
                }
            }
        });
        
        // 2. Draw Keyword Nodes
        this.nodes.forEach(node => {
            if (!node.visible) return;
            if (node.isHub) return;
            
            const isHovered = (node === this.hoveredNode);
            let alpha = 0.85;
            let scale = 1.0;
            
            if (this.hoveredNode) {
                const isDirectRelation = (this.hoveredNode.isHub && node.parentHub === this.hoveredNode) || 
                                         (!this.hoveredNode.isHub && node.parentHub === this.hoveredNode.parentHub) ||
                                         isHovered;
                if (isHovered) {
                    alpha = 1.0;
                    scale = 1.6;
                } else if (isDirectRelation) {
                    alpha = 0.9;
                    scale = 1.25;
                } else {
                    alpha = 0.2;
                }
            }
            
            const color = getCategoryColor(node.category, this.isLightTheme, alpha);
            
            // Hover background halo glow
            if (isHovered) {
                this.ctx.beginPath();
                this.ctx.arc(node.x, node.y, node.radius * scale * 2.5, 0, Math.PI * 2);
                this.ctx.fillStyle = getCategoryColor(node.category, this.isLightTheme, alpha * 0.2);
                this.ctx.fill();
            }
            
            // Core node dot
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius * scale, 0, Math.PI * 2);
            this.ctx.fillStyle = color;
            this.ctx.shadowColor = isHovered ? color : "transparent";
            this.ctx.shadowBlur = isHovered ? 12 : 0;
            this.ctx.fill();
            this.ctx.shadowBlur = 0; // reset
            
            // Hover tooltip label with premium glassmorphism
            if (isHovered) {
                this.ctx.font = "600 12px 'Outfit', 'Inter', sans-serif";
                const textWidth = this.ctx.measureText(node.name).width;
                
                const tooltipX = node.x + 12;
                const tooltipY = node.y - 14;
                const tooltipW = textWidth + 18;
                const tooltipH = 26;
                
                this.ctx.save();
                
                // Tooltip drop shadow
                this.ctx.shadowColor = this.isLightTheme ? "rgba(0, 0, 0, 0.08)" : "rgba(0, 0, 0, 0.35)";
                this.ctx.shadowBlur = 12;
                this.ctx.shadowOffsetX = 0;
                this.ctx.shadowOffsetY = 4;
                
                // Glass panel background
                this.ctx.fillStyle = this.isLightTheme ? "rgba(255, 255, 255, 0.85)" : "rgba(15, 23, 42, 0.75)";
                this.ctx.beginPath();
                this.ctx.roundRect(tooltipX, tooltipY, tooltipW, tooltipH, 6);
                this.ctx.fill();
                
                // Turn off shadow for border/text to prevent muddy rendering
                this.ctx.shadowColor = "transparent";
                this.ctx.shadowBlur = 0;
                
                // Glass panel borders
                this.ctx.strokeStyle = this.isLightTheme ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.12)";
                this.ctx.lineWidth = 1;
                this.ctx.stroke();
                
                // Left indicator strip in category color
                const stripColor = getCategoryColor(node.category, this.isLightTheme, 0.95);
                this.ctx.fillStyle = stripColor;
                this.ctx.beginPath();
                this.ctx.roundRect(tooltipX + 1, tooltipY + 1, 3, tooltipH - 2, { topLeft: 5, bottomLeft: 5 });
                this.ctx.fill();
                
                // Tooltip Text
                this.ctx.fillStyle = this.isLightTheme ? "#0f172a" : "#f8fafc";
                this.ctx.textAlign = "left";
                this.ctx.textBaseline = "middle";
                this.ctx.fillText(node.name, tooltipX + 12, tooltipY + tooltipH / 2);
                
                this.ctx.restore();
            }
        });
        
        // 3. Draw Category Hubs
        this.nodes.forEach(node => {
            if (!node.visible) return;
            if (!node.isHub) return;
            
            const isHovered = (node === this.hoveredNode);
            const isChildHovered = (this.hoveredNode && !this.hoveredNode.isHub && this.hoveredNode.parentHub === node);
            const isActive = isHovered || isChildHovered;
            
            let alpha = 0.9;
            let scale = 1.0;
            
            if (this.hoveredNode) {
                if (isActive) {
                    alpha = 1.0;
                    scale = 1.15;
                } else {
                    alpha = 0.25;
                }
            }
            
            const baseColor = getCategoryColor(node.category, this.isLightTheme, alpha);
            
            // Breathe pulsing halo ring
            const pulseRate = 0.003;
            const glowRadius = node.radius * scale * (1.55 + Math.sin(Date.now() * pulseRate) * 0.1);
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = getCategoryColor(node.category, this.isLightTheme, alpha * (isActive ? 0.18 : 0.05));
            this.ctx.fill();
            
            // Outermost boundary ring
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius * scale, 0, Math.PI * 2);
            this.ctx.strokeStyle = baseColor;
            this.ctx.lineWidth = isActive ? 3 : 2;
            this.ctx.stroke();
            
            // Glassy hub backdrop
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius * scale - (isActive ? 4 : 3), 0, Math.PI * 2);
            this.ctx.fillStyle = this.isLightTheme ? "rgba(255, 255, 255, 0.95)" : "rgba(15, 23, 42, 0.92)";
            this.ctx.fill();
            
            // Abbreviated uppercase core identifiers drawn centered inside category hub circles
            let abbr = "";
            switch(node.category) {
                case "core": abbr = "BME"; break;
                case "lab": abbr = "LAB"; break;
                case "computational": abbr = "COMP"; break;
                case "regulatory": abbr = "REG"; break;
                case "thesis": abbr = "THES"; break;
                case "tools": abbr = "TOOL"; break;
                default: abbr = "HUB";
            }
            
            this.ctx.font = isActive ? "bold 9px 'Outfit', sans-serif" : "600 8px 'Outfit', sans-serif";
            this.ctx.fillStyle = baseColor;
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "middle";
            this.ctx.fillText(abbr, node.x, node.y + 0.5);
            
            // Draw Text labels
            const labelY = node.y - node.radius * scale - 12;
            this.ctx.font = isActive ? "bold 13px 'Outfit', sans-serif" : "600 12px 'Outfit', sans-serif";
            
            if (isActive) {
                const textWidth = this.ctx.measureText(node.name).width;
                this.ctx.fillStyle = this.isLightTheme ? "rgba(255, 255, 255, 0.9)" : "rgba(15, 23, 42, 0.85)";
                this.ctx.beginPath();
                this.ctx.roundRect(node.x - textWidth/2 - 6, labelY - 9, textWidth + 12, 18, 9);
                this.ctx.fill();
            }
            
            this.ctx.fillStyle = this.isLightTheme ? (isActive ? "#0f172a" : "#475569") : (isActive ? "#f8fafc" : "#94a3b8");
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "middle";
            this.ctx.fillText(node.name, node.x, labelY);
        });
    }
    
    startLoop() {
        if (this.isLoopRunning) return;
        this.isLoopRunning = true;
        this.burst();
        
        const tick = () => {
            if (!this.isLoopRunning) return;
            this.updatePhysics();
            this.draw();
            requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }
    
    stopLoop() {
        this.isLoopRunning = false;
    }
}

// --- Optimized Biomedical Resume Keyword Architecture Data ---
const keywordsData = [
    // 1. Core Biomedical Engineering Keywords
    { name: "Biomaterials", category: "core", desc: "Materials designed to interface with biological systems to evaluate, treat, augment or replace any tissue, organ or function of the body." },
    { name: "Tissue Engineering", category: "core", desc: "Using cells, engineering materials, and biochemical factors to restore, maintain, or improve biological tissue functions." },
    { name: "Regenerative Medicine", category: "core", desc: "Advancing methods to regrow, repair or replace damaged or diseased cells, organs or tissues using biomaterials and cellular therapies." },
    { name: "Biomedical Engineering", category: "core", desc: "Applying engineering principles, design concepts, and analytical methods to medicine and biology for healthcare optimization." },
    { name: "Translational Research", category: "core", desc: "Translating fundamental laboratory discoveries into functional, clinically validated treatments and diagnostic systems." },
    { name: "Cell–Material Interaction", category: "core", desc: "Studying how physical, chemical, and topographical cues of biomaterial surfaces influence cell adhesion, growth, and differentiation." },
    { name: "Biocompatibility", category: "core", desc: "The capability of a prosthesis, implant, or device to perform with an appropriate host response in a specific application." },
    { name: "Biomedical Innovation", category: "core", desc: "Conceptualizing, designing, and fabricating state-of-the-art diagnostic, surgical, therapeutic, or assistive medical instruments." },
    { name: "Mechanobiology", category: "core", desc: "Investigating how physical forces and changes in the mechanical properties of cells and tissues contribute to physiology and disease." },
    { name: "Bioelectronics", category: "core", desc: "The interface of electronics and electrical engineering principles with biological systems for biosensing, pacemakers, and neural prosthetics." },
    { name: "Biomaterial Characterization", category: "core", desc: "Analyzing structural, thermal, chemical, and mechanical properties of biomaterials (such as FTIR, SEM, and tensile testing)." },
    { name: "Conductive Biomaterials", category: "core", desc: "Smart electroactive substrates (e.g. polymers, carbon blends) designed to stimulate cells and transmit bioelectrical signals." },
    { name: "Surface Modification", category: "core", desc: "Engineering biomaterial surfaces via chemical, physical or plasma treatments to control biological interface properties without affecting bulk features." },
    { name: "Biomedical Prototyping", category: "core", desc: "Translating healthcare device specifications into initial physical iterations using additive manufacturing and benchtop testing." },
    { name: "Human Physiology", category: "core", desc: "The science of the mechanical, physical, and biochemical functions of humans, serving as the biological baseline for all medical devices." },
    { name: "Biotechnology Research", category: "core", desc: "Utilizing biological systems, living organisms, or derivatives thereof, to develop or make products for specific medical uses." },

    // 2. Research & Laboratory Competency Keywords
    { name: "Experimental Design", category: "lab", desc: "Structuring scientific experiments systematically to isolate independent variables, evaluate controls, and ensure statistical power." },
    { name: "Wet Lab Techniques", category: "lab", desc: "Standard chemical and biological laboratory protocols, chemical handling, pipetting, solution preparation, and sterile techniques." },
    { name: "Cell Culture", category: "lab", desc: "In vitro maintenance, growth, propagation, and characterization of primary cells or established cell lines in controlled environments." },
    { name: "Scientific Literature Review", category: "lab", desc: "Systematically gathering, evaluating, and synthesizing academic databases (PubMed, Scholar) to build technical baselines." },
    { name: "Research Methodology", category: "lab", desc: "Defining scientific workflows, experimental parameter bounds, computational controls, and verification criteria." },
    { name: "Assay Development", category: "lab", desc: "Formulating analytical procedures to measure the presence, amount, or functional activity of a target analyte or biological response." },
    { name: "SOP Compliance", category: "lab", desc: "Adhering strictly to Standard Operating Procedures in laboratory and manufacturing settings to guarantee safety and compliance." },
    { name: "Data Interpretation", category: "lab", desc: "Deriving meaningful biological and engineering insights from raw experimental graphs, chromatograms, and telemetry logs." },
    { name: "Statistical Analysis", category: "lab", desc: "Applying mathematical techniques to interpret scientific datasets, including hypothesis testing, ANOVA, t-tests, and correlation." },
    { name: "Scientific Writing", category: "lab", desc: "Drafting technical abstracts, research proposals, peer-reviewed journal manuscripts, and regulatory submissions." },
    { name: "Laboratory Documentation", category: "lab", desc: "Recording experiments, reagents, sensor calibrations, and test results in official logs for quality control and IP filing." },
    { name: "Reproducibility Practices", category: "lab", desc: "Implementing rigorous testing standards, control validation, and clear protocols to guarantee results can be verified independently." },
    { name: "Hypothesis Development", category: "lab", desc: "Establishing testable, logically sound assertions concerning biological or mechanical relationships to guide research focus." },
    { name: "Validation Studies", category: "lab", desc: "Proving that a diagnostic process, material, or system consistently fulfills its clinical purpose and meets end-user requirements." },
    { name: "Prototype Testing", category: "lab", desc: "Conducting benchtop mechanical, electrical, or chemical evaluations of functional models to verify target performance metrics." },
    { name: "Design Verification", category: "lab", desc: "Proving that design outputs conform to specified design inputs through tests, inspections, and mathematical modeling." },
    { name: "Failure Analysis", category: "lab", desc: "Investigating material fractures, sensor drifts, or structural yield failures to prevent device issues under physical load." },
    { name: "Root Cause Analysis", category: "lab", desc: "Using structured diagnostic methodologies (e.g. fishbone, 5-Whys) to identify the fundamental cause of a failure or quality variation." },
    { name: "Comparative Study Design", category: "lab", desc: "Creating objective experimental groups to compare materials, prototypes, or processes against current gold-standard controls." },

    // 3. Computational & Quantitative Skills
    { name: "Biomedical Data Analysis", category: "computational", desc: "Extracting features, identifying trends, and processing raw biological signal outputs using numerical tools." },
    { name: "Scientific Computing", category: "computational", desc: "Using mathematical algorithms, scripting, and computing resources to solve complex physics, chemical, or biological problems." },
    { name: "Python for Research", category: "computational", desc: "Writing custom Python scripts (NumPy, SciPy, Pandas) for data parsing, statistics, and automation of repetitive tasks." },
    { name: "Data Visualization", category: "computational", desc: "Creating scientific plots, heatmaps, and publication-ready multi-axis figures using GraphPad, Origin, MATLAB, and Python." },
    { name: "AI in Healthcare", category: "computational", desc: "Applying artificial intelligence, neural networks, and pattern recognition to medical imaging, biosignals, and patient diagnostics." },
    { name: "Computational Modeling", category: "computational", desc: "Constructing mathematical simulations of physical systems (e.g. electrical interfaces, fluid mechanics) to predict properties." },
    { name: "Signal Analysis", category: "computational", desc: "Filtering, digitizing, and analyzing physiological signals (EEG, ECG, pressure arrays) using Fourier transform and filter banks." },
    { name: "Statistical Computing", category: "computational", desc: "Employing software applications (SPSS, R) to perform multi-variable regressions, survival analyses, and variance tests." },
    { name: "Image Analysis", category: "computational", desc: "Processing digital microscopy slides, radiology films, or cellular photographs using thresholding and tracking (e.g. ImageJ)." },
    { name: "Research Automation", category: "computational", desc: "Automating data acquisition, sensor telemetry collection, and file parsing to accelerate research productivity." },
    { name: "Machine Learning Fundamentals", category: "computational", desc: "Utilizing classification, regression, and clustering algorithms to identify physiological abnormalities or label biomaterial characteristics." },
    { name: "Computer Vision", category: "computational", desc: "Training algorithms to interpret digital image inputs, perform object detection, and segment bio-signals or cellular boundaries." },
    { name: "Deep Learning for Biomedical Applications", category: "computational", desc: "Deploying deep convolutional networks (CNNs) and real-time detection models (YOLO) for anatomical or diagnostic identification." },

    // 4. Medical Device & Regulatory Keywords
    { name: "Medical Devices", category: "regulatory", desc: "Any instrument, software, or material intended for medical use, governed by strict efficacy and bio-safety guidelines." },
    { name: "Product Development", category: "regulatory", desc: "The end-to-end pathway of medical device creation: from user needs, design requirements, and risk analysis to clinical trials and clearance." },
    { name: "Design Thinking", category: "regulatory", desc: "A human-centered problem-solving process used to empathize with clinicians/patients and iterate on usable medical hardware." },
    { name: "Validation & Verification", category: "regulatory", desc: "Verifying that a product was built correctly (to specs) and validating that it was the correct product (meets user/clinical needs)." },
    { name: "Clinical Research Awareness", category: "regulatory", desc: "Understanding the ethical frameworks, Good Clinical Practice (GCP) guidelines, and design criteria of clinical trial studies." },
    { name: "Risk Analysis", category: "regulatory", desc: "Systematic identification and mitigation of safety hazards associated with medical hardware, using ISO 14971/FMEA frameworks." },
    { name: "Human Factors Consideration", category: "regulatory", desc: "Evaluating ergonomics, button configurations, and error potentials of user interfaces to ensure safe use by clinical operators." },
    { name: "Prototype Development", category: "regulatory", desc: "Constructing physical mockups and active models to verify geometric tolerances, fit, and component-level layouts." },
    { name: "ISO 13485 Awareness", category: "regulatory", desc: "Understanding the international standard specifying requirements for quality management systems specific to medical devices." },
    { name: "FDA Regulatory Awareness", category: "regulatory", desc: "Familiarity with the US Food and Drug Administration pathways, including 510(k) notifications, PMA clearances, and Class classification." },
    { name: "MDR Awareness", category: "regulatory", desc: "Understanding the European Medical Device Regulation (MDR) compliance structure, CE marking, and technical documentation requirements." },
    { name: "Quality Systems", category: "regulatory", desc: "The organizational structure and quality controls verifying that medical devices conform to safety specifications during production." },
    { name: "Technical Documentation", category: "regulatory", desc: "Compiling Design History Files (DHF), Device Master Records (DMR), and validation reports essential for regulatory review." },
    { name: "Device Testing", category: "regulatory", desc: "Subjecting medical hardware to mechanical fatigue, electrical insulation, and electromagnetic compatibility tests." },
    { name: "Performance Evaluation", category: "regulatory", desc: "Conducting benchtop and simulation studies to determine whether a device meets its claims regarding accuracy, yield, and durability." },
    { name: "Biomechanical Evaluation", category: "regulatory", desc: "Analyzing body forces, kinetics, kinematics, and load distribution of orthotics or wearable systems." },
    { name: "Electrical Safety Considerations", category: "regulatory", desc: "Mitigating electrical shock, leakage currents, isolation barriers, and electrostatic discharge risks in active medical devices (IEC 60601-1)." },
    { name: "Functional Prototyping", category: "regulatory", desc: "Creating functional, sensor-integrated prototypes capable of logging physiological metrics and transmitting data in real-time." },
    { name: "Wearable Biomedical Systems", category: "regulatory", desc: "On-body sensors logging metrics (plantar pressure, motion, body temperature) for continuous outpatient diagnostics." },

    // 5. Domain-Specific Technical Terms (Thesis/Projects)
    { name: "Conductive TPU", category: "thesis", desc: "Thermoplastic polyurethane doped with conductive elements (e.g. carbon particles) to produce flexible, stretchable electronic sensors." },
    { name: "Electroplating", category: "thesis", desc: "Depositing a metallic coating onto a conductive substrate using an electrolytic current to increase electrical conductivity." },
    { name: "Activated Carbon Coating", category: "thesis", desc: "Applying highly porous carbon layers to sensors to dramatically increase surface area, capacitance, and charge transmission." },
    { name: "Pedobarography", category: "thesis", desc: "The measurement and clinical evaluation of pressure fields acting between the plantar surface of the foot and a supporting floor during locomotion." },
    { name: "Plantar Pressure Analysis", category: "thesis", desc: "Extracting localized pressure curves beneath specific foot zones (heel, metatarsals) to analyze gait abnormalities or design orthotics." },
    { name: "Gait Analysis", category: "thesis", desc: "The systematic study of human locomotion, using sensor telemetry and biomechanical metrics to evaluate walk cycles." },
    { name: "Biomechanics", category: "thesis", desc: "Applying classic mechanics (forces, acceleration, stresses) to biological systems, specifically studying human locomotion and orthopedic loads." },
    { name: "Pressure Distribution Mapping", category: "thesis", desc: "Visualizing tactile sensor grids as color-coded spatial pressure maps to identify focal points of stress during weight-bearing." },
    { name: "ANSYS Simulation", category: "thesis", desc: "Utilizing ANSYS software to simulate physical stress distributions, structural deflections, and material behavior in virtual testing environments." },
    { name: "Finite Element Analysis (FEA)", category: "thesis", desc: "A computational method to simulate how materials deform, fail, or distribute stress under specific complex loading conditions." },
    { name: "Resistance Characterization", category: "thesis", desc: "Evaluating how a conductive material's electrical resistance changes dynamically under compression, flexion, or temperature fluctuations." },
    { name: "Wearable Healthcare Technology", category: "thesis", desc: "Non-invasive electronic devices integrated into clothing or accessories to monitor biometric markers and support diagnostic decision-making." },
    { name: "Reflexology-Based Design", category: "thesis", desc: "Structuring pressure sensors or therapeutic patterns on insoles corresponding to specific acupuncture and neurological zones." },
    { name: "Grounding Interface Design", category: "thesis", desc: "Optimizing the grounding paths between body wearable sensors and the physical earth to dissipate static charges and establish signal references." },
    { name: "Foot–Ground Electrical Interface", category: "thesis", desc: "Analyzing how electrical signals and micro-currents are transmitted or grounded during contact between a shoe sole and the ground." },

    // 6. Tools & Software Section
    { name: "Microsoft Excel", category: "tools", subcat: "Research & Analysis", desc: "Compiling raw lab logs, organizing datasets, calculating standard deviations, and plotting initial scientific trends." },
    { name: "GraphPad Prism", category: "tools", subcat: "Research & Analysis", desc: "Leading scientific application used for statistical analysis, dose-response curve fitting, t-tests, and publishing-ready graphics." },
    { name: "OriginPro", category: "tools", subcat: "Research & Analysis", desc: "High-end data analysis and graphing software for scientific plotting, peak integration, and curve-fitting modeling." },
    { name: "SPSS", category: "tools", subcat: "Research & Analysis", desc: "Statistical package used for complex data management and descriptive/inferential statistical testing in clinical databases." },
    { name: "MATLAB", category: "tools", subcat: "Research & Analysis", desc: "Programming and numeric computing environment optimized for bio-signal analysis, filtering, modeling, and custom algorithms." },
    { name: "Python", category: "tools", subcat: "Research & Analysis", desc: "Programming language used in biomedical science for custom analytics scripts, automation, machine learning pipelines, and data processing." },
    { name: "ImageJ", category: "tools", subcat: "Imaging & Visualization", desc: "Java-based image processing tool used to analyze pixel intensities, cell counts, and spatial dimensions in microscopy data." },
    { name: "Canva", category: "tools", subcat: "Imaging & Visualization", desc: "Graphic platform used to format academic presentation slides, graphical abstracts, and research poster layouts." },
    { name: "PowerPoint", category: "tools", subcat: "Imaging & Visualization", desc: "Creating clear, visually structured slide decks for academic defenses, lab meetings, and conference presentations." },
    { name: "ANSYS", category: "tools", subcat: "Engineering & Design", desc: "Software for Finite Element Method (FEM) analysis used to simulate deformation and structural stress in orthotics and wearable prototypes." },
    { name: "SolidWorks", category: "tools", subcat: "Engineering & Design", desc: "3D CAD modeling software used to design casing geometries and rapid prototyping components for diagnostic instruments." },
    { name: "AutoCAD", category: "tools", subcat: "Engineering & Design", desc: "Computer-aided drafting software for creating detailed, dimensioned 2D engineering drawings and fabrication templates." },
    { name: "HTML/CSS/JavaScript", category: "tools", subcat: "Programming & Technical", desc: "Core web languages used to build interactive user interfaces, web applications, and live portfolio systems." },
    { name: "Scientific Computing", category: "tools", subcat: "Programming & Technical", desc: "Solving mathematical and physical representations of biological processes using numerical methods and custom algorithms." },
    { name: "AI Research Tools", category: "tools", subcat: "Programming & Technical", desc: "Utilizing advanced AI models, code synthesizers, and literature review helpers to accelerate prototyping and research workflows." },
    { name: "PubMed", category: "tools", subcat: "Literature & Documentation", desc: "Search engine maintained by the NCBI/NLM referencing millions of biomedical citations, journals, and online books." },
    { name: "Google Scholar", category: "tools", subcat: "Literature & Documentation", desc: "Search engine indexing the full text or metadata of scholarly literature across an array of publishing formats and disciplines." },
    { name: "Mendeley", category: "tools", subcat: "Literature & Documentation", desc: "Reference manager and academic social network used to organize citations, read papers, and generate bibliographies." },
    { name: "Zotero", category: "tools", subcat: "Literature & Documentation", desc: "Free, open-source reference manager that acts as a personal research assistant, saving citations and linking metadata directly from browser pages." }
];

// --- Keyword Explorer Renderer Helpers ---
function showKeywordDetails(keyword) {
    const placeholder = document.getElementById('details-placeholder');
    const content = document.getElementById('details-content');
    const titleEl = document.getElementById('details-title');
    const catEl = document.getElementById('details-category');
    const descEl = document.getElementById('details-desc');
    const calloutEl = document.getElementById('details-context-callout');
    
    if (!placeholder || !content || !titleEl || !catEl || !descEl) return;
    
    let catName = "";
    switch(keyword.category) {
        case "core": catName = "Core Biomedical Engineering"; break;
        case "lab": catName = "Research & Lab Competency"; break;
        case "computational": catName = "Computational & Quantitative"; break;
        case "regulatory": catName = "Medical Device & Regulatory"; break;
        case "thesis": catName = "Thesis & Special Domain"; break;
        case "tools": catName = `Tools & Software • ${keyword.subcat}`; break;
        default: catName = "Biomedical Skill";
    }
    
    const isLightTheme = document.body.classList.contains('light-theme');
    catEl.style.color = getCategoryColor(keyword.category, isLightTheme, 0.95);
    catEl.textContent = catName;
    titleEl.textContent = keyword.name;
    descEl.textContent = keyword.desc;
    
    if (calloutEl) {
        const borderColor = getCategoryColor(keyword.category, isLightTheme, 0.85);
        const bgColor = getCategoryColor(keyword.category, isLightTheme, isLightTheme ? 0.04 : 0.08);
        
        calloutEl.style.borderLeftColor = borderColor;
        calloutEl.style.backgroundColor = bgColor;
        
        calloutEl.innerHTML = `<strong>Context & Experience:</strong><br>${categoryPersonalizedDescriptions[keyword.category]}`;
        calloutEl.style.display = 'block';
    }
    
    placeholder.style.display = 'none';
    content.style.display = 'block';
    
    // Add micro-animation
    content.classList.remove('details-content-animate');
    void content.offsetWidth; // Trigger reflow to restart animation
    content.classList.add('details-content-animate');
}

function clearKeywordDetails() {
    const placeholder = document.getElementById('details-placeholder');
    const content = document.getElementById('details-content');
    
    if (!placeholder || !content) return;
    
    placeholder.style.display = 'block';
    content.style.display = 'none';
    content.classList.remove('details-content-animate');
}

// --- Dynamic Persona Progress Gauge Animation ---
function animatePersonaGauges() {
    const gaugeFills = document.querySelectorAll('.gauge-fill');
    gaugeFills.forEach(fill => {
        const module = fill.closest('.persona-module');
        if (!module) return;
        const targetValue = parseInt(module.getAttribute('data-value'), 10) || 0;
        
        // Circumference is 201 (2 * PI * 32 = 201.06)
        const circumference = 201;
        const offset = circumference - (circumference * targetValue) / 100;
        
        // Slightly delayed transition initialization to guarantee DOM visibility triggers transition
        setTimeout(() => {
            fill.style.strokeDashoffset = offset;
        }, 150);
    });
}

// --- DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // --- Switchable About Me Tabs & sliding indicator ---
    const bioTabs = document.querySelectorAll('.bio-tab');
    const bioVersions = document.querySelectorAll('.bio-version');
    const tabIndicator = document.querySelector('.bio-tab-indicator');
    
    function updateTabIndicator(activeTab) {
        if (!tabIndicator || !activeTab) return;
        tabIndicator.style.width = `${activeTab.offsetWidth}px`;
        tabIndicator.style.left = `${activeTab.offsetLeft}px`;
    }
    
    // Initialize indicator on load
    const initialActiveTab = document.querySelector('.bio-tab.active');
    if (initialActiveTab) {
        // Wait a tiny bit for fonts/layout to settle
        setTimeout(() => updateTabIndicator(initialActiveTab), 100);
    }
    
    // Listen to window resizing
    window.addEventListener('resize', () => {
        const currentActiveTab = document.querySelector('.bio-tab.active');
        if (currentActiveTab) updateTabIndicator(currentActiveTab);
    });
    
    bioTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetBio = tab.getAttribute('data-bio');
            const versionId = `bio-${targetBio}`;
            
            if (tab.classList.contains('active')) return;
            
            const activeVersion = document.querySelector('.bio-version.active');
            const targetVersion = document.getElementById(versionId);
            const bioContent = document.querySelector('.bio-content');
            
            if (!activeVersion || !targetVersion || !bioContent) return;
            
            // Phase 1: Lock Height
            const startHeight = bioContent.offsetHeight;
            bioContent.style.height = `${startHeight}px`;
            
            // Phase 2: Slide Tab Indicator
            bioTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateTabIndicator(tab);
            
            // Phase 3: Transition Text Description
            activeVersion.classList.remove('active');
            activeVersion.classList.add('exiting');
            
            targetVersion.classList.add('active');
            
            // Force a reflow
            void targetVersion.offsetHeight;
            
            // Phase 4: Release Height
            const endHeight = targetVersion.offsetHeight;
            bioContent.style.height = `${endHeight}px`;
            
            setTimeout(() => {
                activeVersion.classList.remove('exiting');
                bioContent.style.height = '';
            }, 400); // matches transition time
        });
    });

    // --- Keyword Explorer Setup ---
    const keywordSearchInput = document.getElementById('keyword-search');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    let activeFilter = "all";
    let activeSearch = "";
    
    // Graph instance reference
    let graphInstance = null;
    
    // Initialize Connected Network Topology Graph immediately
    graphInstance = new NetworkTopologyGraph('network-canvas', 'network-canvas-container');
    if (graphInstance) {
        graphInstance.resize();
        graphInstance.updateFilter(activeFilter, activeSearch);
        graphInstance.startLoop();
    }
    
    // Expose updateNetworkColors to theme toggle
    window.updateNetworkColors = (isLightTheme) => {
        if (graphInstance) {
            graphInstance.isLightTheme = isLightTheme;
        }
    };
    
    if (keywordSearchInput) {
        keywordSearchInput.addEventListener('input', (e) => {
            activeSearch = e.target.value.trim();
            if (clearSearchBtn) {
                clearSearchBtn.style.display = activeSearch.length > 0 ? 'block' : 'none';
            }
            if (graphInstance) {
                graphInstance.updateFilter(activeFilter, activeSearch);
            }
        });
    }
    
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (keywordSearchInput) {
                keywordSearchInput.value = "";
                activeSearch = "";
                clearSearchBtn.style.display = 'none';
                if (graphInstance) {
                    graphInstance.updateFilter(activeFilter, activeSearch);
                }
                keywordSearchInput.focus();
            }
        });
    }
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeFilter = tab.getAttribute('data-filter');
            if (graphInstance) {
                graphInstance.updateFilter(activeFilter, activeSearch);
            }
        });
    });

    initTheme();
    initCarousel();
    animatePersonaGauges();
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
