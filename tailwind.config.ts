import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    preflight: false // 禁用 Tailwind 的基础样式重置，避免与 Vant 冲突
  }
} satisfies Config;
