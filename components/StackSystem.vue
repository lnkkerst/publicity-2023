<script setup lang="ts">
import { variants } from '@catppuccin/palette';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import $ from 'jquery';

onMounted(() => {
  window.onresize = window.onload = function () {
    gsap.set('.m1_stage', { x: '50%', opacity: 1 });
  };
  gsap.set('.m1_stage', { x: '50%', opacity: 1 });

  gsap
    .timeline({ defaults: { duration: 45 } })
    .from('.main1', { duration: 1, autoAlpha: 0, ease: 'power1.inOut' }, 0)
    .fromTo(
      '.m1_cGroup',
      { opacity: 0 },
      { duration: 0.3, opacity: 1, stagger: -0.1 },
      0
    )
    .from(
      '.m1_cGroup',
      {
        duration: 2.5,
        scale: -0.3,
        transformOrigin: '50% 50%',
        stagger: -0.05,
        ease: 'elastic'
      },
      0
    )
    .fromTo(
      '.m1Bg',
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: 'power2.inOut' },
      0.2
    )

    .add('orbs', 1.2)
    .add(() => {
      $('.main1').on('mousemove', e => {
        gsap.to('.m1_cGroup', {
          duration: 1,
          x(i) {
            return (e.clientX / window.innerWidth / (i + 1)) * 150;
          },
          y(i) {
            return i * -20 * (e.clientY / window.innerHeight);
          },
          rotation: Math.random() * 0.1,
          overwrite: 'auto'
        });
        gsap.to('.c1_solid, .c1_line', {
          duration: 1,
          attr: { opacity: 1.1 - 0.75 * (e.clientY / window.innerHeight) }
        });
        gsap.to('.m1OrbBlank', {
          duration: 1,
          opacity: 0.2 + 0.55 * (e.clientY / window.innerHeight)
        });
      });

      $('.main1').on('click', _ => {
        if (gsap.getProperty('.m1_cGroup', 'scale') !== 1) {
          return; // prevent overlapping bouncy tweens
        }
        for (let i = 0; i < $('.m1_cGroup').length; i++) {
          gsap.fromTo(
            $('.m1_cGroup')[i],
            { transformOrigin: '50% 50%', scale: 1 },
            {
              duration: 0.7 - i / 25,
              scale: 0.9,
              ease: 'back.in(10)',
              yoyo: true,
              repeat: 1
            }
          );
        }
      });
    }, 'orbs+=0.5')

    .fromTo(
      '.orb1',
      { xPercent: -35, yPercent: -5 },
      {
        motionPath: {
          path() {
            return MotionPathPlugin.convertToPath('.c1_line1', false)[0];
          },
          start: 1.03,
          end: 1.22
        },
        ease: 'none',
        yoyo: true,
        repeat: -1
      },
      'orbs'
    )

    .fromTo(
      '.orb2',
      { xPercent: -45, yPercent: -10 },
      {
        motionPath: {
          path() {
            return MotionPathPlugin.convertToPath('.c1_line2', false)[0];
          },
          start: 0.98,
          end: 1.2
        },
        ease: 'none',
        yoyo: true,
        repeat: -1
      },
      'orbs'
    )

    .fromTo(
      '.orb3',
      { xPercent: -50, yPercent: -15 },
      {
        motionPath: {
          path() {
            return MotionPathPlugin.convertToPath('.c1_line3', false)[0];
          },
          start: 1.06,
          end: 1.31
        },
        ease: 'none',
        yoyo: true,
        repeat: -1
      },
      'orbs'
    )

    .fromTo(
      '.orb3b',
      { xPercent: -50, yPercent: -25 },
      {
        motionPath: {
          path() {
            return MotionPathPlugin.convertToPath('.c1_line3', false)[0];
          },
          start: 1.49,
          end: 1.65
        },
        ease: 'none',
        yoyo: true,
        repeat: -1
      },
      'orbs'
    )

    .fromTo(
      '.orb3c',
      { xPercent: -45, yPercent: -15 },
      {
        motionPath: {
          path() {
            return MotionPathPlugin.convertToPath('.c1_line3', false)[0];
          },
          start: 0.95,
          end: 1.2
        },
        ease: 'none',
        yoyo: true,
        repeat: -1
      },
      'orbs'
    )

    .fromTo(
      '.orb4',
      { xPercent: -50, yPercent: -25 },
      {
        motionPath: {
          path() {
            return MotionPathPlugin.convertToPath('.c1_line4', false)[0];
          },
          start: 1.14,
          end: 1.26
        },
        ease: 'none',
        yoyo: true,
        repeat: -1
      },
      'orbs'
    )

    .fromTo(
      '.orb4b',
      { xPercent: -50, yPercent: -25 },
      {
        motionPath: {
          path() {
            return MotionPathPlugin.convertToPath('.c1_line4', false)[0];
          },
          start: 1.41,
          end: 1.6
        },
        ease: 'none',
        yoyo: true,
        repeat: -1
      },
      'orbs'
    )

    .fromTo(
      '.m1Orb',
      { scale: 0, transformOrigin: '50% 50%' },
      {
        duration: 0.8,
        scale: 1.5,
        ease: 'back.out(3)',
        stagger: 0.15,
        overwrite: 'auto'
      },
      'orbs'
    )
    .fromTo(
      '.m1OrbBlank',
      { opacity: 0 },
      {
        duration: 0.8,
        opacity(i) {
          return 0.2 + i / 7;
        },
        stagger: 0.1,
        overwrite: 'auto'
      },
      'orbs'
    )
    .fromTo(
      '.m1OrbBlank',
      {
        x(i) {
          return 620 - (i / 4) * 380;
        },
        transformOrigin(i) {
          return `${-(620 - (i / 4) * 380)}px 0px`;
        },
        rotation(i) {
          return [99, -10, 55, 110, 120][i];
        }
      },
      { rotation: '+=75', yoyo: true, repeat: -1 },
      'orbs'
    );
});
</script>

