# 项目开发规范与注意事项
## 路由
* 在 routes.tsx 中进行路由配置。
* 项目主页设为 / 路由的重定向目标。
* 所有路由均配置在 / 路由下作为其后代路由，即 /src/route/routes.tsx 中。且必须使用绝对路由（以 / 开头），这样是为了便于sidebar解析并生成menu item。
* 侧边栏菜单项的路由，必须配置 handle.label，且 handle.isMenuItem: true。
* 主页由 / 路由的 / 子路由配置。

## 组件开发流程
### 目录结构
* 每个组件必须放在一个同名目录下。除了根组件 App。
* 同名目录下可以有组件 tsx 文件、组件样式文件，以及 components、hooks 等文件夹。

### 组件的定义与导出
* 全部使用箭头函数定义的函数式组件。且不使用 React.FC 在内的任何函数类型声明。
* 组件文件默认导出组件函数。

### 样式
* 样式方案使用 css module，组件样式文件命名为 componentName.module.scss。
* 组件 class 可使用 classnames 方法设置。
* 组件根元素必须设置组件同名的 class，以及 props.className。后者用于接收父组件设置的class。

### Props
* 必须使用 CProps 定义自己的 Props 类型。

## 其他
### React 导入
* 不应直接默认导入 React 再使用其接口，而是直接命名导入要使用的接口。如`import { useState } from 'react`。
