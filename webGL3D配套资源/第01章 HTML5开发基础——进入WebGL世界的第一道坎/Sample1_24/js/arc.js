function arcdrawScreen(){
	//��������ɫΪ��ɫ�����ڱ�ʶ�����һ������ɫ��������ڱ�ʾ��
	context.fillStyle="#aaaaaa";
	context.fillRect(0,0,500,500);
	//����Բ��
	context.beginPath();
	context.strokeStyle="red";
	context.lineWidth=5;
	context.arc(100,100,20,(Math.PI/180)*0,(Math.PI/180)*360,false);//������Բ
	//context.arc(100,100,20,(Math.PI/180)*0,(Math.PI/180)*90,false);//����1/4Բ
	//context.arc(100,100,20,(Math.PI/180)*0,(Math.PI/180)*90,true);//anticlockwiseֵ��Ϊtrue����3/4Բ
	context.stroke();
	context.closePath();
}