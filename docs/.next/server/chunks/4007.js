"use strict";exports.id=4007,exports.ids=[4007,1614],exports.modules={21614:(e,i,t)=>{t.a(e,async(e,r)=>{try{t.r(i),t.d(i,{TileViolator:()=>f,default:()=>$});var o=t(20997),a=t(16689),n=t(57518),l=t.n(n),s=t(46555),d=t(94307),c=e([s]);s=(c.then?(await c)():c)[0];let p=l().div`
    --tile-background-color: var(--background-tertiary-color);
    --tile-overlay-background-color: var(--section-accent-color ,#86868b);
    --tile-overlay-copy-max-width: 550px;

    position: relative;
    /* padding: 22px; */
    background-color: var(--background-tertiary-color);
    /* border-radius: 18px; */
    border-radius: 30px;
    overflow: hidden;

    ${({color:e})=>"blue"===e?`
      background-image: radial-gradient(circle at 90% 0%,#239AF2 0%,#3F4CC8 100%);
      // background: linear-gradient(114.88deg,#3cd0ff,#0b0050),linear-gradient(107.56deg,#000e16,#0c21e0 48.44%,#05d2ff);
    `:""}
    ${({color:e})=>"deep-purple"===e?`
      background: linear-gradient(to bottom right,#0D1387,#867AF6);
    `:""}
    ${({color:e})=>"purple"===e?`
      background: #dd41b7;
      background: linear-gradient(137deg,#dd41b7,#5717a6);
    `:""}
    ${({color:e})=>"pink"===e?`
      background: #dd41b7;
      background-image: radial-gradient(circle at 0% -25%,#FF7948 0%,#FF8355 0,#DA2C84 42%,#3E13A4 110%);
    `:""}

    &[data-color-scheme="dark"] {
      color: white;
    }

    ol+*, p+*, ul+* {
      margin-top: 0.8em;
    }
`,h=l().div`
  padding: 40px;
`,x=l().div`
  margin-top: -4px;
  max-width: 655px;
`,u=l()(d.default).attrs({as:"h4"})`
    font-size: 21px;
    line-height: 1.1904761905;
    font-weight: 600;
    letter-spacing: .011em;
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    ${({overlay:e})=>e?"":"color: var(--section-accent-color);"}
`,g=l()(d.default)`
    font-size: 19px;
    line-height: 1.4211026316;
    font-weight: 600;
    letter-spacing: .012em;
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    ${u} + & {
      margin-top: 0.3em;
    }
`,f=l().div`
  box-sizing: border-box;
  white-space: nowrap;
  display: inline-block;
  background: transparent;
  border: 1px solid #bf4800;
  color: #bf4800;
  font-size: 17px;
  line-height: 1.1764805882;
  font-weight: 400;
  letter-spacing: -0.022em;
  font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  border-radius: 18px;
  padding: 7px 18px;

  // reduced
  font-size: 12px;
  line-height: 1.3333733333;
  font-weight: 400;
  letter-spacing: -0.01em;
  font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  border-radius: 12px;
  padding: 3px 11px;

  // tile violator
  background: transparent;
  /* border-color: #6e6e73;
  color: #6e6e73; */

`,v=l().div`

`,b=l().input`
  display: none;
`,y=l().div`
    z-index: 10;
`,m=l().label`
  -webkit-tap-highlight-color: transparent;
  z-index: 3;
  width: 44px;
  height: 44px;
  bottom: 24px;
  right: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`,j=l().span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: background-color 100ms linear;
  z-index: 2;
  background-color: #86868b;
  color: var(--tile-background-color);
  opacity: .92;
  transition: background-color .66s cubic-bezier(0.66,0,0.01,1) .66s,color .66s cubic-bezier(0.66,0,0.01,1) .66s,transform .66s cubic-bezier(0.66,0,0.2,1),opacity 100ms linear;
  background-color: #6e6e73; //dark
  will-change: transform;
  svg {
    fill: currentColor;
    width: 50%;
    height: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  ${b}:checked ~ ${y} & {
    color: var(--tile-overlay-background-color);
    background-color: #fff;
    transform: rotate(45deg);
    transition-delay: 0s;
  }
`,k=l().span`
    position: absolute;
    width: 100%;
    height: 100%;
`,w=l().span`
    position: absolute;
    clip: rect(1px,1px,1px,1px);
    -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
`,z=l().div`
  background-color: var(--tile-overlay-background-color);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: var(--tile-padding-top) var(--tile-padding-right) var(--tile-padding-bottom) var(--tile-padding-left);
  padding: 40px;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity .66s cubic-bezier(0.66,0,0.01,1) .66s,visibility 0s linear 1.32s;
  border-radius: 30px;
  
  ${b}:checked ~ ${y} & {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }
`,S=l().div`
  margin-top: -4px;
  max-width: 655px;
  & ${u} {
    color: #fff;
  }
`,F=l().div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: 100%;
    align-items: center;
`,I=l().div`
    font-size: 19px;
    line-height: 1.4211026316;
    font-weight: 600;
    letter-spacing: .012em;
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;

    color: #fff;

    max-width: var(--tile-overlay-copy-max-width);
    opacity: 0;
    transform: translateY(-20px);
    transition: all .66s cubic-bezier(0.66,0,0.2,1);

    ${b}:checked ~ ${y} & {
      opacity: 1;
      transform: translateY(0);
      transition-delay: .66s; 
    }
`,$=({children:e,headline:i,copy:t,overlay:r,violator:n,overlayCopy:l,...d})=>{let c={};d.color&&(c["data-color-scheme"]="dark");let $=(0,a.useMemo)(()=>(0,s.v4)(),[]);return(0,o.jsxs)(p,{...c,...d,children:[(0,o.jsxs)(h,{children:[(i||t||n)&&(0,o.jsxs)(x,{children:[i&&o.jsx(u,{children:i}),t&&o.jsx(g,{children:t}),n&&o.jsx(f,{children:n})]}),o.jsx(v,{children:e})]}),(r||l)&&(0,o.jsxs)(o.Fragment,{children:[o.jsx(b,{type:"checkbox",id:`tile-overlay-toggle-${$}`}),(0,o.jsxs)(y,{children:[(0,o.jsxs)(m,{for:`tile-overlay-toggle-${$}`,children:[o.jsx(j,{children:o.jsx("svg",{className:"tile-icon-alt",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:o.jsx("path",{d:"M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z"})})}),o.jsx(k,{role:"button","aria-expanded":"false","aria-controls":"content-toggle-shortcuts-app",children:o.jsx(w,{children:"Learn more"})})]}),(0,o.jsxs)(z,{children:[o.jsx(S,{children:o.jsx(u,{overlay:!0,children:i})}),(0,o.jsxs)(F,{children:[l&&o.jsx(I,{children:l}),"function"==typeof r?r():r]})]})]})]})]})};r()}catch(e){r(e)}})},84007:(e,i,t)=>{t.a(e,async(e,r)=>{try{t.r(i),t.d(i,{default:()=>h});var o=t(20997),a=t(16689),n=t(99101),l=t(21614),s=t(94307),d=t(28706),c=t(85590),p=e([l,d,c]);[l,d,c]=p.then?(await p)():p;let h=()=>{let{breakpoint:e}=(0,c.useSite)(),i=(0,a.useMemo)(()=>"xs"===e?24:40,[e]);return o.jsx(d.Section,{contained:!0,gutterBottom:20,variant:"secondary",children:(0,o.jsxs)(d.Grid,{columns:{xs:1,lg:2},gap:{xs:6,lg:12},children:[o.jsx(d.GridItem,{as:l.default,width:{xs:1,lg:2},children:(0,o.jsxs)(d.Stack,{direction:"xs"===e?"vertical":"horizontal",gap:3.5,children:[o.jsx("div",{children:o.jsx(n.Info,{size:28})}),o.jsx(s.default,{variant:"intro",children:"CodeEdit is not meant to replace Xcode but rather supplement it for projects not intended for Apple platforms. We believe every type of developer deserves a great experience and excellent performance."})]})}),o.jsx(d.GridItem,{children:(0,o.jsxs)(d.Stack,{children:[o.jsx(n.Zap,{size:i}),o.jsx(s.default,{variant:"intro",gutterTop:!0,children:"macOS Native"}),o.jsx(s.default,{variant:"intro",style:{opacity:.5},children:"Harness the full power of your Mac, something only possible with our completely native architecture developed in Swift."})]})}),o.jsx(d.GridItem,{children:(0,o.jsxs)(d.Stack,{children:[o.jsx(n.Feather,{size:i}),o.jsx(s.default,{variant:"intro",gutterTop:!0,children:"Lightweight Yet Powerful"}),o.jsx(s.default,{variant:"intro",style:{opacity:.5},children:"Designed to be lean with limitless potential."})]})}),o.jsx(d.GridItem,{children:(0,o.jsxs)(d.Stack,{children:[o.jsx(n.GitHub,{size:i}),o.jsx(s.default,{variant:"intro",gutterTop:!0,children:"Completely Open Source"}),o.jsx(s.default,{variant:"intro",style:{opacity:.5},children:"CodeEdit is developed for you by developers like you. Don't like something? Want a new feature? Just create an issue or submit a PR."})]})}),o.jsx(d.GridItem,{children:(0,o.jsxs)(d.Stack,{children:[o.jsx(n.Sliders,{size:i}),o.jsx(s.default,{variant:"intro",gutterTop:!0,children:"Extensible & customizable"}),o.jsx(s.default,{variant:"intro",style:{opacity:.5},children:"We aren't going to guess. Make CodeEdit your own, tailored to your needs."})]})}),o.jsx(d.GridItem,{children:(0,o.jsxs)(d.Stack,{children:[o.jsx(n.Layout,{size:i}),o.jsx(s.default,{variant:"intro",gutterTop:!0,children:"Familiar & Intuitive User Interface"}),o.jsx(s.default,{variant:"intro",style:{opacity:.5},children:"Our user interface is designed to be familiar for ease-of-use and productivity."})]})}),o.jsx(d.GridItem,{children:(0,o.jsxs)(d.Stack,{children:[o.jsx(n.Tool,{size:i}),o.jsx(s.default,{variant:"intro",gutterTop:!0,children:"Better tools to get the job done"}),o.jsx(s.default,{variant:"intro",style:{opacity:.5},children:"Feel connected to the code you are writing with tools to keep you on track."})]})})]})})};r()}catch(e){r(e)}})}};