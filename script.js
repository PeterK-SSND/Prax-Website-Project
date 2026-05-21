const data = {
    home: [
        {
            title: "About Me",
            desc: "Hello! Welcome to my website. I am student from IT school, Nová Dubnica, Slovakia. My prax is focused on web development and IoT (Internet of Things).",
            img: "./img/about-me.jpg",
            url: "#"
        },
        {
            title: "About my School",
            desc: "Spojená škola sv. Jána Bosca in Nová Dubnica provides quality technical and general education guided by salesian values. Through participation in the Erasmus+ program, the school creates opportunities for its students to travel abroad, gain valuable international work experience at Vitalis, and build a strong foundation for their future professional careers.",
            img: "./img/ssnd.png",
            url: "#"
        },
        {
            title: "Vitalis Campus (Gut Wehlitz)",
            desc: "The Vitalis project locatOur home during the internship. Gut Wehlitz in Schkeuditz is a historic manor house transformed into a modern campus. It's a place where work meets fun, bringing together students from across Europe to share experiences, work on technical projects, and create lifelong international friendships.",
            img: "./img/vitalis-campus.jpg",
            url: "#"
        }
    ],
    practice1: [
        {
            title: "1st Week - Complete HTML Course",
            desc: "The professional training began with an intensive study of the HTML language, the core building block of the web. The course covered everything from basic document anatomy to modern Semantic HTML structures, teaching how to properly layout content, optimize sites for SEO, and ensure full web accessibility standards.",
            img: "./img/Week1-Introduction-to-HTML.png",
            url: "#"
        },
        {
            title: "1st Week - Complete CSS Course",
            desc: "A comprehensive course focused on advanced website styling and responsive web design. The training provided a deep understanding of the CSS Box Model, positioning, modern layout systems like Flexbox and CSS Grid, responsive media queries, and the creative use of colors, gradients, and custom animations.",
            img: "./img/Week1-Introduction-to-CSS.png",
            url: "#"
        },
        {
            title: "1st Week - Complete JavaScript Course",
            desc: "An in-depth introduction to the programming language of the modern web. This logical block was dedicated to core programming fundamentals, including variables, data types, complex conditional statements, loops, functions, and working with data structures like arrays and objects to create dynamic user interactions.",
            img: "./img/Week1-Introduction-to-JS.png",
            url: "#"
        },
        {
            title: "1st Week - Finishing Courses",
            desc: "Successfully completing the core web development educational paths. All intensive courses covering JavaScript, CSS, and HTML were finished with a 100% progress rate, laying a comprehensive theoretical and practical foundation for building standalone web applications.",
            img: "./img/Week1-Finish-Courses.png",
            url: "#"
        },
        {
            title: "1st Week - Website Project",
            desc: "Putting all the newly acquired skills into practice on a real assignment. The final task of the week was coding this responsive presentation web portfolio from scratch, applying advanced layouts, custom glassmorphic design, and interactive dynamic carousel features.",
            img: "./img/Week1-Website-Project.png",
            url: "#"
        }
    ],
    practice2: [
        {
            title: "",
            desc: "",
            img: "",
            url: "#"
        }
    ],
    culture1: [
        {
            title: "Leipzig - Market Square & Old Town",
            desc: "The historic center of Leipzig is dominated by the beautiful Market Square and the Old Town Hall (Altes Rathaus). This vibrant area is rich in Renaissance architecture, traditional passages, and street artists, making it the perfect starting point for discovering the city's unique cultural atmosphere.",
            img: "./img/Leipzig-Old-Town-Hall.jpg",
            url: "#"
        },
        {
            title: "Monument to the Battle of the Nations",
            desc: "One of the tallest monuments in Europe, commemorating the historic defeat of Napoleon at Leipzig in 1813. This massive stone structure offers an impressive look into European history, and after climbing its steps, it provides a breathtaking panoramic view of the entire city and its surroundings.",
            img: "./img/Leipzig-monument-battle-of-nations.jpeg",
            url: "#"
        },
        {
            title: "Red Bull Arena",
            desc: "The home stadium of RB Leipzig and a major landmark for modern sports culture in Germany. Built inside the historic Central Stadium wall, this impressive football arena hosts major UEFA Champions League matches and huge international music concerts, bringing an energetic atmosphere to the city.",
            img: "./img/Leipzig-Red-Bull-Arena.jpg",
            url: "#"
        },
        {
            title: "Panorama Tower",
            desc: "Standing at 142 meters, this iconic skyscraper is the tallest landmark of Leipzig's modern skyline. Shaped like an open book, it offers a striking contrast to the surrounding historic buildings and features an open-air observation deck at the top, presenting a stunning 360-degree view of the region.",
            img: "./img/Leipzig-Panorama-Tower.jpg",
            url: "#"
        },
        {
            title: "Leipzig Opera",
            desc: "The third oldest opera house in Europe, representing the rich musical heritage of the city. Located at Augustusplatz, this grand theater is famous for its outstanding acoustics, world-class ballet performances, and close historical connection to famous composers like Wagner and Mendelssohn.",
            img: "./img/Leipzig-Opera.jpg",
            url: "#"
        }
    ],
    culture2: [
        {
            title: "Reichstag Building",
            desc: "The historic seat of the German Parliament (Bundestag) and one of Berlin's most significant landmarks. It is famous for its rich history and the modern large glass dome designed by Norman Foster, which offers an impressive 360-degree view of the surrounding city and symbolizes political transparency.",
            img: "./img/Berlin-Reichstag-Building.avif",
            url: "#"
        },
        {
            title: "Berlin Cathedral",
            desc: "The monumental Evangelical Supreme Parish and Collegiate Church (Berliner Dom) located on the Museum Island. This magnificent 19th-century Neo-Renaissance building stands out with its majestic dome, richly decorated interior, and the historic crypt of the Hohenzollern dynasty.",
            img: "./img/Berlin-Cathedral.jpg",
            url: "#"
        },
        {
            title: "Berlin Brandenburg Gate",
            desc: "The ultimate national symbol of Germany, representing peace, unity, and the turbulent history of Berlin. This monumental 18th-century Neoclassical triumphal arch once stood directly at the border during the Cold War and is now the heart of major public gatherings and celebrations.",
            img: "./img/Berlin-Brandenburg-Gate.jpg",
            url: "#"
        },
        {
            title: "Alexanderplatz",
            desc: "One of the most famous and busiest public squares in Berlin, acting as a major transport and cultural hub. It is dominated by the iconic TV Tower (Fernsehturm) and the historic World Clock, showcasing a unique mix of socialist modernist architecture and vibrant modern city life.",
            img: "./img/Berlin-Alexander-Platz.jpg",
            url: "#"
        },
        {
            title: "Potsdamer Platz",
            desc: "A striking example of modern urban renewal and architectural innovation. Completely destroyed during World War II and split by the Berlin Wall, it was rebuilt into a futuristic district filled with spectacular skyscrapers, shopping centers, and the spectacular glass-roofed Sony Center.",
            img: "./img/Berlin-Potsdamer-Platz.jpg",
            url: "#"
        }
    ],
    freetime: [
        {
            title: "",
            desc: "",
            img: "",
            url: "#"
        }
    ]
};

