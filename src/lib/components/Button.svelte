<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils';

  interface Props {
    variant?: 'primary' | 'secondary' | 'dark' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    target?: string;
    rel?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    class?: string;
    onclick?: (e: MouseEvent) => void;
    children?: Snippet;
  }

  let {
    variant = 'primary',
    size = 'md',
    href = undefined,
    type = 'button',
    disabled = false,
    class: customClass = '',
    onclick,
    children,
    ...rest
  }: Props = $props();

  const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-widest uppercase transition-all duration-300 rounded-none focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer';

  const variants = {
    primary: 'bg-gold text-primary border border-gold hover:bg-gold-hover hover:border-gold-hover shadow-[0_4px_20px_rgba(199,164,90,0.15)] hover:shadow-[0_4px_30px_rgba(199,164,90,0.3)]',
    secondary: 'bg-transparent text-gold border border-gold/40 hover:border-gold hover:bg-gold/5',
    dark: 'bg-[#1A1A1A] text-white border border-gold/30 hover:border-gold hover:bg-primary',
    ghost: 'bg-transparent text-white hover:text-gold hover:bg-white/5'
  };

  const sizes = {
    sm: 'text-[10px] px-4 py-2.5 gap-1.5',
    md: 'text-[11px] px-6 py-3.5 gap-2',
    lg: 'text-[12px] px-8 py-4.5 gap-2.5'
  };
</script>

{#if href}
  <a
    {href}
    class={cn(baseStyles, variants[variant], sizes[size], customClass)}
    {...rest}
  >
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <button
    {type}
    {disabled}
    class={cn(baseStyles, variants[variant], sizes[size], customClass)}
    {onclick}
    {...rest}
  >
    {#if children}
      {@render children()}
    {/if}
  </button>
{/if}
