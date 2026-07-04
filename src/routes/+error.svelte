<script lang="ts">
  import { page } from '$app/stores';
  import Button from '$lib/components/Button.svelte';

  const status = $derived($page.status);
  const message = $derived($page.error?.message || 'Page Not Found');
</script>

<svelte:head>
  <title>Luxury Lost | Al Dhahabi Gents Salon</title>
</svelte:head>

<section class="min-h-[80vh] flex flex-col items-center justify-center bg-[#0F0F0F] text-white p-6 text-center relative -mt-20 lg:-mt-24">
  <!-- Grid background decoration -->
  <div class="absolute inset-0 opacity-5 bg-[radial-gradient(#fff300_1.5px,transparent_1.5px)] [background-size:25px_25px] pointer-events-none"></div>

  <div class="relative max-w-lg bg-[#141414] border border-gold/20 p-10 md:p-14 shadow-[0_15px_50px_rgba(0,0,0,0.8)] z-10">
    <!-- Gold corner highlights -->
    <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold/40"></div>
    <div class="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold/40"></div>
    <div class="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold/40"></div>
    <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold/40"></div>

    <span class="text-xs text-gold font-bold tracking-[0.4em] uppercase mb-4 block">Status {status}</span>
    
    <h1 class="text-5xl md:text-7xl font-bold font-serif text-white tracking-wide mb-6">
      404
    </h1>
    
    <h2 class="text-lg md:text-xl font-bold font-serif text-gold-gradient uppercase tracking-widest mb-6">
      {message}
    </h2>

    <p class="text-text-secondary text-xs md:text-sm font-light leading-relaxed mb-10 max-w-sm mx-auto">
      The styling chair or service page you are looking for is currently unavailable. Let's redirect you back to safety.
    </p>

    <Button variant="primary" size="lg" href="/" class="w-full">
      Return to Reception
    </Button>
  </div>
</section>
