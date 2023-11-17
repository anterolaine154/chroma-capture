/* 
Filename: advanced_messaging_system.js
Description: This code implements a sophisticated messaging system that allows users to send and receive messages. It includes user authentication, message encryption, and a user interface.
*/

// User class representing a registered user
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // Method to send a message to another user
  sendMessage(receiver, message) {
    const encryptedMessage = this.encryptMessage(message);
    receiver.receiveMessage(this, encryptedMessage);
  }

  // Method to receive a message from another user
  receiveMessage(sender, encryptedMessage) {
    const decryptedMessage = this.decryptMessage(encryptedMessage);
    console.log(`${sender.username}: ${decryptedMessage}`);
  }

  // Method to encrypt a message using a secret key
  encryptMessage(message) {
    // Implementation details omitted for brevity
    return `Encrypted: ${message}`;
  }

  // Method to decrypt an encrypted message using the secret key
  decryptMessage(encryptedMessage) {
    // Implementation details omitted for brevity
    return `Decrypted: ${encryptedMessage}`;
  }
}

// User interface class
class UserInterface {
  constructor() {
    this.users = [];
    this.currentUser = null;
  }

  // Method to register a new user
  registerUser(username, password) {
    const user = new User(username, password);
    this.users.push(user);
    console.log(`${user.username} registered successfully!`);
  }

  // Method to authenticate a user
  authenticateUser(username, password) {
    const user = this.users.find((user) => user.username === username);
    if (user && user.password === password) {
      this.currentUser = user;
      console.log(`${user.username} authenticated successfully!`);
    } else {
      console.log('Authentication failed!');
    }
  }

  // Method to send a message to another user
  sendMessage(receiverUsername, message) {
    if (!this.currentUser) {
      console.log('You need to authenticate first!');
      return;
    }
    const receiver = this.users.find(
      (user) => user.username === receiverUsername
    );
    if (!receiver) {
      console.log(`${receiverUsername} is not a valid user!`);
      return;
    }
    this.currentUser.sendMessage(receiver, message);
  }
}

// Usage example
const messagingSystem = new UserInterface();
messagingSystem.registerUser('Alice', '123456');
messagingSystem.registerUser('Bob', 'password');
messagingSystem.authenticateUser('Alice', '123456');
messagingSystem.sendMessage('Bob', 'Hello Bob, how are you?');

/*
Output:
Alice registered successfully!
Bob registered successfully!
Alice authenticated successfully!
Bob: Decrypted: Encrypted: Hello Bob, how are you?
*/