<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsAppWidget from '$lib/components/WhatsAppWidget.svelte';
	import { toast } from '$lib/stores/toast.svelte';
	import { CheckCircle, AlertCircle, Info } from '@lucide/svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon.png" />
	<title>Al Dhahabi Al Jadid Gents Salon | Luxury Grooms Dubai</title>
	<meta name="description" content="Experience premium men's grooming at Al Dhahabi Al Jadid Gents Salon in Dubai. Master haircuts, royal hot towel shaves, and luxury gold facials." />
</svelte:head>

<div class="relative min-h-screen bg-bg-salon flex flex-col justify-between overflow-x-hidden selection:bg-gold selection:text-primary">
	<Navbar />

	<main class="flex-grow pt-20 lg:pt-24 bg-primary">
		{@render children()}
	</main>

	<Footer />

	<!-- Toast Container -->
	<div class="fixed bottom-24 right-6 z-[100] flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 md:px-0">
		{#each toast.toasts as t (t.id)}
			<div
				class="pointer-events-auto bg-[#141414] border border-gold/30 p-4 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-start gap-3 text-white transition-all duration-300 transform translate-y-0"
				role="alert"
			>
				{#if t.type === 'success'}
					<CheckCircle size={16} class="text-gold mt-0.5 flex-shrink-0" />
				{:else if t.type === 'error'}
					<AlertCircle size={16} class="text-red-500 mt-0.5 flex-shrink-0" />
				{:else}
					<Info size={16} class="text-blue-400 mt-0.5 flex-shrink-0" />
				{/if}
				<div class="flex-grow">
					<p class="text-[12px] font-light leading-relaxed text-white/90">{t.message}</p>
				</div>
				<button
					onclick={() => toast.remove(t.id)}
					class="text-white/40 hover:text-white text-base cursor-pointer focus:outline-none flex-shrink-0 leading-none -mt-1"
					aria-label="Dismiss"
				>
					&times;
				</button>
			</div>
		{/each}
	</div>

	<!-- Floating WhatsApp Widget -->
	<WhatsAppWidget position="right" />
</div>
