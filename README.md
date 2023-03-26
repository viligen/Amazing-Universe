# Amazing-Universe

My ReactJS Project, March 2023 - April 2023

ReactJS @ SoftUni

## Documentation:

### INITIATION:

My project for 'ReactJS' course at SoftUni. It has been developed for all Astrophiles and Astro Enthusiasts.

### IDEA:

Creating a Single Page Application, which allows users to register, login, read, create, edit and delete content, interact by liking others publications.
The primary focus of 'Amazing Universe' is on space photography - publishing Posts with favourite images, liking others' posts, etc.

### CONTENT:

'Amazing Universe' SPA consists of Components and their CSS modules, forming page views. It has 6 dynamic pages:
####- Home page: showing last 3 of the most recent posts;
####- Dashboard page: showing the full collection of posts, ordered by last published, with search options (by title or source)
####- My Posts page: showing users own posts with search options (by title or source)
####- My Profile page: showing user info, total number of own posts (being also a link to the reletaed collection- My Posts), total likes the user has made as well as a collection of recently seen posts (being also links to each visisted post)
####- Details page: showing a detailed info about a post. If the user is authenticated and is the owner of the publication, they get access to edit and delete functionality but cannot like their own posts. Other authenticated users can only like once per post and have no access to edit and delete it. Anonymous users have no access to this page.
####- Edit page: showing the actual post info and giving the owner the possibility to update it.

'Amazing Universe' SPA offers a Persistent User State.

Anonymous Users:
Have access to Home page, Dashboard page, Login page and Register page.They can also use the search implementation to search through larger collections. They cannot see Details pages, Profile related pages and cannot create new posts as well as cannot edit and delete content.

Authenticated Users:
Authenticated users have access to Home page, Dashboard Page, My Posts page, My Profile page, Create Post page as well as logout option.
Edit page and Delete page are accessible for post owners only.

### Techniques:

Components structure - stateful and stateless components, Routing, built-in and custom hooks, controlled forms with validations and appropriate notifications, Context API, Guarded Routes, User State persistency, module CSS files, testing, error handling

### SECURITY:

Custom, extra security features are implemented to prevent unauthorized access to other users' data or others publications editing and deleting - Route Guarding Custom Components.

### BACK-END:

SoftUni Practice Server : https://github.com/softuni-practice-server/softuni-practice-server

### FRONT-END:

The project uses React JS library, React Router, Context API, HTML5, CSS3, module CSS, JS, Jest, Session Storage.
My own HTML and CSS. Images thanks to NASA and PixaBay. Their official links can be seen and followed in footer section of the application.

##### DISCLAIMER:

This Application has non-commercial purposes, it is not primarily intended for, or directed towards, commercial advantage or monetary compensation.

###### \*EMOTIONAL VALUES:

###### I've been drawn to stars and planets, extra terrestrial worlds and black holes since I was a kid. This project has been developed for enthusiasts like me and has no claims to be fully professional in content.
