/**
 * Breadth First Search
 * @link https://github.com/adlawson/bfs-js
 * @author Andrew Lawson (http://adlawson.com)
 */
(function(globals) {

    /**
     * @param {Array} frontier
     * @param {Object} graph
     * @param {Function} fn
     */
    var visit = function(frontier, graph, fn) {
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

    /**
     * @param {Number} node
     * @param {Object} graph
     * @param {Function} fn
     */
    var bfs = function(node, graph, fn) {
        visit([node], graph, fn);
    }

    /**
     * Export
     */
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return bfs;
        });
    } else if (typeof module === 'object' && module !== null) {
        module.exports = bfs;
    } else {
        globals.bfs = bfs;
    }

}).call(this);
