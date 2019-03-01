const assert = require('assert');
var xxencode = require('../');

describe('uuencode',function(){
    it("encode('zer0i3') should equal 4SaJmA4Yn",() => {
        assert.strictEqual(xxencode.encode('zer0i3'),'4SaJmA4Yn');
    });
    it("decode('4SaJmA4Yn') should equal zer0i3",() => {
        assert.strictEqual(xxencode.decode('4SaJmA4Yn'),'zer0i3');
    });
})
