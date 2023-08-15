// .commitlintrc.js
// module.exports = {
//     extends: ["@commitlint/config-conventional"]
// };
module.exports = {
    // ignores: [(commit) => commit.includes('init')],
    extends: ['@commitlint/config-conventional'],
    // rules: {
    //     'body-leading-blank': [2, 'always'],
    //     'footer-leading-blank': [1, 'always'],
    //     'header-max-length': [2, 'always', 108],
    //     'subject-empty': [2, 'never'],
    //     'type-empty': [2, 'never'],
    //     'subject-case': [0],
    //     'type-enum': [
    //         2,
    //         'always',
    //         [
    //             'feat',
    //             'fix',
    //             'perf',
    //             'style',
    //             'docs',
    //             'test',
    //             'refactor',
    //             'build',
    //             'ci',
    //             'chore',
    //             'revert',
    //             'wip',
    //             'workflow',
    //             'types',
    //             'release',
    //         ],
    //     ],
    // },
};


{/* commit提交信息格式  <type>: <subject> */ }
// type    → 提交的类型
// subject → 提交的摘要信息


// 常用type值:
// feat: 添加新功能。
// fix: 修复 Bug。
// chore: 一些不影响功能的更改。
// docs: 专指文档的修改。
// perf: 性能方面的优化。
// refactor: 代码重构。
// test: 添加一些测试代码等等