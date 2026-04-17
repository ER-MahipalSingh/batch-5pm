#include <stdio.h>

int main()
{
    // int marks;

    // printf("Enter your marks: ");
    // scanf("%d", &marks);

    // if (marks >= 1 && marks <= 100){
    //     if (marks >= 80){
    //         printf("Grade A+");
    //     }
    //     else if (marks >= 60){
    //         printf("Grade A");
    //     }
    //     else if (marks >= 50){
    //         printf("Grade B");
    //     }
    //     else if (marks >= 33){
    //         printf("Grade C");
    //     }
    //     else{
    //         printf("Fail");
    //     }
    // }
    // else{
    //     printf("Marks is invalid");
    // }

    int a=1000, b=200, c=300;

    // if(a > b){
    //     if(b > c){
    //         printf("A is bigest");
    //     }else{
    //         printf("B is bigest");
    //     }
    // }else{
    //     if(b>c){
    //         printf("B is Bisgest");
    //     }else{
    //         printf("C is bigest");
    //     }
    // }

    int res = (a > b) ? 
              (a > b ? printf("A is bigest") : b) : 
              (b > c ? b : c);

    printf("%d", res);
}