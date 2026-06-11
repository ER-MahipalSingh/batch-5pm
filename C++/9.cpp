#include <iostream>
using namespace std;

class Parent{
    public: int a = 10;
    private: int b = 20;
    protected: int c = 30;

    public:
    void show(){
        cout<<"public a = "<<a<<endl;
        cout<<"private b = "<<b<<endl;
        cout<<"protected c = "<<c<<endl;
    }
    virtual void accountBalance() = 0;
};

class Child : private Parent{
    public:
    void show(){
        cout<<"public a = "<<a<<endl;
        // cout<<"private b = "<<b<<endl;
        cout<<"protected c = "<<c<<endl;
    }
    void accountBalance() override{
        cout<<"Amout depojectied"<<endl;
    }
};

int main(){
    // Parent p;
    Child c;
    // c.show();
    c.accountBalance();
    // p.show();
        // cout<<"public a = "<<p.a<<endl;
        // cout<<"public a = "<<c.c<<endl;

}