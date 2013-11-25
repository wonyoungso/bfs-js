module.exports = (function () {

    'use strict';

    function visit(frontier, graph, fn) {
        var level = 0;
        var levels = {};

        while (0 < frontier.length) {
            var next = [];
            for (var i = 0; i < frontier.length; i++) {
                var node = frontier[i];
                fn(node);
                levels[node] = level;
                for (adj in graph[node]) {
                    if (typeof levels[adj] === 'undefined') {
                        next.push(adj);
                    }
                }
            }
            frontier = next;
            level += 1;
        }
    }

    function bfs(node, graph, fn) {
        visit([node], graph, fn);
    }

    return bfs;

})();
