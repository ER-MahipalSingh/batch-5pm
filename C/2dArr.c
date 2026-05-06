#include <stdio.h>

int main(){
    int arr[3][3] = {
        {10,20,30},
        {100,200,300}
    };

    arr[2][0] = 1000;
    arr[2][1] = 2000;
    arr[2][2] = 3000;

    // 3*3*4=36 / 4*3=12
    
    int row = sizeof(arr) / sizeof(arr[0]);
    int col = sizeof(arr[0]) / sizeof(arr[0][0]);

    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
            printf("%d ", arr[i][j]);
        }
        printf("\n");
    }
}