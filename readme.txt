=== Current Year Block ===
Contributors:      Richard Cote, Sideways Design
Tags:              block
Tested up to:      6.2
Stable tag:        1.2.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Example block written with ESNext standard and JSX support – build step required.

== Short Description == 

Block to display current year, with editable prefix and suffix. Suitable for copyright notices.

== Description ==

The Current Year Block is a useful tool that allows you to display an always-current year on your website. It does this by programmatically generating the year and inserting it into a paragraph or div element within your content.

This block provides the flexibility to add a prefix and a suffix to the year, which can be handy for things like copyright statements that need to stay up-to-date. But, if you don't need them, you can simply toggle the prefix and suffix off.

In terms of appearance, you have full control over the block's style. You can adjust the font family, text alignment, color, size, and more. You also have the ability to manipulate the block's spacing through padding and margin settings.

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

Q: I added the block and can't see anything!
A: The background color of where the block has been added may match the default text color. To change the text color, select the block and recolor using the same options in the sidebar as other WordPress core blocks.

Q: Why are the prefix and/or suffix appearing stuck together with the year?
A: The block does not automatically insert a space between the prefix, year, and suffix. To ensure proper spacing, please manually add a space at the end of your prefix and at the beginning of your suffix unless you specifically want them adjacent the year. Note that the default prefix for the block is a copyright symbol followed by a nonbreaking space to prevent a wrapping between the prefix and the year.

== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 1.0.0 =
* Block renders plain <p> tag with editable prefix, year and editable suffix.

= 1.2.0 =
* Added styling functionality and WYSIWYG display within the block editor
* Toggles for prefix/suffix
* Switching element type between <p> and <div>

== Styling ==

For CSS styling, the block class is .wp-block-sidewaysdesign-current-year-block.

Other classes can be added in the sidebar Block settings under Advanced --> Additional CSS Class(es).

== Is this useful to you? == 

If you find this block useful, feel free to show your appreciation with a donation at:
https://www.paypal.com/donate/?hosted_button_id=QU5NN3SLE2QAN