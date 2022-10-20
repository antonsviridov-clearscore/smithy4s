"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[855],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,y=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return n?i.createElement(y,o(o({ref:t},p),{},{components:n})):i.createElement(y,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6886:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_label:"Installation",title:"Installation"},s=void 0,m={unversionedId:"overview/installation",id:"overview/installation",title:"Installation",description:'Smithy4s generates Scala code from a Smithy model. The generated code includes traits for any services you might define, as well as case classes for models used in these services. It has no dependencies on external libraries or any specific protocol like HTTP or JSON. It does, however, depend on a "core" library that contains a number of interfaces implemented by the generated code.',source:"@site/../docs/target/jvm-2.13/mdoc/01-overview/03-installation.md",sourceDirName:"01-overview",slug:"/overview/installation",permalink:"/smithy4s/docs/overview/installation",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/01-overview/03-installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Installation",title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/smithy4s/docs/overview/quickstart"},next:{title:"Installation (CLI)",permalink:"/smithy4s/docs/overview/cli"}},p={},c=[{value:"SBT",id:"sbt",level:2},{value:"Mill",id:"mill",level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Smithy4s generates Scala code from a Smithy model. The generated code includes traits for any services you might define, as well as case classes for models used in these services. It has no dependencies on external libraries or any specific protocol like HTTP or JSON. It does, however, depend on a "core" library that contains a number of interfaces implemented by the generated code.'),(0,a.kt)("h2",{id:"sbt"},"SBT"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For mill support, see ",(0,a.kt)("a",{parentName:"em",href:"#mill"},"Mill")," below.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"smithy4s-sbt-codegen")," is a code generating sbt plugin that creates ",(0,a.kt)("inlineCode",{parentName:"p"},".scala")," files corresponding to the provided ",(0,a.kt)("inlineCode",{parentName:"p"},".smithy")," specs."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"project/plugins.sbt"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("com.disneystreaming.smithy4s"  % "smithy4s-sbt-codegen" % "0.16.6")\n')),(0,a.kt)("p",null,"and enable the plugin in the desired sbt module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import smithy4s.codegen.Smithy4sCodegenPlugin\n\nval myModule = project\n  .in(file("modules/my-module"))\n  .enablePlugins(Smithy4sCodegenPlugin)\n  // version for smithy4s-core is sourced from Smithy4sCodegenPlugin\n  .settings(libraryDependencies += "com.disneystreaming.smithy4s" %% "smithy4s-core" % smithy4sVersion.value)\n')),(0,a.kt)("p",null,"This will enable the plugin on ",(0,a.kt)("inlineCode",{parentName:"p"},"myModule"),". We also need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"smithy4s-core ")," here since it is needed for compiling the generated code."),(0,a.kt)("p",null,"By default, the plugin will look in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$MY_MODULE/src/main/smithy")," directory and will write scala code in ",(0,a.kt)("inlineCode",{parentName:"p"},"$MY_MODULE/target/scala-<version>/src_managed/")," when invoking ",(0,a.kt)("inlineCode",{parentName:"p"},"compile"),". The paths are configurable via the ",(0,a.kt)("inlineCode",{parentName:"p"},"smithy4sInputDir")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"smithy4sOutputDir")," settings keys."),(0,a.kt)("p",null,"For example, in order for the plugin to source ",(0,a.kt)("inlineCode",{parentName:"p"},".smithy")," specs from ",(0,a.kt)("inlineCode",{parentName:"p"},"./smithy_input")," (inside the folder where our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," is) and output the generated files into ",(0,a.kt)("inlineCode",{parentName:"p"},"./smithy_output"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val myModule = project\n  .in(file("modules/my-module"))\n  .enablePlugins(Smithy4sCodegenPlugin)\n  .settings(\n    scalaVersion := "2.13.8",\n    smithy4sInputDir in Compile  := (baseDirectory in ThisBuild).value / "smithy_input",\n    smithy4sOutputDir in Compile := (baseDirectory in ThisBuild).value / "smithy_output",\n    libraryDependencies += "com.disneystreaming.smithy4s" %% "smithy4s-core" % smithy4sVersion.value\n  )\n')),(0,a.kt)("h2",{id:"mill"},"Mill"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"smithy4s-mill-codegen-plugin")," is a plugin to enable Smithy4s code generation on a ",(0,a.kt)("inlineCode",{parentName:"p"},"mill")," module."),(0,a.kt)("p",null,"For example, here, we enabled it on the ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import $ivy.`com.disneystreaming.smithy4s::smithy4s-mill-codegen-plugin::0.16.6`\nimport smithy4s.codegen.mill._\n\nimport mill._, mill.scalalib._\nobject example extends ScalaModule with Smithy4sModule {\n  def scalaVersion = "2.13.8"\n  override def ivyDeps = Agg(\n    ivy"com.disneystreaming.smithy4s::smithy4s-core:${smithy4sVersion()}"\n  )\n}\n')),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"mill")," plugin will look for Smithy files under the ",(0,a.kt)("inlineCode",{parentName:"p"},"$MY_MODULE/smithy")," directory. The generated code ends up in ",(0,a.kt)("inlineCode",{parentName:"p"},"out/$MY_MODULE/smithy4sOutputDir.dest/scala/"),", again, by default. Code generation happens automatically when you before you ",(0,a.kt)("inlineCode",{parentName:"p"},"compile")," the module. The paths are configurable via the ",(0,a.kt)("inlineCode",{parentName:"p"},"smithy4sInputDir")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"smithy4sOutputDir")," tasks."),(0,a.kt)("p",null,"For example, here we'll read Smithy files from ",(0,a.kt)("inlineCode",{parentName:"p"},"smithy_input")," and write to ",(0,a.kt)("inlineCode",{parentName:"p"},"smithy_output"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import $ivy.`com.disneystreaming.smithy4s::smithy4s-mill-codegen-plugin::0.16.6`\nimport smithy4s.codegen.mill._\n\nimport mill._, mill.scalalib._\nobject example extends ScalaModule with Smithy4sModule {\n  def scalaVersion = "2.13.8"\n  override def ivyDeps = Agg(\n    ivy"com.disneystreaming.smithy4s::smithy4s-core:${smithy4sVersion()}"\n  )\n\n  override def smithy4sInputDir = T.source {\n    PathRef(T.ctx().workspace / "smithy_input")\n  }\n  override def smithy4sOutputDir = T {\n    PathRef(T.ctx().workspace / "smithy_output")\n  }\n}\n')))}u.isMDXComponent=!0}}]);