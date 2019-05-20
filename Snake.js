var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var grid = 16;
var count = 0;
var scoreCount = 0;
//ADDED BY ME-----------------------------------------------------------------------------------------------------------------------------------
//Нужен вывод счета на тело
function score() {
	
	
	
	
}
var snake = {
  x: 160,
  y: 160,
  
  // snake velocity. moves one grid length every frame in either the x or y direction
  dx: grid,
  dy: 0,
  
  // keep track of all grids the snake body occupies
  cells: [],
  
  // length of the snake. grows when eating an apple
  maxCells: 4
};
var apple = {
  x: 320,
  y: 320
};
var apple2 = {
  x: 320,
  y: 320
};
var apple3 = {
  x: 320,
  y: 320
};
var apple4 = {
  x: 320,
  y: 320
};
var apple5 = {
  x: 320,
  y: 320
};
var apple6 = {
  x: 320,
  y: 320
};
var apple7 = {
  x: 320,
  y: 320
};
var apple8 = {
  x: 320,
  y: 320
};
var apple9 = {
  x: 320,
  y: 320
};
var apple10 = {
  x: 320,
  y: 320
};
// get random whole numbers in a specific range
// @see https://stackoverflow.com/a/1527820/2124254
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// game loop
function loop() {
  requestAnimationFrame(loop);
  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < 4) {
    return;
  }
  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);
  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;
  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }
  
  // wrap snake position vertically on edge of screen
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }
  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});
  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }
  function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}


