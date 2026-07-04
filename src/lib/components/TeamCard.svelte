<script lang="ts">
  import type { Barber } from '$lib/types';

  interface Props {
    barber: Barber;
  }

  let { barber }: Props = $props();
</script>

<div class="group relative bg-[#141414] border border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl">
  <!-- Photo container -->
  <div class="aspect-[4/5] w-full overflow-hidden relative">
    <div class="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10 opacity-70"></div>
    <img
      src={barber.photo}
      alt={barber.name}
      loading="lazy"
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />

    <!-- Social networks overlay -->
    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      {#if barber.socials.instagram}
        <a href={barber.socials.instagram} target="_blank" rel="noreferrer" class="w-9 h-9 rounded-full bg-primary/95 hover:bg-gold text-white hover:text-primary flex items-center justify-center border border-gold/15 transition-all duration-300" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
      {/if}
      {#if barber.socials.facebook}
        <a href={barber.socials.facebook} target="_blank" rel="noreferrer" class="w-9 h-9 rounded-full bg-primary/95 hover:bg-gold text-white hover:text-primary flex items-center justify-center border border-gold/15 transition-all duration-300" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
      {/if}
      {#if barber.socials.twitter}
        <a href={barber.socials.twitter} target="_blank" rel="noreferrer" class="w-9 h-9 rounded-full bg-primary/95 hover:bg-gold text-white hover:text-primary flex items-center justify-center border border-gold/15 transition-all duration-300" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </a>
      {/if}
    </div>
  </div>

  <!-- Content -->
  <div class="p-6 text-center z-20">
    <span class="text-[10px] text-gold tracking-widest font-bold uppercase mb-1 block">
      {barber.role}
    </span>
    <h3 class="text-xl font-bold text-white mb-1.5">
      {barber.name}
    </h3>
    <p class="text-xs text-white/40 mb-4 font-light">
      Experience: {barber.experience}
    </p>

    <!-- Specialties -->
    <div class="flex flex-wrap justify-center gap-1.5 mt-3 pt-3 border-t border-white/5">
      {#each barber.specialty as spec}
        <span class="text-[8px] bg-white/5 border border-white/10 text-text-secondary px-2.5 py-1.5 uppercase tracking-wider font-semibold">
          {spec}
        </span>
      {/each}
    </div>
  </div>
</div>
