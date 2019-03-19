const assert = require('assert');
var xxencode = require('../');

describe('xxencode',function(){

    //length
    it("encode('z') should equal -SU++",() => {
        assert.strictEqual(xxencode.encode('z'),'-SU++');
    });
    it("decode('-SU++') should equal z",() => {
        assert.strictEqual(xxencode.decode('-SU++'),'z');
    });
    it("encode('z1') should equal 0SX2+",() => {
        assert.strictEqual(xxencode.encode('z1'),'0SX2+');
    });
    it("decode('0SX2+') should equal z1",() => {
        assert.strictEqual(xxencode.decode('0SX2+'),'z1');
    });
    it("encode('zer0i3') should equal 4SaJmA4Yn",() => {
        assert.strictEqual(xxencode.encode('zer0i3'),'4SaJmA4Yn');
    });
    it("decode('4SaJmA4Yn') should equal zer0i3",() => {
        assert.strictEqual(xxencode.decode('4SaJmA4Yn'),'zer0i3');
    });
    it("encode('zer0i31') should equal 5SaJmA4YnAE++",() => {
        assert.strictEqual(xxencode.encode('zer0i31'),'5SaJmA4YnAE++');
    });
    it("decode('5SaJmA4YnAE++') should equal zer0i31",() => {
        assert.strictEqual(xxencode.decode('5SaJmA4YnAE++'),'zer0i31');
    });
    it("encode('long_content') should equal result",() => {
        assert.strictEqual(xxencode.encode('On Friendship\nAnd a youth said, \"Speak to us of Friendship.\"'),'hHqsUFb7dNKtYQqVdQ+d-PaEUMG-tPrJoO0-nMKZY90+WIr-ZMKgUR4wURLAU\r\nDPqMUFb7dNKtYQqVdQ0sW');
    });
    it("decode('result') should equal long_content",() => {
        assert.strictEqual(xxencode.decode('hHqsUFb7dNKtYQqVdQ+d-PaEUMG-tPrJoO0-nMKZY90+WIr-ZMKgUR4wURLAU\r\nDPqMUFb7dNKtYQqVdQ0sW'),'On Friendship\nAnd a youth said, \"Speak to us of Friendship.\"');
    });
    
    //coding
    it("encode('zer0i3','utf8') should equal 4SaJmA4Yn",() => {
        assert.strictEqual(xxencode.encode('zer0i3','utf8'),'4SaJmA4Yn');
    });
    it("decode('4SaJmA4Yn','utf8') should equal zer0i3",() => {
        assert.strictEqual(xxencode.decode('4SaJmA4Yn','utf8'),'zer0i3');
    });
    it("encode('中文','utf8') should equal 4t9WhtdO5",() => {
        assert.strictEqual(xxencode.encode('中文','utf8'),'4t9WhtdO5');
    });
    it("decode('4t9WhtdO5','utf8') should equal 中文",() => {
        assert.strictEqual(xxencode.decode('4t9WhtdO5','utf8'),'中文');
    });

    //error
    it("decode('4SaJmA4Y','utf8') should equal zer0i\u0000",() => {
        assert.strictEqual(xxencode.decode('4SaJmA4Y','utf8'),'zer0i\u0000');
    });
})
