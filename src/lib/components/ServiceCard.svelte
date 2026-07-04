<script lang="ts">
  import type { Service } from '$lib/types';
  import Button from './Button.svelte';

  interface Props {
    service: Service;
  }

  let { service }: Props = $props();
</script>

<div class="group relative bg-[#141414] overflow-hidden flex flex-col justify-between border border-white/5 hover:border-gold/30 transition-all duration-500 shadow-xl">
  <!-- Image container with hover zoom -->
  <div class="h-60 w-full overflow-hidden relative">
    <div class="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10 opacity-80"></div>
    {#if service.popular}
      <div class="absolute top-4 right-4 bg-gold text-primary font-bold text-[9px] tracking-widest uppercase px-3 py-1.5 z-20 shadow-lg">
        Popular
      </div>
    {/if}
    <img
      src={service.image}
      alt={service.name}
      loading="lazy"
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  </div>

  <!-- Content -->
  <div class="p-6 md:p-8 flex-1 flex flex-col justify-between z-20">
    <div class="mb-6">
      <h3 class="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300 mb-2">
        {service.name}
      </h3>
      <p class="text-text-secondary text-[13px] leading-relaxed font-light line-clamp-3">
        {service.description}
      </p>
    </div>

    <!-- Action -->
    <div class="flex flex-col gap-4">
      <Button
        variant="secondary"
        size="sm"
        href="https://wa.me/971582881215?text=Hello%20Al%20Dhahabi%20Salon,%20I%20would%20like%20to%20book%20an%20appointment%20for%20{encodeURIComponent(service.name)}."
        class="w-full mt-2"
        target="_blank"
        rel="noreferrer"
      >
        Book Appointment
      </Button>
    </div>
  </div>
</div>
