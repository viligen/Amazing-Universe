# Amazing-Universe

My ReactJS Project, March 2023 - April 2023

Live at: ("Amazing Universe")

ReactJS @ SoftUni

## Documentation:

### INITIATION:

My project for 'ReactJS' course at SoftUni. It has been developed for all Astrophiles and Astro Enthusiasts.

### IDEA:

Creating a Single Page Application, which allows users to register, login, read, create, edit and delete content, interact by liking others publications.
The primary focus of 'Amazing Universe' is on space photography - publishing Posts with favorite images, liking others' posts, etc.

### CONTENT:

'Amazing Universe' SPA consists of Components and their CSS modules, forming page views. It has 7 dynamic pages:

#### - Home page: showing last 3 of the most recent posts, ordered by last published;

#### - Dashboard page: showing the full collection of posts, ordered by last published, with search options (by title or source)

#### - My Posts page: showing users own posts with search options (by title or source), ordered by last published

#### - My Profile page: showing user info, total number of own posts (being also a link to the related collection- My Posts), total likes the user has made as well as a collection of recently seen posts (being also links to each visited post), ordered by last seen

#### - Details page: showing a detailed info about a post. If the user is authenticated and is the owner of the publication, they get access to edit and delete functionality but cannot like their own posts. Other authenticated users can only like once per post and have no access to edit and delete it. Anonymous users have no access to this page.

#### - Edit page: showing the actual post info and giving owner the possibility to update it.

#### - Delete page: showing the post title and a warning message. It gives owner the possibility to delete it or cancel the action.

'Amazing Universe' SPA offers a Persistent User State.

#### Anonymous Users:

Have access to Home page, Dashboard page, Login page and Register page. They can also use the search implementation to search through larger collections. They cannot see Details pages, Profile related pages and cannot create new posts as well as cannot edit and delete content.

#### Authenticated Users:

Authenticated users have access to Home page, Dashboard Page, My Posts page, My Profile page, Create Post page as well as logout option.
Edit page and Delete page are accessible for post owners only.

### Techniques:

Components structure - stateful and stateless components, Routing, Built-in and custom Hooks, Controlled Forms with validations and appropriate notifications, Context API, Guarded Routes, User State persistency, Module CSS files, Spinner loader, React testing library, Error handling

### SECURITY:

Custom, extra security features are implemented to prevent unauthorized access to other users' data or others publications edit and delete actions - Route Guarding Custom Components.

### BACK-END:

(https://github.com/softuni-practice-server/softuni-practice-server "SoftUni Practice Server")

### FRONT-END:

The project uses React JS library, React Router, Context API, HTML5, CSS3, module CSS, JS, Jest, Session Storage.
My own HTML and CSS. Images thanks to (https://www.nasa.gov/multimedia/imagegallery/index.html "NASA") and (https://pixabay.com/images/search/universe/ "PixaBay"). Their official links appear in footer section of the application as well.

### UX/UI:

Responsive design - media screen queries, Active link, Data loading notification - spinner and a short message, Form validation notifications by colors, Detailed placeholders, Delete confirmation

##### DISCLAIMER:

This Application has non-commercial purposes, it is not primarily intended for, or directed towards, commercial advantage or monetary compensation.

###### \*EMOTIONAL VALUES AND ADDITIONAL REMARKS:

###### I've been drawn to stars and planets, extra-terrestrial worlds and black holes since I was a kid. This project has been developed for enthusiasts like me and has no claims to be fully professional in content.
