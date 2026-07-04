<script lang="ts">
  import { openingHours } from '$lib/data/mockData';
</script>

<footer class="bg-[#0A0A0A] border-t border-gold/15 text-white font-sans pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-16">
      
      <!-- Column 1: Info -->
      <div class="flex flex-col gap-4">
        <a href="/" class="flex items-center gap-3 text-left mb-2 group">
          <img src="/salon_logo.png" alt="Al Dhahabi Logo" class="h-10 w-auto object-contain" />
          <div class="flex flex-col">
            <span class="text-white font-serif text-lg font-bold tracking-[0.2em] group-hover:text-gold transition-colors duration-300">AL DHAHABI</span>
            <span class="text-[8px] text-gold tracking-[0.4em] font-bold uppercase">AL JADID GENTS SALON</span>
          </div>
        </a>
        <p class="text-text-secondary text-xs leading-relaxed font-light mb-2">
          Experience the pinnacle of luxury gents grooming in Dubai. From precision hair sculpting to premium skin restoration, we redefine masculine elegance.
        </p>
        <div class="text-[10px] text-gold uppercase tracking-widest font-semibold mb-4 leading-relaxed">
          AL DHAHABI AL JADID GENTS SALOON, <br class="hidden sm:inline" />
          NEAR NASEX COURIER, AL QUSAIS 2, DUBAI
        </div>
        <div class="flex items-center gap-3">
          <a href="https://www.instagram.com/aldhahabialjadidgentssalon?igsh=MXFtcDQwMTFja3NrdA==" target="_blank" rel="noreferrer" class="w-8 h-8 rounded-full border border-white/10 hover:border-gold text-white hover:text-gold flex items-center justify-center transition-all duration-300" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61590989403616" target="_blank" rel="noreferrer" class="w-8 h-8 rounded-full border border-white/10 hover:border-gold text-white hover:text-gold flex items-center justify-center transition-all duration-300" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
      </div>

      <!-- Column 2: Navigation -->
      <div class="flex flex-col gap-4">
        <h4 class="text-[11px] uppercase tracking-[0.25em] font-bold text-gold mb-2">Navigation</h4>
        <div class="grid grid-cols-2 gap-3 text-xs text-text-secondary font-light">
          <a href="/" class="hover:text-gold transition-colors duration-300">Home</a>
          <a href="/about" class="hover:text-gold transition-colors duration-300">About</a>
          <a href="/our-services" class="hover:text-gold transition-colors duration-300">Our Services</a>
          <a href="/contact" class="hover:text-gold transition-colors duration-300">Contact</a>
        </div>
      </div>

      <!-- Column 3: Hours -->
      <div class="flex flex-col gap-4">
        <h4 class="text-[11px] uppercase tracking-[0.25em] font-bold text-gold mb-2">Opening Hours</h4>
        <div class="flex flex-col gap-2.5 text-[11px] text-text-secondary font-light">
          {#each openingHours as item}
            <div class="flex justify-between border-b border-white/5 pb-1.5">
              <span>{item.day}</span>
              <span class="text-white font-medium">{item.hours}</span>
            </div>
          {/each}
        </div>
      </div>

    </div>

    <!-- Bottom Copyright -->
    <div class="border-t border-white/5 pt-8 flex items-center justify-center text-center text-[10px] text-white/30 tracking-widest uppercase font-semibold">
      <span>&copy; {new Date().getFullYear()} AL DHAHABI AL JADID GENTS SALON. All Rights Reserved.</span>
    </div>
  </div>
</footer>
