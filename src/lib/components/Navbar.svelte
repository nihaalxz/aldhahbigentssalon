<script lang="ts">
  import { page } from '$app/stores';
  import { Menu, X } from '@lucide/svelte';
  import Button from './Button.svelte';
  import { onMount } from 'svelte';

  let isScrolled = $state(false);
  let mobileMenuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 40;
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Services', href: '/our-services' },
    { name: 'Contact', href: '/contact' }
  ];

  let currentPath = $derived($page.url.pathname);

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<nav class="fixed top-0 left-0 w-full z-45 transition-all duration-300 bg-primary/95 backdrop-blur-md border-b border-gold/10 shadow-lg {isScrolled ? 'py-3.5' : 'py-5.5'}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-3 group">
        <img src="/salon_logo.png" alt="Al Dhahabi Logo" class="h-10 w-auto object-contain" />
        <div class="flex flex-col text-left">
          <span class="text-white font-serif text-base md:text-lg font-bold tracking-[0.15em] group-hover:text-gold transition-colors duration-300">
            AL DHAHABI
          </span>
          <span class="text-[7px] text-gold tracking-[0.4em] font-semibold uppercase">
            AL JADID GENTS SALON
          </span>
        </div>
      </a>

      <!-- Desktop Links -->
      <div class="hidden lg:flex items-center gap-8">
        {#each navLinks as link}
          <a
            href={link.href}
            class="text-[11px] tracking-widest font-bold uppercase transition-colors duration-300 hover:text-gold relative py-1 {currentPath === link.href ? 'text-gold' : 'text-white'}"
          >
            {link.name}
            {#if currentPath === link.href}
              <span class="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold rounded-full"></span>
            {/if}
          </a>
        {/each}
      </div>



      <!-- Mobile menu trigger -->
      <div class="flex lg:hidden items-center gap-2.5">
        <button
          onclick={toggleMobileMenu}
          class="text-white hover:text-gold focus:outline-none p-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          {#if mobileMenuOpen}
            <X size={20} />
          {:else}
            <Menu size={20} />
          {/if}
        </button>
      </div>
    </div>
  </div>
</nav>

<!-- Mobile drawer overlay -->
{#if mobileMenuOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    onclick={toggleMobileMenu}
    class="fixed inset-0 z-35 bg-black/70 backdrop-blur-xs lg:hidden"
    role="presentation"
  ></div>

  <!-- Mobile Drawer -->
  <div class="fixed top-0 right-0 w-80 h-full bg-primary z-55 p-6 flex flex-col justify-between border-l border-gold/10 shadow-2xl transition-transform duration-300 transform lg:hidden">
    <div>
      <div class="flex items-center justify-between border-b border-white/5 pb-6">
        <a href="/" class="flex items-center gap-2.5 text-left" onclick={toggleMobileMenu}>
          <img src="/salon_logo.png" alt="Al Dhahabi Logo" class="h-8 w-auto object-contain" />
          <div class="flex flex-col">
            <span class="text-white font-serif text-sm font-bold tracking-[0.15em]">AL DHAHABI</span>
            <span class="text-[7px] text-gold tracking-[0.35em] font-semibold uppercase">AL JADID GENTS SALON</span>
          </div>
        </a>
        <button
          onclick={toggleMobileMenu}
          class="text-white hover:text-gold p-1 cursor-pointer"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </div>

      <div class="flex flex-col gap-4 mt-8">
        {#each navLinks as link}
          <a
            href={link.href}
            onclick={toggleMobileMenu}
            class="text-[12px] tracking-widest font-bold uppercase transition-colors duration-300 hover:text-gold py-2 border-b border-white/5 {currentPath === link.href ? 'text-gold pl-2 border-l border-gold border-b-0' : 'text-white'}"
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>


  </div>
{/if}
