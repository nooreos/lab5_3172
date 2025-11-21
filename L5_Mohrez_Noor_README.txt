# Lab 5 - Personal Portfolio Website with React

This is a personal portfolio website built with React and Bootstrap, featuring a responsive design with multiple pages including Home, About, Projects, and a custom 404 error page. The application demonstrates modern web development practices with React Router for navigation and Bootstrap 5 for styling.

* *Date Created*: 20 NOV 2025
* *Last Modification Date*: 20 NOV 2025
* *Lab URL*: 
* *GitLab Repository*: https://git.cs.dal.ca/mohrez/lab-5-3172 


## Authors

* [Noor Mohrez](nr341395@dal.ca) - B00901490


## Built With

* [React](https://reactjs.org/) - JavaScript library for building user interfaces
* [React Router DOM](https://reactrouter.com/) - Declarative routing for React applications
* [Bootstrap 5](https://getbootstrap.com/) - CSS framework for responsive design and styling
* [React Testing Library](https://testing-library.com/react) - Testing utilities for React components
* [Create React App](https://create-react-app.dev/) - Development environment and build tool
* [npm](https://www.npmjs.com/) - Package manager and dependency management



## Testing

### manual testing approach
for this lab, i used manual testing to check all the frontend functionality and user interactions. here's what i tested:

**components tested:**
- header/navigation - made sure links navigate to all pages correctly
- footer - checked it displays properly with copyright info
- home page - tested content rendering and layout
- about page - verified all sections display correctly (education, technical skills, career goals, passion & expertise)
- projects page - confirmed placeholder content shows up
- 404 notfound page - tested by going to routes that don't exist (like /invalid-page)

**how i tested:**
- tested each component separately by checking its specific functionality
- clicked through all the links in the header to test navigation
- manually entered URLs in the browser to verify routing
- tried accessing invalid routes to test 404 error handling

**results:**
- all navigation links work and route to the right pages
- page components render correctly with the right content
- 404 page displays when you try to access pages that don't exist
- responsive design works across different screen sizes
- bootstrap styling is consistent across all pages
- accessibility features work as intended (ARIA labels, semantic HTML, keyboard navigation)

**cross-browser testing:**
- tested on chrome, firefox, and safari
- everything works consistently across all browsers

**future plans:**
once backend is added, i'll implement structured unit tests using react testing library. api endpoints will be tested with postman for integration testing.


## Sources Used

### header.jsx

The header component was created by adapting the code from [Bootstrap Navbar Documentation](https://getbootstrap.com/docs/4.1/components/navbar/).

- converted the bootstrap navbar template by changing HTML anchor tags to react router link components for client-side routing
- used bootstrap's navbar because it's responsive and accessible, works well on different screen sizes
- modified it by replacing `<a>` tags with `<Link>` components, changed `class` to `className` for JSX, updated bootstrap 4 data attributes to bootstrap 5 syntax (`data-bs-toggle`, `data-bs-target`), added ARIA labels for accessibility, removed the dropdown and search form, and customized the links to match my portfolio pages (home, about, projects)


### footer.jsx

The footer component was created by adapting the code from [Bootstrap Sticky Footer Example](https://getbootstrap.com/docs/4.1/examples/sticky-footer/).

- converted the bootstrap sticky footer HTML to a react component with JSX
- used bootstrap's sticky footer because it keeps the footer at the bottom of the page nicely
- modified it by changing `class` to `className`, added ARIA attributes for accessibility (`role="contentinfo"` and `aria-label`), removed the container div, used bootstrap utility classes for styling instead of custom CSS, and updated the content to show my copyright and student info


### App.css

The sticky footer CSS was created by adapting the concept from [Bootstrap Sticky Footer Example](https://getbootstrap.com/docs/4.1/examples/sticky-footer/).

- used flexbox to implement the sticky footer and keep it at the bottom
- took inspiration from bootstrap's sticky footer CSS to make sure the footer stays at the bottom even with minimal content
- modified the approach by using modern flexbox layout instead of absolute positioning, applied styles to a container wrapper, and used `flex: 1` on the content area to push the footer down


### NotFoundPage.jsx

The 404 error page was created by adapting the code from [GeeksforGeeks - How to Setup 404 Page in React Routing](https://www.geeksforgeeks.org/reactjs/how-to-setup-404-page-in-react-routing/).

- created a functional react component that shows an error message for invalid routes
- used geeksforgeeks' code because it shows the standard way to make a 404 error page in react router
- modified it by changing `<h1>` to `<h2>`, made the error message more friendly, and adjusted the formatting to match the rest of my app


## Accessibility Features

this portfolio implements WCAG (Web Content Accessibility Guidelines) 2.2 (https://www.w3.org/TR/WCAG22/) for accessibility:


## Acknowledgments

* bootstrap navbar documentation (https://getbootstrap.com/docs/4.1/components/navbar/) for the navigation component
* bootstrap sticky footer example (https://getbootstrap.com/docs/4.1/examples/sticky-footer/) for footer layout
* geeksforgeeks for react router 404 page guidance
* CSCI 3172 lab 5 instructions
* react and react router documentation
 
