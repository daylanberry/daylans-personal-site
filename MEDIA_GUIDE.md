# Adding Media to Your SuChef Project Showcase

## 📁 Folder Structure

Create these folders in your project:

```
public/
├── images/
│   └── suchef/
│       ├── login-screen.png
│       ├── onboarding-flow.png
│       ├── recipe-capture.png
│       ├── meal-planning.png
│       ├── cookbooks.png
│       └── demo-thumbnails/
│           ├── overview-thumb.png
│           └── import-thumb.png
└── videos/
    └── suchef/
        ├── app-overview.mp4
        └── recipe-import-demo.mp4
```

## 🖼️ Recommended Screenshots to Take

From your SuChef app in TestFlight, capture these key screens:

### Authentication & Onboarding

1. **Login Screen** - Show the email/password interface
2. **Registration Flow** - New user signup process
3. **Email Verification** - Verification step
4. **Onboarding Welcome** - First-time user experience
5. **Personalization Setup** - User preferences/setup

### Core Features

6. **Recipe Capture from URL** - Importing from recipe websites
7. **Social Media Import** - Capturing from social platforms
8. **Manual Recipe Entry** - Adding recipes manually
9. **Image Upload Interface** - Photo-based recipe capture
10. **Recipe Customization** - Editing/personalizing recipes

### Organization & Planning

11. **Cookbook Creation** - User-defined cookbooks
12. **Recipe Organization** - Categorized recipe lists
13. **Search Interface** - Recipe search functionality
14. **Calendar/Meal Planning** - Weekly meal prep view
15. **Grocery List Generation** - Recipe-to-shopping list feature

## 🎥 Recommended Demo Videos

### Short Videos (30-60 seconds each):

1. **App Overview** - Quick navigation through main features
2. **Recipe Import Demo** - Show importing from a website
3. **Meal Planning Flow** - Planning a week of meals
4. **Recipe Customization** - Editing and personalizing a recipe

### Tips for Videos:

- Use screen recording on your device
- Keep videos short and focused
- Show smooth, realistic user interactions
- Include the most impressive features

## 🔧 How to Add Your Media

### Step 1: Prepare Your Files

```bash
# Create the directories
mkdir -p public/images/suchef
mkdir -p public/images/suchef/thumbnails
mkdir -p public/videos/suchef
```

### Step 2: Add Your Files

- Screenshots: Save as PNG or JPG in `public/images/suchef/`
- Videos: Save as MP4 in `public/videos/suchef/`
- Video thumbnails: Save in `public/images/suchef/thumbnails/`

### Step 3: Update the Media Data

Edit `src/data/mediaAssets.ts` and uncomment/update the entries:

```typescript
export const suChefMedia: MediaItem[] = [
  {
    id: "suchef-login",
    type: "image",
    src: "/images/suchef/login-screen.png",
    alt: "SuChef login screen with email/password authentication",
    caption: "Secure login flow with email verification",
  },
  {
    id: "suchef-demo-overview",
    type: "video",
    src: "/videos/suchef/app-overview.mp4",
    thumbnail: "/images/suchef/thumbnails/overview-thumb.png",
    alt: "SuChef app overview demo",
    caption: "Complete walkthrough of SuChef features",
  },
  // Add more items...
];
```

## 📱 Screenshot Tips for Mobile Apps

### For iOS Simulator/Device:

1. Use `Cmd + S` in Simulator or `Power + Volume Up` on device
2. Crop to remove status bar if desired
3. Use consistent device frame (iPhone 14/15 recommended)

### Recommended Tools:

- **Screenshots**: Built-in iOS screenshot
- **Video Recording**: iOS built-in screen recording
- **Editing**:
  - **Screenshots**: Preview (Mac), Photoshop, or Figma
  - **Videos**: QuickTime, iMovie, or Final Cut Pro

### File Optimization:

- **Images**: Optimize to ~100-300KB each (use ImageOptim or similar)
- **Videos**: Keep under 10MB each, use H.264 encoding
- **Thumbnails**: 300x200px, ~20-50KB

## 🚀 Quick Test

Once you add media files:

1. Restart your dev server: `npm run dev`
2. Navigate to the Projects section
3. Check the SuChef project card
4. Click on media items to test the modal functionality

## 💡 Alternative Approach (If No Media Yet)

If you don't have screenshots/videos ready, you can:

1. Use placeholder images from [Unsplash](https://unsplash.com) (search "mobile app", "phone interface")
2. Create mockup screens using [Figma](https://figma.com) or [Sketch](https://sketch.com)
3. Use the placeholder system that's already built-in (shows "Screenshots coming soon")

## 🎯 Impact

Adding media will:

- **Increase engagement** - Visitors can see your actual work
- **Demonstrate UX skills** - Show your design and user experience capabilities
- **Provide proof of concept** - Tangible evidence of your mobile development skills
- **Stand out** - Most portfolios lack this level of detail

The MediaGallery component is already responsive and professional-looking, so once you add your media files, it will significantly enhance your portfolio's impact!
