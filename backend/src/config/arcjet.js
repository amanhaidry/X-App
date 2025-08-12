import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import { ENV } from "./env.js";

// initialize Arcjet with security rules
export const aj = arcjet({
  key: ENV.ARCJET_KEY,
  characteristics: [
    // "ip.src",
    "user_agent"], // added user_agent for better bot detection

  rules: [
    // 🛡️ Protect against common attacks (SQLi, XSS, CSRF)
    shield({ mode: "LIVE" }),

    // 🤖 Bot detection - block all bots except search engines and emulator
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // allow Googlebot, Bingbot, etc.
        // "USER_AGENT:okhttp*", // allow all OkHttp versions (Android emulator)
        // "IP:127.0.0.1", // allow localhost (optional for dev)
        // "IP:192.168.29.19", // allow local network IP (optional for dev)
      ],
    }),

    // 🚦 Rate limiting with token bucket algorithm
    tokenBucket({
      mode: "LIVE",
      refillRate: 10, // tokens added per interval
      interval: 10, // interval in seconds
      capacity: 15, // max tokens in bucket
    }),
  ],
});
