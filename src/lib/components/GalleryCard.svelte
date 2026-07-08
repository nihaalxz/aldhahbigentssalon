<script lang="ts">
  import type { GalleryItem } from '$lib/types';

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
</button>
