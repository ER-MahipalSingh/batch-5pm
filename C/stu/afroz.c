#include <stdio.h>
int main()
{
    int angle1, angle2, angle3;

    printf("enter first angle:");
    scanf("%d", &angle1);
    printf("enter first angle:");
    scanf("%d", &angle2);
    angle3 = 180 - (angle1 + angle2);

    printf("third angle:%d", angle3);
}