randColor(); // #2d796
randColor(); // #7dadba
randColor(); // #527acf
  // draw apple
  context.fillStyle = randColor();
  context.fillRect(apple.x, apple.y, grid-1, grid-1);
  context.fillStyle = randColor();
  context.fillRect(apple2.x, apple2.y, grid-1, grid-1);
  context.fillStyle = randColor();
  context.fillRect(apple3.x, apple3.y, grid-1, grid-1);
  context.fillStyle = randColor();
  context.fillRect(apple4.x, apple4.y, grid-1, grid-1);
  context.fillStyle = randColor();
  context.fillRect(apple5.x, apple5.y, grid-1, grid-1);
  context.fillStyle = randColor();
  context.fillRect(apple6.x, apple6.y, grid-1, grid-1);
  context.fillStyle = randColor();
  context.fillRect(apple7.x, apple7.y, grid-1, grid-1);
  context.fillStyle = randColor();
  context.fillRect(apple8.x, apple8.y, grid-1, grid-1);
  context.fillStyle = randColor();
  context.fillRect(apple9.x, apple9.y, grid-1, grid-1);
  context.fillStyle = randColor();
  context.fillRect(apple10.x, apple10.y, grid-1, grid-1);
  
  // draw snake one cell at a time
  context.fillStyle = 'black';
  snake.cells.forEach(function(cell, index) {
    
    // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, grid-1, grid-1);  
    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
						//ADDED BY ME-----------------------------------------------------------------------------------------------------------------------------------
						scoreCount++;
						score();                     
      // canvas is 400x400 which is 25x25 grids 
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }
    if (cell.x === apple2.x && cell.y === apple2.y) {
      snake.maxCells++;
						//ADDED BY ME-----------------------------------------------------------------------------------------------------------------------------------
						scoreCount++;
						score();                     
      // canvas is 400x400 which is 25x25 grids 
      apple2.x = getRandomInt(0, 25) * grid;
      apple2.y = getRandomInt(0, 25) * grid;
    }
      if (cell.x === apple3.x && cell.y === apple3.y) {
      snake.maxCells++;
						//ADDED BY ME-----------------------------------------------------------------------------------------------------------------------------------
						scoreCount++;
						score();                     
      // canvas is 400x400 which is 25x25 grids 
      apple3.x = getRandomInt(0, 25) * grid;
      apple3.y = getRandomInt(0, 25) * grid;
    }
      if (cell.x === apple4.x && cell.y === apple4.y) {
      snake.maxCells++;
						//ADDED BY ME-----------------------------------------------------------------------------------------------------------------------------------
						scoreCount++;
						score();                     
      // canvas is 400x400 which is 25x25 grids 
      apple4.x = getRandomInt(0, 25) * grid;
      apple4.y = getRandomInt(0, 25) * grid;
    }
      if (cell.x === apple5.x && cell.y === apple5.y) {
      snake.maxCells++;
						//ADDED BY ME-----------------------------------------------------------------------------------------------------------------------------------
						scoreCount++;
						score();                     
      // canvas is 400x400 which is 25x25 grids 
      apple5.x = getRandomInt(0, 25) * grid;
      apple5.y = getRandomInt(0, 25) * grid;
    }
      if (cell.x === apple6.x && cell.y === apple6.y) {
      snake.maxCells++;
						//ADDED BY ME-----------------------------------------------------------------------------------------------------------------------------------
						scoreCount++;
						score();                     
      // canvas is 400x400 which is 25x25 grids 
      apple6.x = getRandomInt(0, 25) * grid;
      apple6.y = getRandomInt(0, 25) * grid;
    }
        if (cell.x === apple7.x && cell.y === apple7.y) {
      snake.maxCells++;
						//ADDED BY ME-----------------------------------------------------------------------------------------------------------------------------------
						scoreCount++;
						score();                     
      // canvas is 400x400 which is 25x25 grids 
      apple7.x = getRandomInt(0, 25) * grid;
      apple7.y = getRandomInt(0, 25) * grid;
    }
        if (cell.x === apple8.x && cell.y === apple8.y) {
      snake.maxCells++;
						//ADDED BY ME-----------------------------------------------------------------------------------------------------------------------------------
						scoreCount++;
						score();                     
      // canvas is 400x400 which is 25x25 grids 
      apple8.x = getRandomInt(0, 25) * grid;
      apple8.y = getRandomInt(0, 25) * grid;
    }
        if (cell.x === apple9.x && cell.y === apple9.y) {
      snake.maxCells++;
						//ADDED BY ME-----------------------------------------------------------------------------------------------------------------------------------
						scoreCount++;
						score();                     
      // canvas is 400x400 which is 25x25 grids 
      apple9.x = getRandomInt(0, 25) * grid;
      apple9.y = getRandomInt(0, 25) * grid;
    }
        if (cell.x === apple10.x && cell.y === apple10.y) {
      snake.maxCells++;
						//ADDED BY ME-----------------------------------------------------------------------------------------------------------------------------------
						scoreCount++;
						score();                     
      // canvas is 400x400 which is 25x25 grids 
      apple10.x = getRandomInt(0, 25) * grid;
      apple10.y = getRandomInt(0, 25) * grid;
    }
    if (cell.x == 10 || cell.y == 10) {
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
      apple2.x = getRandomInt(0, 25) * grid;
      apple2.y = getRandomInt(0, 25) * grid;
      apple3.x = getRandomInt(0, 25) * grid;
      apple3.y = getRandomInt(0, 25) * grid;
      apple4.x = getRandomInt(0, 25) * grid;
      apple4.y = getRandomInt(0, 25) * grid;
      apple5.x = getRandomInt(0, 25) * grid;
      apple5.y = getRandomInt(0, 25) * grid;
      apple6.x = getRandomInt(0, 25) * grid;
      apple6.y = getRandomInt(0, 25) * grid;
      apple7.x = getRandomInt(0, 25) * grid;
      apple7.y = getRandomInt(0, 25) * grid;
      apple8.x = getRandomInt(0, 25) * grid;
      apple8.y = getRandomInt(0, 25) * grid;
      apple9.x = getRandomInt(0, 25) * grid;
      apple9.y = getRandomInt(0, 25) * grid;
      apple10.x = getRandomInt(0, 25) * grid;
      apple10.y = getRandomInt(0, 25) * grid;
    
      
    }
    // check collision with all cells after this one (modified bubble sort)
    for (var i = index + 1; i < snake.cells.length; i++) {
      
      // snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
							
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
    }
  });
}
// listen to keyboard events to move the snake
document.addEventListener('keydown', function(e) {
  // prevent snake from backtracking on itself by checking that it's 
  // not already moving on the same axis (pressing left while moving
  // left won't do anything, and pressing right while moving left
  // shouldn't let you collide with your own body)
  
  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});
// start the game
requestAnimationFrame(loop);