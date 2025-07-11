import dotenv from "dotenv";
import { connectDB } from "./config/dbConnect";
import app from "./app";
import { Server } from "http"


dotenv.config();
const port = process.env.PORT || 5000;

let server: Server; // server কে পরে .close() করার জন্য global scope এ রাখছি

const startServer = async () => {
    try {
        await connectDB(); // MongoDB বা ডাটাবেস কানেক্ট
        server = app.listen(port, () => {
            console.log("server is running on http://localhost:", port)
        })
    } catch (error) {
        console.error("failed to start server", error);
        process.exit(1);
    }
}

startServer();

process.on("unhandledRejection", (reason, promise) => {
    console.error("unhandled rejection detected", reason)
    console.error("promise details", promise)
    if (server) {
        server.close(() => {
            console.log("server close due to unhandled rejection")
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
})

//for unhandele rejection error testing
// Promise.reject("unhandled rejectetion testing")

process.on("uncaughtException", (error: Error) => {
    console.error("uncaught exception detected", error)
    if (server) {
        server.close(() => {
            console.log("server close due to uncaught exception")
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
})

//for uncaught exception error testing
// throw new Error("I forgot to handle local error")

// SIGINT হ্যান্ডলার (Windows-এ কাজ করে, Ctrl + C অথবা কোড থেকে trigger)
process.on("SIGINT", () => {
    console.log("SIGINT signal received (Ctrl+C or manual). Closing server...");

    if (server) {
        server.close(() => {
            console.log(" Server closed due to SIGINT");
            process.exit(0); // 0 = Graceful shutdown
        });
    } else {
        process.exit(0);
    }
});


//for uncaught exception error testing
// ✅ টেস্টের জন্য ৩ সেকেন্ড পরে নিজেই SIGINT trigger করবে
// setTimeout(() => {
//   console.log("🔔 Triggering SIGINT for test...");
//   process.kill(process.pid, "SIGINT"); // এই লাইন Windows-এ কাজ করে
// }, 3000);

