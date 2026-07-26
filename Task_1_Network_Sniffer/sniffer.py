from scapy.all import sniff, IP, TCP, UDP, ICMP, Raw

def packet_callback(packet):
    if packet.haslayer(IP):
        print("=" * 60)
        print(f"Source IP      : {packet[IP].src}")
        print(f"Destination IP : {packet[IP].dst}")

        if packet.haslayer(TCP):
            print("Protocol       : TCP")
        elif packet.haslayer(UDP):
            print("Protocol       : UDP")
        elif packet.haslayer(ICMP):
            print("Protocol       : ICMP")
        else:
            print(f"Protocol       : {packet[IP].proto}")

        print(f"Packet Length  : {len(packet)} bytes")

        if packet.haslayer(Raw):
            try:
                print("Payload        :", packet[Raw].load[:50])
            except:
                print("Payload        : Unable to display")
        else:
            print("Payload        : None")

print("Network Sniffer Started... Press Ctrl+C to Stop.")
sniff(prn=packet_callback, store=False)
