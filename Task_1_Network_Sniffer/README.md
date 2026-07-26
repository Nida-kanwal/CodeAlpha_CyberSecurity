# CodeAlpha Task 1 - Basic Network Sniffer

## Project Overview

This project is developed as part of the CodeAlpha Cyber Security Internship.

The objective of this task is to create a basic Network Packet Sniffer using Python and Scapy. The program captures network packets in real time and displays important details about network communication.

## Objectives

* Capture live network traffic packets.
* Analyze packet structure and information.
* Identify network protocols.
* Display source and destination details.
* Understand how data flows through a network.

## Tools & Technologies Used

* Python 3
* Scapy Library
* Kali Linux
* Terminal

## Features

The Network Sniffer provides the following information:

* Source IP Address
* Destination IP Address
* Protocol Detection:

  * TCP
  * UDP
  * ICMP
* Packet Length
* Payload Information (if available)
* Continuous Packet Capture

## Project Structure

```
Task_1_Network_Sniffer
│
├── sniffer.py
├── README.md
└── Report.pdf
```

## Installation

Install Scapy using:

```
pip install scapy
```

## How to Run

Run the program with administrator privileges:

```
sudo python3 sniffer.py
```

Generate network traffic by opening a website or using:

```
ping google.com
```

Stop the program using:

```
CTRL + C
```

## Working

The program uses Scapy's sniffing function to capture packets continuously.

* IP layer extracts source and destination IP addresses.
* TCP, UDP, and ICMP layers identify the protocol.
* Packet size is calculated from the captured packet.
* Raw layer displays payload data when available.

## Requirements Covered

✔ Packet Capturing
✔ Packet Analysis
✔ Protocol Identification
✔ Source/Destination IP Extraction
✔ Packet Length Detection
✔ Payload Inspection
✔ Continuous Monitoring

## Author

Nida Kanwal

Cyber Security Internship - CodeAlpha
