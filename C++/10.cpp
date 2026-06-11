#include <iostream>
using namespace std;

int main(){
    // int a = 10;
    // int b = 0;

    // try{
    //     if(b == 0 || a == 0){
    //         throw 1.10;
    //     }
    //     cout<<a<< " / "<<b<<" = "<<a/b<<endl;
    // }catch(float x){
    //     cout<<"Can not devisible by 0";
    // }catch(...){
    //     cout<<"Server error";
    // }


    int balance = 5000;
    int withdrow = 1000;

    try{
        if(balance < withdrow){
            throw "Fund not avalibale";
        }
        balance -= withdrow;
        cout<<"Transation done"<<endl;
        cout<<"Balance: "<<balance<<endl;
        }catch(const char *msg){
            cout<<msg<<endl;
        }
    
}