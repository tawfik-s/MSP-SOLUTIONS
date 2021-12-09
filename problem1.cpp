
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

   int n;
   cin>>n;

   vector<int>v;
   v.resize(n);

   sort(v.begin(),v.end());

   for(int i=0;i<n;i++) //o(n)
   {
       cin>>v[i];
   }

   int Min=abs(v[0]-v[1]);
   sort(v.begin(),v.end());   //complexity o(nlog(n))
   for(int i=1;i<n;i++)      //complexity o(n);
   {
       Min=min(abs(v[i-1]-v[i]),Min);
   }
   cout<<Min<<endl;

   //total solution complexity is o(nlog(n));

    return 0;

}
