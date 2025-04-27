<template>
    <div class="page">
        <!-- Hero Section with Parallax -->
        <section class="hero">
            <div class="parallax-banner">
                <img :src="currentImage">
                <div v-if="imageIndex == 0" class="uvp" id="uvp1">
                    <h1>WHAT'S EATING YOU?</h1>
                    <h2>Don't You Deserve a Pest-Free Home?</h2>
                    <div class="bugs">
                        <div style=" animation-delay: 2s;" class="bug">Mosquitoes<i class="fas fa-bug"></i></div>
                        <div style=" animation-delay: 2.5s;"  class="bug">Mites<i class="fas fa-bug"></i></div>
                        <div style=" animation-delay: 3s;" class="bug">Bed Bugs<i class="fas fa-bug"></i></div>
                        <div style=" animation-delay: 2s;" class="bug">Fleas<i class="fas fa-bug"></i></div>
                        <div style=" animation-delay: 2.5s;"  class="bug">Ticks<i class="fas fa-bug"></i></div>
                    </div>
                    <img src="@/assets/mosquito22.png" alt="">
                </div>
                <div v-if="imageIndex == 1" class="uvp" id="uvp2">
                    <h1> Take Back Your Backyard!</h1>
                    <hr/>
                    <h2><i class="fas fa-shield-alt"></i>Organic Outdoor Pest Control</h2>
                </div>
                <div v-if="imageIndex == 2" class="uvp" id="uvp3">
                    <h1>Complete Indoor <u>Organic</u> Pest Management</h1>
                </div>
                
            </div>
            
        </section>
        <div class="badges">
                    <img src="@/assets/elite-solid-border.png" alt="Elite Service Badge">
                    <img src="@/assets/boha-2019-solid-border.png" alt="BOHA 2019 Award">
                    <img src="@/assets/toprated-solid-border.png" alt="Top Rated Service">
                    <img src="@/assets/bbb-logo-400px_1559676786.png" alt="Better Business Bureau Accredited">
        </div>
       
        <!-- Value Proposition -->
        <section class="value-proposition">
            <h3><i class="fas fa-bug"></i> Mosquito & Tick Season has Arrived!</h3>
            <div class="divider"></div>
            <div class="content">

           
            <img class="mosquito-image" src="@/assets/mosquitoes.png" alt="Mosquito illustration">
            <div class="hook">
            
                <h2><i class="fas fa-shield-virus"></i> This year protect your friends, family, and pets before their first bite!</h2>
                <p><i class="fas fa-exclamation-triangle"></i> Mosquitoes & Ticks are known for spreading dangerous viruses and diseases. You have enough to worry about without adding West Nile Virus, Zika, or Lyme Disease to your list.</p>
                <button class="cta-button"><i class="fas fa-calendar-check"></i> Protect My Family</button>
            </div>
        </div>
        </section>
    

        <!-- Contact Form -->
        <section class="contact-form">
            <h2 class="form-title"><i class="fas fa-calendar-alt"></i> Schedule Your Appointment</h2>
            <div class="form-container">
                <div class="form-fields">
                    <div class="form-group">
                        <label for="name"><i class="fas fa-user"></i> Your Name (required)</label>
                        <input type="text" id="name" placeholder="Enter your full name">
                    </div>
                    <div class="form-group">
                        <label for="email"><i class="fas fa-envelope"></i> Your Email (required)</label>
                        <input type="email" id="email" placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label for="phone"><i class="fas fa-phone"></i> Your Phone (required)</label>
                        <input type="tel" id="phone" placeholder="Enter your phone number">
                    </div>
                    <div class="form-group">
                        <label for="zip"><i class="fas fa-map-marker-alt"></i> Your Zip Code (required)</label>
                        <input type="text" id="zip" placeholder="Enter your zip code">
                    </div>
                    <div class="form-group full-width">
                        <label for="message"><i class="fas fa-question-circle"></i> How can we help you today?</label>
                        <textarea id="message" rows="4"></textarea>
                    </div>
                    <button type="submit" class="submit-button"><i class="fas fa-paper-plane"></i> Get Free Estimate</button>
                </div>
            </div>
        </section>

        <!-- Pest Information -->
        <section class="pest-info">
            <h2 class="section-title"><i class="fas fa-spider"></i> <u>These Pests Can Be a Problem</u> </h2>
            <div class="pest-grid">
                <div class="pest-card" v-for="pest in pests" :key="pest">
                    <div class="pest-header">
                        <div class="pest-icon">
                            <i :class="getPestIcon(pest.name)"></i>
                        </div>
                        <h4 class="pest-name">{{ pest.name }}</h4>
                    </div>
                    <div class="pest-description">
                        <p>{{ pest.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Green Method -->
        <section class="eco-method">
            <img class="method-image" src="@/assets/no-harsh-chemicals.png" alt="Eco-friendly pest control">
            <div class="method-content">
                <h2><i class="fas fa-leaf"></i> Our Eco-Friendly Approach</h2>
                <h3><i class="fas fa-exclamation-circle"></i> BE WARY OF IMITATORS</h3>
                <p>With so many products and companies on the market today, how do you know if your specific pest control needs are being met to industry standards? Many competitors make unreasonable guarantees to secure sales while ignoring your home's actual needs.</p>
                
                <ul class="method-list">
                    <li><i class="fas fa-ban"></i> Traditional chemical pest control methods often have harmful residual effects on the environment and human health.</li>
                    <li><i class="fas fa-tree"></i> While harsh chemicals may be temporarily effective, they negatively impact local ecosystems.</li>
                    <li><i class="fas fa-bug"></i> Broad-spectrum pesticides destroy beneficial insects along with pests, disrupting natural balances.</li>
                    <li><i class="fas fa-chart-line-down"></i> Chemical pesticides lose effectiveness over time, requiring increasingly frequent applications.</li>
                </ul>
                
                <p><i class="fas fa-hand-holding-usd"></i> Don't be fooled by companies that overcharge for unnecessary services. Many large pest control companies lock customers into lengthy contracts with monthly fees but no guarantee of results. Some have even faced criticism for failing to identify serious infestations like termite damage until it's too late.</p>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="process-cta">
            <div class="process-steps">
                <h2><i class="fas fa-list-check"></i> Our Proven Process</h2>
                <div class="steps-container">
                    <div class="step">
                        <div class="step-number"><i class="fas fa-magnifying-glass"></i></div>
                        <h3>Assessment</h3>
                        <p>Our expert team conducts a thorough inspection to identify your specific pest issues and develop a customized treatment plan.</p>
                    </div>
                    <div class="step">
                        <div class="step-number"><i class="fas fa-bolt"></i></div>
                        <h3>Action</h3>
                        <p>We implement targeted, eco-friendly solutions to quickly and safely eliminate your pest problems at the source.</p>
                    </div>
                    <div class="step">
                        <div class="step-number"><i class="fas fa-arrows-rotate"></i></div>
                        <h3>Maintenance</h3>
                        <p>We establish ongoing prevention strategies to ensure pests don't return, with flexible scheduling to meet your needs.</p>
                    </div>
                </div>
            </div>
            <div class="brand-logo">
                <img src="@/assets/logo-2.png" alt="Company logo">
                <button class="final-cta"><i class="fas fa-search"></i> Schedule Your Inspection</button>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Import your images (adjust paths as needed)
import image3 from '@/assets/indoor-pest-control-slide.png';
import image2 from '@/assets/family-bbq-banner-slide1.jpg';
import image1 from '@/assets/opms-slide-1.jpg';
const getPestIcon = () => {

    return  "fas fa-mosquito";
};
const images = [image1, image2, image3];
const currentImage = ref(images[0]);
const imageIndex = ref(0)
let intervalId = null;


// Change image every 5 seconds (5000ms)
const startSlideshow = () => {
  let currentIndex = 0;
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imageIndex.value = currentIndex;
    currentImage.value = images[currentIndex];
  }, 11089);
};


