"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
try {
    const paybeta = new src_1.Paybeta("test-api-key");
    console.log("Paybeta SDK initialized successfully.");
    if (paybeta.airtime && paybeta.data && paybeta.cable) {
        console.log("Services attached correctly.");
    }
    else {
        console.error("Services missing!");
        process.exit(1);
    }
    // Optional: Check if we can form a request object (Type check at runtime essentially)
    const req = {
        service: "mtn",
        phoneNumber: "08012345678",
        amount: 100,
        reference: "ref123",
    };
    console.log("Request object structure valid (compile-time check passed if this runs).");
}
catch (error) {
    console.error("Initialization failed:", error);
    process.exit(1);
}
