#include <iostream>
using namespace std;
#include <string>

class Students{
    int id;
    string name;

    public:

    Students(){
        cout<<"Cons. call"<<endl;
    }
    // Students(int id, string name){
    //     this->id=id;
    //     this->name=name;
    //     cout<<"ID: "<<this->id<<" Name: "<<this->name<<endl;
    // }

    // Students(Students &s){
    //     id=s.id;
    //     name=s.name;
    //     cout<<"Copy cons. call"<<endl;
    // }

    // ~Students(){
    //     cout<<"Obj ended"<<endl;
    // }
};

int main(){
    // Students s(1, "React");
    // Students s1(2, "Node");
    // Students s2 = s;
    Students s2;
}