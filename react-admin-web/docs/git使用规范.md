# 🪜 Git使用规范指南

![v0.0.1-alpha.1](https://img.shields.io/badge/版本-v0.0.1-blue) ![date](https://img.shields.io/badge/修订日期-2022/09/06-brightgreen)

### <a>提交信息规范</a>

*编写Commit Message需要遵循一定的范式，内容应该清晰明了，指明本次提交的目的，便于日后追踪问题。规范的 Commit Message也能漂亮的生成change log，本文拟定规范基于[Angular Commit Message](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)规范，具体详细说明见下文：*

**1. Commit Message Header**：

``` document
<type>(<scope>): <short summary>
  |       |             |
  |       |             └--> subject是本次Commit目的的简短描述，一般不要超过50个字符，结尾不加句号（.）
  |       |
  |       └--->  scope用于说明本次Commit所影响的范围，比如controller、user或者README，视项目的不同而不同
  |
  └--->   type用于说明Commit的类型：build|feat|fix|ci|docs|refactor|test|style|chore
```

其中type和summary是必要的，scope是可选的。“：”后面必须有一个空格。

**2. Type类型须包含以下几种**：

- `build`: 影响构建系统或外部依赖项的更改
- `feat`: 新增页面或功能
- `fix`: bug修复
- `ci`: 对 CI 配置文件和脚本的更改
- `docs`: 文档改动
- `refactor`: 不影响功能的代码重构(既不修复错误也不添加功能)
- `test`: 添加或修改测试用例
- `style`: 样式修改
- `chore`: 构建过程或辅助工具的变动

### <a>分支使用规范</a>

**1. 命名规范**：`动词开头`，后追述分支用意，简短描述`3`个词汇以内，并以“`-`”作为连接符。

``` document
示例：

fix-user-menu  修复用户菜单bug
feat-user-management  新增用户管理
renovate-login-code-standard  修复登录页面代码规范（也可以是refactor-login）
...
```

> 💡 *Tips*：开头词汇能用`commit message type`描述的尽量以`commit message type`开头。**严禁使用个人名称缩写为代码分支名称**。

**2. 分支种类**：

- `master`：主分支
- `develop`：开发分支
- `release`/`test`：预发布分支
- `feat`/`style...`：功能分支
- `hotfix`：修复分支
  
**3. 分支描述**：

- **`master`**：创建`Repository`时默认会生成一个master分支。通常情况下 master 分支是受保护的（`Protected`）。master分支保存的是稳定的已发布到线上的代码，会使用`tag`来记录发布的版本。master分支是不允许提交代码的，只能将代码合并（`merge`）到master。
- **`develop`**：从`master`创建。需要注意的是，develop分支的代码是通过功能分支合并而来的。通常情况下我们是不会在develop上开发的，因为无法确定在哪次迭代上线。
- **`release`**/**`test`**：预发布分支从`develop`创建（具体分支名称为release或test视项目而定）。当一次迭代的功能开发并自测完成后，就可以创建发布分支。该分支通常用于测试，我们不能在该分支上完成除Bug 修复外的其他工作。测试完成后，我们需要将 release 分支合并到 master 进行发布。发布完成后在 master 打上 tag 记录此次发布的版本。
- **`功能分支`**：从`develop`创建。功能分支是用来开发新功能的，通常情况下新功能开发完毕后会合并的develop。
- **`修复分支`**：分为`线上发布`的紧急bug及`开发环境`下的bug修复两种。
    1. 当修复的为线上紧急bug时，应当从`master`分支上创建新的hotfix分支，在bug修复并测试完成后，可直接合并到master进行发布。发布完成后在master打上`tag`记录此次发布的版本，并将hotfix合并到develop。
    1. 如修复bug为开发环境bug时，从`develop`分支上创建新的hotfix分支，在bug修复并测试完成后直接合并到develop分支。

### <a>Tag使用规范</a>

*简单理解，tag就是对某次commit的一个标识，例如针对某次commit创建一个v1.0.1的标签来标识里程碑的意义。*

**1. 命名规范**：`v<主版本号>.<次版本号>.<修订号>(-<先行版本号>)`，具体版本控制说明可详见[文档](https://semver.org/lang/zh-CN/)

**2. 使用规范**：

- 通常情况下，创建tag是在预发布环境下测试完成后推送到主分支后打上`tag`记录版本。（*注意：在打tag的时候需要设置message，写清楚本次tag版本内容*）
- 打好tag后，需要项目技术经理负责生成changelog。（此处暂时未做CI配置故可能需要手动run cli）
