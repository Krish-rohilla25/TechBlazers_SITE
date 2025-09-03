# Techblazers - Project Showcase Website

## 🚀 Complete Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+
- Git

### 📁 Project Structure
```
tech-blazers/
├── frontend/
│   ├── public/
│   │   └── images/         # Local images for projects
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── data/
│   │       └── mockData.js # Project and team data
│   ├── package.json
│   └── .env (optional)
├── README.md

```

## 🛠️ Local Setup

### 1. Clone/Download the Project
```bash
# If you have git access to the project
git clone <your-repo-url>
cd tech-blazers

# Or extract the downloaded zip file
unzip tech-blazers.zip
cd tech-blazers
```

### 2. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install
# or
yarn install
```

### 3. Running the Application

#### Start Frontend
```bash
cd frontend
npm start
# or
yarn start
```

### 4. Access the Application
- Frontend: http://localhost:3000

### 5. Deployment on Vercel
**1. Prepare for Deployment**
- Ensure all your project files are committed and pushed to GitHub (or another git provider).
- Your React app should be in the frontend folder

**2. Deploy Steps**

1. **Sign up or log in to [Vercel](https://vercel.com).**

2. **Import your repository:**
   - Click "Add New Project" and select your repository.

3. **Configure the project:**
   - Set the root directory to `frontend`.
   - Set the build command to `npm run build` (or `yarn build`).
   - Set the output directory to `build`.

4. **(Optional) Add Environment Variables:**
   - If you use any, add them in the Vercel dashboard.

5. **Deploy:**
   - Click "Deploy" and wait for the build to finish.
   - Vercel will provide a live URL for your site.

## 📸 Customization

###  Add or Edit Projects
- Navigate to `frontend/src/data/mockData.js`
- Modify the `projects` array to add or edit project entries

###  Using Local Images
- Place image files in `frontend/public/images/`
- Reference them as `/images/your-image.jpg` inside the mock data

### Updating Styles
1. Edit CSS in `frontend/src/index.css`
2. Modify Tailwind classes in components
3. Update color scheme in `tailwind.config.js`

### Adding New Features
1. Frontend: Add components in `src/components/`

## 🧩 Key Features

### 🚀 Core Highlights
- 6 pre-loaded projects with full data
- Modern responsive UI with smooth animations
- Search & filter by project title, tech stack, or member
- Category tabs for Embedded, IT, or All projects
- Team member profiles with images and roles
- Project details: images, tech used, GitHub links & more
- No backend needed — static, editable data

### 🎨 UI & Design
- Gradient backgrounds and card-based layout
- Professional typography and hover effects
- ST-branded navigation bar
- Fully mobile-responsive
- Base64 image upload support


## 🛠️ Tech Stack
- **Frontend**: React, TailwindCSS, Radix UI
- **Data**: Local mock data (mockData.js)
- **File Storage**: Base64 encoding
- **Authentication**: Ready for implementation
- **No backend or database required**

## 📱 Mobile Responsive
The entire application is fully responsive and works perfectly on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes


## ⚡ Performance Tips
- Images are stored as base64 for easy deployment
- Frontend has lazy loading
- Responsive images for mobile
- Use optimized images in public/images/ for fast loading
- Remove unused dependencies in package.json if not needed

## 🐛 Troubleshooting

### 🚫 Site Not Loading?
- Ensure you're inside the `frontend` directory
- Run `npm install` or `yarn install` to install dependencies
- Launch the app with `npm start` or `yarn start`

### 🖼️ Missing Images?
- Confirm image files are placed in `frontend/public/images/`
- Use correct paths like `/images/your-image.jpg` in `mockData.js`


## 📧 Support
For any issues or questions:
- Check console logs in browser
- Ensure all dependencies are installed

---

**Created by Krish Rohilla**
LinkedIn: https://www.linkedin.com/in/krish-rohilla-b3ab19317/

**Techblazers - An STMicroelectronics Initiative**
