<script lang="ts">
  import type { PricingItem } from '$lib/types';
  import Button from './Button.svelte';

  interface Props {
    item: PricingItem;
  }

  let { item }: Props = $props();
</script>

<div class="flex items-center justify-between py-4.5 border-b border-white/5 group hover:border-gold/25 transition-all duration-300">
  <div class="flex-1 pr-4">
    <div class="flex items-center gap-2 flex-wrap">
      <h3 class="text-white text-base font-semibold tracking-wide group-hover:text-gold transition-colors duration-300">
        {item.name}
      </h3>
      {#if item.popular}
        <span class="bg-gold/10 text-gold text-[7px] uppercase tracking-widest px-2 py-0.5 border border-gold/20 font-bold">
          Popular
        </span>
      {/if}
    </div>
  </div>

  <!-- Action Buttons -->
  <div class="flex items-center gap-6">
    <Button
      variant="secondary"
      size="sm"
      href="https://wa.me/971582881215?text=Hello%20Al%20Dhahabi%20Salon,%20I%20would%20like%20to%20book%20an%20appointment%20for%20{encodeURIComponent(item.name)}."
      class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto scale-90 group-hover:scale-100 transform origin-right hidden md:inline-flex"
      target="_blank"
      rel="noreferrer"
    >
      Book
    </Button>
    <!-- Simple button for mobile -->
    <a
      href="https://wa.me/971582881215?text=Hello%20Al%20Dhahabi%20Salon,%20I%20would%20like%20to%20book%20an%20appointment%20for%20{encodeURIComponent(item.name)}."
      class="inline-flex md:hidden text-[10px] text-gold tracking-widest uppercase border-b border-gold/40 pb-0.5 font-bold"
      target="_blank"
      rel="noreferrer"
    >
      Book
    </a>
  </div>
</div>
