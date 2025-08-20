# Media Components Usage Guide

## MediaCarousel Component

The MediaCarousel provides a comprehensive carousel experience with:

- Large main display area
- Navigation arrows
- Thumbnail strip
- Progress indicators
- Auto-play for images
- Video support with controls

### Usage:

```tsx
import MediaCarousel from "./components/MediaCarousel";
import { suChefMedia } from "./data/mediaAssets";

<MediaCarousel title="App Screenshots & Demo Videos" items={suChefMedia} />;
```

## MediaShowcase Component

The MediaShowcase provides different variants for different use cases:

### Default Variant (Current in Projects):

```tsx
import MediaShowcase from "./components/MediaShowcase";

<MediaShowcase
  title="SuChef App Showcase"
  items={suChefMedia}
  variant="default"
  autoPlay={true}
  showThumbnails={true}
/>;
```

### Hero Variant (Great for main sections):

```tsx
<MediaShowcase
  items={suChefMedia}
  variant="hero"
  autoPlay={true}
  showThumbnails={false}
/>
```

### Full-Width Variant:

```tsx
<MediaShowcase
  title="Project Gallery"
  items={suChefMedia}
  variant="full-width"
  autoPlay={false}
  showThumbnails={true}
/>
```

## Features:

### MediaCarousel:

- ✅ Large, professional carousel layout
- ✅ Thumbnail navigation strip
- ✅ Progress indicators
- ✅ Auto-advance for images (pauses for videos)
- ✅ Responsive design
- ✅ Video and image support
- ✅ Navigation arrows
- ✅ Mobile-optimized

### MediaShowcase:

- ✅ Multiple variants (default, hero, full-width)
- ✅ Fullscreen toggle for hero variant
- ✅ Auto-play option
- ✅ Thumbnail strip (optional)
- ✅ Beautiful gradient backgrounds
- ✅ Video badges and indicators
- ✅ Caption overlays
- ✅ Responsive design

## Comparison:

**Use MediaCarousel when:**

- You want a comprehensive, feature-rich carousel
- You have multiple media items to showcase
- You want thumbnail navigation
- You need a professional portfolio presentation

**Use MediaShowcase when:**

- You want different visual styles/variants
- You need a hero-style media display
- You want fullscreen capabilities
- You prefer a more minimal, elegant approach

Both components are fully responsive and work great on mobile!
