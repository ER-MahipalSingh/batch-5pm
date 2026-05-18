#include <stdio.h>

void greet(){
    printf("Hello");
}

void num(char a){
    // printf("%d", a);
    printf("%c", a);
}

int number(){
    return 20;
}

int sum(int a, int b){
    greet();
    return a + b;
}

int fact(int n){
    if(n == 1) return 1;
    return n * fact(n-1);
}



int main(){
    // greet();
    // num(10);
    // num('a');
    // printf("%d",number());
    // int a = sum(10,20);
    // printf("%d", a);

    printf("%d", fact(5));
}