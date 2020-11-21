## Setup Notes

1. All components ready to go (including imports)
2. Using main.css as there are less imports
3. Limiting the number of components for a better overview
4. React Icons

[react icons] : https://react-icons.github.io/react-icons/

```javascript
import { FaHome } from "react-icons/fa"
const Component = () => {
  return <FaHome className="icon"></FaHome>
}
```

5. To run on dev server ensure the Strapi api is running (localhost:1337) before connecting to frontend

6. The static files (images) are stored on Cloudinary

7. [Site address] https://ash-shetty-portfolio.netlify.app

### Technology Stack

1. Gatsby
2. Strapi
3. React
4. Cloudinary for static images
5. Formspree
6. Netlify for hosting

### Features

- SEO friendly
- Social Media links
- Twitter card creation for projects
- 404 page
