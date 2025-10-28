/**
 * Simple Banking System
 * Basic bank account operations - deposit, withdraw, check balance
 * 
 * @author Your Name
 * @version 1.0
 */

import java.util.Scanner;

class BankAccount {
    private String accountHolder;
    private String accountNumber;
    private double balance;
    
    /**
     * Constructor to create new bank account
     * @param accountHolder Name of account holder
     * @param accountNumber Unique account number
     * @param initialBalance Initial deposit amount
     */
    public BankAccount(String accountHolder, String accountNumber, double initialBalance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    /**
     * Deposits money into account
     * @param amount Amount to deposit
     */
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("\n✓ Deposit Successful!");
            System.out.printf("Amount deposited: $%.2f%n", amount);
            System.out.printf("New balance: $%.2f%n", balance);
        } else {
            System.out.println("\n✗ Invalid amount! Please enter a positive value.");
        }
    }
    
    /**
     * Withdraws money from account
     * @param amount Amount to withdraw
     */
    public void withdraw(double amount) {
        if (amount > 0) {
            if (amount <= balance) {
                balance -= amount;
                System.out.println("\n✓ Withdrawal Successful!");
                System.out.printf("Amount withdrawn: $%.2f%n", amount);
                System.out.printf("Remaining balance: $%.2f%n", balance);
            } else {
                System.out.println("\n✗ Insufficient balance!");
                System.out.printf("Available balance: $%.2f%n", balance);
            }
        } else {
            System.out.println("\n✗ Invalid amount! Please enter a positive value.");
        }
    }
    
    /**
     * Displays current balance
     */
    public void checkBalance() {
        System.out.println("\n" + "=".repeat(40));
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Account Number: " + accountNumber);
        System.out.printf("Current Balance: $%.2f%n", balance);
        System.out.println("=".repeat(40));
    }
    
    /**
     * Displays account details
     */
    public void displayAccountInfo() {
        System.out.println("\n╔════════════════════════════════════╗");
        System.out.println("║        ACCOUNT INFORMATION        ║");
        System.out.println("╚════════════════════════════════════╝");
        System.out.println("Account Holder : " + accountHolder);
        System.out.println("Account Number : " + accountNumber);
        System.out.printf("Balance        : $%.2f%n", balance);
    }
}

public class SimpleBankingSystem {
    
    public static void displayMenu() {
        System.out.println("\n╔════════════════════════════════════╗");
        System.out.println("║         BANKING MENU              ║");
        System.out.println("╠════════════════════════════════════╣");
        System.out.println("║ 1. Check Balance                  ║");
        System.out.println("║ 2. Deposit Money                  ║");
        System.out.println("║ 3. Withdraw Money                 ║");
        System.out.println("║ 4. Account Information            ║");
        System.out.println("║ 5. Exit                           ║");
        System.out.println("╚════════════════════════════════════╝");
        System.out.print("Enter your choice (1-5): ");
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Welcome screen
        System.out.println("\n╔════════════════════════════════════════╗");
        System.out.println("║   WELCOME TO SIMPLE BANKING SYSTEM    ║");
        System.out.println("╚════════════════════════════════════════╝\n");
        
        // Create account
        System.out.print("Enter account holder name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter account number: ");
        String accountNum = scanner.nextLine();
        
        double initialDeposit;
        do {
            System.out.print("Enter initial deposit amount: $");
            initialDeposit = scanner.nextDouble();
            if (initialDeposit < 0) {
                System.out.println("Invalid amount! Please enter a positive value.");
            }
        } while (initialDeposit < 0);
        
        BankAccount account = new BankAccount(name, accountNum, initialDeposit);
        
        System.out.println("\n✓ Account created successfully!");
        
        // Main menu loop
        boolean running = true;
        while (running) {
            displayMenu();
            int choice = scanner.nextInt();
            
            switch (choice) {
                case 1:
                    account.checkBalance();
                    break;
                    
                case 2:
                    System.out.print("\nEnter amount to deposit: $");
                    double depositAmount = scanner.nextDouble();
                    account.deposit(depositAmount);
                    break;
                    
                case 3:
                    System.out.print("\nEnter amount to withdraw: $");
                    double withdrawAmount = scanner.nextDouble();
                    account.withdraw(withdrawAmount);
                    break;
                    
                case 4:
                    account.displayAccountInfo();
                    break;
                    
                case 5:
                    System.out.println("\n✓ Thank you for using Simple Banking System!");
                    System.out.println("Goodbye! 👋");
                    running = false;
                    break;
                    
                default:
                    System.out.println("\n✗ Invalid choice! Please enter 1-5.");
            }
        }
        
        scanner.close();
    }
}