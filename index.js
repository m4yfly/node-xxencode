'use strict';

/**
 * 
 * @param {String} inString 
 */
function encode(inString,encoding) {
    encoding = encoding || 'utf8'
	var stop = false;
	var inIndex = 0;
	var outIndex = 0;

	var inBytes = Buffer.from(inString,encoding);
	var buffLen = inBytes.length;
	var outBytes = Buffer.alloc(buffLen + buffLen / 3 + 4);

	do {
		for (var i = 0; i < n; i += 3) {
			if (buffLen - inIndex < 3) {
				var padding = new Array(3);
				var z = 0;

				while (inIndex + z < buffLen) {
					padding[z] = inBytes[inIndex + z];
					++z;
				}

				encodeBytes(padding, 0, outBytes, outIndex);
			} else {
				encodeBytes(inBytes, inIndex, outBytes, outIndex);
			}
			inIndex += 3;
			outIndex += 4;
		}

        if(inIndex >= buffLen){
            stop = true;
        }
	} while (!stop);

	return outBytes.toString().substring(0, outIndex);
}

/**
 * 
 * @param {String} inString 
 */
function decode(inString) {
	var stop = false;
	var inIndex = 0;
	var outIndex = 0;

	var inBytes = Buffer.from(inString);
	var buffLen = inBytes.length;
	var outBytes = Buffer.alloc(buffLen);

	do {
		if (inIndex < buffLen) {
			decodeChars(inBytes, inIndex, outBytes, outIndex);
			outIndex += 3;
			inIndex += 4;
		} else {
			stop = true;
		}
	} while (!stop);

	return outBytes.slice(0, outIndex).toString();
}

// private helper functions
function encodeBytes(inBytes, inIndex, outBytes, outIndex) {
	var c1 = inBytes[inIndex] >>> 2;
	var c2 = inBytes[inIndex] << 4 & 0x30 | inBytes[inIndex + 1] >>> 4 & 0xF;
	var c3 = inBytes[inIndex + 1] << 2 & 0x3C | inBytes[inIndex + 2] >>> 6 & 0x3;
	var c4 = inBytes[inIndex + 2] & 0x3F;

	outBytes[outIndex] = (c1 & 0x3F);
	outBytes[outIndex + 1] = (c2 & 0x3F);
	outBytes[outIndex + 2] = (c3 & 0x3F);
	outBytes[outIndex + 3] = (c4 & 0x3F);
}

function decodeChars(inBytes, inIndex, outBytes, outIndex) {
	var c1 = inBytes[inIndex];
	var c2 = inBytes[inIndex + 1];
	var c3 = inBytes[inIndex + 2];
	var c4 = inBytes[inIndex + 3];

	var b1 = (c1 & 0x3F) << 2 | (c2 & 0x3F) >> 4;
	var b2 = (c2 & 0x3F) << 4 | (c3& 0x3F) >> 2;
	var b3 = (c3 & 0x3F) << 6 | c4 & 0x3F;

	outBytes[outIndex] = b1 & 0xFF;
	outBytes[outIndex + 1] = b2 & 0xFF;
	outBytes[outIndex + 2] = b3 & 0xFF;
}

// exports
module.exports = {
	encode: encode,
	decode: decode
};