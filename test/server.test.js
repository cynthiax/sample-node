var Y = require('yuitest'),
    Assert = Y.Assert,
    server = require('../lib/server');

Y.TestRunner.add(new Y.TestCase({

    name : 'server test case',

    "should return hello world object": function () {
        var result,
            res = { json: function (obj) { result = obj; } };
        server(null, res, null);
        Assert.isObject(result);
        Assert.areEqual('worldy', result.hello);
    }
}));
