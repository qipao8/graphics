function rectdrawScreen(){
	//��������ɫΪ��ɫ�����ڱ�ʶ�����һ������ɫ��������ڱ�ʾ��
	context.fillStyle="#aaaaaa";
	context.fillRect(0,0,500,500);
	//���ƾ���
	context.fillStyle='#000000';//����Canvas��ͼʱ��������������ʽ��
	context.strokeStyle='#ff00ff';
	context.lineWidth=2;//���û���
	context.fillRect(10,10,40,40);//����������,���ƾ��ε��ĸ�����ǰ����Ϊλ�ã�������Ϊ�����
	context.strokeRect(0,0,60,60);//���ƾ��α߿���Ҫʹ�õ�ǰstrokeStyle��lineWidth��lineJoin�Լ�miterLimit���á�
	context.clearRect(20,20,20,20);//���ָ������ʹ����ȫ͸����
}