// Parallax effect handler
const handleScroll = () => {
  const parallax = document.querySelector('.parallax-banner');
  if (parallax) {
    const scrollPosition = window.pageYOffset;
    parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  }
};


onMounted(() => {
  startSlideshow();
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  window.removeEventListener('scroll', handleScroll);
});
const pests = [
    {
        name: "Ticks",
        description: "Ticks are small parasites related to spiders that embed themselves in the skin of humans and other animals, including household pets. Ticks may transmit serious diseases such as Anaplasmosis, Babesiosis, Rickettsia and Lyme disease. The alarming increase in tick population and Lyme Disease cases have been attributed to mild winters and growing deer and mice populations.",
        icon: "@/assets/tick.png"
    },
    {
        name: "Mosquitoes",
        description: "Mosquitoes cause more suffering than any other organism — over one million people worldwide die every year from mosquito-borne diseases like: West Nile virus, malaria, dengue, encephalitis and yellow fever.",
        icon: "@/assets/tick.png"
    },
    {
        name: "Bed Bugs",
        description: "Don't let the bedbugs bite. These small brownish insects live on the blood of animals or humans. Female bedbugs can lay hundreds of eggs, potentially turning a small problem into a major infestation quickly.",
        icon: "@/assets/tick.png"
    },
    {
        name: "Roaches",
        description: "If you've seen one cockroach, you haven't seen them all. These nocturnal pests carry 33 kinds of bacteria including E. coli and Salmonella. Cockroaches can also cause allergic reactions and trigger asthma attacks.",
        icon: "@/assets/tick.png"
    },
    {
        name: "Spiders",
        description: "While most spiders are harmless, species like black widows and brown recluses can deliver dangerous bites. Brown recluse bites often go unnoticed for hours before becoming red, swollen, and tender, sometimes taking months to heal completely.",
        icon: "@/assets/tick.png"
    },
    {
        name: "Fleas",
        description: "Fleas reproduce rapidly and are common parasites of household pets. They can transmit tapeworms and cause anemia in animals. Flea bites on humans typically result in painful, itchy red bumps that can become infected.",
        icon: "@/assets/tick.png"
    },
    {
        name: "Ants",
        description: "Ant colonies can be difficult to eliminate completely. Whether dealing with nuisance ants in your kitchen or destructive carpenter ants in your walls, effective treatment requires targeting the entire colony, especially the queen.",
        icon: "@/assets/tick.png"
    },
    {
        name: "Other Pests",
        description: "Our services address a wide range of pest issues including wasps, bees, moths, mites, rodents, and more. We customize our approach based on your specific pest challenges.",
        icon: "@/assets/tick.png"
    }
];
</script>

