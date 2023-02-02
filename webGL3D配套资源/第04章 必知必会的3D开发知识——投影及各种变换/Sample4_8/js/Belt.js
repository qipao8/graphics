function Belt(								//�����������������������
	gl,						 					//GL������
	programIn	//��ɫ������id
	){
		this.vcount=22;//���ö�������
		var angdegBegin=0;//�Ƕ���ʼֵ
		var angdegEnd=90;//�Ƕ���ֵֹ
		var angdegSpan=(angdegEnd-angdegBegin)/3;//�ǶȲ���ֵ
		var angdegBegin1=180;//�ڶ�����ʼֵ
		var angdegEnd1=270;//�ڶ�����ֵֹ
		var angdegSpan1=(angdegEnd1-angdegBegin1)/5;//�ڶ��νǶȲ���ֵ
		
		var vertexarray=new Array();//������������
		var colorarray=new Array();//������ɫ��������
		var count=0;
		for(var i=angdegBegin;i<=angdegEnd;i+=angdegSpan){
			var angrad=i*Math.PI/180;//��ǰ����
			//��ǰ��
			vertexarray[count++]=-0.6*0.5*Math.sin(angrad);
			vertexarray[count++]=0.6*0.5*Math.cos(angrad);
			vertexarray[count++]=0;
			//��ǰ��
			vertexarray[count++]=-0.5*Math.sin(angrad);
			vertexarray[count++]=0.5*Math.cos(angrad);
			vertexarray[count++]=0;
		}
		//�ظ���һ���������һ������
		vertexarray[count++]=vertexarray[count-4];
		vertexarray[count++]=vertexarray[count-4];
		vertexarray[count++]=0;
		for(var j=angdegBegin1;j<=angdegEnd1;j+=angdegSpan1){
			var angrad1=j*Math.PI/180;//��ǰ����
			//�ظ��ڶ������ĵ�һ������
			if(j==angdegBegin1){
				vertexarray[count++]=-0.6*0.5*Math.sin(angrad1);
				vertexarray[count++]=0.6*0.5*Math.cos(angrad1);
				vertexarray[count++]=0;
			}
			//��Բ�ϵĵ�
			vertexarray[count++]=-0.6*0.5*Math.sin(angrad1);
			vertexarray[count++]=0.6*0.5*Math.cos(angrad1);
			vertexarray[count++]=0;
			//��ǰ��
			vertexarray[count++]=-0.5*Math.sin(angrad1);
			vertexarray[count++]=0.5*Math.cos(angrad1);
			vertexarray[count++]=0;
		}
	this.vertexData=vertexarray;
	this.vertexBuffer=gl.createBuffer();				//���������������ݻ���
	gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer); 	//�󶨶����������ݻ���
	//�����������������뻺��
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(this.vertexData),gl.STATIC_DRAW);
	
	count = 0;
       for(var i=0; i<88; i+=8){
        	colorarray[count++] = 1; 
        	colorarray[count++] = 1; 
        	colorarray[count++] = 1; 
        	colorarray[count++] = 1.0;
        	
        	colorarray[count++] = 0; 
        	colorarray[count++] = 1; 
        	colorarray[count++] = 1; 
        	colorarray[count++] = 1.0;
        }
	this.colorsData=colorarray;
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
		gl.vertexAttribPointer(gl.getAttribLocation(this.program,"aPosition"),3,gl.FLOAT,false,0, 0);
		
		gl.enableVertexAttribArray(gl.getAttribLocation(this.program, "aColor"));//���ö���������������
		gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);	//�󶨶����������ݻ���
		//������ָ��������������
		gl.vertexAttribPointer(gl.getAttribLocation(this.program,"aColor"),4,gl.FLOAT,false,0, 0);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, this.vcount);		//������״��
	}
}
