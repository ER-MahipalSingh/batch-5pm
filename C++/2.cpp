#include <iostream>
using namespace std;
#include <string>

class Students{
    public:
    int grid;
    string name;
    static string couseName;
    static int count;

    void display(){
        count++;
        cout<<"GRID: "<<grid<<" Name: "<<name<<" Course Name "<<couseName<<endl;
    }
    static void StudentsCount(){
        cout<<"Total Students Count: "<<count<<endl;
    }
};

string Students::couseName = "Full Stack";
int Students::count = 0;

int main(){
    Students s[3];

    s[0].grid = 1;
    s[0].name = "Mohit";
    // s[0].couseName = "Full Stack";

    s[1].grid = 2;
    s[1].name = "Ronak";
    // s[1].couseName = "Full Stack";

    // s[2].grid = 3;
    // s[2].name = "Prince";
    // s[2].couseName = "Full Stack";

    s[0].display();
    s[1].display();
    // s[2].display();

    Students::StudentsCount();
}