function linedrawScreen(){
	//��������ɫΪ��ɫ�����ڱ�ʶ�����һ������ɫ��������ڱ�ʾ��
	context.fillStyle="#aaaaaa";
	context.fillRect(0,0,500,500);
	//��ֱ��·��
	context.strokeStyle="red";//���ñʴ���ʽ�������ߺ���״�߿����ɫ����ʽ��
	context.lineWidth=10;//�����߿�
	context.lineCap='square';//�������������ߵĶ˵㣬buttΪĬ��ֵ���˵��Ǵ�ֱ���߶α�Ե��ƽֱ��Ե
	//round�˵������߶α�Ե�����߿�Ϊֱ���İ�Բsquare�˵����߶α�Ե�����߿�Ϊ��һ���߿�Ϊ��ľ��Ρ�
	context.beginPath();//���ú�����ʼһ��·��
	context.moveTo(20,80);//�������
	context.lineTo(100,80);//�����յ�
	context.stroke();//����������·��
	context.closePath();//����һ��·��
}