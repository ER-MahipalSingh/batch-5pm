#include <stdio.h>

int main(){
    // for(int i=1; i<=5; i++){
    //     // printf("Outer loop: ");
    //     for(int j=1; j<=i; j++){
    //     printf("Inner loop: ");

    //         printf("%d ",j);
    //     }
    //     printf("\n");
    // }

    // for(int i=5; i>=1; i--){
    //     for(int j=5; j>=i; j--){
    //         printf("%d ", j);
    //     }
    //     printf("\n");
    // }

    for(int i=1; i<=5; i++){
        for(int k=5; k>=i; k--){
            printf(" ");
        }
        for(int j=1; j<=i; j++){
            printf("* ");
        }
        printf("\n");
    }


    // for(int i=1; i<=5; i++){
    //     if(i==1 || i==3 || i==5){
    //         printf("* * * * *");
    //     }else{
    //         printf("*       *");
    //     }
    //     printf("\n");
    // }

    // * * * * *
    // *       *
    // * * * * * 
    // *       *
    // * * * * *
}