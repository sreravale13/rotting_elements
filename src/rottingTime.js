export var elementsRotting = function(inp) {
  
    // let grid = new Array(inp).fill(0).map(() => new Array(inp).fill(0));
    // if(inp < 3) {
    //     return [];
    // }
    const rows = grid.length, cols = grid[0].length, UpDown = [1, -1, 0, 0], LeftRight = [0, 0, 1, -1]; 
    let queueRotten = [], minute = 0, fresh = 0;
    
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] === 2) queueRotten.push([r, c])
            else if(grid[r][c] === 1) fresh++;
        }
    }
    
    while(fresh && queueRotten.length) {
        const next = [];
        minute++;
        
        for(let [r, c] of queueRotten) {
            
            for(let i = 0; i < 4; i++) {
                const x = r + UpDown[i], y = c + LeftRight[i];
                
                if(x < rows && x >= 0 && 
                   y < cols && y >= 0 && 
                   grid[x][y] === 1) {
                    fresh--;
                    grid[x][y] = 2;
                    next.push([x, y]);
                }
            }
        }
        queueRotten = next;
    }
    return grid;
};

export default elementsRotting;