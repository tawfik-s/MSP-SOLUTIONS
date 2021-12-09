
/*
author: tawfik shalash
─▄█▄─█▀█▀█─▄█▄
▀▀████▄█▄████▀▀
─────▀█▀█▀

*/
#include <bits/stdc++.h>

typedef long long ll;
using namespace std;


int main() {
    ios_base::sync_with_stdio(0), cin.tie(0), cout.tie(0);
// #ifndef ONLINE_JUDGE
//     freopen("in.txt", "r", stdin);
//     freopen("out.txt", "w", stdout);
// #endif


    string s1,s2;
    cin>>s1>>s2;
    vector<int>v(200,0); //o(1) memory complexity
    for(int i=0;i<s1.length();i++)
    {
        v[(int)s1[i]]=1;
    }
    for(int i=0;i<s2.length();i++)//o(n)
    {
        if(v[(int)s2[i]]==1)
        {
            cout<<"YES"<<endl;
            return 0;
        }

    }
    cout<<"NO"<<endl;

    //complexity is o(n)

    return 0;

}
