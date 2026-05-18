#include <stdio.h>

void swap(int *a, int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
    printf("a=%d __ b=%d", *a, *b);
}

int main()
{
    // int a = 10;
    // int *p = &a;
    // printf("%d", *p);

    // int arr[5] = {10, 20, 30, 40, 50};
    // int *ptr = arr;
    // for (int i = 0; i < 5; i++)
    // {
    //     printf("%d ", *(ptr + i));
    // }

    // int a = 100;
    // int *p = &a;
    // int **ptr = &p;
    // printf("%d", **ptr);

    char str[100] = {"Full Stack Devloper"};
    char *p = str;
    printf("%s", p);

    // int a=10; 
    // int b=20;
    // swap(&a, &b);
}