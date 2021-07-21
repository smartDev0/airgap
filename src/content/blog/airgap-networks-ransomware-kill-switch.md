---
id: rks
path: /blog/ransomware-kill-switch
date: 2021-04-18T19:50:12.229Z
title: Ransomware Kill Switch™
description: >-
  Airgap's Ransomware Kill Switch can proactively reduce the blast radius of a ransomware attack in seconds when the incident is reported.
author: airgapnetworks
image: ../../images/uploads/eso.jpg
tags:
  - ransomware kill switch
---
### Introducing Ransomware Kill Switch
Ever wondered why all gas stations have an “Emergency Shut-off” switch? It’s because gas station owners realize that this switch will be a lifesaver someday. No one hopes or plans to use it, but when you need it, it may turn out to be your best friend.


Organizations realize that once your perimeter is breached, ransomware spreads like wildfire. SecOps teams have started asking for an emergency kill switch to prevent the spread of ransomware. In the absence of a credible solution, these teams mostly rely on a bunch of scripts to manipulate the entire infrastructure. The process takes hours, and is cumbersome, error-prone, and often buggy.


Airgap Networks realized that a Ransomware Kill Switch™ may come in handy when your infrastructure is under a ransomware attack. The Ransomware Kill Switch was built with an understanding of how ransomware is designed to exploit the open enterprise network architecture – expanding its destructive reach in a matter of minutes. 



If you were to look into any of the enterprise architectures of the largest Fortune 1000 companies, you might see that endpoints are put into unrestricted enterprise VLANs, free to communicate with each other.  It’s this very concept of a free and open network architecture that ransomware exploits to rapidly replicate itself across an organization. When ransomware reaches critical servers that contain sensitive corporate data, its impact to the organization increases many times over. This often leads to an increase in the size of ransom payments.


Preventing this lateral movement is where the Ransomware Kill Switch shines. Let’s dig a little deeper into how a typical ransomware attack works and see how Airgap can be inserted to stop ransomware in its tracks. 

### Anatomy of Ransomware Infection
Often, the easiest way for a cybercriminal to insert ransomware into an enterprise organization is through phishing. This is not always the case but it tends to be one of the easiest and direct ways to infect a victim.  


Making matters worse, most organizations allow employees to access their personal email on corporate devices, bypassing enterprise security controls. This makes the job of orchestrating a phishing attack that much easier.  Once an employee clicks on a phishing email, and thus downloads a malicious file, the ransomware attack begins.  


Ransomware can bypass Endpoint Protection Platforms (EPP) and Endpoint Detection and Response (EDR) clients installed on the endpoint if it hasn't seen a particular ransomware type. Very often, most EPP/EDRs will send unknown file types to a cloud sandbox for a deeper analysis to obtain a file verdict. 


However, this can often take 10 or so minutes to completely process. Meanwhile, ransomware will replicate itself across an organization in a matter of minutes – making a cloud-based verdict ineffective.  With a little bit of work, cybercriminals can obtain Remote Desktop Protocol (RDP) credentials and use them to target an Active Directory (AD) server, by using a “pass the hash” or “pass the token” exploit to escalate account privileges and get access to critical servers. 


Once into an AD server, a cybercriminal is able to be stealthier and will have easier movement through an organization.  Often, a cybercriminal will push Group Policy Objects (GPO) from the Active Directory server to disable endpoint protection software (EPP/EDR) and ensure ransomware infection efficacy (and to cut off visibility from by SecOps team).


At this stage, a ransomware attack can now accelerate its campaign by targeting critical servers that contain access to sensitive data.  Data that is encrypted or stolen represents a serious upgrade in the security level of the attack.

### Preventing Lateral Propagation
Airgap is able to microsegment the entire enterprise network, where each device connected to the network has its security micro-perimeter. You begin to get the picture when you reimagine an enterprise network with all of the endpoints that were once part of a single network now belonging to their own micro-perimeter and having their own access policies. In each of the security policies, all nonessential lateral communication is blocked, preventing any ransomware from exploiting open ports to replicate itself to other endpoints. 

### Preventing Access to Critical Enterprise Servers
Airgap can block non-essential access to administrative IT servers that are used to operate the IT enterprise network. Examples include Windows File Share, Active Directory, storage, and backup. This ensures that a cybercriminal cannot further exploit these servers to further gain heightened control. For example, if a cybercriminal could get access to an Active Directory, he would be able to push Business Process Outsourcing (BPO) security policies to all the endpoints in an organization, disabling EPP/EDR clients, and ensuring maximum ransomware infection. Even worse, the cybercriminal can block all SecOps visibility into the enterprise network. 

### Preventing Access to “Crown Jewels”
The target of any cyberattack is the organization’s sensitive data. It’s the most valuable asset any organization has, and represents the “crown jewels.” Cybercriminals often attempt to either steal or encrypt sensitive corporate data. Sensitive data can range from Personally Identifiable Information (PII) or Protected Health Information (PHI) to encrypted intellectual property. Access to this can often allow the cybercriminal to increase the price of the ransom. More often than not, a victim will pay the ransom in order to ensure that they can get back critical data that is used to run the business. Airgap shines by blocking access to critical servers (such as Salesforce or backup systems) required to run the business. 


### Conclusion
A ransomware attack does not have to be a catastrophic event for your organization. With a little work and planning, you can use Airgap’s technology to devise a new security posture that will help limit the blast radius of a ransomware attack.


### Call to Action
Take some time to reach out to an Airgap sales representative to learn more about how Airgap can make ransomware attacks a thing of the past.

In the meantime, learn more at https://airgap.io/ransomware-kill-switch