let currentCategory = 'home';
let currentSlideIndex = 0;
let currentSlide;
let autoSwapTimer;

function refreshCurrentSlide() {
    currentSlide = data[currentCategory][currentSlideIndex];
}

function toggleDropdown(dropdownId, event) {
    event.stopPropagation();

    closeAllDropdowns();

    document.getElementById(dropdownId).classList.toggle("show");
}

function closeAllDropdowns() {
    let dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("show");
    });
}

window.onclick = function (event) {
    if (event.target.matches('.nav-btn') === false) {
        closeAllDropdowns();
    }
}

function changeCategory(category, event) {
    currentCategory = category;
    currentSlideIndex = 0;

    closeAllDropdowns();

    document.querySelectorAll('.nav-btn').forEach(function (btn) {
        btn.classList.remove('active');
    });

    if (category === 'practice1' || category === 'practice2') {
        document.querySelectorAll('.dropdown .nav-btn')[0].classList.add('active');
    } else if (category === 'culture1' || category === 'culture2') {
        document.querySelectorAll('.dropdown .nav-btn')[1].classList.add('active');
    } else {
        event.target.classList.add('active');
    }

    refreshCurrentSlide();
    updateSliderContent();
    resetTimer();
}

function updateDots() {
    let dotsContainer = document.getElementById('carousel-dots');
    dotsContainer.innerHTML = '';

    let totalSlides = data[currentCategory].length;

    for (let i = 0; i < totalSlides; i++) {
        let dot = document.createElement('div');
        dot.className = 'dot';

        if (i === currentSlideIndex) {
            dot.classList.add('active');
        }

        dot.onclick = function () {
            currentSlideIndex = i;
            refreshCurrentSlide();
            updateSliderContent();
            resetTimer();
        };

        dotsContainer.appendChild(dot);
    }
}

function updateSliderContent() {
    let imgElement = document.getElementById('carousel-img');

    imgElement.style.opacity = 0;

    setTimeout(function () {
        document.getElementById('content-title').innerText = currentSlide.title;
        document.getElementById('content-desc').innerText = currentSlide.desc;

        imgElement.src = currentSlide.img;
        document.getElementById('carousel-link').href = currentSlide.url;

        imgElement.style.opacity = 1;

        updateDots();
    }, 250);
}

function changeSlide(direction) {
    let totalSlides = data[currentCategory].length;

    if (direction === 'next') {
        currentSlideIndex = currentSlideIndex + 1;
        if (currentSlideIndex >= totalSlides) currentSlideIndex = 0;
    }

    if (direction === 'prev') {
        currentSlideIndex = currentSlideIndex - 1;
        if (currentSlideIndex < 0) currentSlideIndex = totalSlides - 1;
    }

    refreshCurrentSlide();
    updateSliderContent();
    resetTimer();
}

function startTimer() {
    autoSwapTimer = setInterval(function () {
        changeSlide('next');
    }, 15000);
}

function resetTimer() {
    clearInterval(autoSwapTimer);
    startTimer();
}

window.onload = function () {
    refreshCurrentSlide();
    updateSliderContent();
    startTimer();
};