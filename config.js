// Personal Website Configuration
// Edit the values below to customize your website content

const CONFIG = {
  // Site Information
  site: {
    title: "Andrew Corbett | ESTEEM Program",
    language: "en"
  },

  // Personal Information
  personal: {
    name: "Andrew Corbett",
    email: "acorbet2@nd.edu",
    title: "Master's Student in the ESTEEM Program at Notre Dame",
    description: "Student in the ESTEEM Program at Notre Dame, exploring biotech, entrepreneurship, and innovation.",
    headshot: {
      src: "https://media.licdn.com/dms/image/v2/D4E03AQG-71L96RG3YQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718390263076?e=2147483647&v=beta&t=6QQPCriQwmL58R9xXOUirRvZXnpObALvXzTjKrkMMa8",
      alt: "Andrew Corbett Headshot"
    }
  },

  // Navigation
  navigation: {
    logo: "Andrew Corbett",
    links: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Experience", href: "#" },
      { text: "Projects", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Contact", href: "mailto:acorbet2@nd.edu" }
    ]
  },

  // Hero Section
  hero: {
    greeting: "Hi, I'm Andrew Corbett",
    description: "Student in the ESTEEM Program at Notre Dame, exploring biotech, entrepreneurship, and innovation.",
    button: {
      text: "Get in Touch",
      href: "mailto:acorbet2@nd.edu"
    }
  },

  // Footer
  footer: {
    copyright: "© 2025 Andrew Corbett. All rights reserved.",
    social: {
      linkedin: {
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/acorb/"
      },
      esteem: {
        text: "ESTEEM Profile",
        href: "https://esteem.nd.edu/our-students/records/andrew-corbett-2025-2026/"
      },
      athletics: {
        text: "Holy Cross Athletics",
        href: "https://goholycross.com/sports/mens-cross-country/roster/andrew-corbett/12414"
      }
    }
  },

  // Color Scheme (Notre Dame inspired)
  colors: {
    primary: "#0c2340",    // ND Navy
    secondary: "#ae9142",  // ND Gold
    background: "#f8f8f8", // Light background
    text: "#1d1d1d"        // Dark text
  },

  // Typography
  fonts: {
    primary: '"Helvetica Neue", Arial, sans-serif'
  }
};

// Make config available globally
window.CONFIG = CONFIG;
