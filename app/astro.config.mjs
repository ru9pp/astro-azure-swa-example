// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

import swaConfigIntegration from './utils/swaConfigIntegration'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), swaConfigIntegration],

  vite: {
    plugins: [tailwindcss()],
  },
})
