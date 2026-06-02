#include <iostream>
using namespace std;

class A{
    private:
    int a = 10;
    public:
        void setDataA(){
            cout<<"Class A "<<a<<endl;
        }
};

class B{
    public:
        void setDataB(){
            cout<<"Class B"<<endl;
        }
};

class C : public A{
    public:
        void setDataC(){
            cout<<"Class C"<<endl;
        }
};

class D : public B{
    public:
        void setDataD(){
            cout<<"Class D"<<endl;
        }
};

class E : public D{
    public:
        void setDataE(){
            cout<<"Class E"<<endl;
        }
};

int main(){
    // B b;
    // b.setDataB();
    // D d;
    // d.setDataA();
    // d.setDataD();

    C c;
    // cout<<c.a<<endl;
    c.setDataA();
}