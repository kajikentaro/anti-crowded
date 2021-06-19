var socketio = io();
$(function () {
    socketio.on('message', function (msg) {
        let data = msg
        console.log(data)
        if (data.count >= 3) {
            change_color(data.id + "", "#ff0000")
            console.log(data.id)
        } else {
            console.log(data.count)
            console.log("test")
        }
    });
});
function change_color(id, color_code) {
    var poly = document.getElementById(id);
    console.log(poly)
    poly.setAttribute("fill", color_code);
    //poly.setAttribute("stroke", "black");
}

$(function () {
    console.log("a")
    var rexts = document.getElementsByTagName("rect")
    async function post(data) {
        const url = "https://anti-crowded.com/api";
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
    let res = await post({ "type": "get-rooms" })
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < rexts.length; j++) {
            if (res[i].id == rexts[j].id) {
                console.log(res[i])
                console.log(rexts[j])
            }
        }
    }
})
