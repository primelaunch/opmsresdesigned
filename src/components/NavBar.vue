<template>
    <nav class="navbar" :class="{ 'scrolled': isScrolled, 'at-top': atTop }">
        <router-link to="/" class="brand-link">
            <div class="brand">
                <img src="@/assets/logo.png" alt="Company Logo" class="logo" />
            </div>
        </router-link>
        
        <div class="nav-container">
            <ul class="nav-links" :class="{ 'active': isMenuOpen }">
                <li class="nav-item" v-for="(link, index) in navLinks" :key="index">
                    <router-link 
                        :to="link.path" 
                        class="nav-link"
                        :style="{ 'transition-delay': `${index * 0.05}s` }"
                        @click="isMenuOpen = false"
                    >
                        {{ link.text }}
                        <span class="link-underline"></span>
                    </router-link>
                </li>
                <li class="nav-item phone-item">
                    <a href="tel:8881234567" class="phone-link">
                        <span class="phone-icon">📞</span>
                        <span>(888) 123-4567</span>
                    </a>
                </li>
            </ul>
            
            <button class="mobile-menu-button" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const atTop = ref(true);
const lastScrollY = ref(0);

const navLinks = [
    { path: '/', text: 'HOME' },
    { path: '/pest-control', text: 'PEST CONTROL' },
    { path: '/services', text: 'SERVICES' },
    { path: '/about', text: 'ABOUT US' },
    { path: '/testimonials', text: 'TESTIMONIALS' },
    { path: '/blog', text: 'BLOG' }
];

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Check if at top of page
    atTop.value = currentScrollY < 10;
    
    // Determine scroll direction
    if (currentScrollY > lastScrollY.value && currentScrollY > 50) {
        // Scrolling down
        isScrolled.value = true;
    } else {
        // Scrolling up or at top
        isScrolled.value = false;
    }
    
    // Update last scroll position
    lastScrollY.value = currentScrollY;
    
    // Add active class to visible section links
    if (currentScrollY > 100) {
        document.querySelectorAll('section').forEach(section => {
            const rect = section.getBoundingClientRect();
            const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (link) {
                if (rect.top <= 100 && rect.bottom >= 100) {
                    link.classList.add('active-section');
                } else {
                    link.classList.remove('active-section');
                }
            }
        });
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar {
    z-index: 1000;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: hsla(0, 0%, 100%, 0.9);
    padding: 0 8vw;
    height: 12vh;
    box-shadow: 0 0.2vh 1vh rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(0.5vh);
    border-bottom: 1px solid hsla(0, 0%, 90%, 1);
    transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
    transform: translateY(0);
}

.navbar.scrolled {
    height: 8vh;
    background: hsla(0, 0%, 100%, 0.98);
    box-shadow: 0 0.4vh 1.5vh rgba(0, 0, 0, 0.1);
}

.navbar.scrolled:not(.at-top) {
    transform: translateY(-100%);
}

.navbar.scrolled.show {
    transform: translateY(0);
}

.brand-link {
    display: flex;
    align-items: center;
    height: 100%;
    z-index: 1001;
}

.logo {
    height: 6.2vh;
    transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}

.navbar.scrolled .logo {
    height: 4.5vh;
}

.logo:hover {
    transform: scale(1.05) rotate(-2deg);
}

.nav-container {
    display: flex;
    align-items: center;
    height: 100%;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1.5vw;
    height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
}

.nav-item {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
}

.nav-link {
    text-decoration: none;
    font-size: 1.4vh;
    font-weight: 600;
    color: hsl(0, 0%, 40%);
    letter-spacing: 0.05vw;
    text-transform: uppercase;
    padding: 0 0.8vw;
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.link-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.3vh;
    background: linear-gradient(90deg, hsl(88, 84%, 62%), hsl(88, 84%, 30%));
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}

.nav-link:hover .link-underline,
.nav-link.router-link-active .link-underline,
.nav-link.active-section .link-underline {
    transform: scaleX(1);
    transform-origin: left;
}

.nav-link:hover {
    color: hsl(88, 84%, 30%);
    transform: translateY(-0.2vh);
}

.nav-link.router-link-active,
.nav-link.active-section {
    color: hsl(88, 84%, 30%);
    font-weight: 700;
}

.phone-item {
    margin-left: 1.5vw;
    transition: all 0.3s ease;
}

.navbar.scrolled .phone-item {
    margin-left: 1vw;
}

.phone-link {
    display: flex;
    align-items: center;
    gap: 0.5vw;
    text-decoration: none;
    background: linear-gradient(90deg, hsl(88, 84%, 30%), hsl(88, 84%, 40%));
    color: white;
    padding: 1vh 1.5vw;
    border-radius: 0.5vh;
    font-weight: 600;
    font-size: 1.3vh;
    transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
    box-shadow: 0 0.3vh 0.6vh rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.navbar.scrolled .phone-link {
    padding: 0.8vh 1.2vw;
    font-size: 1.2vh;
}

.phone-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s ease;
}

.phone-link:hover::before {
    left: 100%;
}

.phone-link:hover {
    background: linear-gradient(90deg, hsl(88, 84%, 40%), hsl(88, 84%, 30%));
    transform: translateY(-0.2vh);
    box-shadow: 0 0.5vh 1vh rgba(0, 0, 0, 0.15);
}

.phone-icon {
    font-size: 1.6vh;
    transition: transform 0.3s ease;
}

.phone-link:hover .phone-icon {
    transform: rotate(15deg);
}

.mobile-menu-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 1vh;
    z-index: 1001;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 4vh;
    height: fit-content;
}

.bar {
    width: 3.44vh;
    height: 0.3vh;
    background: hsl(88, 84%, 30%);
    margin: 0.3vh 0;
    transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
    transform-origin: center;
}

.mobile-menu-button.active .bar:nth-child(1) {
    transform: translateY(0.7vh) rotate(45deg);
}

.mobile-menu-button.active .bar:nth-child(2) {
    opacity: 0;
}

.mobile-menu-button.active .bar:nth-child(3) {
    transform: translateY(-0.7vh) rotate(-45deg);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .navbar {
        padding: 0 5vw;
    }
    
    .nav-links {
        gap: 1vw;
    }
    
    .nav-link {
        font-size: 1.2vh;
    }
}

@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: white;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        padding: 15vh 0 5vh;
        gap: 0;
        box-shadow: 0 1vh 2vh rgba(0, 0, 0, 0.1);
        transform: translateY(-100%);
        transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
    }
    
    .nav-links.active {
        transform: translateY(0);
    }
    
    .nav-item {
        width: 100%;
        height: auto;
        padding: 1.5vh 0;
        text-align: center;
        opacity: 0;
        transform: translateY(2vh);
        transition: all 0.4s ease;
    }
    
    .nav-links.active .nav-item {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-link {
        justify-content: center;
        padding: 2vh 0;
        width: 100%;
        font-size: 2vh;
    }
    
    .phone-item {
        margin: 3vh 0 0 0;
        width: auto;
        opacity: 0;
        transform: translateY(2vh);
    }
    
    .nav-links.active .phone-item {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.3s;
    }
    
    .mobile-menu-button {
        display: flex;
    }
    
    .navbar {
        height: 10vh;
    }
    
    .navbar.scrolled {
        height: 8vh;
    }
    
    .link-underline {
        display: none;
    }
    
    .nav-link.router-link-active,
    .nav-link.active-section {
        color: hsl(88, 84%, 30%);
        font-weight: 700;
        background: hsla(88, 84%, 30%, 0.1);
    }
}
</style>