<style scoped>
/* Base Styles */
.page {
    max-width: 100vw;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Poppins", sans-serif;
  font-optical-sizing: auto;
    color: #333;
    line-height: 1.6;
    overflow-x: hidden;
}

section {
    margin-bottom: 14.59vh;
}

/* Add to your existing styles */
.banner .fas {
    margin-right: 0.5vw
}

.method-list li i {

    color: hsl(88, 84%, 62.6%);
}

.pest-icon {
    background-color: hsl(88, 84%, 33%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5vw;
}

/* For mobile */
@media (max-width: 768px) {
    .pest-icon {
        font-size: 3.44vh;
    }
}

h1, h2, h3, h4 {
    margin: 0;
    font-weight: 600;
    line-height: 1.2;
}

/* Hero Section */
.hero {
    width: 100%;
    position: relative;
    height: 61.8vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    overflow: hidden; /* Hide the parallax overflow */
    
}

.parallax-banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed; /* This creates the parallax effect */
    will-change: transform; /* Optimizes for performance */
    transition: background-image 1s ease-out;
    -moz-transition: background-image 1s ease-out;
}

.parallax-banner img {
    background-color: #222;
    height: 100%;
    margin-top: 0;
}


.banner {
    transition: background-image 1s ease-out;
    -moz-transition: background-image 1s ease-out;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.12vw;
    position: relative;
    background-size: cover;
    background-position: center;
    /* Add these to ensure proper rendering */
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    
}


.banner::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    z-index: 1;
}
#uvp1, #uvp2, #uvp3 {
    width: fit-content;
    padding: 0;
    margin: 0;
    margin-top: 5.57vh;

}

/* #uvp3 */

#uvp3 h1 {
    position: relative;
    padding: 0.8vw 1.19vw;
    bottom: 9.1vh;
    color: #fff;
    font-size: 2.12vw;
    background-color: hsla(88, 84%, 65%, 100%);
    border: 0.5vw solid #fff;
    border-radius: 3.44vw;
    animation: opacity 11.089s ease;
    text-shadow: 2px 2px 1px hsl(66, 100%, 23.6%);
}

@keyframes upv3h1 {
    0%{
        opacity: 0;
    }
    14.58%{
        opacity: 0.8;
    }
    89%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}

/* #uvp1 */

#uvp1 img {
    background-color: #00000000;
    position: absolute;
    left: -23.6vw;;
    top: 0;
    animation: mosquito 1s infinite;
}

