<script lang="ts">
  import { pricing } from '$lib/data/mockData';
  import PricingCard from '$lib/components/PricingCard.svelte';

  // Group pricing items by category
  const categories = $derived.by(() => {
    const map: Record<string, typeof pricing> = {};
    pricing.forEach((item) => {
      if (!map[item.category]) {
        map[item.category] = [];
      }
      map[item.category].push(item);
    });
    return Object.entries(map);
  });

</script>

<!-- Header -->
<section class="relative py-20 bg-primary bg-dark-gradient border-b border-gold/15 text-white text-center">
  <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff300_1.5px,transparent_1.5px)] [background-size:30px_30px] pointer-events-none"></div>
  <div class="max-w-7xl mx-auto px-4 relative z-10">
    <span class="text-xs text-gold font-bold tracking-[0.3em] uppercase mb-3 block">Premium Menu</span>
    <h1 class="text-4xl md:text-6xl font-bold font-serif tracking-wide text-white">
      OUR SERVICES
    </h1>
    <p class="text-text-secondary text-xs md:text-sm max-w-xl mx-auto font-light mt-4 tracking-widest uppercase">
      Bespoke grooming services & luxury treatments
    </p>
  </div>
</section>

<!-- Pricing Catalog -->
<section class="py-20 bg-[#0F0F0F] text-white">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="flex flex-col gap-16">
      {#each categories as [categoryName, items]}
        <div class="bg-[#141414] border border-white/5 p-6 md:p-10 shadow-2xl relative">
          <!-- Gold border corner accents -->
          <div class="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/30"></div>
          <div class="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/30"></div>
          <div class="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/30"></div>
          <div class="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/30"></div>

          <h2 class="text-2xl font-bold font-serif tracking-wider text-gold border-b border-white/5 pb-4 mb-6">
            {categoryName}
          </h2>

          <div class="flex flex-col">
            {#each items as item}
              <PricingCard {item} />
            {/each}
          </div>
        </div>
      {/each}
    </div>


  </div>
</section>
