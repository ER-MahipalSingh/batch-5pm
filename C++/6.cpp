#include <iostream>
using namespace std;
#include <string>

class Employee{
    int id;
    string name;
    public:
        void setData(int a, string b){
            id=a;
            name=b;
        }
        void getData(){
            cout<<"ID: "<<id<<" Name: "<<name<<endl;
        }
};

int main(){
    // Employee e[3];

    // Employee *p = e;
    
    // p->setData(1, "Rade Mohan");
    // p->getData();
    // p->setData(2, "Rade Rani");
    // p->getData();

    Employee *p = new Employee[3];
     int id;
     string name;

    for(int i=0; i<3; i++){
        cout<<"Enter ID: ";
        cin>>id;
        cout<<"Enter Name: ";
        cin>>name;
        p[i].setData(id, name);
    }

    for(int i=0; i<3; i++){
        p[i].getData();
    }

    delete[] p;
    p=nullptr;

    cout<<"MOmeary address: "<<p<<endl;
}