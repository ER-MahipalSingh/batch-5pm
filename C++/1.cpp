#include <iostream>
using namespace std;

class Greet{
    int age;
    public:
    void setData(int age){
        this->age=age;
    }
    void getData(){
        cout<<"Hello my age is: "<<age<<endl;
        
    }
};

int main(){
   Greet g;
    g.setData(20);
   g.getData();

//    cin>>age;
}
