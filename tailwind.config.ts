import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: [
    './docs/.vitepress/**/*.{js,ts,vue}',
    './docsZH/.vitepress/**/*.{js,ts,vue}',
    './docs/components/**/*.{js,ts,vue}',
    './docsZH/components/**/*.{js,ts,vue}',
    './docs/**/*.{md,html}',
    './docsZH/**/*.{md,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
