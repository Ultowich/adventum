var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

player = {
  x: 240,
  y: 160,
  w: 20,
  h: 20,
  
  render() {
    ctx.fillStyle = '#00FFFF'
    ctx.fillRect(player.x, player.y, player.w, player.h)
  }
}

function keyPressed(e) {
  e.preventDefault()
  
  var code = e.keyCode
  if (code == 38)
    player.y -= 5
  if (code == 40)
    player.y += 5
  if (code == 37)
    player.x -= 5
  if (code == 39)
    player.x  += 5

  if (player.x < 0)
    player.x = 0
  if (player.x > canvas.width - player.w)
    player.x = canvas.width - player.w
  if (player.y < 0)
    player.y = 0
  if (player.y > canvas.height - player.h)
    player.y = canvas.height - player.h
}

document.body.addEventListener('keydown', keyPressed)

setInterval(function() {
  // clear screen
  ctx.clearRect(0, 0, 480, 320)
  
  // draw player
  player.render()
}, 1000/60)
