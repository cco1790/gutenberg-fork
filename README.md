This project is a fork of [Gutenberg](https://github.com/WordPress/gutenberg).

It is licensed under the **GPL-2.0-or-later**.

You are free to use, modify, and distribute this software under the terms
of the GNU General Public License v2 or later.



gutenberg修改分支，可以不用安装也可以用了支持wordpress大部分功能,gutenberg打包请参考官方文档有许多可以定制。

集成

<h5>js:<h5>
<pre>
import {Seditor}  from "@wordpress/block-editor";
Seditor();
</pre>

html:

		 <head>
          <link rel="stylesheet" href="/assets/editor.css"/> 
          <script defer src="/public/vendors.bundle.js"></script>
	     </head>
         <body>
            <div id="root"  class="getdave-sbe-block-editor"></div>
         </body>
			



The Gutenberg branch modification allows it to be used without installation, supporting most WordPress functions. For Gutenberg packaging, please refer to the official documentation, which has many customization options.

Integration

js:
<pre>
import {Seditor}  from "@wordpress/block-editor";
Seditor();
</pre>	
html:

		  <head>
          <link rel="stylesheet" href="/assets/editor.css"/> 
          <script defer src="/public/vendors.bundle.js"></script>
	     </head>
         <body>
            <div id="root"  class="getdave-sbe-block-editor"></div>
         </body>
			
			
