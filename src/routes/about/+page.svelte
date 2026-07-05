<script lang="ts">
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import Button from '$lib/components/Button.svelte';
  import { ShieldCheck, Award, Sparkles } from '@lucide/svelte';
</script>

<!-- Subpage Hero Header -->
<section class="relative py-20 bg-primary bg-dark-gradient border-b border-gold/15 text-white text-center">
  <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff300_1.5px,transparent_1.5px)] [background-size:30px_30px] pointer-events-none"></div>
  <div class="max-w-7xl mx-auto px-4 relative z-10">
    <h1 class="text-4xl md:text-6xl font-bold font-serif tracking-wide text-white">
      OUR HERITAGE & VISION
    </h1>
    <p class="text-text-secondary text-xs md:text-sm max-w-xl mx-auto font-light mt-4 tracking-widest uppercase">
      Discover the legacy of Al Dhahabi Al Jadid Gents Salon
    </p>
  </div>
</section>

<!-- Our Story Section -->
<section class="py-20 bg-bg-salon text-primary">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      <!-- Text -->
      <div>
        <SectionHeading title="Crafting Gentlemen" subtitle="The Salon Story" align="left" />
        
        <div class="space-y-6 text-primary/70 text-sm font-light leading-relaxed">
          <p>
            Al Dhahabi Al Jadid Gents Salon began with a singular, clear vision: to create a dedicated sanctuary where grooming is elevated into a refined, personalized art form. Located in the heart of Dubai, we cater to executives, creators, and gentlemen who value style as a core element of their identity.
          </p>
          <p>
            At Al Dhahabi, we believe a style is not merely cut; it is sculpted. Our master stylists undergo rigorous ongoing training to stay at the leading edge of grooming formulations, tool ergonomics, and structural geometry.
          </p>
        </div>
      </div>

      <!-- Image -->
      <div class="relative">
        <div class="aspect-square md:aspect-[4/3] overflow-hidden border border-gold/20 shadow-2xl relative">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000"
            alt="Barber Shop Luxury Chairs"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="absolute -bottom-6 -right-6 w-44 h-44 bg-gold/10 border border-gold/20 -z-10 hidden md:block"></div>
      </div>

    </div>
  </div>
</section>

<!-- Mission, Vision & Values -->
<section class="py-20 bg-[#0F0F0F] text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading title="The Principles" subtitle="Philosophy" align="center" light={true} />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Mission -->
      <div class="bg-[#141414] border border-white/5 p-8 flex flex-col items-center text-center shadow-xl">
        <div class="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-5">
          <Sparkles size={20} />
        </div>
        <h3 class="text-xl font-bold font-serif text-white mb-3">Our Mission</h3>
        <p class="text-text-secondary text-xs leading-relaxed font-light">
          To provide a luxurious, reliable grooming environment where every client receives premium styling, customized therapies, and specialized care designed to accentuate their personal aesthetic.
        </p>
      </div>

      <!-- Vision -->
      <div class="bg-[#141414] border border-white/5 p-8 flex flex-col items-center text-center shadow-xl">
        <div class="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-5">
          <Award size={20} />
        </div>
        <h3 class="text-xl font-bold font-serif text-white mb-3">Our Vision</h3>
        <p class="text-text-secondary text-xs leading-relaxed font-light">
          To remain Dubai's premier authority on masculine style, setting international benchmarks for service hygiene, customer experience, and innovative organic skincare formulation.
        </p>
      </div>

      <!-- Values -->
      <div class="bg-[#141414] border border-white/5 p-8 flex flex-col items-center text-center shadow-xl">
        <div class="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-5">
          <ShieldCheck size={20} />
        </div>
        <h3 class="text-xl font-bold font-serif text-white mb-3">Our Quality</h3>
        <p class="text-text-secondary text-xs leading-relaxed font-light">
          We prioritize absolute sterilization, premium organic oils, authentic styling pomades, and clinical-grade skin products. A standard of quality that guarantees complete peace of mind.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- Why Choose Us -->
<section class="py-20 bg-bg-salon text-primary">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <!-- Left: Graphic Elements -->
      <div class="grid grid-cols-2 gap-4">
        <div class="aspect-[3/4] overflow-hidden border border-gold/15 shadow-xl">
          <img
            src="/salon_interior_3.jpg"
            alt="Al Dhahabi Salon Interior"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="aspect-[3/4] overflow-hidden border border-gold/15 shadow-xl mt-6">
          <img
            src="/salon_interior_4.jpg"
            alt="Al Dhahabi Salon Atmosphere"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Right: Detailed points -->
      <div class="flex flex-col items-start">
        <SectionHeading title="The Golden Standard of Care" subtitle="Why Choose Us" align="left" />

        <div class="space-y-6 w-full">
          
          <div class="flex items-start gap-4">
            <div class="text-gold mt-1"><ShieldCheck size={18} /></div>
            <div>
              <h4 class="text-base font-bold text-primary mb-1">Clinical-Grade Sanitization</h4>
              <p class="text-primary/75 text-xs font-light leading-relaxed">
                All steel shears, razor holders, and clipper attachments undergo dual wash and ultraviolet sanitization between every client appointment.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="text-gold mt-1"><Sparkles size={18} /></div>
            <div>
              <h4 class="text-base font-bold text-primary mb-1">Premium Organic Formulas</h4>
              <p class="text-primary/75 text-xs font-light leading-relaxed">
                We import cold-pressed Moroccan argan oil, French sea clay masks, and organic Italian cedar beard conditioners. No harsh synthetic compounds.
              </p>
            </div>
          </div>


        </div>

        <Button variant="dark" size="md" href="https://wa.me/971582881215?text=Hello%20Al%20Dhahabi%20Salon,%20I%20would%20like%20to%20book%20an%20appointment." class="mt-10" target="_blank" rel="noreferrer">
          Book Your Experience
        </Button>
      </div>

    </div>
  </div>
</section>
