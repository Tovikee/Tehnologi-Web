#include<stdio.h>
#include<stdlib.h>
#include<sys/ipc.h>
#include<sys/shm.h>



int main(){
	File *in;
	in=fopen("fisier.txt","r");
	int shm_id
	char b;
	shm_id=shmget(500,128,IPC_CREAT |0600);
	if(shm_id<0){
		perror("Eroare la crearea zonei de memorie");
		exit(-1);
	}
	b=shmat(shm_id,NULL,0);//atasarea segmentului de memorie la spatiul de adrese  
	if(b==NULL){
		perror("Eroare la atasarea segmentului de memorie");
		exit(-1);
	}
	if(in==NULL){
		printf("Fisierul nu exista");
		}
	printf("\n");
	

	while(!EOF(in){
		fread(b,in);
		b[]='D';
		}
	while(b[]='T'){
		sleep(1);
}
	fclose(in);
	return 0;
}
