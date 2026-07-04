<script lang="ts">
  import type { GalleryItem } from '$lib/types';
  import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from '@lucide/svelte';
  import { fade } from 'svelte/transition';

  interface Props {
    images: GalleryItem[];
    activeId: string | null;
    onclose: () => void;
  }

  let { images, activeId = $bindable(), onclose }: Props = $props();

  let activeIndex = $derived.by(() => {
    if (!activeId) return -1;
    return images.findIndex((img) => img.id === activeId);
  });

  let zoomScale = $state(1);

  function handlePrev() {
    if (activeIndex > 0) {
      activeId = images[activeIndex - 1].id;
      zoomScale = 1;
    } else {
      activeId = images[images.length - 1].id;
      zoomScale = 1;
    }
  }

  function handleNext() {
    if (activeIndex < images.length - 1) {
      activeId = images[activeIndex + 1].id;
      zoomScale = 1;
    } else {
      activeId = images[0].id;
      zoomScale = 1;
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!activeId) return;
    if (e.key === 'Escape') onclose();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  }

  function toggleZoom() {
    zoomScale = zoomScale === 1 ? 1.6 : 1;
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if activeId && activeIndex !== -1}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    transition:fade={{ duration: 250 }}
    class="fixed inset-0 z-[100] bg-[#0F0F0F]/95 backdrop-blur-md flex flex-col justify-between items-center p-4 md:p-8"
    role="dialog"
    aria-modal="true"
  >
    <!-- Header -->
    <div class="w-full flex justify-between items-center z-50">
      <span class="text-white/40 text-xs tracking-widest font-semibold uppercase">
        {activeIndex + 1} / {images.length} &bull; {images[activeIndex].category}
      </span>
      <div class="flex items-center gap-3">
        <button
          onclick={toggleZoom}
          class="text-white/60 hover:text-gold transition-colors duration-300 cursor-pointer p-2"
          aria-label="Toggle zoom"
        >
          {#if zoomScale === 1}
            <ZoomIn size={18} />
          {:else}
            <ZoomOut size={18} />
          {/if}
        </button>
        <button
          onclick={onclose}
          class="text-white/60 hover:text-gold transition-colors duration-300 cursor-pointer p-2"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>
    </div>

    <!-- Center -->
    <div class="relative flex-1 w-full flex items-center justify-center overflow-hidden my-4">
      <button
        onclick={handlePrev}
        class="absolute left-2 md:left-4 z-40 w-11 h-11 rounded-full border border-white/10 bg-[#0F0F0F]/50 hover:bg-gold text-white hover:text-primary flex items-center justify-center transition-all duration-300 cursor-pointer"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>

      <div class="max-w-full max-h-[75vh] overflow-hidden flex items-center justify-center">
        <img
          src={images[activeIndex].image}
          alt={images[activeIndex].title}
          class="max-w-full max-h-[75vh] object-contain transition-transform duration-300 select-none shadow-2xl"
          style="transform: scale({zoomScale}); cursor: {zoomScale === 1 ? 'zoom-in' : 'zoom-out'}"
          onclick={toggleZoom}
        />
      </div>

      <button
        onclick={handleNext}
        class="absolute right-2 md:right-4 z-40 w-11 h-11 rounded-full border border-white/10 bg-[#0F0F0F]/50 hover:bg-gold text-white hover:text-primary flex items-center justify-center transition-all duration-300 cursor-pointer"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>
    </div>

    <!-- Caption -->
    <div class="text-center z-50 max-w-xl pb-2">
      <h3 class="text-white text-base font-serif font-bold tracking-wide">
        {images[activeIndex].title}
      </h3>
    </div>
  </div>
{/if}
