#include <stdio.h>

int main(){

     int base_salary, hra,da,ta;
      int gross_salary;
     printf("\nEnter your base salary:");
     scanf("%d", &base_salary);

     hra=base_salary*0.10;
     da=base_salary *0.05;
     ta=base_salary *0.02;

     gross_salary=base_salary+hra+da+ta;

     printf("gross salary: %d",gross_salary);

}