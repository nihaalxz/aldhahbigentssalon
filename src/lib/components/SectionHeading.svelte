<script lang="ts">
  import { cn } from '$lib/utils';

  interface Props {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    light?: boolean;
    class?: string;
  }

  let {
    title,
    subtitle = '',
    align = 'center',
    light = false,
    class: customClass = ''
  }: Props = $props();

  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };
</script>

<div class={cn('flex flex-col mb-10 md:mb-14', alignment[align], customClass)}>
  {#if subtitle}
    {#if !light}
      <span class="text-[10px] md:text-xs bg-gold text-primary font-black tracking-[0.2em] uppercase px-2.5 py-1 mb-4 inline-block">
        {subtitle}
      </span>
    {:else}
      <span class="text-xs md:text-sm text-gold font-bold tracking-[0.3em] uppercase mb-3 block">
        {subtitle}
      </span>
    {/if}
  {/if}
  
  <h2 class={cn(
    'text-3xl md:text-5xl font-bold tracking-wide leading-tight',
    light ? 'text-white' : 'text-primary'
  )}>
    {title}
  </h2>
  
  <div class="w-16 h-[2px] bg-gold mt-4"></div>
</div>
