# Task 4: Network Intrusion Detection System (NIDS) Using Snort

**CodeAlpha Cyber Security Internship — Task 4**
**Submitted by:** Nida Kanwal

## 📌 Overview

This project demonstrates the setup and use of **Snort 3** as a Network-based Intrusion Detection System (NIDS) to monitor live network traffic, detect suspicious activity using custom rules, and generate real-time alerts.

## 🎯 Objectives

- Install and configure Snort as a Network Intrusion Detection System
- Create custom detection rules
- Monitor network traffic continuously
- Generate alerts for suspicious activities
- Store and analyze intrusion events

## 🛠️ Tools & Environment

| Component | Details |
|---|---|
| Tool | Snort 3 |
| Operating System | Kali Linux |
| Network Interface | eth0 |

## ⚙️ Installation & Configuration

Snort was installed on Kali Linux and the configuration was validated using:

```bash
sudo snort -T -c /etc/snort/snort.lua
```

**Result:**
```
Snort successfully validated the configuration (with 0 warnings).
```

## 🧾 Custom Detection Rules

Custom rules were added to `local.rules`:

**ICMP Ping Detection**
```
alert icmp any any -> any any (msg:"ICMP Ping Detected"; sid:1000001; rev:1;)
```

**HTTP Traffic Detection**
```
alert tcp any any -> any 80 (msg:"HTTP Traffic Detected"; sid:1000002; rev:1;)
```

**HTTPS Traffic Detection**
```
alert tcp any any -> any 443 (msg:"HTTPS Traffic Detected"; sid:1000003; rev:1;)
```

## 📡 Network Monitoring

Live monitoring was started with:

```bash
sudo snort -c /etc/snort/snort.lua -R /etc/snort/rules/local.rules -i eth0 -A alert_fast
```

Snort successfully monitored the interface and captured live traffic.

## 🧪 Alert Detection & Testing

Test traffic was generated using:

```bash
ping -c 4 8.8.8.8
```

**Alert generated:**
```
[1:1000001:1] "ICMP Ping Detected"
{ICMP} 10.0.2.15 -> 8.8.8.8
```

This confirmed the custom detection rules were working correctly.

## 🚨 Response Mechanism

Snort provided real-time alerts whenever traffic matched a configured rule, which security teams can use for further investigation and response.

## ✅ Conclusion

Snort 3 was successfully configured as a Network Intrusion Detection System. Custom rules were created to detect ICMP, HTTP, and HTTPS traffic, and real-time monitoring and alert generation were tested successfully — confirming Snort's ability to identify suspicious network activity.

##Author:

Nida Kanwal

Cyber Security Internship - CodeAlpha
