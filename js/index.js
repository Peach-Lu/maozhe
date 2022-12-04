// // 监听视频播放的进度
// const video = document.querySelector('.myVideo') ?? ''
// const content = document.querySelector('.content') ?? ''
// content.style.display = 'none'
// video.addEventListener('ended', function () {
//     video.style.display = 'none'
//     content.style.display = 'block'
//     window.location.href = 'index.html'
//     console.log('content', content)
//     console.log('结束')
// })
const backBtn = document.querySelector('.goBack') ?? ''
backBtn.addEventListener('click', function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
})
