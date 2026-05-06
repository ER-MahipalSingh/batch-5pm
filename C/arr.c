#include <stdio.h>

int main()
{
    // int arr[6] = {10, 20, 30, 40, 50, 60};

    // // arr[4] = 500;

    // int length = sizeof(arr) / sizeof(arr[0]);
    // printf("Arr Length: %d \n",length);

    // for (int i = 0; i < length; i++){
    //     printf("%d ", arr[i]);
    // }

    int size;

    printf("Enter arr size:");
    scanf(" %d", &size);

    int arr[size];

    for (int i = 0; i < size; i++){
        printf("Enter arr element:");
        scanf("%d", &arr[i]);
    }

    for (int i = 0; i < size; i++){
        printf("%d ", arr[i]);
    }
}