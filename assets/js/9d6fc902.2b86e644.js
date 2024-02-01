"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[808],{3995:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>R,contentTitle:()=>M,default:()=>D,frontMatter:()=>z,metadata:()=>A,toc:()=>V});var a=s(7624),r=s(2172),i=s(1504),l=s(5456),t=s(3943),c=s(5592),h=s(5288),d=s(632),m=s(7128),o=s(1148);function x(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return x(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:r}}=e;return{value:n,label:s,attributes:a,default:r}}))}(s);return function(e){const n=(0,m.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function u(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const a=(0,c.Uz)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d._M)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,r=p(e),[l,t]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=j({queryString:s,groupId:a}),[m,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,o.IN)(s);return[a,(0,i.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:a}),g=(()=>{const e=c??m;return u({value:e,tabValues:r})?e:null})();(0,h.c)((()=>{g&&t(g)}),[g]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);t(e),d(e),x(e)}),[d,x,r]),tabValues:r}}var b=s(3664);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:n,block:s,selectedValue:r,selectValue:i,tabValues:c}=e;const h=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.MV)(),m=e=>{const n=e.currentTarget,s=h.indexOf(n),a=c[s].value;a!==r&&(d(n),i(a))},o=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const s=h.indexOf(e.currentTarget)+1;n=h[s]??h[0];break}case"ArrowLeft":{const s=h.indexOf(e.currentTarget)-1;n=h[s]??h[h.length-1];break}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.c)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>h.push(e),onKeyDown:o,onClick:m,...i,className:(0,l.c)("tabs__item",w.tabItem,i?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function f(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function P(e){const n=g(e);return(0,a.jsxs)("div",{className:(0,l.c)("tabs-container",w.tabList),children:[(0,a.jsx)(N,{...e,...n}),(0,a.jsx)(f,{...e,...n})]})}function k(e){const n=(0,b.c)();return(0,a.jsx)(P,{...e,children:x(e.children)},String(n))}const y={tabItem:"tabItem_Ymn6"};function v(e){let{children:n,hidden:s,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,l.c)(y.tabItem,r),hidden:s,children:n})}const z={},M="Woche 1",A={id:"spr/woche1",title:"Woche 1",description:"C Wiederholung",source:"@site/docs/spr/woche1.md",sourceDirName:"spr",slug:"/spr/woche1",permalink:"/tutorium/docs/spr/woche1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/spr/woche1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Einf\xfchrung",permalink:"/tutorium/docs/spr/intro"}},R={},V=[{value:"C Wiederholung",id:"c-wiederholung",level:2},{value:"Statische Variablen",id:"statische-variablen",level:3},{value:"Dynamische Variablen",id:"dynamische-variablen",level:3},{value:"Statische vs. Dynamische Allozierung",id:"statische-vs-dynamische-allozierung",level:3},{value:"Pointer / Zeiger",id:"pointer--zeiger",level:3},{value:"Parallelisierung",id:"parallelisierung",level:2},{value:"Unterschied",id:"unterschied",level:3},{value:"Beispiel",id:"beispiel",level:3},{value:"Parbegin/Parend",id:"parbeginparend",level:4},{value:"Fork/Join",id:"forkjoin",level:4}];function S(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"woche-1",children:"Woche 1"}),"\n",(0,a.jsx)(n.h2,{id:"c-wiederholung",children:"C Wiederholung"}),"\n",(0,a.jsx)(n.p,{children:"Die Programmiersprache C gilt als eine der grundlegendsten und einflussreichsten Sprachen in der Welt der Softwareentwicklung. Entwickelt in den fr\xfchen 1970er Jahren von Dennis Ritchie bei den Bell Labs, zeichnet sich C durch seine Effizienz und Flexibilit\xe4t aus. Ein Schl\xfcsselmerkmal von C ist die F\xe4higkeit, Operationen auf einer sehr niedrigen Ebene auszuf\xfchren, was direkte Manipulation von Hardware-Ressourcen wie Speicheradressen erm\xf6glicht. Diese F\xe4higkeit macht C besonders wertvoll f\xfcr die Entwicklung von Systemsoftware."}),"\n",(0,a.jsx)(n.h3,{id:"statische-variablen",children:"Statische Variablen"}),"\n",(0,a.jsx)(n.p,{children:"Stack-Variablen werden bei Funktionsaufrufen dynamisch angelegt und automatisch freigegeben, wenn die Funktion endet. Sie erm\xf6glichen schnellen Zugriff und effiziente Speicherverwaltung."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"int x = 5;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"dynamische-variablen",children:"Dynamische Variablen"}),"\n",(0,a.jsx)(n.p,{children:"Heap-Allozierungen bieten dynamischen Speicherplatz, der zur Laufzeit angefordert und explizit durch den Programmierer freigegeben werden muss. Dies erm\xf6glicht Flexibilit\xe4t bei der Speicherverwaltung."}),"\n",(0,a.jsxs)(n.p,{children:["Mit Hilfe der Funktion ",(0,a.jsx)(n.code,{children:"malloc"})," (memory allocate), k\xf6nnen wir Speicher vom Betriebssystem anfordern. Die Anzahl der Bytes die wir allozieren m\xf6chten \xfcbergeben wir als Parameter an die Funktion. Zus\xe4tzlich nutzen wir die Funktion ",(0,a.jsx)(n.code,{children:"sizeof"})," um die Gr\xf6\xdfe des Integer Datentyps festzustellen, da diese nicht zwangsl\xe4ufig bei allen Architekturen gleich ist."]}),"\n",(0,a.jsxs)(n.p,{children:["Die Funktion gibt uns als R\xfcckgabe einen ",(0,a.jsx)(n.a,{href:"#pointer--zeiger",children:"Zeiger"})," (dies l\xe4sst sich durch das ",(0,a.jsx)(n.code,{children:"*"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"// sizeof(int) = 4\nint* x = malloc(sizeof(int));\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Achtung",type:"warning",children:(0,a.jsxs)(n.p,{children:["Die Funktion ",(0,a.jsx)(n.code,{children:"malloc"})," kann, falls ein Fehler bei der Allozierung aufgetreten ist (bspw., falls kein Speicher mehr zur Verf\xfcgung steht) ",(0,a.jsx)(n.code,{children:"NULL"})," zur\xfcckgeben. F\xfcr unsere Beispiele lassen wir diese \xdcberpr\xfcfung oft weg. In der realen Welt sollte jedoch der R\xfcckgabewert validiert werden, bevor an diese Adresse geschrieben wird - ung\xfcltige Lese-/Schreibzugriffe k\xf6nnen zu Programmabst\xfcrzen f\xfchren!"]})}),"\n",(0,a.jsx)(n.h3,{id:"statische-vs-dynamische-allozierung",children:"Statische vs. Dynamische Allozierung"}),"\n",(0,a.jsx)(n.p,{children:'Der Hauptunterschied liegt in der Lebensdauer und Verwaltung: Stack-Variablen haben eine kurze, automatisch verwaltete Lebensdauer, w\xe4hrend Heap-Allozierungen l\xe4nger leben und manuell verwaltet werden m\xfcssen, was zu mehr Flexibilit\xe4t, aber auch zu potentiellen "Memory-Leaks" f\xfchren kann.'}),"\n",(0,a.jsx)(n.p,{children:"Dar\xfcber hinaus befinden sich die Stack und Heap Addressen in unterschiedlichen Speicherbereichen. In der Regel w\xe4chst"}),"\n",(0,a.jsx)(n.h3,{id:"pointer--zeiger",children:"Pointer / Zeiger"}),"\n",(0,a.jsx)(n.p,{children:"Ein Pointer (in C) ist eine Variable, die die Adresse einer anderen Variable im Speicher h\xe4lt. Pointer sind n\xfctzlich, um Speicheradressen an Funktionen zu \xfcbergeben oder um direkt auf Speicherinhalte zuzugreifen. Obwohl sie sehr m\xe4chtig sind, kann ihre falsche Verwendung schnell zu Fehlern und Programmabst\xfcrzen f\xfchren."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"int a = 1;   // Wir legen die Variable a mit Wert 1 an\n             // Durch &a erhalten wir die Adresse der Variable a. \nint* b = &a; // Hier speichern wir die Adresse der Variable a in der Variable b\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Nach Ausf\xfchrung des Code-Beispiels sieht der Speicher folgenderma\xdfen aus (",(0,a.jsx)(n.em,{children:"Adressen sind zur Veranschaulichung einfach gew\xe4hlt"}),"). Wir sehen, dass die Variable ",(0,a.jsx)(n.code,{children:"a"})," den Wert ",(0,a.jsx)(n.code,{children:"1"})," enth\xe4lt und an der Speicheradresse ",(0,a.jsx)(n.code,{children:"0x4"})," gespeichert ist. Durch verwendung des Adressoperators (",(0,a.jsx)(n.code,{children:"&"}),") erhalten wir die Speicheradresse der Variable ",(0,a.jsx)(n.code,{children:"a"}),". Diese speichern wir nun in der eigens daf\xfcr angelegten Variable ",(0,a.jsx)(n.code,{children:"b"}),". Diese hat nun den Wert der Speicheradresse von ",(0,a.jsx)(n.code,{children:"a"}),", also ",(0,a.jsx)(n.code,{children:"0x4"}),"."]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Adresse"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Wert"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Variable"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"0x4"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"1"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"a"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"0x8"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"0x4"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"b"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"..."}),(0,a.jsx)(n.td,{style:{textAlign:"center"}}),(0,a.jsx)(n.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:['Wir wissen also, wie wir die Adresse einer Variable erhalten. Jetzt wollen wir aber auf den Wert zugreifen, auf welche der "Zeiger" ',(0,a.jsx)(n.code,{children:"b"})," zeigt. In unserem Fall ist dies nun also der Inhalt der Variable ",(0,a.jsx)(n.code,{children:"a"}),". Um an den im Speicher enthaltenen Wert an der Adresse ",(0,a.jsx)(n.code,{children:"0x4"})," zuzugreifen, k\xf6nnen wir den Dereferenzierungsoperator ",(0,a.jsx)(n.code,{children:"*"})," verwenden. Dieser gibt uns den Inhalt an der in der Variablen ",(0,a.jsx)(n.code,{children:"b"})," gespeicherten Adresse zur\xfcck."]}),"\n",(0,a.jsx)(n.p,{children:"Ein paar Beispiele:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'printf("%d", a);  // 1\nprintf("%p", &a); // 0x4\nprintf("%d", *b); // 1\nprintf("%p", b);  // 0x4\nprintf("%p", &b); // 0x8\n'})}),"\n",(0,a.jsx)(n.h2,{id:"parallelisierung",children:"Parallelisierung"}),"\n",(0,a.jsx)(n.p,{children:"Die Parallelisierung ist eine wichtige Methode um Programmausf\xfchrungen effizienter absolvieren zu k\xf6nnen. Allerdings k\xf6nnen wir immer alle Prozesse simultan ausf\xfchren, da eventuell weitere Abh\xe4ngigkeiten zwischen den Prozessen existiert. Abh\xe4ngigkeitsgraphen sind eine M\xf6glichkeit diese Abh\xe4ngigkeiten visualisieren zu k\xf6nnen."}),"\n",(0,a.jsx)(n.h3,{id:"unterschied",children:"Unterschied"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"parbegin/parend"})," gruppiert Prozesse in Bl\xf6cke f\xfcr simultane Ausf\xfchrung und erfordert deren gemeinsames Ende, bevor fortgefahren werden kann, was eine blockweise Parallelit\xe4t schafft. ",(0,a.jsx)(n.code,{children:"fork/join"})," erlaubt individuelles Starten und Warten auf einzelne Prozesse zu beliebigen Zeitpunkten, was eine feingranulare und dynamische Parallelisierung erm\xf6glicht. Wie wir im folgenden Beispiel sehen werden k\xf6nnen unter Verwendung von ",(0,a.jsx)(n.code,{children:"parbegin/parend"})," Informationen verloren gehen, wohingegen ",(0,a.jsx)(n.code,{children:"fork/join"})," diese komplexeren Abh\xe4ngigkeiten weiterhin enth\xe4lt."]}),"\n",(0,a.jsx)(n.h3,{id:"beispiel",children:"Beispiel"}),"\n",(0,a.jsx)(n.p,{children:"Als Beispiel ist der folgende Graph gegeben:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"parallelisierung_1",src:s(2056).c+"",width:"805",height:"380"})}),"\n",(0,a.jsx)(n.h4,{id:"parbeginparend",children:"Parbegin/Parend"}),"\n",(0,a.jsxs)(k,{groupId:"parbegin-parend",children:[(0,a.jsxs)(v,{value:"description",label:"Erkl\xe4rung",children:[(0,a.jsxs)(n.p,{children:["Wir k\xf6nnen feststellen, dass sich die Bl\xf6cke: ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mo,{stretchy:"false",children:"{"}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"2"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"4"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"5"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"6"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"8"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"9"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"}"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\{P2, P4, P5, P6, P8, P9\\}"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mopen",children:"{"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"2"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"4"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"5"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"6"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"8"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"9"}),(0,a.jsx)(n.span,{className:"mclose",children:"}"})]})})]})," und ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mo,{stretchy:"false",children:"{"}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"3"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"7"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"}"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\{P3, P7\\}"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mopen",children:"{"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"3"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"7"}),(0,a.jsx)(n.span,{className:"mclose",children:"}"})]})})]})," parallel ausf\xfchren lassen. Beide der Bl\xf6cke haben als Abh\xe4ngigkeit lediglich den Prozess ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"1"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P1"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"1"})]})})]}),"."]}),(0,a.jsxs)(n.p,{children:["Entsprechend sieht der Anfang unseres ",(0,a.jsx)(n.code,{children:"parbegin/parend"})," Pseudocodes folgenderma\xdfen aus:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"P1;\nparbegin\n    begin\n        P2;\n        ...\n    end\n\n    begin\n        P3;\n        P7;\n    end\nparend\nP10;\n"})}),(0,a.jsxs)(n.p,{children:["Wir f\xfchren zun\xe4chst Prozess ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"1"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P1"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"1"})]})})]})," aus. Sobald dieser fertig ist, starten wir die Parallelisierung der beiden oben genannten Bl\xf6cke. Innerhalb des zweiten Blocks haben wir lediglich lineare Abh\xe4ngigkeiten, sodass wir diese direkt hintereinander ausf\xfchren k\xf6nnen. Dies ist im Pseudocode ebenfalls im zweiten begin/end Block vermerkt."]}),(0,a.jsxs)(n.p,{children:["Der erste begin/end Block ist jedoch noch unvollst\xe4ndig. Da es dort weitere Abh\xe4ngigkeiten zwischen den Prozessen gibt (bspw. ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"5"}),(0,a.jsx)(n.mo,{children:"\u2192"}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"8"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P5 \\rightarrow P8"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"5"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2192"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"8"})]})]})]}),"), k\xf6nnen wir diese ",(0,a.jsx)(n.strong,{children:"nicht"})," einfach linear ausf\xfchren. Wir stellen nun fest, dass wir aber die Prozesse ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mo,{stretchy:"false",children:"{"}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"5"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"6"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"}"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\{P5, P6\\}"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mopen",children:"{"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"5"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"6"}),(0,a.jsx)(n.span,{className:"mclose",children:"}"})]})})]})," parallel ausf\xfchren k\xf6nnen, da sich diese die Abh\xe4ngigkeit des Prozesses ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"2"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P2"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"2"})]})})]})," teilen. Wir f\xfcgen unserem Pseudocode entsprechend eine neue ",(0,a.jsx)(n.code,{children:"parbegin/parend"})," Sektion zu."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"P1;\nparbegin\n    begin\n        P2;\n        parbegin\n            P5;\n            P6;\n        parend\n    end\n\n    begin\n        P3;\n        P7;\n    end\nparend\nP10;\n"})}),(0,a.jsxs)(n.p,{children:["Fast geschafft! Es fehlen nun nur noch die Prozesse ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mo,{stretchy:"false",children:"{"}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"4"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"8"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"9"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"}"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\{P4, P8, P9\\}"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mopen",children:"{"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"4"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"8"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"9"}),(0,a.jsx)(n.span,{className:"mclose",children:"}"})]})})]})," innerhalb des oberen Blocks. Hier stellen wir nun die oben genannte Problematik des ",(0,a.jsx)(n.code,{children:"parbegin/parend"})," Verfahrens fest. Durch die blockbasierte Parallelisierung m\xfcssen wir nun darauf warten, dass sowohl Prozess ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"5"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P5"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"5"})]})})]})," als auch Prozess ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"6"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P6"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"6"})]})})]})," terminieren, bevor wir fortfahren k\xf6nnen. Dies ist jedoch eigentlich gar nicht notwendig, da der Prozess ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"4"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P4"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"4"})]})})]})," nur den Prozess ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"5"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P5"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"5"})]})})]})," als Abh\xe4ngigkeit besitzt. Wir schauen uns gleich an, wie wir das Problem mit ",(0,a.jsx)(n.code,{children:"fork/join"})," umgehen k\xf6nnen. Aber nun zur\xfcck zum Thema. Prozesse ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"5"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P5"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"5"})]})})]})," und ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"6"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P6"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"6"})]})})]})," sind nun beide abgeschlossen. Wir erf\xfcllen somit also alle Voraussetzungen um die Prozesse ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mo,{stretchy:"false",children:"{"}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"4"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"8"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"}"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\{P4, P8\\}"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mopen",children:"{"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"4"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"8"}),(0,a.jsx)(n.span,{className:"mclose",children:"}"})]})})]})," parallel ausf\xfchren zu k\xf6nnen. Unser Pseudocode sieht nun aus wie folgt:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"P1;\nparbegin\n    begin\n        P2;\n        parbegin\n            P5;\n            P6;\n        parend\n\n        parbegin\n            P4;\n            P8;\n        parend\n    end\n\n    begin\n        P3;\n        P7;\n    end\nparend\nP10;\n"})}),(0,a.jsxs)(n.p,{children:["Es fehlt jetzt nur noch der Prozess ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"9"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P9"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"9"})]})})]}),", welcher sowohl ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"4"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P4"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"4"})]})})]})," als auch ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"8"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P8"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"8"})]})})]})," als Abh\xe4ngigkeit besitzt. Wir k\xf6nnen nun also ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"P"}),(0,a.jsx)(n.mn,{children:"9"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"P9"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(n.span,{className:"mord",children:"9"})]})})]})," einfach linear hinzuf\xfcgen."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"P1;\nparbegin\n    begin\n        P2;\n        parbegin\n            P5;\n            P6;\n        parend\n\n        parbegin\n            P4;\n            P8;\n        parend\n        P9;\n    end\n\n    begin\n        P3;\n        P7;\n    end\nparend\nP10;\n"})}),(0,a.jsx)(n.p,{children:"Fertig!"})]}),(0,a.jsx)(v,{value:"solution",label:"Musterl\xf6sung",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"P1;\nparbegin\n    begin\n        P2;\n        parbegin\n            P5;\n            P6;\n        parend\n\n        parbegin\n            P4;\n            P8;\n        parend\n        P9;\n    end\n    begin\n        P3;\n        P7;\n    end\nparend\nP10;\n"})})})]}),"\n",(0,a.jsx)(n.h4,{id:"forkjoin",children:"Fork/Join"}),"\n",(0,a.jsxs)(k,{groupId:"fork-join",children:[(0,a.jsx)(v,{value:"description",label:"Erkl\xe4rung",children:(0,a.jsx)(n.p,{children:"TODO"})}),(0,a.jsx)(v,{value:"solution",label:"Musterl\xf6sung",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"P1;\nfork A;\nP3;\nP7;\njoin A;\nP10;\n\n\nA:\n    P2;\n    fork P6;\n    P5;\n    fork P4;\n    join P6;\n    P8;\n    join P4;\n    P9;\n    end\n"})})})]})]})}function D(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(S,{...e})}):S(e)}},2056:(e,n,s)=>{s.d(n,{c:()=>a});const a=s.p+"assets/images/w1_parallel-e00d2b7824f69cb364b10545e9ffdbfe.png"},2172:(e,n,s)=>{s.d(n,{I:()=>t,M:()=>l});var a=s(1504);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);