@keyframes mosquito {
    0% {
        margin-left: -1.19vw;
        margin-top: 1.19vw;
    }
    50%{
        margin-left: -2.12vw;
        margin-top: -1.19vw;
    }
    100%{
        margin-left: -1.19vw;
        margin-top: 1.19vw;
    }
}

#uvp1 .bugs {
    display: flex;
    flex-direction: column;
    text-align: end;
    margin-top: 2vw;
    align-self: center;
    gap: 0.3vw;
    margin-right: 11%;
}

#uvp1 .bugs .bug {
    background-color: hsla(0, 0%, 0%, 50%);
    color: #fff;
    border-bottom: 1px solid #fff;
    font-size: 1.19vw;  
    font-weight: 800;
    padding: 0vw 0 0 2.12vw;
    width: fit-content;
    display: flex;
    gap: 0.5vw;
    align-self: flex-end;
    align-items: center;
    opacity: 0;
    animation: bug 11.5s ease-out;

}

@keyframes bug {
    0%{
        position: relative;
        left: -15vw;
        opacity: 0
    }
    2.12%{
        position: relative;
        left: 0;
        opacity: 1;
    }
    2.22%{
        left: 0.3vw;
    }
    3.44%{
        left:0;
    }
    66.66%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
#uvp1 .bugs .bug i {
    height: 100%;
    width:fit-content;
    padding: 0.5vw;
    color: hsl(88, 84%, 23.6%);
    background-color: hsl(88, 84%, 65%);
}

#uvp1 h1, #uvp1 h2 {
    color: #fff;
    background: none;
    text-shadow: none;
    text-align: center;
    width: fit-content;
}


@keyframes opacity {
    0%{
        opacity: 0;
    }
    20%{
        opacity: 1;
    }
    89%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}

/* #uvp2 */

#uvp2 h1 {
    font-family: "Poppins", sans-serif;
    z-index: 2;
    
    color:   hsl(77, 100%,  100%);
    padding: 0.38vw 1vw;

    font-size: 3.44vw;
    width: fit-content;
    text-shadow: 3px 2px 1px hsl(77, 100%, 14.59%);
    animation: uvp2head 11.5s ease-out;
}

#uvp2 h2 {
    font-family: "Roboto", sans-serif;
    z-index: 2;
    color:   hsla(55, 0%, 44.44%);
    padding: 0.38vw 1vw;
    font-size: 1.19vw;
    width:66.66%;
    margin-left: 2.12vw;
    background: #fff;
    animation: uvp2head 11.5s ease-out;
}

#uvp2 h2 i {
margin-right: 0.5vw;
}
@keyframes uvp2head {
    0%{
        position: relative;
        left: -11vw;
        opacity: 0
    }
    11%{
        position: relative;
        left: 0;
        opacity: 1;
    }
    66.66%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}

#uvp1 {
    padding: 0;
    top: 2.12vh;
    left:33.33vw;
    gap: 0;
}

#uvp1 h1 {
    font-size: 3.44vw;
    animation: uvp1head 11.500s ease-out;
}
#uvp1 h2 {
    margin-top: 0.62vw;
    font-size: 1.69vw;
    animation: opacity  11.1s ease-out;
}

@keyframes uvp1head {
    0%{
        opacity: 0;
    }
    14.5%{
        opacity: 1;
    }
    66.66%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}

.hero .uvp {
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
}
#uvp2 hr {
    position: absolute;
    transform: rotate(-0.5deg);
    border: 0;
    width: 89%;
    height: 2.12vw;
    top: 1.19vw;
    padding: 0.38vw 1vw;
    box-sizing: content-box;
    background-color: hsla(77, 100%, 33.33%);
    animation: uvp2hr 11.1s ease-out;
}

@keyframes uvp2hr {
    0%{
        opacity: 0;

        
    }
    11%{
        opacity: 1;

        
    }
    88.88%{
        opacity: 1;
        
    }
    100%{
        opacity: 0;
        
    }
}

.badges {
    position: absolute;
    top: 65.2vh;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: calc(2.12vh * 0.6666);
    width: 100%;
    gap: calc(11vw * 0.6666);
}


.badges img {
    width: 6vw;
    height: auto;
    filter: drop-shadow(0 0.2vw 0.4vw rgba(0, 0, 0, 0.3));
    transition: transform 0.3s ease;
}

