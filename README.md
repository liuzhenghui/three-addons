# three-addons

threejs 所有插件打包为一个 js ，方便使用 CDN 方式导入

## 使用方式

导入

```html

<script src="js/ThreeAddons_0.163.0.min.js"></script>
```

使用插件

```javascript
const orbit = new ThreeAddons.OrbitControls(camera, renderer.domElement)
const control = new ThreeAddons.TransformControls(camera, renderer.domElement)
```

## 打包

```shell
npm i
npm run build
```

> 文件生成路径: `dist/ThreeAddons_0.163.0.min.js`