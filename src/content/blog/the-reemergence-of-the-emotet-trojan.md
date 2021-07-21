---
id: trotet
path: /blog/the-reemergence-of-the-emotet-trojan
date: 2021-01-29T19:57:56.541Z
title: The Reemergence of the Emotet Trojan
description: >-
  Emotet - a sophisticated Trojan commonly functioning as a downloader or dropper of other malware.
author: airgapnetworks
image: ../../images/uploads/emotet-trojan-2.jpg
tags:
  - Ransomware
---
Emotet is a sophisticated and widespread active malware threat. Ever since its discovery in 2014, it has become a well known standard credential thief and banking Trojan. The malware has morphed into a modular, polymorphic platform for disseminating other kinds of computer viruses.

Constantly evolving, Emotet, updates itself regularly to develop even more stealthiness, endurance, and add new spying abilities. This infamous Trojan is now one of the most common malicious programs detected in the wild. Invariably a component of a phishing attack, email spam that affects PCs with malware and spreads across other computers on the network.

## What is Emotet?

Emotet is a Trojan that is spread through spam emails (malspam). The infection may appear either via a malicious script, macro-enabled documents, or malicious links. The emails contain familiar branding designed to look like a genuine email. Tricking users into clicking on the malicious files by using tempting language about “Your Invoice,” “Payment Details,” or upcoming shipments from well-known parcel delivery businesses.

Early versions of Emotet arrived as a malicious JavaScript file. Later variants evolved to use macro-enabled documents to launch the virus payload from command and control (C2) servers run by the attackers.

Emotet has several methods to prevent detection and analysis. Notably, Emotet knows if it’s operating inside a virtual machine (VM) and can remain dormant if it detects a sandbox environment. Sandboxes are used by cybersecurity professionals to trick malware into activating and self-identifying.

Similar to operating system updates to your PC that happen relatively transparently to the user and system., Emotet uses C2 servers to receive its updates. Allowing the attackers to install updated versions of the software, including additional banking Trojans, or serve as a dumping ground for stolen information such as usernames and passwords, financial credentials, and email addresses.

## **How is Emotet distributed?**

The primary distribution system for Emotet is through malspam. Once clicked on, the malware accesses all contact lists and automatically forwards emails to your friends, family, coworkers, and customers. Since these emails originate froma known user, the receivers, feeling safe, are more prone to click on bad URLs and download infected files.

Emotet spreads within a network by using a list of common passwords, also known as brute force attacks, relying on users having weak or guessable credentials.

Researchers originally thought Emotet also spread using the EternalBlue/DoublePulsar vulnerabilities accountable for the WannaCry and NotPetya attacks, but we now know that this isn't the case. This conclusion led researchers to believe that TrickBot, a Trojan often spread by Emotet, utilizes the EternalBlue exploit to spread itself beyond a given network. It was TrickBot, not Emotet, taking advantage of the EternalBlue/DoublePulsar vulnerabilities.

> **Airgap Defense: *Airgap’s Zero Trust Isolation technology blocks all unauthorized movement within the corporate environment.***

## **Who does Emotet target?**

Any device can be a victim of Emotet. To date, Emotet has hit individuals, businesses, and government entities across the United States, Asia and Europe, stealing banking logins, financial data, and even Bitcoin wallets.

