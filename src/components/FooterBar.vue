<template>
    <footer>
      <div class="footer-content">
        <div class="branches">
          <div class="branch" v-for="branch in branches" :key="branch.name">
            <h3><i class="fas fa-map-marker-alt"></i> {{ branch.name }}</h3>
            <hr/>
            <div class="content">
              <p><i class="fas fa-building"></i> {{ branch.location }}</p>
              <p><i class="fas fa-phone"></i> {{ branch.phone }}</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="contact-email">
            <i class="fas fa-envelope"></i> info@opms.com
          </div>
          
          <div class="social-links">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
          
          <div class="copyright">
            &copy; {{ new Date().getFullYear() }} Organic Pest Management Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const branches = ref([
    {name: "Long Island Branch", location:"1125 Deer Park Ave, North Babylon, NY 11703", phone: "(888) 449-6767"},
    {name: "New Jersey Branch", location:"637 Wyckoff Ave, Ste 370, Wyckoff, NJ 07481", phone: "(201) 870-2572"},
    {name: "Westchester Branch", location:"333 Mamaroneck Ave, Ste 489, White Plains, NY 10605", phone: "(914) 885-4886"},
    {name: "Hudson Valley Branch", location:"9812 Main St, Ste 4-221, Fishkill, NY 12524", phone: "(845) 240-2856"},
  ]) 
  </script>
  
  <style scoped>
  /* Add Font Awesome CDN to your project's head */
  /* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" /> */
  
  footer {
    background: linear-gradient(135deg, hsl(88, 66.66%, 23.6%), hsl(88, 38%, 11%));
    padding: 4rem 2rem;
    color: #fff;
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .branches {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .branch {
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .branch:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.08);
  }
  
  .branch h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .branch hr {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, hsl(88, 100%, 66.66%), transparent);
    margin: 0.5rem 0 1rem;
  }
  
  .branch .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .branch p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .branch i {
    margin-top: 0.2rem;
    color: hsl(88, 100%, 66.66%);
  }
  
  .footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .contact-email {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: #fff;
  }
  
  .social-links {
    display: flex;
    gap: 1.5rem;
  }
  
  .social-links a {
    color: #fff;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  
  .social-links a:hover {
    background: hsl(88, 100%, 66.66%);
    color: hsl(88, 66.66%, 23.6%);
    transform: translateY(-3px);
  }
  
  .copyright {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .branches {
      grid-template-columns: 1fr;
    }
    
    .branch {
      text-align: center;
    }
    
    .branch h3, .branch p {
      justify-content: center;
    }
    
    .branch hr {
      margin-left: auto;
      margin-right: auto;
      width: 50px;
    }
  }
  </style>