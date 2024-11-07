import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '0rem',
        xl: '0rem',
        '2xl': '0rem',
        '3xl': '0rem',
      },
      screens: {
        sm: '800px',
        md: '1150px',
        lg: '1440px',
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;

// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: ["class"],
//   content: [
//     "./src/pages//*.{js,ts,jsx,tsx,mdx}",
//     "./src/components//*.{js,ts,jsx,tsx,mdx}",
//     "./src/app//*.{js,ts,jsx,tsx,mdx}",
//     "./src/common//*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     container: {
//       padding: {
//         DEFAULT: "2rem",
//         sm: "2rem",
//         md: "4rem",
//         lg: "6rem",
//         xl: "8rem",
//         "2xl": "10rem",
//         "3xl": "14rem",
//       },
//       screens: {
//         sm: "640px",
//         md: "768px",
//         lg: "1024px",
//         xl: "1280px",
//         "2xl": "1536px",
//         "3xl": "1920px",
//       },
//     },
//     extend: {
//       boxShadow: {
//         "custom-card": "0px 4px 24px 0px rgba(10, 33, 58, 0.08)",
//       },
//       backdropBlur: {
//         "8px": "8px",
//       },
//       colors: {
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         chart: {
//           "1": "hsl(var(--chart-1))",
//           "2": "hsl(var(--chart-2))",
//           "3": "hsl(var(--chart-3))",
//           "4": "hsl(var(--chart-4))",
//           "5": "hsl(var(--chart-5))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//       },
//       fontSize: {
//         h1: [
//           "47px",
//           {
//             lineHeight: "52px",
//             fontWeight: 800,
//           },
//         ],
//         h2: [
//           "45px",
//           {
//             lineHeight: "52px",
//             fontWeight: 700,
//           },
//         ],
//         h3: [
//           "36px",
//           {
//             lineHeight: "44px",
//             fontWeight: 700,
//           },
//         ],
//         h4: [
//           "32px",
//           {
//             lineHeight: "40px",
//             fontWeight: 700,
//           },
//         ],
//         h5: [
//           "28px",
//           {
//             lineHeight: "36px",
//             fontWeight: 700,
//           },
//         ],
//         h6: [
//           "24px",
//           {
//             lineHeight: "32px",
//             fontWeight: 700,
//           },
//         ],
//         title1: [
//           "22px",
//           {
//             lineHeight: "28px",
//             fontWeight: 600,
//           },
//         ],
//         title2: [
//           "16px",
//           {
//             lineHeight: "24px",
//             fontWeight: 600,
//           },
//         ],
//         title3: [
//           "14px",
//           {
//             lineHeight: "20px",
//             fontWeight: 600,
//           },
//         ],
//         body1: [
//           "22px",
//           {
//             lineHeight: "35px",
//             fontWeight: 400,
//           },
//         ],
//         body2: [
//           "16px",
//           {
//             lineHeight: "25.6px",
//             fontWeight: 400,
//           },
//         ],
//         body3: [
//           "14px",
//           {
//             lineHeight: "22.4px",
//             fontWeight: 400,
//           },
//         ],
//         body4: [
//           "12px",
//           {
//             lineHeight: "16px",
//             fontWeight: 400,
//           },
//         ],

// > Javkhaaa:
// label1: [
//           "20px",
//           {
//             lineHeight: "24px",
//             fontWeight: 600,
//           },
//         ],
//         label2: [
//           "16px",
//           {
//             lineHeight: "20px",
//             fontWeight: 600,
//           },
//         ],
//         label3: [
//           "14px",
//           {
//             lineHeight: "16px",
//             fontWeight: 600,
//           },
//         ],
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
//   corePlugins: {
//     backdropFilter: true,
//   },
// };

// export default config;
// '
