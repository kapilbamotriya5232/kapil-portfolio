# FiddleFitness Images - Visual Guide

## Where Your Images Will Appear

### 1. On the Work Page (`/work`)
```
┌─────────────────────────────────────────┐
│  [cover.jpg]                            │  ← Main carousel image
│  [screenshot-1.jpg]                     │  ← Swipeable carousel
│  [screenshot-2.jpg]                     │  ← Swipeable carousel
│                                         │
│  Fiddle Fitness: WhatsApp-Powered...→  │  ← Clickable title
│  Built an end-to-end automated...      │  ← Summary text
│  [Read case study →]                   │
└─────────────────────────────────────────┘
```

### 2. On the Project Detail Page (`/work/fiddlefitness`)
```
┌─────────────────────────────────────────┐
│  Fiddle Fitness: A WhatsApp-Powered... │
│                                         │
│  [Main Content - Your text about the   │
│   automated user journey, admin        │
│   dashboard, etc.]                     │
│                                         │
│  Project Gallery                       │
│  ┌─────────┐ ┌─────────┐              │
│  │screen-3 │ │screen-4 │              │  ← Gallery images
│  └─────────┘ └─────────┘              │
│  ┌─────────┐ ┌─────────┐              │
│  │screen-5 │ │screen-6 │              │
│  └─────────┘ └─────────┘              │
└─────────────────────────────────────────┘
```

## Quick Reference - Image Placement

| Image File | Where It Appears | Purpose |
|------------|------------------|---------|
| `cover.jpg` | Work page carousel (1st image) | Main project thumbnail |
| `screenshot-1.jpg` | Work page carousel (2nd image) | Additional preview |
| `screenshot-2.jpg` | Work page carousel (3rd image) | Additional preview |
| `screenshot-3.jpg` | Project page gallery | WhatsApp Bot Interface |
| `screenshot-4.jpg` | Project page gallery | Admin Dashboard |
| `screenshot-5.jpg` | Project page gallery | Event Management |
| `screenshot-6.jpg` | Project page gallery | Payment Integration |

## To Add Your Images

1. Place all images in this folder: `/public/images/projects/fiddlefitness/`
2. Use the exact filenames listed above
3. The app will automatically display them in the correct locations

## Recommended Image Specs

- **Format**: JPG or PNG
- **Dimensions**: 1920x1080 (16:9 ratio) works best
- **File Size**: Keep under 500KB each for fast loading
- **Quality**: 80-90% JPEG quality is usually sufficient