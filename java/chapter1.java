public class Main {
    public static void main(String[] args) {
        Shape myShape = new Circle();
        ((Circle) myShape).radius = 5; // Casting for specific behavior
        double area = myShape.area(); // Calls Circle's area() method
        System.out.println("Area of Circle: " + area);
    }
}
