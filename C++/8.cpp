#include <iostream>
using namespace std;

class Number{
    int a,b;
    public:
        void setNum(int x, int y){
            a=x;
            b=y;
        }
        void getNum(){
            cout<<"A = "<<a<<" B = "<<b<<endl;
        }

        Number operator+(Number n){
            Number temp;
            temp.a = this->a + n.a;
            temp.b = this->b + n.b;
            return temp;
        }
};

int main(){
    Number n1,n2,n3;

    n1.setNum(10,20);
    n2.setNum(100,200);
    n3 = n1 + n2;

    n1.getNum();
    n2.getNum();
    n3.getNum();
}