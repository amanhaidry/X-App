# X-App - Full-Stack Social Media Application

<p align="center">
   <img src="banner/banner1.jpg" alt="X-App Banner" width="100%" />
</p>

A modern full-stack social media application built with React Native (Expo) for mobile and Node.js/Express for the backend. This app provides a Twitter-like experience with features for posting, commenting, liking, and real-time notifications.
<!-- Tech stack icons -->
<p align="center">
   <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
   <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
   <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
   <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
   <img src="https://img.shields.io/badge/NativeWind-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="NativeWind" />
   <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white" alt="React Query" />
   <img src="https://img.shields.io/badge/Clerk-3A3A3A?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
   <img src="https://img.shields.io/badge/Expo_Router-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo Router" />
   <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
   <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
   <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
   <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary" />
   <img src="https://img.shields.io/badge/Arcjet-000000?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiLz48L3N2Zz4=&logoColor=white" alt="Arcjet" />
   <img src="https://img.shields.io/badge/CORS-0052CC?style=for-the-badge&logo=mozilla&logoColor=white" alt="CORS" />
</p>

## 🚀 Features
<p align="center">
   <img src="banner/banner2.jpg" alt="X-App Banner" width="100%" />
</p>

### Mobile App (React Native/Expo)
- **Authentication**: Social login with Google and Apple using Clerk
- **Post Creation**: Create posts with text and images
- **Social Interactions**: Like, comment, and delete posts
- **User Profiles**: View and edit user profiles
- **Real-time Updates**: Live notifications and feed updates
- **Cross-platform**: Runs on iOS, Android, and Web

### Backend API (Node.js/Express)
- **RESTful API**: Clean and organized API endpoints
- **Authentication**: Secure authentication with Clerk integration
- **Database**: MongoDB with Mongoose ODM
- **File Upload**: Image handling with Cloudinary
- **Security**: Rate limiting with Arcjet
- **Notifications**: Real-time notification system

## 📱 Tech Stack

### Frontend (Mobile)
- <img src="https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React Native" height="20"/> **React Native** with Expo
- <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" height="20"/> **TypeScript** for type safety
- <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="TailwindCSS" height="20"/> **TailwindCSS** with NativeWind for styling
- <img src="https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=react-query&logoColor=white" alt="React Query" height="20"/> **React Query** for data fetching and caching
- <img src="https://img.shields.io/badge/Clerk-3A3A3A?style=flat-square&logo=clerk&logoColor=white" alt="Clerk" height="20"/> **Clerk** for authentication
- <img src="https://img.shields.io/badge/Expo_Router-000020?style=flat-square&logo=expo&logoColor=white" alt="Expo Router" height="20"/> **Expo Router** for navigation

### Backend
- <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" height="20"/> **Node.js** with Express
- <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" height="20"/> **MongoDB** with Mongoose
- <img src="https://img.shields.io/badge/Clerk-3A3A3A?style=flat-square&logo=clerk&logoColor=white" alt="Clerk" height="20"/> **Clerk** for authentication
- <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white" alt="Cloudinary" height="20"/> **Cloudinary** for image storage
- <img src="https://img.shields.io/badge/Arcjet-000000?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiLz48L3N2Zz4=&logoColor=white" alt="Arcjet" height="20"/> **Arcjet** for security and rate limiting
- <img src="https://img.shields.io/badge/CORS-0052CC?style=flat-square&logo=mozilla&logoColor=white" alt="CORS" height="20"/> **CORS** enabled for cross-origin requests


## 🛠️ Installation & Setup

### Prerequisites
- <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" height="20"/> (v16 or higher)
- <img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white" alt="npm" height="20"/> or <img src="https://img.shields.io/badge/yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white" alt="yarn" height="20"/> 
- <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" height="20"/> 
- <img src="https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white" alt="Expo CLI" height="20"/>  CLI (for mobile development)
- <img src="https://img.shields.io/badge/Android_Studio-3DDC84?style=flat-square&logo=android-studio&logoColor=white" alt="Android Studio" height="20"/> / <img src="https://img.shields.io/badge/Xcode-147EFB?style=flat-square&logo=xcode&logoColor=white" alt="Xcode" height="20"/> (for device testing)

### Backend Setup

1. Navigate to backend directory: cd backend

2. Install dependencies: npm install

3. Environment Configuration - Create a .env file in the backend directory:
   MONGODB_URI=your_mongodb_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ARCJET_KEY=your_arcjet_key
   PORT=5000

4. Start the development server: npm run dev

### Mobile App Setup

1. Navigate to mobile directory: cd mobile

2. Install dependencies: npm install

3. Environment Configuration - Update the API base URL in mobile/utils/api.ts to point to your backend server.

4. Start the Expo development server: npx expo start

5. Run on device/simulator:
   - Android: npx expo start --android
   - iOS: npx expo start --ios
   - Web: npx expo start --web


## 🔧 API Endpoints

### Authentication
- All protected routes require authentication via Clerk

### Posts
- GET /posts - Get all posts
- POST /posts - Create a new post
- DELETE /posts/:id - Delete a post
- POST /posts/:id/like - Like/unlike a post

### Comments
- GET /comments/post/:postId - Get comments for a post
- POST /comments/post/:postId - Create a comment
- DELETE /comments/:commentId - Delete a comment

### Users
- GET /users/me - Get current user
- POST /users/sync - Sync user with Clerk
- PUT /users/profile - Update user profile

## 🚀 Deployment

### Backend (Vercel)
The backend is configured for Vercel deployment with vercel.json. Simply connect your repository to Vercel and deploy.

### Mobile App
- Expo Application Services (EAS): For building and distributing the app
- App Store/Google Play: For production releases

## 🔐 Environment Variables

### Backend
MONGODB_URI=mongodb://localhost:27017/xapp
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
ARCJET_KEY=your_arcjet_key
PORT=5000

### Mobile
Update the API base URL in mobile/utils/api.ts based on your environment:
- Development: http://localhost:5000/api
- Production: https://your-backend-domain.com/api

## 🧪 Development

### Running Tests
Backend: cd backend && npm test
Mobile: cd mobile && npm test

### Linting
Mobile: cd mobile && npm run lint

## 📱 Features in Detail

### Authentication
- Seamless social login with Google and Apple
- Secure token-based authentication
- Automatic user synchronization

### Post Management
- Rich text posts with image support
- Real-time like/unlike functionality
- Post deletion with proper authorization

### Comments System
- Threaded comments on posts
- Real-time comment notifications
- Comment deletion by author

### User Profiles
- Profile viewing and editing
- User post history
- Avatar and bio management


---

Built with ❤️ using React Native, Node.js, and modern web technologies.