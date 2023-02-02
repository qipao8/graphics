function Cube(								//�����������������������
	gl,						 					//GL������
	programIn	//��ɫ������id
	)
	{
	var UNIT_SIZE=0.3;
	this.vertexData=[
			//ǰ��
        	0.0,0.0,UNIT_SIZE,
        	UNIT_SIZE,UNIT_SIZE,UNIT_SIZE,
        	-UNIT_SIZE,UNIT_SIZE,UNIT_SIZE,
        	0.0,0.0,UNIT_SIZE,
        	-UNIT_SIZE,UNIT_SIZE,UNIT_SIZE,
        	-UNIT_SIZE,-UNIT_SIZE,UNIT_SIZE,
        	0.0,0.0,UNIT_SIZE,
        	-UNIT_SIZE,-UNIT_SIZE,UNIT_SIZE,
        	UNIT_SIZE,-UNIT_SIZE,UNIT_SIZE,
        	0.0,0.0,UNIT_SIZE,
        	UNIT_SIZE,-UNIT_SIZE,UNIT_SIZE,
        	UNIT_SIZE,UNIT_SIZE,UNIT_SIZE,
        	//����
        	0.0,0.0,-UNIT_SIZE,        	
        	UNIT_SIZE,UNIT_SIZE,-UNIT_SIZE,
        	UNIT_SIZE,-UNIT_SIZE,-UNIT_SIZE,
        	0.0,0.0,-UNIT_SIZE, 
        	UNIT_SIZE,-UNIT_SIZE,-UNIT_SIZE,
        	-UNIT_SIZE,-UNIT_SIZE,-UNIT_SIZE,
        	0.0,0.0,-UNIT_SIZE, 
        	-UNIT_SIZE,-UNIT_SIZE,-UNIT_SIZE,
        	-UNIT_SIZE,UNIT_SIZE,-UNIT_SIZE,
        	0.0,0.0,-UNIT_SIZE, 
        	-UNIT_SIZE,UNIT_SIZE,-UNIT_SIZE,
        	UNIT_SIZE,UNIT_SIZE,-UNIT_SIZE,
        	//����
        	-UNIT_SIZE,0.0,0.0,      	
        	-UNIT_SIZE,UNIT_SIZE,UNIT_SIZE,
        	-UNIT_SIZE,UNIT_SIZE,-UNIT_SIZE,
        	-UNIT_SIZE,0.0,0.0,   
        	-UNIT_SIZE,UNIT_SIZE,-UNIT_SIZE,
        	-UNIT_SIZE,-UNIT_SIZE,-UNIT_SIZE,
        	-UNIT_SIZE,0.0,0.0,   
        	-UNIT_SIZE,-UNIT_SIZE,-UNIT_SIZE,
        	-UNIT_SIZE,-UNIT_SIZE,UNIT_SIZE,
        	-UNIT_SIZE,0.0,0.0,   
        	-UNIT_SIZE,-UNIT_SIZE,UNIT_SIZE,
        	-UNIT_SIZE,UNIT_SIZE,UNIT_SIZE,
        	//����
        	UNIT_SIZE,0.0,0.0,   
        	UNIT_SIZE,UNIT_SIZE,UNIT_SIZE,
        	UNIT_SIZE,-UNIT_SIZE,UNIT_SIZE,
        	UNIT_SIZE,0.0,0.0,   
        	UNIT_SIZE,-UNIT_SIZE,UNIT_SIZE,
        	UNIT_SIZE,-UNIT_SIZE,-UNIT_SIZE,
        	UNIT_SIZE,0.0,0.0,   
        	UNIT_SIZE,-UNIT_SIZE,-UNIT_SIZE,
        	UNIT_SIZE,UNIT_SIZE,-UNIT_SIZE,
        	UNIT_SIZE,0.0,0.0,  
        	UNIT_SIZE,UNIT_SIZE,-UNIT_SIZE,
        	UNIT_SIZE,UNIT_SIZE,UNIT_SIZE,
        	//����
        	0.0,UNIT_SIZE,0.0,      
        	UNIT_SIZE,UNIT_SIZE,UNIT_SIZE,
        	UNIT_SIZE,UNIT_SIZE,-UNIT_SIZE,
        	0.0,UNIT_SIZE,0.0,        	
        	UNIT_SIZE,UNIT_SIZE,-UNIT_SIZE,
        	-UNIT_SIZE,UNIT_SIZE,-UNIT_SIZE,
        	0.0,UNIT_SIZE,0.0,       
        	-UNIT_SIZE,UNIT_SIZE,-UNIT_SIZE,
        	-UNIT_SIZE,UNIT_SIZE,UNIT_SIZE, 	
        	0.0,UNIT_SIZE,0.0,      
        	-UNIT_SIZE,UNIT_SIZE,UNIT_SIZE,
        	UNIT_SIZE,UNIT_SIZE,UNIT_SIZE,  	
        	//����
        	0.0,-UNIT_SIZE,0.0,        	
        	UNIT_SIZE,-UNIT_SIZE,UNIT_SIZE,
        	-UNIT_SIZE,-UNIT_SIZE,UNIT_SIZE,
        	0.0,-UNIT_SIZE,0.0,  
        	-UNIT_SIZE,-UNIT_SIZE,UNIT_SIZE,
        	-UNIT_SIZE,-UNIT_SIZE,-UNIT_SIZE,
        	0.0,-UNIT_SIZE,0.0,   
        	-UNIT_SIZE,-UNIT_SIZE,-UNIT_SIZE,
        	UNIT_SIZE,-UNIT_SIZE,-UNIT_SIZE,
        	0.0,-UNIT_SIZE,0.0,    
        	UNIT_SIZE,-UNIT_SIZE,-UNIT_SIZE,
        	UNIT_SIZE,-UNIT_SIZE,UNIT_SIZE
	];
	this.vcount=this.vertexData.length/3;					//�õ���������
	this.vertexBuffer=gl.createBuffer();				//���������������ݻ���
	gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer); 	//�󶨶����������ݻ���
	//�����������������뻺��
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),gl.STATIC_DRAW);
	
	this.colorsData=[
				//ǰ��        
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		1.0,0.0,0.0,1.0,
        		1.0,0.0,0.0,1.0,
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		1.0,0.0,0.0,1.0,
        		1.0,0.0,0.0,1.0,
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		1.0,0.0,0.0,1.0,
        		1.0,0.0,0.0,1.0,
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		1.0,0.0,0.0,1.0,
        		1.0,0.0,0.0,1.0,
        		//����
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		0.0,0.0,1.0,1.0,
        		0.0,0.0,1.0,1.0, 
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		0.0,0.0,1.0,1.0,
        		0.0,0.0,1.0,1.0, 
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		0.0,0.0,1.0,1.0,
        		0.0,0.0,1.0,1.0, 
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		0.0,0.0,1.0,1.0,
        		0.0,0.0,1.0,1.0, 
        		//����
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		1.0,0.0,1.0,1.0,
        		1.0,0.0,1.0,1.0, 
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		1.0,0.0,1.0,1.0,
        		1.0,0.0,1.0,1.0, 
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		1.0,0.0,1.0,1.0,
        		1.0,0.0,1.0,1.0, 
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		1.0,0.0,1.0,1.0,
        		1.0,0.0,1.0,1.0, 
        		//����
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		1.0,1.0,0.0,1.0,
        		1.0,1.0,0.0,1.0,
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		1.0,1.0,0.0,1.0,
        		1.0,1.0,0.0,1.0,
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		1.0,1.0,0.0,1.0,
        		1.0,1.0,0.0,1.0,
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		1.0,1.0,0.0,1.0,
        		1.0,1.0,0.0,1.0,
        		//����
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		0.0,1.0,0.0,1.0,
        		0.0,1.0,0.0,1.0,
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		0.0,1.0,0.0,1.0,
        		0.0,1.0,0.0,1.0,
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		0.0,1.0,0.0,1.0,
        		0.0,1.0,0.0,1.0,
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		0.0,1.0,0.0,1.0,
        		0.0,1.0,0.0,1.0,        		
        		//����
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		0.0,1.0,1.0,1.0,
        		0.0,1.0,1.0,1.0,
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		0.0,1.0,1.0,1.0,
        		0.0,1.0,1.0,1.0,
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		0.0,1.0,1.0,1.0,
        		0.0,1.0,1.0,1.0,
        		1.0,1.0,1.0,1.0,//�м�Ϊ��ɫ
        		0.0,1.0,1.0,1.0,
        		0.0,1.0,1.0,1.0
	];
	this.colorBuffer=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,this.colorBuffer); 	//����ɫ���ݻ���
	//����ɫ�������뻺��
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.colorsData),gl.STATIC_DRAW);
	this.program=programIn;		//��ʼ����ɫ������id
	this.drawSelf=function(ms)//��������ķ���
	{	
		gl.useProgram(this.program);//ָ��ʹ��ĳ����ɫ������
		//��ȡ�ܱ任��������id
		var uMVPMatrixHandle=gl.getUniformLocation(this.program, "uMVPMatrix");
		//���ܱ任����������Ⱦ����
		gl.uniformMatrix4fv(uMVPMatrixHandle,false,new Float32Array(ms.getFinalMatrix()));
		
		gl.enableVertexAttribArray(gl.getAttribLocation(this.program, "aPosition"));//���ö���������������
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);	//�󶨶����������ݻ���
		//������ָ��������������
		gl.vertexAttribPointer(gl.getAttribLocation(this.program,"aPosition"),3,gl.FLOAT,false,0,0);
		
		gl.enableVertexAttribArray(gl.getAttribLocation(this.program, "aColor"));//���ö���������������
		gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);	//�󶨶����������ݻ���
		//������ָ��������������
		gl.vertexAttribPointer(gl.getAttribLocation(this.program,"aColor"),4,gl.FLOAT,false,0,0);
		
		gl.drawArrays(gl.TRIANGLES,0, this.vcount);		//�ö��㷨��������
	}
}
