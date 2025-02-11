const video = document.getElementById('video')

function startVideo() {
    navigator.getUserMedia(
        {vide: {} },
        stream => video.srcObject = stream,
        err => console.log(err)

    )
}