One remarkable Emotet attack on the City of Allentown, PA, required direct guidance from Microsoft’s incident response team to clean up and allegedly cost the city upwards of $1M to fix[](#_ftn1).

Now that Emotet is being employed to download and deliver other banking Trojans, the target list is even broader. Early versions of Emotet were used to attack banking customers in Germany with later versions targeting organizations in the United Kingdom, Canada, and the United States.

The number of attacks linked to Emotet continues to soar since the Trojan reemerged over the 2020 summer. Using a new phishing and spam campaign that infects devices with a banking Trojan, as per new research from HP-Bromium[](#_ftn2). After a nearly six-month break, an uptick in spam and phishing emails related to the malware reemerged in mid-July. (Please see: [Emotet Botnet Returns After Months-Long Hiatus](https://www.bankinfosecurity.com/emotet-botnet-returns-after-months-long-hiatus-a-14654#:~:text=After%20a%20nearly%20six%2Dmonth,according%20to%20security%20research%20reports.&text=By%20late%20Friday%2C%20security%20firm,associated%20with%20the%20Emotet%20botnet.)).

Apart from the banking Trojan, Alex Holland, senior malware analyst at HP-Bromium, sees that Emotet infections are usually the beginning of a ransomware attack.

"The typical pattern of Emotet campaigns we have seen since 2018 suggests that we are likely to see weekly spam runs until early 2021," Holland says. "The targeting of enterprises is consistent with the objectives of Emotet's operators, many of whom are keen to broker access to compromised systems to ransomware actors."[](#_ftn3)

The U.S. Cybersecurity and Infrastructure Security Agency has declared Emotet one of the most vicious malware variants currently active (see: [CISA Warns of Emotet Attacks Against Government Agencies](https://us-cert.cisa.gov/ncas/alerts/aa20-280a)).

Since July, the malspam campaign for the Emotet botnet has been spotted in the US, Canada, UK, Austria, Germany, Brazil, Italy, and Spain, according to earlier research by security firm Proofpoint. CISA has noted that its intrusion detection system that controls federal civilian networks has detected about 16,000 alerts related to the Emotet since the botnet re-emerged.

The HP-Bromium research shows that Japan and Australia have sustained the largest Emotet infections between July and September[](#_ftn4).

The report also verifies that Emotet is spreading through a social-engineering technique described as thread-jacking. This is where the botnet operator replies to stolen email threads, appearing like a trusted source, to lure victims into opening malicious content.

The HP-Bromium report also observes that Emotet is spreading through spam or phishing emails that usually consists of a malicious attached document. When opened, the file enables malicious macros that establish the malware within the compromised device. Some of these attachments are designed to look like invoices and purchase orders.

"In one campaign, we saw hackers encrypting malicious documents with Microsoft Word's 'Encrypt with Password' feature, to slip past network security and detection tools," Holland says. "The malware, in this case, TrickBot, would only deploy if the user entered a password sent with the phishing email. This meant that most anti-virus tools couldn’t access the file to scan it, but we were able to watch it in the micro-virtual machine. It may sound like a relatively simple tactic, but it's one that has proven to be effective in bypassing detection.”[](#_ftn1)

## Mitigations

CISA and MS-ISAC suggest that network defenders6—in federal, state, local, territorial governments, and the private sector—apply the following best methods to strengthen their organization's systems' security position.
System owners and administrators should review any configuration modifications before implementation to avoid unwanted impacts.

* Block any email attachments usually associated with malware (e.g.,.dll and .exe).
* Block email attachments that cannot be scanned by antivirus software (e.g., .zip files).
* Execute Group Policy Object and firewall rules.
* Complete an antivirus program and a formalized patch management means.
* Execute filters at the email gateway, and block suspicious IP addresses at the firewall.
* Adhere to the policy of least privilege.
* Implement a Domain-Based Message Authentication, Reporting and Conformance validation system.
* Portion and segregate networks and functions.
* Limit random lateral communications.
* Disable file and printer sharing settings. If these services are required, use strong passwords or Active Directory authentication.
* Implement multi-factor authentication.
* Exercise care when opening email attachments, even if the attachment is expected and the sender seems to be known. See Using Caution with Email Attachments.
* Enable a firewall on agency workstations, configured to refuse unsolicited connection demands.
* Disable nonessential services on agency workstations and servers.
* Scan for and eliminate suspicious email attachments; ensure the scanned attachment is its "true file type" (i.e., the expansion matches the file header).
* Monitor users' web browsing practices; restrict access to suspicious or risky sites.
* Exercise caution when utilizing removable media (e.g., USB thumb drives, external drives, CDs).
* Scan all software downloaded from the internet before completing.
* Manage situational awareness of the latest threats and implement suitable access control lists.



> **Airgap Defense:** *Airgap prevents any* *lateral scanning attempts with Airgap’s Zero Trust Isolation. When an intruder breaches the perimeter, they will have extremely restricted access to sensitive data, and safety measures are in place to identify and respond to suspicious data access before it becomes a business impacting threat.*
>
>

### **About Airgap Networks**

Airgap helps implement comprehensive Zero Trust in minutes without the need for agents, APIs, or forklift upgrades. The patent-pending Zero Trust Isolation platform assures threat propagation protection. Airgap’s solution can be deployed in minutes, not months. Visit airgap.io to learn more or to schedule a demo.

### References

https://blog.malwarebytes.com/detections/trojan-emotet/

https://www.kaspersky.com/resource-center/threats/emotet

https://www.hornetsecurity.com/en/knowledge-base/emotet/

https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/evolution-emotet-trojan-distributor

https://heimdalsecurity.com/blog/emotet-malware-history/

https://www.zdnet.com/article/us-warns-big-surge-in-emotet-malware-campaigns-makes-it-one-of-todays-top-threats/

https://www.cisecurity.org/wp-content/uploads/2018/07/Security-Primer-Emotet.pdf

https://www.spambrella.com/what-is-emotet-malware-and-how-is-it-delivered/

1 https://www.reactionarytimes.com/emotet-a-destructive-malware-strain-that-stole-millions-of-dollars/

2 https://threatresearch.ext.hp.com/wp-content/uploads/2020/10/HP_Bromium_Threat_Insights_Report_October_2020.pdf

3 https://www.informationsecuritybuzz.com/study-research/hp-threat-research-emotet-campaigns-targeting-enterprises-surge-by-1200-in-q3-2020/

4 https://www.blackhat.com/html/press.html

5 https://www.informationsecuritybuzz.com/study-research/hp-threat-research-emotet-campaigns-targeting-enterprises-surge-by-1200-in-q3-2020/

6 https://us-cert.cisa.gov/ncas/alerts/aa20-280a
