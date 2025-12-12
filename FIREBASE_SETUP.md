# Firebase Storage Setup Guide

This guide will help you upload your images to Firebase Storage and configure them in your portfolio.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard
4. Enable **Firebase Storage**:
   - Go to "Storage" in the left sidebar
   - Click "Get started"
   - Choose "Start in test mode" (or configure rules as needed)
   - Select a location for your storage bucket

## Step 2: Upload Images to Firebase Storage

1. In Firebase Console, go to **Storage**
2. Click "Get started" if you haven't already
3. Click the **"Upload file"** button
4. Create a folder called `images` (optional, but recommended)
5. Upload your three images:
   - `profile.jpeg`
   - `Screenshot 2025-12-11 225347.png`
   - `Screenshot 2025-12-11 225407.png`

## Step 3: Get Download URLs

For each uploaded image:

1. Click on the image file in Firebase Storage
2. You'll see a "Download URL" or "gs://" URL
3. Copy the **Download URL** (it should look like):
   ```
   https://firebasestorage.googleapis.com/v0/b/YOUR_PROJECT_ID.appspot.com/o/images%2Fprofile.jpeg?alt=media&token=YOUR_TOKEN
   ```

## Step 4: Configure Environment Variables

### Option A: Using Environment Variables (Recommended)

1. Create a `.env` file in the root directory (same level as `package.json`)
2. Add your Firebase Storage URLs:

```env
VITE_FIREBASE_PROFILE_URL=https://firebasestorage.googleapis.com/v0/b/YOUR_PROJECT_ID.appspot.com/o/images%2Fprofile.jpeg?alt=media&token=YOUR_TOKEN
VITE_FIREBASE_PROJECT1_URL=https://firebasestorage.googleapis.com/v0/b/YOUR_PROJECT_ID.appspot.com/o/images%2FScreenshot%202025-12-11%20225347.png?alt=media&token=YOUR_TOKEN
VITE_FIREBASE_PROJECT2_URL=https://firebasestorage.googleapis.com/v0/b/YOUR_PROJECT_ID.appspot.com/o/images%2FScreenshot%202025-12-11%20225407.png?alt=media&token=YOUR_TOKEN
```

3. Replace `YOUR_PROJECT_ID` and `YOUR_TOKEN` with your actual values
4. Restart your dev server if it's running

### Option B: Direct Configuration

Alternatively, you can directly update `src/config/firebaseStorage.js`:

```javascript
export const firebaseStorageUrls = {
  profileImage: 'YOUR_PROFILE_IMAGE_URL_HERE',
  projectImage1: 'YOUR_PROJECT1_IMAGE_URL_HERE',
  projectImage2: 'YOUR_PROJECT2_IMAGE_URL_HERE',
};
```

## Step 5: Test Locally

1. Run `npm run dev`
2. Check that images load from Firebase Storage
3. If Firebase URLs are not set, it will fallback to local images

## Step 6: Deploy

The environment variables will work automatically on:
- **Vercel**: Add the same environment variables in Vercel dashboard → Settings → Environment Variables
- **GitHub Pages**: Environment variables need to be set in GitHub Actions secrets (or use Option B)
- **Cloudflare Pages**: Add environment variables in Cloudflare dashboard → Pages → Settings → Environment Variables

## Notes

- The code includes fallback to local images if Firebase URLs are not configured
- Make sure your Firebase Storage rules allow public read access for these images
- The `.env` file is already in `.gitignore`, so your URLs won't be committed to git