<template>
  <div>
    <svg class="main1" width="100%" height="100%">
      <defs>
        <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop
            offset="10%"
            :style="{
              stopColor: variants.latte.lavender.hex,
              stopOpacity: 0.9
            }"
          />
          <!-- style="stop-color: rgb(255, 255, 0); stop-opacity: 0.9" -->
          <stop
            offset="99%"
            :style="{
              stopColor: variants.latte.mauve.hex,
              stopOpacity: 0.1
            }"
          />
          <!-- style="stop-color: rgb(0, 255, 0); stop-opacity: 0.1" -->
        </linearGradient>
        <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop
            offset="25%"
            :style="{
              stopColor: variants.mocha.base.hex,
              stopOpacity: 0.1
            }"
          />
          <!-- style="stop-color: rgb(0, 255, 200); stop-opacity: 0.1" -->
          <stop
            offset="99%"
            :style="{
              stopColor: variants.mocha.lavender.hex,
              stopOpacity: 0.2
            }"
          />
          <!-- style="stop-color: rgb(200, 255, 0); stop-opacity: 0.2" -->
        </linearGradient>
      </defs>

      <rect class="m1Bg" fill="url(#grad2)" width="100%" height="100%" />

      <g class="m1_stage" opacity="0">
        <g class="m1_cGroup">
          <circle class="m1OrbBlank" cx="0" cy="50" r="50" fill="#1290ff" />

          <circle
            class="c1_line c1_line4"
            cx="0"
            cy="50"
            r="550"
            fill="none"
            stroke-width="2"
            stroke="url(#grad1)"
            opacity="0.4"
          />
          <g class="m1Orb orb4b">
            <image
              xlink:href="https://fastly.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
              width="40"
              height="40"
            />
          </g>

          <g class="m1Orb orb4">
            <image
              xlink:href="https://fastly.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              width="40"
              height="40"
            />
          </g>
        </g>
        <g class="m1_cGroup">
          <circle class="m1OrbBlank" cx="0" cy="50" r="25" fill="#983334" />

          <circle
            class="c1_line c1_line3"
            cx="0"
            cy="50"
            r="450"
            fill="none"
            stroke-width="2"
            stroke="url(#grad1)"
            opacity="0.4"
          />

          <g class="m1Orb orb3c">
            <image
              xlink:href="https://fastly.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              width="40"
              height="40"
            />
          </g>

          <g class="m1Orb orb3b">
            <image
              xlink:href="https://fastly.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              width="40"
              height="40"
            />
          </g>
          <g class="m1Orb orb3">
            <image
              xlink:href="https://fastly.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
              width="40"
              height="40"
            />
          </g>
        </g>
        <g class="m1_cGroup">
          <circle class="m1OrbBlank" cx="0" cy="50" r="15" fill="#653997" />

          <circle
            class="c1_line c1_line2"
            cx="0"
            cy="50"
            r="360"
            fill="none"
            stroke-width="2"
            stroke="url(#grad1)"
            opacity="0.5"
          />

          <g class="m1Orb orb2">
            <image
              xlink:href="https://fastly.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
              width="40"
              height="40"
            />
          </g>
        </g>
        <g class="m1_cGroup">
          <circle class="m1OrbBlank" cx="0" cy="50" r="20" fill="#653997" />
          <circle
            class="m1OrbBlank"
            cx="0"
            cy="50"
            r="40"
            fill="rgba(125,200,32,0.19)"
          />

          <circle
            class="c1_solid"
            cx="0"
            cy="50"
            r="280"
            fill="url(#grad1)"
            opacity="0.2"
          />
          <circle
            class="c1_line c1_line1"
            cx="0"
            cy="50"
            r="279"
            fill="none"
            stroke-width="3"
            stroke="url(#grad1)"
            opacity="0.5"
          />
          <g class="m1Orb orb1">
            <image
              xlink:href="https://fastly.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              width="40"
              height="40"
            />
          </g>
        </g>

        <g class="m1_cGroup">
          <circle
            class="c1_solid"
            cx="0"
            cy="50"
            r="220"
            fill="url(#grad1)"
            opacity="0.4"
          />
        </g>
        <g class="m1_cGroup">
          <circle
            class="c1_solid"
            cx="0"
            cy="50"
            r="150"
            fill="url(#grad1)"
            opacity="0.5"
          />
        </g>
        <g class="m1_cGroup">
          <circle
            class="c1_solid"
            cx="0"
            cy="50"
            r="80"
            :fill="variants.latte.lavender.hex"
            opacity="0.6"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped></style>