.badges img:hover {
    transform: translateY(-0.5vw) scale(1.05);
}

/* Value Proposition */
.value-proposition .content {
    width: 66.66vw;
    display: flex;
    align-items: flex-start;
    gap: 4vw;
    margin: 0 auto;
    padding: 4vw 0;
}

.mosquito-image {
    width: 30%;
    border-radius: 1vw;
    box-shadow: 0 0.5vw 1.5vw rgba(0, 0, 0, 0.1);
}

.hook {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
}

.value-proposition h3 {
    text-align: center;
    font-size: 2vw;
    color: hsl(88, 84%, 26.5%);
}

.divider {
    width: 11vw;
    height: 0.3vw;
    background: linear-gradient(28deg, hsl(88, 84%, 26.5%), hsl(88, 84%, 62.6%));
    border-radius: 0.3vw;
    margin: 3.44vh auto;
}

.hook h2 {
    font-size: 2.5vw;
    color: #222;
}


.hook p {
    font-size: 1.2vw;
    color: hsl(0, 100%, 33%);
}

.cta-button {
    align-self: flex-start;
    padding: 1vw 2vw;
    background: linear-gradient(28deg, hsl(88, 84%, 26.5%), hsl(88, 84%, 62.6%));
    color: white;
    border: none;
    border-radius: 0.3vw;
    font-size: 1.2vw;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0.3vw 0.6vw rgba(0, 0, 0, 0.1);
}

.cta-button:hover {
    transform: translateY(-0.2vw);
    box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.2);
    background: linear-gradient(28deg, hsl(88, 84%, 30%), hsl(88, 84%, 65%));
}

/* Contact Form */
.contact-form {
    width: 66.66vw;
    margin: 0 auto;
    padding: 4vw 0;
    border-radius: 1vw;
    background: radial-gradient(hsl(88, 84%, 80%, 15%), #fff);
    box-shadow: inset 0 0 23.6vw 1px #fff;
}

.form-title {
    text-align: center; 
    font-size: 2.5vw;
    text-shadow: 2px 2px 1px hsl(88, 84%, 33.33%);
    background-clip: text;
    color: hsl(88, 84%, 66.66%);
    margin-bottom: 3.44vw;
}

.form-container {
    width: 66.66%;
    margin: 0 auto;
}

.form-fields {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5vw;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5vw;
}

.form-group label {
    font-size: 1.1vw;
    color: #555;
    font-weight: 500;
}

.form-group input,
.form-group textarea {
    padding: 1vw;
    border: 1px solid #ddd;
    border-radius: 0.3vw;
    font-size: 1.1vw;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: hsl(88, 84%, 62.6%);
    box-shadow: 0 0 0 0.2vw rgba(88, 84%, 62.6%, 0.2);
}

.form-group.full-width {
    grid-column: span 2;
}

.form-group textarea {
    resize: vertical;
    min-height: 10vw;
}

.submit-button {
    grid-column: span 2;
    padding: 1.2vw;
    background: linear-gradient(28deg, hsl(88, 84%, 26.5%), hsl(88, 84%, 62.6%));
    color: white;
    border: none;
    border-radius: 0.3vw;
    font-size: 1.2vw;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1vw;
}

.submit-button:hover {
    background: linear-gradient(28deg, hsl(88, 84%, 30%), hsl(88, 84%, 65%));
    transform: translateY(-0.2vw);
    box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.1);
}

/* Pest Information */
.pest-info {
    width: 66.66vw;
    margin: 0 auto;
    padding: 4vw 0;
    margin-top: 9vw;
}

.section-title {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 3.44vw;
    color:  hsl(0, 84%, 33%);
    margin-bottom: 3vw;
}

.pest-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
    gap: 1.5vw;
}

.pest-card {
    background-color: white;
    border-radius: 0.5vw;
    padding: 1.5vw;
    box-shadow: 0 0.3vw 0.6vw  hsla(0, 84%, 33%, 7.5%);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1vw;
}

.pest-card:hover {
    transform: translateY(-0.5vw);
    box-shadow: 0 0.5vw 1.5vw hsla(0, 84%, 33%, 15%);
}

.pest-header {
    display: flex;
    align-items: center;
    gap: 1vw;
}

