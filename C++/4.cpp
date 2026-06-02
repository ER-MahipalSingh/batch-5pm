#include <iostream>
using namespace std;

class A{
    public:
        void setDataA(){
            cout<<"Class A"<<endl;
        }
};

class B : public A{
    public:
        void setDataB(){
            cout<<"Class B"<<endl;
        }
};

class C :  public B{
    public:
        void setDataC(){
            cout<<"Class C"<<endl;
        }
};

int main(){
        // B b;
        // b.setDataA();
        // b.setDataB();

        C c;
            c.setDataA();
            c.setDataC();
            c.setDataB();
}