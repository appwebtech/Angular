
Angular
=========
This Readme documentation is all about AngularJS 2 with most of my relevant experiences in this new Framework. Angular is a client side frontend web application framework which is maintained by Google. 

I decided to separate my learning experiences of Angular_1 and Angular_2 into two separate README.md files in order to keep things clear and avoid confusion. And trust me, you will be sometimes get CORNfused if you take the two frameworks concurrently. 

README.md  --> AngularJS 2
README2.md --> AngularJS 1

At the time of writing, Angular2 has just switched it's Beta server which was using Broccoli Typescript Compiler to Watchman. It crashes often, it's messy and takes long to scaffold an app. 



[![Build Status](https://travis-ci.org/angular/angular.svg?branch=master)](https://travis-ci.org/angular/angular)
[![CircleCI](https://circleci.com/gh/angular/angular/tree/master.svg?style=shield)](https://circleci.com/gh/angular/angular/tree/master)
[![Join the chat at https://gitter.im/angular/angular](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/angular/angular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Issue Stats](http://issuestats.com/github/angular/angular/badge/pr?style=flat)](http://issuestats.com/github/angular/angular)
[![Issue Stats](http://issuestats.com/github/angular/angular/badge/issue?style=flat)](http://issuestats.com/github/angular/angular)
[![npm version](https://badge.fury.io/js/%40angular%2Fcore.svg)](https://badge.fury.io/js/%40angular%2Fcore)
[![Downloads](http://img.shields.io/npm/dm/angular2.svg)](https://npmjs.org/package/angular2)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/angular2-ci.svg)](https://saucelabs.com/u/angular2-ci)  
*Safari (7+), iOS (7+), Edge (14) and IE mobile (11) are tested on [BrowserStack][browserstack].*

Angular2 for [Dart][dart] can be found at [dart-lang/angular2][ng2dart].

Angular is a development platform for building mobile and desktop web applications. 

I will be pushing my code and mini-projects (and experiences <:-)) in this AngluarJS 2.0 repo.
I've decided to teach myself AngularJS 2.0 Beta as I am currently taking AngularJS 1.x course (which is part of Ruby on Rails Web Development Specialisation) with the [Johns Hopkins University](https://ep.jhu.edu/programs-and-courses/coursera)  via [Coursera](https://www.coursera.org/specializations/ruby-on-rails) platform.




## My Development Environment. 

### 1. Nodejs.

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/nodejs/node?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/29/badge)](https://bestpractices.coreinfrastructure.org/projects/29)

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js
uses an event-driven, non-blocking I/O model that makes it lightweight and
efficient. The Node.js package ecosystem, npm, is the largest ecosystem of open
source libraries in the world.

The Node.js project is supported by the
[Node.js Foundation](https://nodejs.org/en/foundation/).


### 2. TypeScript

[![Join the chat at https://gitter.im/Microsoft/TypeScript](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Microsoft/TypeScript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

I'm using Typescript compiler with Browser Sync for my coding. 

[TypeScript](http://www.typescriptlang.org/) is a language for application-scale JavaScript. TypeScript adds optional types, classes, and modules to JavaScript. TypeScript supports tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. Try it out at the [playground](http://www.typescriptlang.org/Playground), and stay up to date via [our blog](https://blogs.msdn.microsoft.com/typescript) and [Twitter account](https://twitter.com/typescriptlang).

#### Installing

For the latest stable version:

```
npm install -g typescript
```

For our nightly builds:

```
npm install -g typescript@next
```

###3. Typings

# ![Typings](https://cdn.rawgit.com/typings/typings/master/logo.svg)

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Gitter][gitter-image]][gitter-url]

> The TypeScript Definition Manager.

#### Quick Start

```sh
# Install Typings CLI utility.
npm install typings --global

# Search for definitions.
typings search tape

# Find a definition by name.
typings search --name react

# If you use the package as a module:
# Install non-global typings (defaults to "npm" source, configurable through `defaultSource` in `.typingsrc`).
typings install debug --save

# If you use the package through `<script>`, it is part of the environment, or
# the module typings are not yet available, try searching and installing with `--global`:
typings install dt~mocha --global --save

# If you need a specific commit from github.
typings install d3=github:DefinitelyTyped/DefinitelyTyped/d3/d3.d.ts#1c05872e7811235f43780b8b596bfd26fe8e7760 --global --save

# Search and install by version.
typings info env~node --versions
typings install env~node@0.10 --global --save

# Install typings from a particular source (use `<source>~<name>` or `--source <source>`).
typings install env~atom --global --save
typings install bluebird --source npm --save

# Use `typings/index.d.ts` (in `tsconfig.json` or as a `///` reference).
cat typings/index.d.ts
```

#### Usage

**Typings** is the simple way to manage and install TypeScript definitions. It uses `typings.json`, which can resolve to the Typings Registry, GitHub, NPM, Bower, HTTP and local files. Packages can use type definitions from various sources and different versions, knowing they will _never_ conflict for users.

```sh
typings install debug --save
```

The [public registry](https://github.com/typings/registry) is maintained by the community, and is used to resolve official type definitions for JavaScript packages.

### 4. Angular-CLI

[![Join the chat at https://gitter.im/angular/angular-cli](https://badges.gitter.im/angular/angular-cli.svg)](https://gitter.im/angular/angular-cli?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status][travis-badge]][travis-badge-url]
[![Dependency Status][david-badge]][david-badge-url]
[![devDependency Status][david-dev-badge]][david-dev-badge-url]
[![npm][npm-badge]][npm-badge-url]

Prototype of a CLI for Angular 2 applications based on the [ember-cli](http://www.ember-cli.com/) project.

#### Note

This project is very much still a work in progress.

The CLI is now in beta. 
If you wish to collaborate while the project is still young, check out [our issue list](https://github.com/angular/angular-cli/issues).

#### Webpack update

We changed the build system between beta.10 and beta.12, from SystemJS to Webpack. 
And with it comes a lot of benefits. 
To take advantage of these, your app built with the old beta will need to migrate.

You can update your `beta.10` projects to `beta.12` by following [these instructions](https://github.com/angular/angular-cli/wiki/Upgrading-from-Beta.10-to-Beta.14).

#### Prerequisites

The generated project has dependencies that require **Node 4.x.x and NPM 3.x.x**.

Personally, I had a lot of issues from Deprecation warnings, to Errors stemming from permissions, incorrect versions up to unsupported dependencies.

What I did was to uninstall Nodejs & npm, then re-installed them again and ran updates via home brew. 

Many developers using Yosemite were updating angular-cli using a global package like this.

```
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@latest
```

I'm currently running OSX 10.11.6 El-Capitan in both my machines and I followed what my Yosemite developers were doing but got hit by another error when I ran ```ng new joe``` . "joe" was the app name.

It ran the installation and hang at "Installing packages for tooling via npm"

I aborted the installation, cleaned the cache and re-ran it once again. This time it installed up to the end but there was another error. ```Could not start watchman``` I knew this was server related and after using almost half of my Sunday afternoon, you can imagine the frustrations and a tad  bit of cursing. 
<:-)

I ran the server command and as expected, ng serve couldn't start watchman thus it fell back to NodeWatcher for file system events. 

Then something happened, which I relate to my VPN server deactivation. I killed it whilst making installations for Node, npm and angular-cli. I got an outgoing connection to fetch dependencies at *http://ember-cli.com** and I let it do it's thing. (I rarely allow such kind of data fetching if not requesting gem files and/or dependencies from GitHub.)

Bash started building modules, optimizing assets and hashing; et voila! NG Live Development Server launched locally at port 4200. 

Everything seems to be wroking great as of now and I'm feeling like a Cowboy. Not this [Cowboy](http://www.bidcoafrica.com/products/item/16/cowboy) but this other [Cowboy](https://www.peintures-tableaux.com/Far-West-cowboy-Far-West.html); it's now time to code until sleep do me part with my computers. 


## Developer

Any professional development mock-ups will have a repo of their own hence any mini-projects referenced here will be non-professional and thus may be buggy;

```
NB: 
My private repos which I share with clients do have constant reviews, patches, updates and are constantly debugged by my assistant to suite the current trend as far as web technologies are concerned. 

My public repos are not maintained but will work on updating them, especially gems within the Ruby Apps now that most developers are running Rails 5. 

Additionally, as an open-source enthusiast source code is granted as per MIT license. 

```


Joseph M Mwania. 

## Contacts
Development done by;
Joseph M Mwania

http://www.theappwebtech.com/

https://twitter.com/appwebtech

https://www.facebook.com/theappwebtech/

## License

MIT License. Copyright 2016 Appwebtech. http://theappwebtech.com 