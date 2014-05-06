# codeX Jekyll site sources

The  website is build using the [Jekyll](http://jekyllrb.com/) site generator and the [stability](http://themeforest.net/item/stability-responsive-html5css3-template/7222255) HTML template. Note that we have purchased a regular license for codeX. This approach allows fast and flexible changes to be made to the site by templating key aspects such as navigation, layouts and the like.

## Setup
You need to have [Jekyll](http://jekyllrb.com/) and [Kramdown](http://kramdown.gettalong.org/). Note that Kramdown is used by a plugin that allows MarkDown text to be included directly into HTML documents. You install all your requirements as follows (OSX and Linux):

 1.  `sudo gem install jekyll`
 1.  `sudo gem install kramdown`

There is a known issue on OSX when installing the Jekyll gem. If it fails with an incomprehensible message, follow the instructions on this [StackOverflow answer](http://stackoverflow.com/questions/22352838/ruby-gem-install-json-fails-on-mavericks-and-xcode-5-1-unknown-argument-mul). The exact command for OSX is:

``` bash
ARCHFLAGS=-Wno-error=unused-command-line-argument-hard-error-in-future sudo gem install jekyll
```
You now need to clone a copy of the sources as hosted on GitHub. The easiest (but not the most secure) way is to achieve this is as follows:

``` bash
cd your/working/directory/
git clone https://github.com/davidmweber/codex-site.git
```
This will result in a directory called `codex-site`. Change to this directory. The site can now be build using 
``` bash
jekyll build
```
The static site content can be found in the `_site` directory. Alternatively, Jekyll can serve the site, rebuilding it dynamically as you save your work by using 
``` bash
jekyll serve -w
```
Just point your browser to [http://localhost:4000/](http://localhost:4000/). Refresh as needed. Use `git` to commit and push your changes back to GitHub. Note that this process will change to formal pull requests rather than direct commits to the live site when we go live.


## Site setup
The site is carefully organised to keep major look and feel components separate from content wherever possible. These components include the headers, footers, navigation, layout and content pages. The key formatting pages are in the `_layout` directory and augmented by stuff in the `_includes` directory. Actual content is in the `content` directory can be written in HTML or MarkDown or a mix of HTML with included MarkDown.

## Deployment
There are several ways to deploy the site. GitHub allows us to host for free (using [GitHub pages](https://pages.github.com/)) and provides automatic updates on commit. For now, this has been disabled. One can also simply deploy the contents of the `_site` directory to a service of your choice.




