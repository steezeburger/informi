# informi

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.0.2.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.

# to get hacking:

### navbar
relevant navbar code resides in client/app/components/navbar
this directory contains
- the directive definition
- the directive's controller
- the directive's view
- the view's styles (gets imported into main sass file (client/app/app.scss))

the navbar actually wraps the entire app so this is where you'll change the background and do other theme-y things for now.
this also means the navbar controller is probably going to be the top scope, so you should be able to use things like nav.toggle() anywhere you'd like.

### styles
- main styles reside in client/app/app.scss.
- here you can import any other style files you'd like, as long as they're sass or css.
- scss from anywhere in app/client/ should automatically get injected here as well.

### creating packages
until i create the package generator, you'll need to download and install the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack).

you'll then need to run

- ```yo angular-fullstack:route packageName```

to generate your front-end boiler-plate (if you need a front-end).

and

- ```yo angular-fullstack:endpoint packageName ```

to generate your back-end endpoint boiler-plate (if you need a back-end).



# TODO
- package generator
- light, mnml theme

## Screenshot
![screenshot](http://i.imgur.com/IzSU1AH.jpg)

### Resources

I couldn't have done this without the help of the following resources:

- [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack)
- [Bootstrap Simple Sidebar](http://startbootstrap.com/template-overviews/simple-sidebar/)