.pest-icon {
    width: 3vw;
    height: 3vw;
    background-color: hsl(0, 84%, 33%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pest-icon img {
    width: 60%;
    height: 60%;
}

.pest-name {
    font-size: 1.5vw;
    color:  hsl(0, 84%, 33%);
}

.pest-description {
    font-size: 0.8vw;
    color: #666;
    line-height: 1.6;
}

/* Eco Method */
.eco-method {
    width: 55.55vw;
    margin: 0 auto;
    flex-direction: column;
    padding: 4vw 0;
    display: flex;
    gap: 5.57vw;
    align-items: center;
}

.eco-method img {
    width: 66.66vw;
}

.method-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
}

.method-content h2 {
    font-size: 2.5vw;
    color: hsl(88, 84%, 26.5%);
}

.method-content h3 {
    font-size: 1.8vw;
    color: #333;
}

.method-content p {
    font-size: 1.2vw;
    color: #555;
}

.method-list {
    padding-left: 2vw;
    list-style: none;
}

.method-list li {
    font-size: 1.2vw;
    color: #555;
    margin-bottom: 1vw;
    position: relative;
}

.method-list li::before {
    content: '';
    position: absolute;
    left: -1.5vw;
    top: 0.8vw;
    width: 0.6vw;
    height: 0.6vw;
    background-color: hsl(88, 84%, 62.6%);
    border-radius: 50%;
}

.method-image {
    width: 62%;
    border-radius: 1vw;
}

/* Process CTA */
.process-cta {
    width: 66%;
    margin: 0 auto;
    padding: 4vw 0;
    display: flex;
    flex-direction: column;
    gap: 4vw;
    align-items: center;
}

.process-steps {
    flex: 1;
}

.process-steps h2 {
    font-size: 2.5vw;
    color: hsl(88, 84%, 26.5%);
    margin-bottom: 2vw;
    text-align: center;
}

.steps-container {
    display: flex;
    gap: 2vw;
}

.step {
    flex: 1;
    background-color: white;
    border-radius: 0.5vw;
    padding: 2vw;
    box-shadow: 0 0.3vw 0.6vw rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.step:hover {
    transform: translateY(-0.5vw);
    box-shadow: 0 0.5vw 1.5vw rgba(0, 0, 0, 0.1);
}

.step-number {
    width: 3vw;
    height: 3vw;
    background: linear-gradient(28deg, hsl(88, 84%, 26.5%), hsl(88, 84%, 62.6%));
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5vw;
    font-weight: bold;
    margin-bottom: 1vw;
}

.step h3 {
    font-size: 1.5vw;
    color: #333;
    margin-bottom: 1vw;
}

.step p {
    font-size: 1.1vw;
    color: #666;
}

.brand-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
}

.brand-logo img {
    width: 15vw;
}

.final-cta {
    padding: 1.2vw 2.5vw;
    background: linear-gradient(28deg, hsl(88, 84%, 26.5%), hsl(88, 84%, 62.6%));
    color: white;
    border: none;
    border-radius: 0.3vw;
    font-size: 1.2vw;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.final-cta:hover {
    background: linear-gradient(28deg, hsl(88, 84%, 30%), hsl(88, 84%, 65%));
    transform: translateY(-0.2vw);
    box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.1);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    .page {
        gap: 2.12vh;
    }

    .eco-method img {
    width: 90vw;
    margin: 0 auto;
    margin-top: 5.57vh;
}

    .divider {
    width: 11vh;
    height: 0.3vh;
    background: linear-gradient(28deg, hsl(88, 84%, 26.5%), hsl(88, 84%, 62.6%));
    border-radius: 0.3vw;
    margin: 3.44vw auto;
}

    section {
    margin-bottom: 14.59vh;
}
    #uvp2 hr {
    position: absolute;
    transform: rotate(-0.5deg);
    border: 0;
    width: 89%;
    height: 2.12vh;
    top: 1.19vh;
    padding: 0.38vh 1vh;
    box-sizing: content-box;
    background-color: hsla(77, 100%, 33.33%);
    animation: uvp2hr 11.1s ease-out;
}
    #uvp2 h1 {
    font-family: "Poppins", sans-serif;
    z-index: 2;
    
    color:   hsl(77, 100%,  100%);
    padding: 0.38vh 1vh;

    font-size: 3.44vh;
    width: fit-content;
    text-shadow: 3px 2px 1px hsl(77, 100%, 14.59%);
    animation: uvp2head 11.5s ease-out;
}

