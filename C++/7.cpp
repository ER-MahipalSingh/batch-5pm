#include <iostream>
using namespace std;
#include <string>

class Number{
    public:
      virtual int num(int a, int b){
            return a + b;
        }
        // float num(float a, float b){
        //     return a * b;
        // }
        // double num(double a, double b){
        //     return a - b;
        // }
};

class Data : public Number{
    public:
        int num(int a, int b) override {
            return a + b;
        }
};

int main(){
//     Number n;
        Data d;
        cout<<d.num(10,200);
//    cout<<"num + = "<< n.num(10,20)<<endl;
//    cout<<"num * = "<< n.num(10.50f,20.90f)<<endl;
//    cout<<"num - = "<< n.num(10.548,20.698)<<endl;
}