// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
      },
    },
  },
  plugins: [],
}
