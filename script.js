// script.js
document.getElementById('downloadBtn').addEventListener('click', function() {
    // 文件路径
    const fileUrl = '/CriticalPointMod/CPmod.zip'; // 替换为实际文件路径

    // 创建一个隐藏的<a>元素
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CPmod.zip'; // 下载文件的名称

    // 将<a>元素添加到DOM中
    document.body.appendChild(link);

    // 模拟点击<a>元素
    link.click();

    // 移除<a>元素
    document.body.removeChild(link);
});