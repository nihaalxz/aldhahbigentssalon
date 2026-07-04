<script lang="ts">
  import { openingHours } from '$lib/data/mockData';
  import { toast } from '$lib/stores/toast.svelte';
  import Button from '$lib/components/Button.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from '@lucide/svelte';

  // Web3Forms access key — tied to aldhahabigentssaloon@gmail.com
  // Get your free key at https://web3forms.com and replace the value below
  const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

  // Form states
  let name = $state('');
  let email = $state('');
  let subject = $state('');
  let message = $state('');
  let submitting = $state(false);

  async function handleMessage(e: SubmitEvent) {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.add('Please fill in all inputs.', 'error');
      return;
    }

    submitting = true;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `[Al Dhahabi Salon] ${subject}`,
          from_name: name,
          email: email,
          message: message,
          botcheck: ''
        })
      });

      const result = await response.json();

      if (result.success) {
        toast.add(`Thank you ${name}! Your message has been sent. Our team will contact you shortly.`, 'success', 6000);
        name = '';
        email = '';
        subject = '';
        message = '';
      } else {
        toast.add('Something went wrong. Please try again or contact us on WhatsApp.', 'error', 5000);
      }
    } catch {
      toast.add('Network error. Please check your connection and try again.', 'error', 5000);
    } finally {
      submitting = false;
    }
  }
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
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      
      <!-- Left Column: Details -->
      <div class="space-y-10">
        <div>
          <SectionHeading title="The Dubai" subtitle="Our Location" align="left" class="mb-8" />
          <p class="text-primary/70 text-sm font-light leading-relaxed">
            Al Dhahabi Al Jadid Gents Saloon is located in Al Qusais 2, Dubai, near Nasex Courier. Step in for the ultimate premium grooming experience.
          </p>
        </div>

        <!-- Details Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
          <!-- Address -->
          <div class="flex items-start gap-3">
            <MapPin size={18} class="text-gold mt-1 flex-shrink-0" />
            <div>
              <h4 class="font-bold uppercase tracking-wider text-xs mb-1.5">Address</h4>
              <p class="text-primary/70 font-light leading-relaxed">
                <a href="https://maps.app.goo.gl/n74i1nSi68dGguyJ6" target="_blank" rel="noreferrer" class="hover:text-gold transition-colors duration-300">
                  AL DHAHABI AL JADID GENTS SALOON,<br />
                  NEAR NASEX COURIER,<br />
                  AL QUSAIS 2, DUBAI
                </a>
              </p>
            </div>
          </div>

          <!-- Contact info -->
          <div class="flex items-start gap-3">
            <Phone size={18} class="text-gold mt-1 flex-shrink-0" />
            <div>
              <h4 class="font-bold uppercase tracking-wider text-xs mb-2">Contact Details</h4>
              <div class="space-y-1.5">
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
                  <a href="mailto:aldhahabigentssaloon@gmail.com" class="hover:text-gold transition-colors font-semibold break-all text-xs">aldhahabigentssaloon@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Hours Calendar -->
        <div class="border-t border-primary/10 pt-8">
          <div class="flex items-center gap-2 mb-4">
            <Clock size={16} class="text-gold" />
            <h4 class="font-bold uppercase tracking-widest text-xs">Opening Hours</h4>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-primary/70 font-light">
            {#each openingHours as item}
              <div class="flex justify-between border-b border-primary/5 pb-2">
                <span class="font-medium">{item.day}</span>
                <span>{item.hours}</span>
              </div>
            {/each}
          </div>
        </div>

      </div>

      <!-- Right Column: Form -->
      <div class="bg-[#141414] border border-gold/15 text-white p-6 md:p-10 shadow-2xl relative">
        <h3 class="text-base font-bold font-serif text-white mb-6 flex items-center gap-2">
          <MessageSquare size={16} class="text-gold" />
          Send Us a Message
        </h3>

        <form onsubmit={handleMessage} class="space-y-5">
          <!-- Name -->
          <div class="flex flex-col gap-2">
            <label for="contact-name" class="text-[10px] text-white/50 tracking-wider uppercase font-bold">Your Name *</label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="e.g. John Doe"
              bind:value={name}
              class="bg-white/5 border border-white/10 hover:border-gold/30 focus:border-gold px-4 py-3 outline-none text-xs text-white rounded-none focus:ring-0 w-full"
            />
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-2">
            <label for="contact-email" class="text-[10px] text-white/50 tracking-wider uppercase font-bold">Email Address *</label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="e.g. john@example.com"
              bind:value={email}
              class="bg-white/5 border border-white/10 hover:border-gold/30 focus:border-gold px-4 py-3 outline-none text-xs text-white rounded-none focus:ring-0 w-full"
            />
          </div>

          <!-- Subject -->
          <div class="flex flex-col gap-2">
            <label for="contact-subject" class="text-[10px] text-white/50 tracking-wider uppercase font-bold">Subject *</label>
            <input
              id="contact-subject"
              type="text"
              required
              placeholder="e.g. Corporate Booking, Wedding Packages, Feedback..."
              bind:value={subject}
              class="bg-white/5 border border-white/10 hover:border-gold/30 focus:border-gold px-4 py-3 outline-none text-xs text-white rounded-none focus:ring-0 w-full"
            />
          </div>

          <!-- Message -->
          <div class="flex flex-col gap-2">
            <label for="contact-message" class="text-[10px] text-white/50 tracking-wider uppercase font-bold">Message *</label>
            <textarea
              id="contact-message"
              required
              rows="4"
              placeholder="Write your message here..."
              bind:value={message}
              class="bg-white/5 border border-white/10 hover:border-gold/30 focus:border-gold px-4 py-3 outline-none text-xs text-white rounded-none resize-none focus:ring-0 w-full"
            ></textarea>
          </div>

          <Button variant="primary" size="md" type="submit" class="w-full" disabled={submitting}>
            <Send size={12} class="mr-2" />
            {submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
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