#uvp2 h2 {
    font-family: "Roboto", sans-serif;
    z-index: 2;
    color:   hsla(55, 0%, 44.44%);
    padding: 0.38vh 1vh;
    font-size: 2.12vh;
    width:66.66%;
    margin-left: 2.12vh;
    background: #fff;
    animation: uvp2head 11.5s ease-out;
}

#uvp2 h2 i {
margin-right: 0.5vh;
}
    #uvp3 h1 {
    position: relative;
    padding: 0.8vh 1.19vh;
    bottom: 9.1vh;
    color: #fff;
    font-size: 2.12vh;
    background-color: hsla(88, 84%, 65%, 100%);
    border: 0.5vh solid #fff;
    border-radius: 3.44vh;
    animation: opacity 11.089s ease;
    text-shadow: 2px 2px 1px hsl(66, 100%, 23.6%);
}
    #uvp1 {
    padding: 0;
    top: 0vh;
    right:33.33vw;
    gap: 0;
    width: 61.8vw;
}

#uvp1 h1 {
    font-size: 3.44vw;
    animation: uvp1head 11.500s ease-out;
}
#uvp1 h2 {
    margin-top: 0.62vh;
    font-size: 1.69vh;
    animation: opacity  11.1s ease-out;
}


#uvp1 .bugs {
    display: flex;
    flex-direction: column;
    text-align: end;
    margin-top: 2vh;
    align-self: center;
    gap: 0.1vh;
    margin-right: 11%;
}

#uvp1 .bugs .bug {
    background-color: hsla(0, 0%, 0%, 50%);
    color: #fff;
    border-bottom: 1px solid #fff;
    font-size: 1.19vh;  
    font-weight: 800;
    padding: 0vw 0 0 2.12vh;
    width: fit-content;
    display: flex;
    gap: 0.5vh;
    align-self: flex-end;
    align-items: center;
    opacity: 0;
    animation: bug 11.5s ease-out;

}


    .badges {
    position: absolute;
    top: 50vh;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: calc(5.57vh * 0.6666);
    width: 100%;
    gap: calc(11vw * 0.6666);
}
.badges img {
    width: 14.59vw;
}
.pest-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
    gap: 1.5vw;
}

.pest-header {
    gap: 3.44vh
}

.pest-icon {
    width: 5.57vh;
    height: 5.57vh;
}

.pest-icon img {
    width: 62%;
    height: 62%;
}

.pest-name {
    font-size: 3.44vh;
    color: #333;
}

.pest-description {
    font-size: 1.1vh;
    color: #666;
    line-height: 1.6;
}
    
    .value-proposition {
        flex-direction: column;
        width: 100%;
        gap: 0;
        margin-top: 11vh;
    }
    .value-proposition h2, .value-proposition h3 {
        font-size: 2.49vh;
    }
    .value-proposition p {
        font-size: 2.12vh;
    }
    .value-proposition .content {
    width: 66.66vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    margin: 0 auto;
    padding: 0 0;
    }
    .eco-method,
    .process-cta {
        flex-direction: column;
        width: 90%;
       
    }
    .eco-method p, .eco-method h3 {
        font-size: 2.12vh;
    }
    .eco-method ul li {
        font-size: 2.12vh;
    }
    .eco-method h2 {
        font-size: 3.44vh;
    }
    .hero {
        width: 100%;
        position: relative;
        height: 38.2vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .mosquito-image,
    .method-image,
    .brand-logo img {
        margin: 14.59vh 0;
        width: 98%;
    }
    
    .hook,
    .method-content {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .form-fields {
        display: flex;
        flex-direction: column;
        gap: 3.44vh;
        
    }
    
    .form-group.full-width {
        grid-column: span 1;
    }
    
    .pest-grid {
        grid-template-columns: 1fr;
    }
    .form-container {
    width: 95.2%;
    margin: 0 auto;
    }
    .steps-container {
        flex-direction: column;
    }
    .step p {
        font-size: 2.12vh;
    }
    
    .cta-button {
        font-size: 3.44vh;
        padding: 1vh 0;
        text-align: center;
        width: 100%;;
    }
    h1, h2, h3, p,
    .form-group label,
    .form-group input,
    .form-group textarea,
    .submit-button,
    .final-cta {
        font-size: 2.12vh;
    }
}
</style>