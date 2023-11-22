


public class chapter0{
public static void main (String[] args){
    System.out.println("Hello World!");
}
}

// Bubble sort 
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}


// Factorial Methods
public class Factorial {
    public static int factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    public static void main(String[] args) {
        int number = 5;
        int fact = factorial(number);
        System.out.println("Factorial of " + number + " is " + fact);
    }
}

// Binary Search Methods
// public class BinarySearch {
//     public static int binarySearch(int[] arr, int target) {
//         int left = 0;
//         int right = arr.length - 1;
//         while (left <= right) {
//             int mid = left + (right - left) / 2;
//             if (arr[mid] == target) {
//                 return mid;
//             } else if (arr[mid] < target) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//         return -1;
//     }

//     public static void main(String[] args) {
//         int[] sortedArray = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
//         int target = 23;
//         int result = binarySearch(sortedArray, target);
//         System.out.println("Element found at index: " + result);
//     }
// }


