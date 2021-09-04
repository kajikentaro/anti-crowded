window.addEventListener('load', () => {
    init_websocket();
    init_crowded();
})
const change_color = (id, color_code) => {
    var poly = document.getElementById(id);
    poly.setAttribute("fill", color_code);
}
const post = async data =>{
    //const url = "https://anti-crowded.com/api"
    const domain = document.domain
    const protocol = location.protocol
    const url = `${protocol}//${domain}/api`
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    const res = await fetch(url, options)
    return await res.json()
}
const init_crowded = async ()=>{
    var rects = document.getElementsByTagName("rect")
    let res = await post({ "type": "get-rooms" })
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < rects.length; j++) {
            if (res[i].id == rects[j].id) {
                rects[j].onclick = function(){return () => {window.location = "./display/" + res[i].id}}()
                if(res[i].count > res[i].yellow_max){
                    //赤にする
                    change_color(res[i].id, "#ffcdcd")
                }
                else if(res[i].count > res[i].green_max){
                    //黄色にする
                    change_color(res[i].id, "#fcffcd")
                }
                else{
                    //青にする
                    change_color(res[i].id, "#cdd8ff")
                }
            }
        }
    }
}
const init_websocket = ()=>{
    var socketio = io();
    socketio.emit('add:client', {});
    socketio.on('message', function (msg) {
        let data = msg
        if(data.count > data.yellow_max){
            //赤にする
            change_color(data.id, "#ffcdcd")
        }
        else if(data.count > data.green_max){
            //黄色にする
            change_color(data.id, "#fcffcd")
        }
        else{
            //青にする
            change_color(data.id, "#cdd8ff")
        }
    });
}