import java.util.Scanner;

public class problem2 {
    public static void main(String [] args)
    {
        Scanner input=new Scanner(System.in);
        String s1,s2;
        s1=input.next();
        s2=input.next();
        int arr[]=new int[300];
        for(int i=0;i<s1.length();i++)
        {
            arr[(int)s1.charAt(i)]=1;
        }
        for(int i=0;i<s2.length();i++) //o(n)
        {
            if(arr[(int)s2.charAt(i)]==1)
            {
                System.out.println("YES");
                return;
            }
        }
        System.out.println("NO");
    }
}
