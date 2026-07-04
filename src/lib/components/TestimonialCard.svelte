<script lang="ts">
  import type { Testimonial } from '$lib/types';
  import { Star } from '@lucide/svelte';

  interface Props {
    testimonial: Testimonial;
  }

  let { testimonial }: Props = $props();
</script>

<div class="bg-[#141414] border border-white/5 p-8 relative flex flex-col justify-between shadow-xl h-full">
  <!-- Giant double quote background -->
  <span class="absolute top-4 right-6 text-7xl font-serif text-gold/10 select-none pointer-events-none">&ldquo;</span>

  <div class="flex-1">
    <!-- Star Rating -->
    <div class="flex gap-1 mb-5">
      {#each Array(5) as _, i}
        <Star
          size={13}
          class={i < testimonial.rating ? "fill-gold text-gold" : "text-white/10"}
        />
      {/each}
    </div>

    <!-- Review Text -->
    <p class="text-text-secondary text-[13.5px] leading-relaxed font-light italic mb-8">
      "{testimonial.review}"
    </p>
  </div>

  <!-- User Profiler -->
  <div class="flex items-center gap-4 border-t border-white/5 pt-5 mt-auto">
    <div class="w-11 h-11 rounded-full overflow-hidden border border-gold/15 bg-primary flex-shrink-0">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div>
      <h4 class="text-xs font-bold text-white uppercase tracking-wider">{testimonial.name}</h4>
      <span class="text-[10px] text-white/30 block mt-0.5">{testimonial.date}</span>
    </div>
  </div>
</div>
