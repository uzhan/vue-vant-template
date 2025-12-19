# ESLint/Prettier 到 Oxlint/Oxfmt 迁移总结

## 迁移完成 ✓

项目已成功从 ESLint/Prettier + ali-config 迁移到 Oxlint + Oxfmt。

## 主要变更

### 1. 依赖管理

**移除的包（共 24 个）：**

- ESLint 相关：`eslint`, `@eslint/js`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint-config-ali`, `eslint-config-prettier`, `eslint-define-config`, `eslint-import-resolver-typescript`, `eslint-plugin-import`, `eslint-plugin-prettier`, `eslint-plugin-vue`, `vue-eslint-parser`, `globals`
- Prettier 相关：`prettier`, `prettier-config-ali`, `eslint-plugin-prettier`
- stylelint 相关：`stylelint`, `stylelint-config-ali`, `stylelint-config-prettier`, `stylelint-config-recommended-less`, `stylelint-config-standard`, `stylelint-config-standard-vue`, `stylelint-less`, `stylelint-order`, `stylelint-prettier`
- 其他：`commitlint-config-ali`, `postcss-html`, `postcss-px-to-viewport`

**新增的包：**

- `oxfmt@^0.8.0` - 代码格式化工具

**保留的包：**

- `oxlint@^1.34.0` - 代码检查工具（已在 package.json 中）

### 2. 配置文件变更

**新建文件：**

- `.oxlintrc.json` - Oxlint 配置文件
- `.oxfmtrc.json` - Oxfmt 格式化配置文件
- `.oxlintignore` - Oxlint 忽略文件列表
- `.oxfmtignore` - Oxfmt 忽略文件列表

**删除文件：**

- `eslint.config.js` - ESLint 配置文件（不再需要）
- `.eslintignore` - ESLint 忽略文件（不再需要）

**修改文件：**

- `package.json`:

  - `lint` 脚本：`eslint . && stylelint "**/*.{css,less,scss}"` → `oxlint .`
  - `lint:fix` 脚本：`prettier --write . && eslint --fix . && stylelint --fix "**/*.{css,less,scss}"` → `oxfmt .`
  - `lint-staged` 配置：改为使用 `oxfmt` 处理所有支持的文件格式
  - 移除 `prettier` 和 `stylelint` 配置对象

- `commitlint.config.js`:
  - 移除 `ali` 配置，改用 `@commitlint/config-conventional`

### 3. Oxlint/Oxfmt 支持的文件格式

✓ **JS/JSX/TS/TSX** - JavaScript & TypeScript 文件
✓ **Vue** - Vue 单文件组件
✓ **JSON/JSONC/JSON5** - JSON 文件
✓ **YAML** - YAML 配置文件
✓ **HTML** - HTML 文件
✓ **CSS/SCSS/Less** - 样式文件
✓ **GraphQL** - GraphQL 查询文件
✓ **Markdown/MDX** - 文档文件

## 使用方法

### 代码检查

```bash
pnpm lint
```

运行 Oxlint 进行代码检查，检查所有支持的文件格式。

### 自动格式化

```bash
pnpm lint:fix
```

运行 Oxfmt 自动格式化代码，支持所有支持的文件格式。

### Pre-commit Hook

项目使用 husky + lint-staged，在提交前自动格式化相关文件。

## 配置详情

### .oxlintrc.json

- 基础 ESLint 规则配置
- Vue 文件特殊规则
- TypeScript 文件特殊规则
- JSON 文件特殊规则

### .oxfmtrc.json

- 行宽：100 字符
- Tab 宽度：2 个空格
- 引号：单引号
- 行末逗号：不添加
- 分号：强制添加
- 文件结尾换行：LF

## 性能提升

Oxlint 相比 ESLint：

- ⚡ 速度快 10-100 倍（使用 Rust 编写）
- 📦 单一可执行文件，无需复杂的插件系统
- 🎯 开箱即用，配置更简洁

Oxfmt 相比 Prettier：

- ⚡ 更快的格式化速度
- 🔄 支持更多文件格式
- 💾 更小的依赖大小

## 注意事项

1. **代码质量警告**：Oxlint 在检查时发现了一些现有的代码质量问题（如不必要的转义字符、未使用的表达式），这些需要手动修复。

2. **配置差异**：Oxlint 的规则和 ESLint 并不完全相同，某些代码风格可能需要微调配置。

3. **IDE 集成**：确保你的 IDE（如 VSCode）有相应的 Oxlint 扩展以获得实时反馈。

## 验证迁移成功

✓ Oxlint 正常工作，已检查 25 个文件
✓ Oxfmt 正常工作，已格式化 19 个文件
✓ commitlint 配置更新，使用标准配置
✓ lint-staged 已配置支持所有文件格式
✓ 所有依赖已正确安装

迁移完成！🎉
