function bezierdrawScreen(){
	context.beginPath();
	context.strokeStyle="red";
	context.lineWidth=5;
	//��������ɫΪ��ɫ�����ڱ�ʶ�����һ������ɫ��������ڱ�ʾ��
	context.fillStyle="#aaaaaa";
	context.fillRect(0,0,500,500);
	//���Ƽ�ƽ������������
	context.moveTo(0,0);
	context.quadraticCurveTo(100,25,0,50);
	//���������Ƶ�ı���������
	context.moveTo(150,0);
	context.bezierCurveTo(0,125,300,175,150,300);
	context.stroke();
	context.closePath();
}