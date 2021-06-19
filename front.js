var socketio = io();
    $(function(){
        socketio.on('message',function(msg){
            let data=msg
            console.log(data)
            if(data.count>=3){
                change_color(data.id + "","#ff0000")
                console.log(data.id)
              }else{
                console.log(data.count)
                  console.log("test")
              }
          });
        });
    function change_color(id,color_code){
        var poly = document.getElementById(id);
        console.log(poly)
        poly.setAttribute("fill", color_code);
    //poly.setAttribute("stroke", "black");
  }