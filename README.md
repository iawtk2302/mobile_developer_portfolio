# Mobile Developer Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and TypeScript.

## Features

- Modern UI with Tailwind CSS
- Responsive design
- Contact form with EmailJS integration
- Project showcase
- About me section

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- Yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/iawtk2302/mobile_developer_portfolio.git
cd mobile_developer_portfolio
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

See [EmailJS Setup Documentation](./docs/emailjs-setup.md) for detailed instructions on how to obtain these values.

4. Start the development server:

```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment on Vercel

This portfolio is optimized for deployment on Vercel.

### One-Click Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fiawtk2302%2Fmobile_developer_portfolio)

### Manual Deployment

1. Push your code to a GitHub repository.

2. Go to [Vercel](https://vercel.com) and sign up or log in.

3. Click "Add New..." and select "Project".

4. Import your repository.

5. Configure the project:

   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: yarn build
   - Output Directory: .next

6. Set up environment variables:

   - Go to "Settings" tab
   - Navigate to "Environment Variables" section
   - Add the following variables:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

7. Click "Deploy".

8. After deployment is complete, you'll receive a URL where your portfolio is accessible.

## Project Structure

```
mobile_developer_portfolio/
├── app/                  # Next.js app directory with pages
├── components/           # Reusable UI components
├── docs/                 # Documentation files
├── lib/                  # Utility functions and configs
├── public/               # Static assets
└── styles/               # Global styles
```

## Customization

### Adding Projects

Edit `app/projects/page.tsx` to add your own projects.

### Updating Profile

Edit `app/about/page.tsx` to update your profile information.

### Custom Theme

Edit `tailwind.config.js` to customize the theme colors and other design elements.

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
