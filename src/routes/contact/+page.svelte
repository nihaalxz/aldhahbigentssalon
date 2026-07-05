<script lang="ts">
  import { openingHours } from '$lib/data/mockData';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import { MapPin, Phone, Clock } from '@lucide/svelte';
</script>

<!-- Header -->
<section class="relative py-20 bg-primary bg-dark-gradient border-b border-gold/15 text-white text-center">
  <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff300_1.5px,transparent_1.5px)] [background-size:30px_30px] pointer-events-none"></div>
  <div class="max-w-7xl mx-auto px-4 relative z-10">
    <span class="text-xs text-gold font-bold tracking-[0.3em] uppercase mb-3 block">Reach Out</span>
    <h1 class="text-4xl md:text-6xl font-bold font-serif tracking-wide text-white">
      GET IN TOUCH
    </h1>
    <p class="text-text-secondary text-xs md:text-sm max-w-xl mx-auto font-light mt-4 tracking-widest uppercase">
      Have a question or custom booking request? Contact us.
    </p>
  </div>
</section>

<!-- Content Block -->
<section class="py-20 bg-bg-salon text-primary">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <SectionHeading title="The Dubai" subtitle="Our Location" align="center" class="mb-6" />
      <p class="text-primary/70 text-sm font-light leading-relaxed max-w-2xl mx-auto">
        Al Dhahabi Al Jadid Gents Saloon is located in Al Qusais 2, Dubai, near Nasex Courier. Step in for the ultimate premium grooming experience.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
      <!-- Left Column: Address & Contact Details -->
      <div class="space-y-8">
        <!-- Address -->
        <div class="flex items-start gap-4 p-6 bg-white/5 border border-primary/5 hover:border-gold/15 transition-all duration-300">
          <MapPin size={22} class="text-gold mt-1 flex-shrink-0" />
          <div>
            <h4 class="font-bold uppercase tracking-wider text-xs mb-2">Address</h4>
            <p class="text-primary/70 text-sm font-light leading-relaxed">
              <a href="https://maps.app.goo.gl/n74i1nSi68dGguyJ6" target="_blank" rel="noreferrer" class="hover:text-gold transition-colors duration-300">
                AL DHAHABI AL JADID GENTS SALOON,<br />
                NEAR NASEX COURIER,<br />
                AL QUSAIS 2, DUBAI
              </a>
            </p>
          </div>
        </div>

        <!-- Contact info -->
        <div class="flex items-start gap-4 p-6 bg-white/5 border border-primary/5 hover:border-gold/15 transition-all duration-300">
          <Phone size={22} class="text-gold mt-1 flex-shrink-0" />
          <div class="w-full">
            <h4 class="font-bold uppercase tracking-wider text-xs mb-3">Contact Details</h4>
            <div class="space-y-2 text-sm">
              <p class="text-primary/70 font-light leading-relaxed flex items-center gap-1.5">
                <span class="font-medium text-xs uppercase text-primary/40 min-w-[70px]">Tel No:</span>
                <a href="tel:+9710507786634" class="hover:text-gold transition-colors font-semibold">+9710507786634</a>
              </p>
              <p class="text-primary/70 font-light leading-relaxed flex items-center gap-1.5">
                <span class="font-medium text-xs uppercase text-primary/40 min-w-[70px] flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" class="text-[#25D366]">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437.002 9.861-4.416 9.864-9.852.002-2.632-1.02-5.107-2.88-6.97C16.395 1.963 13.918.94 11.285.94c-5.441 0-9.864 4.42-9.868 9.856-.001 1.714.453 3.39 1.317 4.878l-.994 3.635 3.727-.975zm12.39-7.234c-.308-.154-1.82-.9-2.1-.1-.28.1-.56.408-.686.552-.125.145-.25.218-.558.064-.308-.154-1.3-.48-2.477-1.53-.915-.817-1.533-1.827-1.712-2.135-.18-.308-.02-.475.134-.629.14-.139.308-.36.463-.54.154-.18.206-.308.308-.514.102-.206.051-.385-.026-.54-.077-.154-.686-1.656-.94-2.26-.247-.594-.5-.513-.686-.523-.18-.008-.385-.01-.59-.01-.205 0-.54.077-.822.385-.282.308-1.078 1.054-1.078 2.57 0 1.517 1.104 2.984 1.258 3.19.154.205 2.17 3.31 5.257 4.64.734.317 1.307.506 1.753.648.74.235 1.413.201 1.947.122.593-.087 1.82-.745 2.077-1.465.256-.72.256-1.336.18-1.465-.077-.13-.282-.205-.59-.36z"/>
                  </svg>
                  <span>WA:</span>
                </span>
                <a href="https://wa.me/971582881215" target="_blank" rel="noreferrer" class="hover:text-gold transition-colors font-semibold flex items-center gap-1">+9710582881215</a>
              </p>
              <p class="text-primary/70 font-light leading-relaxed flex items-center gap-1.5 flex-wrap">
                <span class="font-medium text-xs uppercase text-primary/40 min-w-[70px]">Email:</span>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aldhahabigentssaloon@gmail.com" target="_blank" rel="noreferrer" class="hover:text-gold transition-colors font-semibold break-all text-xs">aldhahabigentssaloon@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Opening Hours -->
      <div class="p-6 bg-white/5 border border-primary/5 hover:border-gold/15 transition-all duration-300">
        <div class="flex items-center gap-2 mb-6">
          <Clock size={20} class="text-gold" />
          <h4 class="font-bold uppercase tracking-widest text-xs">Opening Hours</h4>
        </div>
        <div class="space-y-3.5 text-sm text-primary/70 font-light">
          {#each openingHours as item}
            <div class="flex justify-between border-b border-primary/5 pb-2.5">
              <span class="font-medium">{item.day}</span>
              <span>{item.hours}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Maps Section -->
<section class="w-full h-96 bg-primary border-t border-gold/15 relative overflow-hidden">
  <!-- Styled Iframe Map -->
  <iframe
    title="Al Dhahabi Al Jadid Gents Saloon Location Map"
    src="https://maps.google.com/maps?q=Al%20Dhahabi%20Al%20Jadid%20Gents%20Salon%20Al%20Qusais%202%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
    class="w-full h-full border-none"
    allowfullscreen={true}
    loading="lazy"
  ></iframe>
</section>
