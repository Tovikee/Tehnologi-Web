#include<stdio.h>
#include<stdlib.h>
#include<sys/ipc.h>
#include<sys/shm.h>

int main(){

int sm_i;
char s[];
	sm_i=shmget(500,128,IPC_CREAT |0600);
	if(sm_i<0){
		perror("Eroare la  crearea zonei de memorie);
	}
	while(s[]!='D'){
		sleep(1);
		s[]='T';
}
	






return 0;
}
