#include <stdio.h>

int main()
{
    int marks;

    printf("Enter your marks: ");
    scanf("%d", &marks);

    // if(marks >= 33){
    //     printf("Pass");
    // }else{
    //     printf("Fail");
    // }

    if (marks >= 80 && marks <= 100){
        printf("Grade A+");
    }
    else if (marks >= 60){
        printf("Grade A");
    }
    else if (marks >= 50){
        printf("Grade B");
    }
    else if (marks >= 33){
        printf("Grade C");
    }
    else{
        printf("Fail");
    }
}