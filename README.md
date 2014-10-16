My Personal Yo-Angular Boilerplate
----------------------------------

This is a repo for how I commonly set up my Yo Angular Projects. Tools I can't live without, or anything I find myself doing over and over again with every new project set up.

#### LESS Support

I have added grunt-contrib-less to the project. So now it will compile any less files to CSS out of the box.

#### ng-Annotate

Since ng-min has been depreciated, I have replaced it with ng-Annotate. Which also helps with some dependency injection issues when minifying your script.

#### Corrects Wire Dep Path

Upon initial Yo Angular install, it seems to have issues finding the bower.json file. Not sure if this will be fixed in the future. In the mean time this is how I am fixing it.

#### UI-Router

I replaced the native ngRoute with UI-Router. I prefer it, it is capable of everything ngRoute does plus more. 

#### UI-Utils

Adds ui-utils to the project because there are many small useful directives I commonly use and is a huge timesaver.

#### Angular-UI-Bootstrap

Adds Angular UI Bootstrap Directive library. Can not live without this one. I use it everywhere. Makes rapidly building a project so much easier and faster.

#### Font Awesome Shim

Adds a shim for Front Awesome Support

#### Grunt Bump

Adds support for Grunt Bump

#### Modernizr

Adds Modernizr library. Great for cross-browser support and quickly being able to target specific devices.

#### .jshintrc

I seem to always update my jshintrc the same way. Its adjusted for my codeing style and preference. May not be the best settings for you.

#### .gitignore

Adjusts the .gitignore for my common set up

#### Closing

Thanks for checking out my personal Yo Angular Boilerplate setup. If there are better ways to set it up or you feel there are better tools than the ones I included, please by all means let me know. I am happy to look into making this a better starting point from the already amazing Yo Angular Project.
