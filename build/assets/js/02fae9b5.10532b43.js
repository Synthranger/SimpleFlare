"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[331],{24948:function(e,l,t){t.r(l),t.d(l,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=t(87462),i=t(63366),r=(t(67294),t(3905)),a=["components"],u={},o="SimpleFlare",s={type:"mdx",permalink:"/SimpleFlare/",source:"@site/pages/index.md"},p=[{value:"Demo:",id:"demo",children:[],level:3},{value:"Documentation <br></br>",id:"documentation-",children:[{value:"Types <br></br>",id:"types-",children:[{value:"SimpleFlare",id:"simpleflare-1",children:[],level:4}],level:3},{value:"Functions <br></br>",id:"functions-",children:[{value:"SimpleFlare.new",id:"simpleflarenew",children:[],level:4},{value:"SimpleFlare:Destroy",id:"simpleflaredestroy",children:[],level:4}],level:3}],level:2},{value:"Testing Instructions",id:"testing-instructions",children:[],level:2}],c={toc:p};function m(e){var l=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"simpleflare"},"SimpleFlare"),(0,r.kt)("p",null,"A simple flare system. ",(0,r.kt)("br",null),"\nPossible uses are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Laser flares."),(0,r.kt)("li",{parentName:"ul"},"Scope reflections.")),(0,r.kt)("h3",{id:"demo"},"Demo:"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"documentation-"},"Documentation ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"types-"},"Types ",(0,r.kt)("br",null)),(0,r.kt)("h4",{id:"simpleflare-1"},"SimpleFlare"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"export type SimpleFlare = {\n    Dispose: boolean;\n    OriginalSize: UDim2;\n    Instance: BillboardGui;\n}\n")),(0,r.kt)("h3",{id:"functions-"},"Functions ",(0,r.kt)("br",null)),(0,r.kt)("h4",{id:"simpleflarenew"},"SimpleFlare.new"),(0,r.kt)("p",null,"Constructs a new SimpleFlare object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"function SimpleFlare.new(adornee: Part | Attachment, flareImageId: string, originalSize: UDim2): SimpleFlare\n")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"simpleflaredestroy"},"SimpleFlare:Destroy"),(0,r.kt)("p",null,"Destroys the SimpleFlare object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"function SimpleFlare:Destroy(): void\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"testing-instructions"},"Testing Instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Put SimpleFlare.lua in ReplicatedStorage"),(0,r.kt)("li",{parentName:"ul"},"Put ExampleFlare.lua in ReplicatedStorage"),(0,r.kt)("li",{parentName:"ul"},"Put SimpleFlareTester.client.lua in StarterPlayerScripts")),(0,r.kt)("p",null,"It should look like this: ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"After that just hit Play and see it in action. ",(0,r.kt)("br",null),"\nNote that the attachment is in ",(0,r.kt)("inlineCode",{parentName:"p"},"0, 10, 20")," of workspace."))}m.isMDXComponent=!0}}]);