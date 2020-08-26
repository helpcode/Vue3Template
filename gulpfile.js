const gulp = require('gulp');
const exec = require('child_process').exec;

/**
 * 执行 vue-cli-service route 命令进行路由编译
 */
gulp.task('AutoCompileRouter',  function(cb) {
    return exec('npm run route', (err, stdout, stderr) => {
        if (err) {
            console.log("编译失败: ", err);
            cb(err)
        } else {
            console.log("编译成功");
        }
    });
});

/**
 * 监听 page 所有文件的修改，自动触发 AutoCompileRouter 任务
 */
gulp.task('auto', function () {
    gulp.watch('src/application/page/**/*', gulp.parallel('AutoCompileRouter'));
});

gulp.task('default', gulp.parallel('auto'));