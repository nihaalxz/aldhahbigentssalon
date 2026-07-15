<script lang="ts">
  import { onMount } from 'svelte';
  import Button from '$lib/components/Button.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import GalleryCard from '$lib/components/GalleryCard.svelte';
  import TestimonialCard from '$lib/components/TestimonialCard.svelte';
  import PricingCard from '$lib/components/PricingCard.svelte';
  import Lightbox from '$lib/components/Lightbox.svelte';
  import { services, gallery, pricing, testimonials, statistics } from '$lib/data/mockData';

  // Svelte 5 reactive states
  let stats = $state(statistics.map((s) => ({ ...s, current: 0 })));
  let testimonialIndex = $state(0);
  let activeGalleryId = $state<string | null>(null);

  // Derived arrays
  const popularServices = $derived(services.filter((s) => s.popular).slice(0, 3));
  const galleryItems = $derived(gallery.slice(0, 4));
  const pricingItems = $derived(pricing.filter((p) => p.popular).slice(0, 4));

  onMount(() => {
    // Stats count up animation
    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let step = 0;
      const interval = setInterval(() => {
        step++;
        stats[index].current = Math.min(
          Math.round((stat.value / steps) * step),
          stat.value
        );
        if (step >= steps) clearInterval(interval);
      }, stepTime);
    });

    // Testimonials slider
    const testInterval = setInterval(() => {
      testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    }, 6000);

    return () => {
      clearInterval(testInterval);
    };
  });
</script>

<!-- Hero Section -->
<section class="relative min-h-[90vh] md:min-h-screen bg-primary flex items-center justify-center overflow-hidden -mt-20 lg:-mt-24">
  <!-- Dark overlay background with zoom-reveal effect -->
  <div class="absolute inset-0 z-0">
    <div class="absolute inset-0 bg-[#0F0F0F]/50 z-10"></div>
    <!-- Desktop Image -->
    <img
      src="/salon_interior_1.jpg"
      alt="Al Dhahabi Salon Background"
      class="hidden sm:block w-full h-full object-cover scale-105 opacity-100"
    />
    <!-- Mobile Image -->
    <img
      src="/salon_interior_2.jpg"
      alt="Al Dhahabi Salon Background Mobile"
      class="block sm:hidden w-full h-full object-cover scale-105 opacity-100"
    />
  </div>

  <!-- Hero Content -->
  <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center pt-20">
    <h1 class="text-4xl sm:text-6xl md:text-8xl font-bold font-serif tracking-wide leading-tight mb-4 max-w-5xl animate-[fadeIn_1.5s_ease-out]">
      DUBAI'S <br class="hidden sm:inline" />
      <span class="text-gold-gradient font-serif">FAVORITE</span> SALON
    </h1>

    <span class="text-xs md:text-sm text-gold font-bold tracking-[0.2em] uppercase mb-8 animate-[fadeIn_1.7s_ease-out]">
      AL QUSAIS 2, DUBAI
    </span>

    <p class="text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl font-light tracking-wide mb-10 leading-relaxed animate-[fadeIn_1.8s_ease-out]">
      Dubai's premier destination for the discerning gentleman. Experience bespoke haircuts, traditional straight razor shaves, and advanced facial therapies.
    </p>




  </div>
</section>

<!-- About Preview Section -->
<section class="py-20 md:py-28 bg-bg-salon text-primary">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
      <!-- Image Grid -->
      <div class="relative grid grid-cols-2 gap-4">
        <div class="aspect-[4/5] overflow-hidden border border-gold/15 shadow-2xl">
          <img
            src="/salon_interior_1.jpg"
            alt="Royal Haircut Process"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div class="aspect-[4/5] overflow-hidden border border-gold/15 shadow-2xl mt-8">
          <img
            src="/salon_interior_2.jpg"
            alt="Straight Razor Lathering"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <!-- Gold frame accent -->
        <div class="absolute -inset-3 border border-gold/25 pointer-events-none -z-10 m-3"></div>
      </div>

      <!-- Text Content -->
      <div class="flex flex-col items-start">
        <SectionHeading title="A Heritage of Grooming Elegance" subtitle="Our Legacy" align="left" />
        
        <p class="text-primary/70 text-sm leading-relaxed mb-6 font-light">
          For years, Al Dhahabi Al Jadid Gents Salon has defined the standard of masculine refinement in Dubai. We blend timeless European and Middle Eastern barbering traditions with modern techniques to craft an unparalleled styling experience.
        </p>
        

        <Button variant="dark" size="md" href="/about">
          Explore Our Story
        </Button>
      </div>
    </div>
  </div>
</section>

<!-- Services Preview Section -->
<section class="py-20 md:py-28 bg-[#0F0F0F] text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading title="Royal Signature Services" subtitle="What We Do" align="center" light={true} />
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
      {#each popularServices as service}
        <ServiceCard {service} />
      {/each}
    </div>

    <div class="text-center">
      <Button variant="secondary" size="lg" href="/our-services">
        View Full Service Menu
      </Button>
    </div>
  </div>
</section>

<!-- Statistics Grid Section -->
<section class="py-16 md:py-20 bg-gold text-primary bg-gold-gradient relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
      {#each stats as stat}
        <div class="flex flex-col items-center">
          <span class="text-4xl md:text-5xl font-serif font-black tracking-tight mb-2">
            {stat.current}{stat.suffix}
          </span>
          <span class="text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-primary/70">
            {stat.label}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Gallery Preview Section -->
<section class="py-20 md:py-28 bg-bg-salon text-primary">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading title="Visual Masterpieces" subtitle="Our Gallery" align="center" />

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {#each galleryItems as item}
        <GalleryCard {item} onclick={() => activeGalleryId = item.id} />
      {/each}
    </div>
  </div>
</section>

<!-- Pricing Preview Section -->
<section class="py-20 md:py-28 bg-[#0F0F0F] text-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading title="Premium Services Menu" subtitle="Our Services" align="center" light={true} />

    <div class="flex flex-col mb-12 bg-[#141414] border border-white/5 p-6 md:p-10 shadow-2xl">
      {#each pricingItems as item}
        <PricingCard {item} />
      {/each}
    </div>

    <div class="text-center">
      <Button variant="primary" size="lg" href="/our-services">
        View All Services
      </Button>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="py-20 md:py-28 bg-bg-salon text-primary relative overflow-hidden">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <SectionHeading title="Voices of Refinement" subtitle="Reviews" align="center" />

    <!-- Active Review Block -->
    <div class="min-h-[300px] flex items-center justify-center">
      {#key testimonialIndex}
        <div class="w-full">
          <TestimonialCard testimonial={testimonials[testimonialIndex]} />
        </div>
      {/key}
    </div>

    <!-- Navigation dots -->
    <div class="flex justify-center gap-3.5 mt-8">
      {#each testimonials as _, i}
        <button
          onclick={() => testimonialIndex = i}
          class="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer {testimonialIndex === i ? 'bg-gold w-6' : 'bg-primary/20 hover:bg-gold/50'}"
          aria-label="Go to slide {i + 1}"
        ></button>
      {/each}
    </div>
  </div>
</section>


<!-- Lightbox Modal -->
<Lightbox images={galleryItems} bind:activeId={activeGalleryId} onclose={() => activeGalleryId = null} />
