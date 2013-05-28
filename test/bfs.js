/**
 * Breadth First Search
 * @link https://github.com/adlawson/bfs-js
 * @author Andrew Lawson (http://adlawson.com)
 */
(function(bfs) {

    var graph = {
        "1":  {},
        "2":  {},
        "3":  {},
        "4":  {},
        "5":  {},
        "6":  {},
        "7":  {},
        "8":  {},
        "9":  {},
        "10": {},
        "11": {},
        "12": {}
    };

    [[1,2], [1,3], [1,4], [2,5], [2,6], [4,7], [4,8], [5,9], [5,10], [7,11], [7,12]].forEach(function(edge) {
        graph[edge[0]][edge[1]] = graph[edge[1]];
        graph[edge[1]][edge[0]] = graph[edge[0]];
    });

    var visited = [];
    bfs(1, graph, function(n) {
        visited.push(n);
    });

    /**
     * Output
     */
    console.log(visited.join(', '));

}).call(this, require('../src/bfs.js'));

