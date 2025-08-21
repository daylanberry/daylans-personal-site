// Media assets for portfolio projects
// Add your actual images and videos here

export interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
  caption?: string;
}

// SuChef App Media
export const suChefMedia: MediaItem[] = [
  {
    id: "suchef-recipe-page",
    type: "image",
    src: "/images/suchef/recipe-page.png",
    alt: "SuChef recipe page showing detailed recipe view",
    caption:
      "Recipe detail page with customization options and ingredient lists",
  },
  {
    id: "suchef-meal-plan",
    type: "image",
    src: "/images/suchef/meal-plan.png",
    alt: "SuChef meal planning calendar interface",
    caption: "Weekly meal planning",
  },
  {
    id: "suchef-groceries",
    type: "image",
    src: "/images/suchef/groceries.png",
    alt: "SuChef grocery list generated from meal plans",
    caption: "Auto-generated grocery list with categorized ingredients",
  },
  {
    id: "suchef-recipe-import-image",
    type: "image",
    src: "/images/suchef/import.png",
    alt: "SuChef recipe import screen",
    caption: "Recipe import interface with URL and social media options",
  },
  {
    id: "suchef-recipe-cookbook-image",
    type: "image",
    src: "/images/suchef/cookbooks.png",
    alt: "SuChef recipe cookbook screen",
    caption: "Recipe organization interface with user-defined cookbooks",
  },
  {
    id: "suchef-recipe-import-video",
    type: "video",
    src: "/videos/suchef/browser-import.mp4",
    thumbnail: "/images/suchef/import.png",
    alt: "SuChef recipe import demo video",
    caption:
      "Live demo: Import recipes from any source including social media and websites",
  },
  {
    id: "suchef-recipe-step-by-step-video",
    type: "video",
    src: "/videos/suchef/step-by-step.mp4",
    thumbnail: "/images/suchef/step-by-step.png",
    alt: "SuChef recipe step-by-step demo video",
    caption:
      "Live demo: Import recipes from any source including social media and websites",
  },
  {
    id: "suchef-recipe-cookbook-video",
    type: "video",
    src: "/videos/suchef/cookbooks.mp4",
    thumbnail: "/images/suchef/cookbooks.png",
    alt: "SuChef recipe cookbook demo video",
    caption: "Live demo: Organize recipes into user-defined cookbooks",
  },

  // Screenshots (when you have them):
  // {
  //   id: 'suchef-login',
  //   type: 'image',
  //   src: '/images/suchef/login-screen.png',
  //   alt: 'SuChef login screen with email/password authentication',
  //   caption: 'Secure login flow with email verification'
  // },
  // {
  //   id: 'suchef-onboarding',
  //   type: 'image',
  //   src: '/images/suchef/onboarding-flow.png',
  //   alt: 'SuChef user onboarding experience',
  //   caption: 'Personalized setup and user guidance'
  // },
  // {
  //   id: 'suchef-recipe-capture',
  //   type: 'image',
  //   src: '/images/suchef/recipe-capture.png',
  //   alt: 'Multi-source recipe capture interface',
  //   caption: 'Capture recipes from social media, websites, and manual input'
  // },
  // {
  //   id: 'suchef-meal-planning',
  //   type: 'image',
  //   src: '/images/suchef/meal-planning.png',
  //   alt: 'Weekly meal planning calendar view',
  //   caption: 'Dynamic calendar for weekly meal prep workflows'
  // },
  // {
  //   id: 'suchef-cookbooks',
  //   type: 'image',
  //   src: '/images/suchef/cookbooks.png',
  //   alt: 'Recipe organization with user-defined cookbooks',
  //   caption: 'Organized cookbooks with searchable indexing'
  // },

  // Demo Videos (when you have them):
  // {
  //   id: 'suchef-demo-overview',
  //   type: 'video',
  //   src: '/videos/suchef/app-overview.mp4',
  //   thumbnail: '/images/suchef/demo-thumbnail.png',
  //   alt: 'SuChef app overview demo',
  //   caption: 'Complete walkthrough of SuChef features and functionality'
  // },
  // {
  //   id: 'suchef-demo-recipe-import',
  //   type: 'video',
  //   src: '/videos/suchef/recipe-import-demo.mp4',
  //   thumbnail: '/images/suchef/import-thumbnail.png',
  //   alt: 'Recipe import process demonstration',
  //   caption: 'Demonstrating multi-source recipe capture capabilities'
  // }
];

// Instructions for adding your media:
// 1. Create a 'public/images/suchef/' folder in your project
// 2. Create a 'public/videos/suchef/' folder in your project
// 3. Add your screenshots and videos to these folders
// 4. Uncomment and update the items above with your actual file paths
// 5. The paths should be relative to the public folder (e.g., '/images/suchef/login.png')

// Recommended media to showcase SuChef:
export const recommendedSuChefMedia = [
  "Login/Authentication Screen",
  "User Onboarding Flow",
  "Recipe Capture Interface (from social media/websites)",
  "Recipe Customization Screen",
  "Meal Planning Calendar View",
  "Cookbook Organization",
  "Recipe Search Interface",
  "Overall App Navigation Demo Video",
  "Recipe Import Process Demo Video",
];

// Other projects can have their own media arrays:
export const otherProjectsMedia: { [key: string]: MediaItem[] } = {
  // Add media for future projects here
};
