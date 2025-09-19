# FiddleFitness Project Images

## Image Structure

Place your images in this folder according to the following structure:

### 1. Cover Image (Required)
- **Filename:** `cover.jpg`
- **Purpose:** Main image displayed in the project card on the work page
- **Recommended Size:** 1920x1080px or 16:9 aspect ratio
- **Location in code:** Referenced in `/src/app/work/projects/fiddlefitness.mdx` frontmatter

### 2. Gallery Images (Optional but Recommended)
Place these images for the scrollable gallery at the bottom of the project page:

- **screenshot-1.jpg** - WhatsApp Bot Interface
- **screenshot-2.jpg** - Admin Dashboard
- **screenshot-3.jpg** - Event Management
- **screenshot-4.jpg** - Payment Integration
- **screenshot-5.jpg** - Analytics Dashboard
- **screenshot-6.jpg** - Customer Management

**Recommended Size:** 1920x1080px or consistent aspect ratio

## How Images Are Rendered

1. **Cover Image** (`cover.jpg`):
   - Displayed in the project card carousel on `/work` page
   - Shows as the main hero image when viewing the project

2. **Gallery Images** (`screenshot-*.jpg`):
   - Rendered in a horizontal scrollable gallery at the bottom of the project page
   - Located at the end of the project content

## File Structure
```
public/
└── images/
    └── projects/
        └── fiddlefitness/
            ├── README.md (this file)
            ├── cover.jpg
            ├── screenshot-1.jpg
            ├── screenshot-2.jpg
            ├── screenshot-3.jpg
            ├── screenshot-4.jpg
            ├── screenshot-5.jpg
            └── screenshot-6.jpg
```

## Adding Images

Simply copy your images to this folder with the exact filenames listed above. The application will automatically pick them up.

## Image Formats Supported
- JPG/JPEG (recommended for photos)
- PNG (for screenshots with transparency)
- WebP (for better compression)

Just ensure you update the file extensions in the MDX file if using formats other than .jpg