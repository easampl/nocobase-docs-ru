import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from '@rspress/core';
import { pluginSitemap } from '@rspress/plugin-sitemap';

const base = process.env.DOCS_BASE || '/ru/';

export default defineConfig({
  root: __dirname,
  outDir: 'dist',
  base,
  title: 'NocoBase Documentation',
  icon: 'https://www.nocobase.com/images/favicon/apple-touch-icon.png',
  logo: {
    light: '/logo.png',
    dark: '/logo-white.png',
  },
  route: { cleanUrls: true },
  builderConfig: { plugins: [pluginSass()] },
  plugins: [pluginSitemap({ siteUrl: 'https://docs.nocobase.com' })],
  lang: 'ru',
  locales: [{ lang: 'ru', label: 'ru', title: 'NocoBase Documentation', description: 'NocoBase Documentation' }],
  themeConfig: {
    socialLinks: [{ icon: 'github', mode: 'link', content: 'https://github.com/nocobase/nocobase' }],
  },
});
