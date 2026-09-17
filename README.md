# Northbridge Campus Event Guide

## Project Description

The Northbridge Campus Event Guide is a small responsive website created for the Office of Student Engagement. Its purpose is to help Northbridge University students discover campus activities, learn key event details, and find registration or contact information. The intended audience is current students, especially first-year and transfer students who are looking for ways to connect with campus life.

The site includes a home page with an upcoming events grid and an event details page for the featured Spring Beats Concert.

## Layout Decisions

Flexbox is used in several places:

- **Primary navigation:** The `nav ul` uses `display: flex`, `flex-wrap: wrap`, and `gap` so links sit in a row on wide screens and wrap neatly on narrow screens.
- **Hero section:** The hero uses `display: flex`, `flex-wrap: wrap`, `gap`, and `align-items: center` to place the introductory text beside the image on desktop and stack them on mobile.
- **Footer:** The footer content uses Flexbox with `justify-content: space-between`, `align-items: center`, `gap`, and `flex-wrap` so the copyright, contact, and footer navigation arrange themselves responsively.
- **Related events:** The related event cards use `display: flex` with `flex-wrap: wrap` and `flex: 1 1 220px` so cards wrap when space is limited.

CSS Grid is used in two main areas:

- **Upcoming events grid:** The event cards use `grid-template-columns: repeat(3, 1fr)` on desktop. The featured card spans two columns, creating atleast two different card widths. At smaller widths the grid becomes two columns, then one column.
- **Event details layout:** The main content and sidebar use `grid-template-columns: 2fr 1fr` on desktop. At 900px and below, the layout becomes a single column so the sidebar moves below the main content.

Font sizes are fixed and adjusted inside the media queries so the pages still scale nicely on smaller screens.

## Responsive Design

Breakpoints:

- **900px and below:** The event grid changes from three columns to two. The featured card still spans both columns. The event details page changes from a two-column layout to a single column, and the sidebar is no longer sticky. The hero and event introduction headings are reduced to 2rem.
- **600px and below:** The event grid becomes one column. The featured card spans one column. The hero and event introduction stack vertically. The primary navigation becomes vertical. The footer content stacks vertically and aligns to the left. The hero and event introduction headings are reduced to 1.75rem.

Testing: I tested the pages by resizing the browser window from wide desktop to narrow mobile widths and by using browser developer tools device emulation. I checked that navigation links work, images scale, text remains readable, and no horizontal scrolling appears.

## Semantic HTML

Semantic elements used include:

- **`header`:** Used for the site header and branding on both pages.
- **`nav`:** Used for primary navigation and footer navigation.
- **`main`:** Used exactly once per page to wrap the unique main content.
- **`section`:** Used for thematic groups such as the hero, upcoming events,
  about section, and related events.
- **`article`:** Used for individual event cards and the main event description.
- **`aside`:** Used for the event sidebar with date, time, location, organizer,
  admission, and registration.
- **`figure` and `figcaption`:** Used for the hero image and event introduction
  image with captions.
- **`time`:** Used for event dates and times with `datetime` attributes.

These elements make the document structure easier to understand for browsers, screen readers, and search engines.

## Sources

- **Images:** All photos were downloaded from [Unsplash](https://unsplash.com)
  and are used under the Unsplash License. The images are:
  - `campus-walk.jpg` – students walking on campus
  - `concert.jpg` – outdoor concert crowd
  - `tree-plantation.jpg` – volunteers planting trees
  - `career-fair.jpg` – career fair conversation
  - `movie-outdoors.jpg` – outdoor movie screening
  - `yoga.jpg` – yoga on the lawn
  - `hackathon.jpg` – students collaborating on laptops


- **Fonts:** The site uses the system font stack
  (`system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`).

- **Content:** All university names, event names, locations, schedules, and descriptions are fictional and were invented for this assignment.