<script lang="ts">
  import type { GalleryItem } from '$lib/types';
  import { Eye } from '@lucide/svelte';

  interface Props {
    item: GalleryItem;
    onclick: () => void;
  }

  let { item, onclick }: Props = $props();
</script>

<button
  type="button"
  {onclick}
  class="group relative overflow-hidden aspect-square w-full border border-white/5 bg-[#141414] text-left cursor-pointer focus:outline-none"
>
  <!-- Image -->
  <img
    src={item.image}
    alt={item.title}
    loading="lazy"
    class="w-full h-full object-cover transition-all duration-750 group-hover:scale-110"
  />

  <!-- Overlay -->
  <div class="absolute inset-0 bg-[#0F0F0F]/85 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col items-center justify-center p-6 text-center">
    <div class="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
      <Eye size={16} />
    </div>
    
    <span class="text-[9px] text-gold tracking-widest font-bold uppercase mb-1 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
      {item.category}
    </span>
    <h3 class="text-white text-base font-bold font-serif max-w-[220px] leading-snug transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
      {item.title}
    </h3>
  </div>
</button>
