
// 思路：先push，后检测数组的length 和内容
arrForEach(files, file => {
    var name = file.name
    var size = file.size

    // chrome 低版本 name === undefined
    if (!name || !size) {
        return
    }

    if (/\.(jpg|jpeg|png|bmp|gif|webp)$/i.test(name) === false) {
        // 后缀名不合法，不是图片
        errInfo.push(`【${name}】不是图片`)
        return
    }
    if (maxSize < size) {
        // 上传图片过大
        errInfo.push(`【${name}】大于 ${maxSizeM}M`)
        return
    }

    // 验证通过的加入结果列表
    resultFiles.push(file)
})


// 抛出验证信息
if (errInfo.length) {
    this._alert('图片验证未通过: \n' + errInfo.join('\n'))
    return
}
if (resultFiles.length > maxLength) {
    this._alert('一次最多上传' + maxLength + '张图片')
    return
}