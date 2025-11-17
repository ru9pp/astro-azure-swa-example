import type { AstroIntegration } from 'astro'
import { promises as fs } from 'fs'
import { join } from 'path'

async function swaConfigIntegration(): Promise<void> {
  try {
    const __dirname = new URL('.', import.meta.url).pathname
    const configPath = join(__dirname, '../../staticwebapp.config.json')
    const destinationPath = join(__dirname, '../dist/staticwebapp.config.json')
    await fs.copyFile(configPath, destinationPath)
  } catch (error) {
    console.error('Error copying SWA config file', (error as Error).message)
  }
}

export default {
  name: 'swaConfigIntegration',
  hooks: {
    // 'astro:config:setup': async () => {
    'astro:config:done': async () => {
      await swaConfigIntegration()
      console.log('✅ SWA config integration complete')
    },
  },
} satisfies AstroIntegration
