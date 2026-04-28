#include <stdio.h>

int main(){
    char op;
    int a,b;

    printf("Enter Value: ");
    scanf("%d", &a);

    printf("Enter Value: ");
    scanf("%d", &b);

    printf("Enter operator (+,-,*,/): ");
    scanf(" %c", &op);

    switch(op){
        case '+':
            printf("Sum of a + b: %d",a+b);
            break;
        case '-':
            printf("Sub of a - b: %d", a-b);
            break;
        case '*':
            printf("Multi of a * b: %d", a*b);
            break;
        case '/':
           if(b!=0 && a!=0){
                printf("Devi of a / b: %d", a/b);
            }else{
                 printf("Not devisable by 0");
            }
            break;
        default:
             printf("Operator is invalid");
    }
}