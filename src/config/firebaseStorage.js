// Firebase Storage URLs for images
// Option 1: Use environment variables (recommended)
// Create a .env file with VITE_FIREBASE_PROFILE_URL, VITE_FIREBASE_PROJECT1_URL, VITE_FIREBASE_PROJECT2_URL
// Option 2: Directly set URLs below (replace empty strings with your Firebase Storage URLs)

export const firebaseStorageUrls = {
  profileImage: import.meta.env.VITE_FIREBASE_PROFILE_URL || '',
  projectImage1: import.meta.env.VITE_FIREBASE_PROJECT1_URL || '',
  projectImage2: import.meta.env.VITE_FIREBASE_PROJECT2_URL || '',
};

// Fallback to local images if Firebase URLs are not set
export const getImageUrl = (firebaseUrl, localPath) => {
  return firebaseUrl || localPath;
};

