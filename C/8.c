#include <stdio.h>

int main(){
    // for(int i=1; i<=5; i++){
    //     printf("Outer Loop: ");
    //     for(int j=1; j<=5; j++){
    //     // printf("Inner Loop: ");
    //         printf("%d ", j);
    //     }
    //     printf("\n");
    // }

    // int i=1;
    // while(i<=5){
    //     int j=1;
    //     while(j<=5){
    //         printf("%d ", j);
    //         j++;
    //     }
    //     printf("\n");
    //     i++;
    // }


    // int i=1;
    // do{
    //     int j=1;
    //     do{
    //         printf("%d ", j);
    //         j++;
    //     }while(j<=5);
    //     printf("\n");
    //     i++;
    // }while(i<=5);


    for(int i=1; i<=10; i++){
        // printf("%d ",i);
        if(i==5 || i==6){
            // break;
            continue;
        }
         printf("%d ",i);
    }
}