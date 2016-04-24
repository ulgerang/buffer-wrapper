

module.exports =  function(buffer){	

	var length=0;
	
	var readOffset=0;
	
	this.setReadOffset = function(offset){
		readOffset= offset;
	}
	
	this.resetOffset = function(){
		length= 0;
	}
	this.getReadOffset = function(){
		return readOffset;
		
		
	}
	
	this.readFloat= function(){
		var r=	buffer.readFloatBE(readOffset);
		readOffset+=4;
		return r;
	}
	
	this.writeFloat = function(value){
		buffer.writeFloatBE(value, length);
		length+=4;
	}
	
	this.readDouble= function(){
		var r=	buffer.readDoubleBE(readOffset);
		readOffset+=8;
		return r;
	}
	
	this.writeDouble = function(value){
		buffer.writeDoubleBE(value, length);
		length+=8;
	}
	
	
	
	
	this.readUInt32= function(){
		var r=	buffer.readUInt32BE(readOffset);
		readOffset+=4;
		return r;
	}

	this.writeUInt32= function(value){
			
		buffer.writeUInt32BE(value, length);
		length+=4;
	}
	
	this.readInt32= function(){
		var r=	buffer.readInt32BE(readOffset);
		readOffset+=4;
		return r;
	}
	
	
	this.writeInt32= function(value){

		buffer.writeInt32BE(value, length);
		length+=4;
	}
	
	this.readInt16= function(){
		var r=	buffer.readInt16BE(readOffset);
		readOffset+=2;
		return r;
	}
	
	
	this.writeInt16= function(value){
		buffer.writeInt16BE(value, length);
		length+=2;
	}
	
	this.readInt8= function(){
		var r=	buffer.readInt8(readOffset);
		readOffset++;
		return r;
	}
	
	this.writeInt8 = function(value){
		buffer.writeInt8(value, length);
		length++;
	}
	
	this.readUInt16= function(){
		var r=	buffer.readUInt16BE(readOffset);
		readOffset+=2;
		return r;
	}
	
	this.writeUInt16= function(value){
	
		buffer.writeUInt16BE(value, length);
		length+=2;
	}
	
	this.readUInt8= function(){
		var r=	buffer.readUInt8(readOffset);
		readOffset++;
		return r;
	}
	
	this.writeUInt8 = function(value){
		buffer.writeUInt8(value, length);
		length++;
	}
	
		
	
	this.writeStr = function(str){
		
		if(str==null){
			str="";
		}

		var len=buffer.write(str, length+2);

		buffer.writeUInt16BE(len, length);
		length+=len+ 2;
	}


	this.writeBuffer = function(buff){
	
	
		var len= buff.length;
		buff.copy(buffer,length+2);
		buffer.writeUInt16BE(len, length);
		length+=len+ 2;
	}

    this.readBuffer= function(){
        var len = buffer.readUInt16BE(readOffset);
        var result=  buffer.slice(readOffset+2,len + readOffset+2);

        readOffset+=len+2;
        return result;
    }
	
	this.readStr= function(){
		var len = buffer.readUInt16BE(readOffset);
		readOffset+=len+2;

		return buffer.toString( 'utf8',readOffset-len,readOffset);


	}

	
	this.getLength = function(){
		return length;
	}



	this.isEndOfBuffer = function(){
		
		return readOffset == buffer.length;
	}
	
	this.getFitBuffer = function(){
		return buffer.slice(0,length);
	}
	
	
	this.getBuffer= function(){
		return buffer;
	}
	
	
}

