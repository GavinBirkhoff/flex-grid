# flex-grid

Deprecated

Build flexible page on mobile or pc platform

## Usage

### Install

`npm i -S @gavinbirkhoff/flex-grid`

`import {flexViewport} from '@gavinbirkhoff/flex-grid'`

flexViewport is a function<{pcWidth,unit}>
flexViewport() // Always transition unit default 10
or flexViewport({pcWidth:640, unit:5}) // Always transition, Stop at 640, 640 is PC.
unit is cutting design cell
then rem equal unit，Css unit written as rem

flexViewport这个函数调用，启动移动和PC设备页面自适应，不穿参数认为一直自适应，1rem等于design的1/10。
如果传参数pcWidth表示PC的独立像素宽度，到这个宽度后不在继续自适应，保持临界点状态。unit表示分割的design grid。
为了动态决定是否适配，所以函数设置了手动调用。

### Import

Manually remove first 'export' in ./node_modules/@gavinbirkhoff/flex-grid/src/index.js
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
<script src="./node_modules/@gavinbirkhoff/flex-grid/src/index.js"></script>
flexViewport() // Always transition unit default 10
or flexViewport({pcWidth:640, unit:5}) // Always transition, Stop at 640, 640 is PC.
```
