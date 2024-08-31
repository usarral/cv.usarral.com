// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type MenuItem from 'src/lib/interfaces/MenuItem';
import type Project from '../lib/interfaces/Project'


export const SITE_TITLE = 'Astrofy | Personal Portfolio Website Template';
export const SITE_DESCRIPTION = 'Astrofy is a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS. Create in minutes a website with Blog, CV, Project Section, Store and RSS Feed.';
export const GENERATE_SLUG_FROM_TITLE = true
export const TRANSITION_API = true

export const MENU_ITEMS: MenuItem[] = [
  {
    Page: 'Home',
    Link: '/',
    id: 'home'
  },
  {
    Page: 'Projects',
    Link: '/projects',
    id: 'projects'
  },
  {
    Page: 'CV',
    Link: '/cv',
    id: 'cv'
  },
  {
    Page: 'Contact',
    Link: '/contact',
    id: 'contact'
  }
]

export const PROJECTS: Project[] = [




]

