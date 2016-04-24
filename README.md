# buffer-wrapper

it make easy to use nodejs buffer when writing and reading the buffer.

it have "read offset" for reading and "length" for writing.

when read something, it increase "read offset".
when write something, it increase "length"

it use big endian.

keep it mind and read below.


#usage

var BufferWp= require('buffer-wp')

var bw= new BufferWp(new Buffer(32));
bw.writeUInt16(10);
bw.writeStr("abcd")

var f_buff= bw.getFitBuffer();
var f_bw= new BufferWp(f_buff);

console.log(f_bw.readUInt16())
console.log(f_bw.readStr())
console.log(f_bw.isEndOfBuffer())


//result
// 10
// abcd
// true


#functions:
	setReadOffset
	  read_offset = value

	resetOffset
	  readoffset=0

	getReadOffset
	  return readoffset

	readFloat
	writeFloat
	readDouble
	writeDouble
	readUInt32
	writeUInt32
	readInt32
	writeInt32
	readInt16
	writeInt16
	readInt8
	writeInt8
	readUInt16
	writeUInt16
	readUInt8
	writeUInt8

	writeStr
	writeBuffer
    readBuffer

	readStr
	getLength
	isEndOfBuffer
	    check readOffset == buffer.length;

	getFitBuffer
	 slice the buffer using length.
	getBuffer
	 get original buffer




