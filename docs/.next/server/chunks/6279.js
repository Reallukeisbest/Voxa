"use strict";exports.id=6279,exports.ids=[6279,1614],exports.modules={21614:(e,i,t)=>{t.a(e,async(e,r)=>{try{t.r(i),t.d(i,{TileViolator:()=>f,default:()=>A});var a=t(20997),o=t(16689),l=t(57518),n=t.n(l),d=t(46555),s=t(94307),c=e([d]);d=(c.then?(await c)():c)[0];let h=n().div`
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
`,p=n().div`
  padding: 40px;
`,x=n().div`
  margin-top: -4px;
  max-width: 655px;
`,g=n()(s.default).attrs({as:"h4"})`
    font-size: 21px;
    line-height: 1.1904761905;
    font-weight: 600;
    letter-spacing: .011em;
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    ${({overlay:e})=>e?"":"color: var(--section-accent-color);"}
`,u=n()(s.default)`
    font-size: 19px;
    line-height: 1.4211026316;
    font-weight: 600;
    letter-spacing: .012em;
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    ${g} + & {
      margin-top: 0.3em;
    }
`,f=n().div`
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

`,b=n().div`

`,v=n().input`
  display: none;
`,m=n().div`
    z-index: 10;
`,y=n().label`
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
`,j=n().span`
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
  ${v}:checked ~ ${m} & {
    color: var(--tile-overlay-background-color);
    background-color: #fff;
    transform: rotate(45deg);
    transition-delay: 0s;
  }
`,k=n().span`
    position: absolute;
    width: 100%;
    height: 100%;
`,w=n().span`
    position: absolute;
    clip: rect(1px,1px,1px,1px);
    -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
`,F=n().div`
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
  
  ${v}:checked ~ ${m} & {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }
`,S=n().div`
  margin-top: -4px;
  max-width: 655px;
  & ${g} {
    color: #fff;
  }
`,z=n().div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    height: 100%;
    align-items: center;
`,$=n().div`
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

    ${v}:checked ~ ${m} & {
      opacity: 1;
      transform: translateY(0);
      transition-delay: .66s; 
    }
`,A=({children:e,headline:i,copy:t,overlay:r,violator:l,overlayCopy:n,...s})=>{let c={};s.color&&(c["data-color-scheme"]="dark");let A=(0,o.useMemo)(()=>(0,d.v4)(),[]);return(0,a.jsxs)(h,{...c,...s,children:[(0,a.jsxs)(p,{children:[(i||t||l)&&(0,a.jsxs)(x,{children:[i&&a.jsx(g,{children:i}),t&&a.jsx(u,{children:t}),l&&a.jsx(f,{children:l})]}),a.jsx(b,{children:e})]}),(r||n)&&(0,a.jsxs)(a.Fragment,{children:[a.jsx(v,{type:"checkbox",id:`tile-overlay-toggle-${A}`}),(0,a.jsxs)(m,{children:[(0,a.jsxs)(y,{for:`tile-overlay-toggle-${A}`,children:[a.jsx(j,{children:a.jsx("svg",{className:"tile-icon-alt",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:a.jsx("path",{d:"M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z"})})}),a.jsx(k,{role:"button","aria-expanded":"false","aria-controls":"content-toggle-shortcuts-app",children:a.jsx(w,{children:"Learn more"})})]}),(0,a.jsxs)(F,{children:[a.jsx(S,{children:a.jsx(g,{overlay:!0,children:i})}),(0,a.jsxs)(z,{children:[n&&a.jsx($,{children:n}),"function"==typeof r?r():r]})]})]})]})]})};r()}catch(e){r(e)}})},56279:(e,i,t)=>{t.a(e,async(e,r)=>{try{t.r(i),t.d(i,{default:()=>c});var a=t(20997),o=t(99101),l=t(21614),n=t(94307),d=t(28706),s=e([l,d]);[l,d]=s.then?(await s)():s;let c=()=>(0,a.jsxs)(d.Section,{contained:!0,gutterBottom:!0,children:[(0,a.jsxs)(d.Stack,{style:{textAlign:"center",marginBottom:48},children:[a.jsx(n.default,{variant:"headline-reduced",children:"Why CodeEdit?"}),a.jsx(n.default,{variant:"intro",gutterTop:!0,children:"This is a description of the why CodeEdit section."})]}),(0,a.jsxs)(d.Grid,{columns:{xs:1,md:2,lg:3},gap:!0,children:[a.jsx(d.GridItem,{as:l.default,color:"blue",gradient:!0,width:{xs:1,md:2,lg:3},"data-color-scheme":"dark",children:(0,a.jsxs)(d.Stack,{gap:2,children:[a.jsx(o.Sliders,{}),a.jsx(n.default,{variant:"eyebrow",children:"Feature Title 1"}),a.jsx(n.default,{variant:"body",children:"This is a description for this feature."})]})}),a.jsx(d.GridItem,{as:l.default,children:(0,a.jsxs)(d.Stack,{gap:2,children:[a.jsx(o.Sliders,{}),a.jsx(n.default,{variant:"eyebrow",children:"Feature Title 2"}),a.jsx(n.default,{variant:"body",children:"This is a description for this feature."})]})}),a.jsx(d.GridItem,{as:l.default,height:{md:2,lg:1},children:(0,a.jsxs)(d.Stack,{gap:2,children:[a.jsx(o.Sliders,{}),a.jsx(n.default,{variant:"eyebrow",children:"Feature Title 3"}),a.jsx(n.default,{variant:"body",children:"This is a description for this feature."})]})}),a.jsx(d.GridItem,{as:l.default,children:(0,a.jsxs)(d.Stack,{gap:2,children:[a.jsx(o.Sliders,{}),a.jsx(n.default,{variant:"eyebrow",children:"Feature Title 4"}),a.jsx(n.default,{variant:"body",children:"This is a description for this feature."})]})})]})]});r()}catch(e){r(e)}})}};