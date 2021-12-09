
import java.util.Arrays;
import java.util.Scanner;

public class problem1 {
    public static void main(String [] args)
    {
        Scanner input=new Scanner(System.in);

        int x=input.nextInt();
        int arr[]=new int[x];
        for(int i=0;i<x;i++)
        {
            arr[i]=input.nextInt();
        }
        Arrays.sort(arr);
        int Min=Math.abs(arr[0]-arr[1]);
        for(int i=1;i<x;i++)
        {
            Min=Math.min(Min,Math.abs(arr[i-1]-arr[i]));
        }
        System.out.println(Min);


    }
}
