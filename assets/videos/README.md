# Video Assets Setup Instructions

This folder contains video files for the AI Literacy Learning modules. Follow these instructions to properly set up videos for the platform.

## 🔒 Why Should You Care About Cybersecurity? (Module 5, Video 1)

### Step 1: Download the Video
1. Obtain the cybersecurity video from your source
2. The video should be approximately 2 minutes and 51 seconds long
3. Content should cover the importance of cybersecurity in protecting digital life

### Step 2: File Setup
1. **Rename** the downloaded file to: `cybersecurity-care.mp4`
2. **Place** the file in this directory: `assets/videos/`
3. **Ensure** the file path is: `assets/videos/cybersecurity-care.mp4`

### Step 3: Optional Formats (for better browser compatibility)
For maximum compatibility across different browsers, you can also provide additional formats:

- **WebM format**: `cybersecurity-care.webm` 
- **MOV format**: `cybersecurity-care.mov`

### Step 4: Thumbnail (Optional)
If you have a thumbnail image for the video:
1. Save it as: `cybersecurity-care-video-thumbnail.jpg`
2. Place it in: `assets/images/`
3. Recommended size: 1920x1080px (16:9 aspect ratio)

---

## 📹 How AI Learns and Solves Problems (Module 6, Video 1)

### Step 1: Download the Video
1. Go to: [Renderforest Video Link](https://www.renderforest.com/watch-105906131?queue_id=159267567&quality=1080)
2. Download the video in the highest quality available (preferably 1080p)
3. The video should be approximately 2 minutes long

### Step 2: File Setup
1. **Rename** the downloaded file to: `how-ai-learns-problems.mp4`
2. **Place** the file in this directory: `assets/videos/`
3. **Ensure** the file path is: `assets/videos/how-ai-learns-problems.mp4`

### Step 3: Optional Formats (for better browser compatibility)
For maximum compatibility across different browsers, you can also provide additional formats:

- **WebM format**: `how-ai-learns-problems.webm` 
- **MOV format**: `how-ai-learns-problems.mov`

### Step 4: Thumbnail (Optional)
If you have a thumbnail image for the video:
1. Save it as: `how-ai-learns-video-thumbnail.jpg`
2. Place it in: `assets/images/`
3. Recommended size: 1920x1080px (16:9 aspect ratio)

## 🔧 Technical Details

### Supported Video Formats
- **Primary**: MP4 (H.264 codec recommended)
- **Secondary**: WebM (VP9 codec)
- **Fallback**: MOV (QuickTime)

### Recommended Video Specifications
- **Resolution**: 1920x1080 (1080p) or 1280x720 (720p)
- **Aspect Ratio**: 16:9
- **Frame Rate**: 30fps or 24fps
- **Bitrate**: 5-8 Mbps for 1080p, 3-5 Mbps for 720p
- **Audio**: AAC codec, 128-192 kbps

### File Size Guidelines
- **Target**: Under 50MB for 2-minute video
- **Maximum**: 100MB per video file
- **Optimization**: Use H.264 compression for best balance of quality and file size

## 🚀 After Setup

Once you've placed the video file(s) in this directory:

1. **Refresh** the video page in your browser
2. The video should load automatically with HTML5 video controls
3. If you see a fallback message, check that:
   - The filename exactly matches: `how-ai-learns-problems.mp4`
   - The file is in the correct directory: `assets/videos/`
   - The video file isn't corrupted

## 🔍 Troubleshooting

### Video Won't Play
- **Check filename**: Must be exactly `how-ai-learns-problems.mp4`
- **Check location**: File must be in `assets/videos/` folder
- **Check format**: Ensure it's a valid MP4 file
- **Try different browser**: Some browsers have different codec support

### Video Loads But No Sound
- **Check audio codec**: Should be AAC
- **Check browser settings**: Ensure audio isn't muted
- **Try re-encoding**: Use a video converter to re-encode with AAC audio

### Large File Size
- **Compress video**: Use tools like HandBrake or FFmpeg
- **Reduce resolution**: 720p instead of 1080p
- **Adjust bitrate**: Lower bitrate for smaller file size

## 📁 Directory Structure
```
assets/
├── videos/
│   ├── cybersecurity-care.mp4      ← Module 5 Video 1
│   ├── cybersecurity-care.webm     ← Optional WebM format
│   ├── how-ai-learns-problems.mp4  ← Module 6 Video 1
│   ├── how-ai-learns-problems.webm ← Optional WebM format
│   └── README.md                   ← This file
└── images/
    ├── cybersecurity-care-video-thumbnail.jpg ← Module 5 thumbnail
    └── how-ai-learns-video-thumbnail.jpg      ← Module 6 thumbnail
```

## 🆘 Need Help?

If you encounter any issues:

1. **Check browser console**: Look for error messages
2. **Verify file permissions**: Ensure files are readable
3. **Test direct access**: Try accessing the video file directly in browser
4. **Contact support**: Reach out with specific error messages

---

*Last updated: [Current Date]*
*Part of the AI Literacy Learning Platform*