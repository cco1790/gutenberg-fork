gutenberg修改分支，可以不用安装也可以用了支持wordpress大部分功能,gutenberg打包请参考官方文档有许多可以定制。

集成

js:
import {Seditor}  from "@wordpress/block-editor";
Seditor();
html:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
  <link rel="dns-prefetch" href="/assets/editor.css"/> 
  <script defer src="/public/vendors.bundle.js"></script>
  <head>
  <body>
      <div id="root"  class="getdave-sbe-block-editor"></div>
  </body>



The Gutenberg branch modification allows it to be used without installation, supporting most WordPress functions. For Gutenberg packaging, please refer to the official documentation, which has many customization options.

Integration

js:
import {Seditor}  from "@wordpress/block-editor";
Seditor();
html:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
  <link rel="dns-prefetch" href="/assets/editor.css"/> 
  <script defer src="/public/vendors.bundle.js"></script>
  <head>
  <body>
      <div id="root"  class="getdave-sbe-block-editor"></div>
  </body>
