# codeX Jekyll site sources

The  website is build using the [Jekyll](http://jekyllrb.com/) site generator and the [stability](http://themeforest.net/item/stability-responsive-html5css3-template/7222255) HTML template. Note that we have purchased a regular license for codeX. This approach allows fast and flexible changes to be made to the site by templating key aspects such as navigation, layouts and the like.

## Setup

The setup procedure is a series of commands that are run from a terminal. On OSX, if you don't have xcode command line tools installed (you get an error complaining about not finding `ruby.h`) then install xcode tools as follows:

 1. `xcode-select --install`

Next, install [Jekyll](http://jekyllrb.com/) using:

 1.  `sudo gem install jekyll`

There is a known issue on OSX when installing the Jekyll gem. If it fails with an incomprehensible message, follow the instructions on this [StackOverflow answer](http://stackoverflow.com/questions/22352838/ruby-gem-install-json-fails-on-mavericks-and-xcode-5-1-unknown-argument-mul). The exact command for OSX is:

``` bash
sudo ARCHFLAGS=-Wno-error=unused-command-line-argument-hard-error-in-future gem install jekyll
```

It is also possible that `gem` fails on OSX when installing nokogiri. Just ignore it as the [fix](http://nokogiri.org/tutorials/installing_nokogiri.html) is relatively complicated and it is not required to build the site.

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
The site is carefully organised to keep major look and feel components separate from content wherever possible. These components include the headers, footers, navigation, layout and content pages. We use liquid to automate as much of the markup as possible.

1. The key formatting for pages are in the `_layout` directory and augmented by stuff in the `_includes` directory. 
1. Actual content is in the `content` directory can be written in HTML or MarkDown or a mix of HTML with included MarkDown.
1. Navigation is layed out in `_data/navigation.yml` and rendered by `_includes/navigation.html`. The YML is pretty 
obvious with the `source` pointing to a file in the `content/` directory and the `title` variable is the label on the navigation bar. Sub menu's are supported but not sub sub menus.
1. Tabbed layouts are rendered from YML formatted files. For example, `_data/what_tabs.yml` is the text for the "What is codeX" page. It is rendered using `include/tab_macro.html'
1. The partner list is also maintained as a YML file in `_data/partners.html`
1. For now, forms are simply Google App forms in an iframe. The styling is not great, but the ease of use is a big win.

## Deployment
There are several ways to deploy the site. GitHub allows us to host for free (using [GitHub pages](https://pages.github.com/)) and provides automatic updates on commit. For now, this has been disabled. One can also simply deploy the contents of the `_site` directory to a service of your choice.

The current deployment is via Google storage and the `gsutil` package.
Assuming you have installed the tools and authenticated yourself, the
following command executed from the `codex-site` directory will update the
deployed site with the local changes:

```bash
jekyll build
gsutil rsync -p -r -c _site/ gs://www.projectcodex.co
```



