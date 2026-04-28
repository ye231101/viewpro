'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Bed,
  Calendar,
  Check,
  DollarSign,
  Fuel,
  Headset,
  Heart,
  Layers2,
  LineChart,
  MessageCircle,
  CircleDollarSign,
  Play,
  Lock,
  Monitor,
  Ruler,
  TrendingUp,
  User,
  X,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useViewProWidget } from '@/components/view-pro-widget-provider';
import { cn } from '@/lib/utils';

const TRUST_NAMES = ['La Mesa RV', "Bish's RV", 'Transwest', 'General RV', '& 200+ MORE'] as const;

export default function HomePage() {
  const { isAvailable, open } = useViewProWidget();

  return (
    <div className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-116px)] w-full flex-col overflow-hidden bg-neutral-950 md:min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          <Image
            src="/images/landing_hero.png"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-90"
            sizes="100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#060d18]/95 via-[#0a1628]/88 to-[#0a1628]/55"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/40"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full flex-1 flex-col justify-center px-3 py-12 sm:px-4 sm:py-16 md:px-6 md:py-20 lg:px-10">
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="text-3xl font-black tracking-tight text-white uppercase drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">Meet buyers.</span>
              <span className="block">In real time.</span>
              <span className="text-primary block">Close more deals.</span>
            </h1>
            <p className="mt-4 max-w-md text-sm font-medium text-white/90 sm:mt-5 sm:text-base md:text-lg md:leading-relaxed">
              ViewPro turns your website into a live showroom. Connect visitors with real people instantly - so you
              never miss another ready-to-buy customer.
            </p>
            <div className="mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              {isAvailable && (
                <Button
                  type="button"
                  size="lg"
                  className="bg-primary border-primary text-primary-foreground hover:bg-primary/90 h-auto w-full cursor-pointer rounded-md border-2 px-3 py-3 text-sm font-bold shadow-none sm:w-auto sm:px-8 md:px-6"
                  onClick={open}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-center justify-center gap-2">
                      <span
                        className="animate-live-dot-blink size-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)] motion-reduce:animate-none"
                        aria-hidden
                      />
                      <span className="text-base font-bold text-white uppercase">See it live now</span>
                    </div>
                    <span className="text-xs text-white/70">Connect in seconds if an agent is available</span>
                  </div>
                </Button>
              )}
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="h-auto w-full cursor-pointer rounded-md border-2 border-white/80 bg-transparent px-3 py-3 text-sm font-bold text-white shadow-none hover:bg-white/10 hover:text-white sm:w-auto sm:px-8 md:px-6"
                asChild
              >
                <div className="inline-flex items-center justify-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
                    <Play className="size-4 fill-white text-white" aria-hidden />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-bold text-white uppercase">Watch demo</span>
                    <span className="text-center text-xs text-white/70 sm:text-left">See how it works</span>
                  </div>
                </div>
              </Button>
            </div>
          </div>

          <div className="mt-8 w-full sm:mt-10 lg:w-fit">
            <div className="grid grid-cols-1 justify-start gap-0 sm:grid-cols-[repeat(3,max-content)] sm:gap-x-0 lg:justify-center">
              {[
                {
                  Icon: Zap,
                  title: 'Instant connection',
                  sub: 'Real people in seconds',
                },
                {
                  Icon: MessageCircle,
                  title: 'More conversations',
                  sub: 'Engage more buyers',
                },
                {
                  Icon: TrendingUp,
                  title: 'More sales',
                  sub: "Close while they're hot",
                },
              ].map(({ Icon, title, sub }) => (
                <div key={title} className="flex flex-row gap-3 px-1 py-3 sm:px-4 sm:py-0 md:flex-col">
                  <div className="border-primary flex size-12 items-center justify-center rounded-full border-2">
                    <Icon className="text-primary size-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-bold tracking-wide text-white uppercase">{title}</span>
                    <span className="text-sm text-white/80">{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-neutral-50 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
          <p className="text-primary text-center text-sm font-bold tracking-[0.2em] uppercase">
            Trusted by top RV dealerships
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {TRUST_NAMES.map((name) => (
              <span
                key={name}
                className="text-center text-lg font-extrabold tracking-tight text-neutral-400 grayscale select-none sm:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Old way vs ViewPro */}
      <section className="bg-white py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-neutral-900 md:text-4xl">
              Don&apos;t <span className="text-destructive">lose buyers</span> to slow responses.
            </h2>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              When visitors can&apos;t get answers, they leave. And buy somewhere else.
            </p>
          </div>

          <div className="relative mx-auto mt-12 lg:mt-16">
            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
              {/* The old way */}
              <article className="relative isolate h-full overflow-hidden rounded-2xl border border-neutral-100 shadow-sm sm:min-h-80 lg:min-h-88">
                <Image
                  src="/images/old_way.png"
                  alt=""
                  fill
                  className="object-cover object-center contrast-125 grayscale"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/88 via-black/70 to-black/30" aria-hidden />
                <div className="relative z-10 flex h-full min-h-[min(22rem,70vw)] flex-col px-6 py-8 sm:min-h-80 sm:px-8 sm:py-10 lg:min-h-88 lg:max-w-[85%]">
                  <span className="inline-flex w-fit rounded-md bg-white/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white uppercase ring-1 ring-white/30 backdrop-blur-sm">
                    The old way
                  </span>
                  <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Missed opportunities.
                  </h3>
                  <ul className="mt-6 space-y-3.5">
                    {[
                      'Fill out a form and wait',
                      'No immediate answers',
                      'Get distracted',
                      'Buy from someone else',
                    ].map((t) => (
                      <li
                        key={t}
                        className="flex items-center gap-3 text-sm leading-snug text-white/95 sm:text-[0.9375rem]"
                      >
                        <span
                          className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500 shadow-sm"
                          aria-hidden
                        >
                          <X className="size-3.5 text-white" strokeWidth={3} />
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* The ViewPro way */}
              <article className="border-primary/10 shadow-primary/10 relative isolate h-full overflow-hidden rounded-2xl border-2 shadow-md sm:min-h-80 lg:min-h-88">
                <Image
                  src="/images/viewpro_way.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div
                  className="from-primary/90 via-primary/72 to-primary/28 absolute inset-0 bg-linear-to-r"
                  aria-hidden
                />
                <div className="relative z-10 flex h-full min-h-[min(22rem,70vw)] flex-col px-6 py-8 sm:min-h-80 sm:px-8 sm:py-10 lg:min-h-88 lg:max-w-[85%]">
                  <span className="text-primary inline-flex w-fit rounded-md bg-white px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm ring-1 ring-white/70">
                    The ViewPro way
                  </span>
                  <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Real connections.
                    <span className="block">Real results.</span>
                  </h3>
                  <ul className="mt-6 space-y-3.5">
                    {[
                      'Visitors click and connect instantly',
                      'Real people. Real answers.',
                      'Build trust in the moment',
                      'More appointments. More sales.',
                    ].map((t) => (
                      <li
                        key={t}
                        className="flex items-center gap-3 text-sm leading-snug text-white/95 sm:text-[0.9375rem]"
                      >
                        <span
                          className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"
                          aria-hidden
                        >
                          <Check className="text-primary size-3.5" strokeWidth={3} />
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>

            <div
              className="pointer-events-none absolute top-1/2 left-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
              aria-hidden
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-white text-base font-black text-neutral-900 shadow-lg lg:size-16 lg:text-lg">
                VS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product / demo — single card, three columns */}
      <section id="demo" className="scroll-mt-24 py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg md:p-8 lg:p-10">
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-8 xl:gap-10">
              {/* Left: marketing */}
              <div className="flex flex-col lg:col-span-3">
                <p className="text-primary text-xs font-bold tracking-wide uppercase">New!</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-900 md:text-4xl">
                  See it live on <span className="text-primary">every unit.</span>
                </h2>
                <p className="text-muted-foreground mt-4 text-base leading-relaxed md:text-[1.05rem]">
                  Buyers can connect with a real specialist about the exact RV they&apos;re viewing—before they click
                  away.
                </p>
                <a
                  href="#demo"
                  className="text-primary mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase hover:underline"
                >
                  <span className="bg-primary/10 flex size-8 items-center justify-center rounded-full">
                    <Play className="fill-primary text-primary size-3.5" aria-hidden />
                  </span>
                  See how it works
                </a>
              </div>

              {/* Middle: gallery */}
              <div className="flex min-w-0 flex-col lg:col-span-5">
                <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    src="/images/landing_hero.png"
                    alt="2024 Winnebago View 24D"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {[0, 1, 2, 3].map((i) => {
                    const showPlay = i === 0 || i === 3;
                    return (
                      <div key={i} className="relative aspect-video overflow-hidden rounded-lg bg-neutral-200">
                        <Image
                          src={i === 0 || i === 2 ? '/images/landing_hero.png' : '/images/photos_coming_soon.jpg'}
                          alt=""
                          fill
                          className={cn('object-cover', i === 0 && 'object-left')}
                          sizes="140px"
                        />
                        {showPlay ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/35" aria-hidden>
                            <span className="flex size-9 items-center justify-center rounded-full bg-white/95 shadow-md">
                              <Play className="text-primary fill-primary ml-0.5 size-4" aria-hidden />
                            </span>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: details & CTAs */}
              <div className="flex min-w-0 flex-col border-t border-neutral-100 pt-8 lg:col-span-4 lg:border-t-0 lg:pt-0">
                <h3 className="text-xl font-bold text-neutral-900 md:text-2xl">2024 Winnebago View 24D</h3>
                <p className="text-muted-foreground mt-1 text-sm md:text-base">
                  Class C Motorhome <span className="text-neutral-300">•</span> Stock # 51234
                </p>
                <p className="mt-4 text-3xl font-black tracking-tight text-neutral-900 tabular-nums md:text-4xl">
                  $189,995
                </p>

                <div className="text-muted-foreground mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                  {[
                    { Icon: Ruler, label: '24\' 6"' },
                    { Icon: Layers2, label: '2 Slides' },
                    { Icon: Bed, label: 'Sleeps 4' },
                    { Icon: Fuel, label: 'Diesel' },
                  ].map(({ Icon, label }) => (
                    <span key={label} className="inline-flex items-center gap-2">
                      <Icon className="size-4 shrink-0 text-neutral-400" strokeWidth={1.75} aria-hidden />
                      <span className="font-medium text-neutral-600">{label}</span>
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  {isAvailable ? (
                    <Button
                      type="button"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 h-auto w-full cursor-pointer flex-col gap-1 rounded-lg py-3.5 shadow-sm"
                      onClick={open}
                    >
                      <span className="text-sm font-bold tracking-wide uppercase">See it live now</span>
                      <span className="text-primary-foreground/95 flex items-center gap-2 text-xs font-normal normal-case">
                        <span
                          className="animate-live-dot-blink size-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] motion-reduce:animate-none"
                          aria-hidden
                        />
                        Talk to a specialist now
                      </span>
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      className="h-auto w-full cursor-pointer flex-col gap-1 rounded-lg py-3.5"
                      asChild
                    >
                      <Link
                        href="/inventory"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex flex-col items-center justify-center gap-1"
                      >
                        <span className="text-sm font-bold tracking-wide uppercase">View inventory</span>
                        <span className="text-primary-foreground/95 text-xs font-normal normal-case">
                          Browse units like this one
                        </span>
                      </Link>
                    </Button>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                    <Button
                      type="button"
                      variant="outline"
                      className="h-11 flex-1 cursor-pointer rounded-lg border-neutral-300 text-sm font-bold uppercase shadow-none"
                      asChild
                    >
                      <Link href="/inventory">Request info</Link>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="group hover:border-primary hover:bg-primary size-11 shrink-0 cursor-pointer rounded-lg border-neutral-300 shadow-none hover:text-white [&_svg]:text-neutral-600 [&_svg]:transition-colors [&_svg]:group-hover:text-white"
                      aria-label="Save to favorites"
                    >
                      <Heart className="size-5" strokeWidth={1.75} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-100 py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center text-xl font-black tracking-wide text-neutral-900 uppercase sm:text-2xl md:text-3xl">
            Real results from real dealers
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
            {(
              [
                {
                  Icon: MessageCircle,
                  stat: '38%',
                  lines: [
                    { text: 'More Conversations', variant: 'bold' as const },
                    { text: 'with real people', variant: 'normal' as const },
                  ],
                },
                {
                  Icon: Calendar,
                  stat: '22%',
                  lines: [
                    { text: 'More Appointments', variant: 'bold' as const },
                    { text: 'scheduled', variant: 'normal' as const },
                  ],
                },
                {
                  Icon: LineChart,
                  stat: '18%',
                  lines: [
                    { text: 'Higher Close Rate', variant: 'bold' as const },
                    { text: 'from website traffic', variant: 'normal' as const },
                  ],
                },
                {
                  Icon: CircleDollarSign,
                  stat: undefined,
                  lines: [
                    { text: 'More Revenue', variant: 'bold' as const },
                    { text: 'in Less Time', variant: 'bold' as const },
                    { text: 'every month', variant: 'normal' as const },
                  ],
                },
              ] as const
            ).map(({ Icon, stat, lines }) => (
              <div
                key={lines[0].text}
                className="flex items-center gap-4 rounded-xl border border-neutral-200/90 bg-neutral-50/80 p-6 shadow-sm md:gap-5 md:p-6"
              >
                <Icon className="size-10 shrink-0 text-neutral-900 md:size-11" strokeWidth={1.35} aria-hidden />
                <div className="min-w-0 flex-1 text-left">
                  {stat ? (
                    <p className="text-primary text-3xl leading-none font-black tabular-nums md:text-[2.125rem]">
                      {stat}
                    </p>
                  ) : null}
                  <div className={cn('space-y-0.5', stat && 'mt-2')}>
                    {lines.map((line) => (
                      <p
                        key={line.text}
                        className={cn(
                          'text-sm leading-snug text-neutral-900',
                          line.variant === 'bold' ? 'font-bold' : 'font-normal',
                        )}
                      >
                        {line.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-[#010a17] py-6 md:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="text-left">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Turn your website into a live showroom.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Install in 24 hours. Start connecting. Start closing.
            </p>
          </div>
          {!isAvailable && (
            <div className="flex shrink-0 flex-col items-center gap-2">
              <Button
                type="button"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25 h-auto rounded-lg px-10 py-3.5 text-sm font-bold uppercase shadow-lg"
                onClick={open}
              >
                Book & Demo
              </Button>
              <p className="text-sm text-neutral-400">No obligation. See it live.</p>
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#001127] py-6 md:py-10">
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {[
              {
                title: 'Easy to install',
                sub: 'Up and running in 24 hours',
                renderIcon: () => (
                  <span className="bg-primary flex size-10 shrink-0 items-center justify-center rounded-full shadow-sm">
                    <Check className="text-primary-foreground size-5" strokeWidth={2.5} aria-hidden />
                  </span>
                ),
              },
              {
                title: 'Works on any device',
                sub: 'Mobile, tablet, or desktop',
                renderIcon: () => <Monitor className="text-primary size-10 shrink-0" strokeWidth={1.5} aria-hidden />,
              },
              {
                title: 'Secure & reliable',
                sub: 'Enterprise-grade security and 99.9% uptime',
                renderIcon: () => <Lock className="text-primary size-10 shrink-0" strokeWidth={1.5} aria-hidden />,
              },
              {
                title: 'Pay for performance',
                sub: 'Affordable monthly plans + pay-for-results option',
                renderIcon: () => (
                  <span className="bg-primary flex size-10 shrink-0 items-center justify-center rounded-full shadow-sm">
                    <DollarSign className="text-primary-foreground size-5" strokeWidth={2.25} aria-hidden />
                  </span>
                ),
              },
            ].map(({ title, sub, renderIcon }, index) => (
              <div
                key={title}
                className={cn('flex gap-4 text-left lg:px-5 xl:px-6', index > 0 && 'lg:border-l lg:border-white/10')}
              >
                {renderIcon()}
                <div className="min-w-0">
                  <p className="text-xs font-bold tracking-wide text-white uppercase">{title}</p>
                  <p className="mt-1 text-sm leading-snug text-neutral-400">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
