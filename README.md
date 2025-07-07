# 🧠 Real-Time Chat Server – WebSocket Backend

This is the **backend WebSocket server** for the Real-Time Chat Application built with Node.js and the `ws` library. It handles real-time message broadcasting and delivers chat history to new users.

---

## 🔖 Internship Details

🔹 **COMPANY**: Codetech IT Solutions  
🔹 **NAME**: Anwar Ali  
🔹 **INTERN ID**: CT06DG11  
🔹 **DOMAIN**: Front-End Development  
🔹 **DURATION**: 6 Weeks  
🔹 **MENTOR**: Neela Santosh  

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime environment
- **WebSocket (`ws`)** – Lightweight WebSocket server
- **Hosted on Render** – Publicly accessible WebSocket URL

---

## 🚀 Features

- 🔄 Broadcasts messages to all connected clients in real-time
- 🕓 Sends full chat history to newly connected users
- 🌐 Deployed as a Web Service on Render with HTTP health check support

---

## 🔗 Live WebSocket Endpoint
   wss://chat-server-i90b.onrender.com   


---

## 📁 File Structure

chat-server/  
├── index.js # Main WebSocket server file  
├── package.json # Dependencies and start script  

---

## ⚙️ How It Works

- When a client connects, the server sends them all past messages (`type: "history"`).
- When a client sends a message, it is:
  - Added to the `messages` array (in-memory)
  - Broadcast to all connected clients with `type: "new"`

---

## 🧪 Local Setup

### 🔹 Prerequisites:
- Node.js installed

### 🔹 Install & Run:

```bash
npm install
node index.js



