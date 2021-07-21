---
id: nifcpa
path: /blog/network-isolation-for-colonial-pipeline-attacks
date: 2021-05-13T23:45:43.822Z
title: Network Isolation Is Good. Business Process Isolation Is Even Better.
description: "Zero Trust Isolation & Mitigations for Colonial Pipeline Ransomware Attacks "
author: richardstiennon
shouldShowAuthor: true
image: ../../images/uploads/colonialpipeline.png
tags:
  - colonialpipeline
---
### Network Isolation Is Good. Business Process Isolation Is Even Better.

It’s a simple concept. If your network is completely isolated no one can hack it. Except insiders of course. 

Back in 1995 an engineer at Ford tested the claim that Ford’s network was not connected to the internet. He had a dial-up connection at home. When he successfully pinged his desktop at work over the internet Ford decided they needed to invest in a firewall. 

**Routing is designed like water; it will find a way.**  

When I was in manufacturing our industrial control systems (ICS) all ran on relays with rudimentary programming. Networked systems were not widely deployed. The first sensor to be connected to the internet was Hamhudo’s hot tub in Ypsilanti, Michigan. You could check in over the internet and read Ph levels and temperatures. 

Fast forward to today and every industrial control system has incorporated digital controls, all remotely connected over networks. Because the actuators, solenoids, sensors, and rate controllers for industrial systems predated networking they were all built with no thought for security.  Safety yes. Security no. Operators have a simple task: ensure that plant networks are not connected to the rest of the world. 

But network isolation is not a simple task. Routing finds a way and malware does not need a network. The most famous segmented network is the Pentagon’s Secret IP Routing Network, or SIPRNet. Field operations access SIPRnet through SCIFs, like the one Chelsea Manning was in when she wrote 251,287 U.S. diplomatic cables to a CD disguised as a Lady Gaga album. 


SIPRNet was compromised when a copy of the Agent.btz worm was introduced by thumb drive to one of those SCIFs. It spread through the world and jumped to the not-as-secure NIPRNet. It cost the Pentagon an estimated billion dollars to take 3 million Windows XP machines offline and clean them.  That incident, dubbed Buckshot Yankee, led to the creation of US Cyber Command. 

If the Pentagon cannot maintain a secure network how can a smaller organization like Colonial Pipeline with 800 employees and only three IT security staff (according to LinkedIn data) hope to do so? 

It is still not evident that Colonial Pipeline’s systems were in any way penetrated by the Darkside Ransomware-as-a-Service(RaaS) hackers that are holding its data for ransom. Perhaps Colonial has *good enough* network segmentation. From reported sources we know that Colonial’s invoicing system receives data from its pipelines.

Fuel amounts are measured and reported out to the invoicing software that sends the bills to their downstream customers. It probably is also tied to their auditing system so they can verify that their upstream providers of gasoline and kerosene are accurately billing them. 

The disruption to fuel supplies on the Eastern seaboard are attributed to the invoicing system being disabled by the ransomware which has infected the corporate network. It cannot receive data from the pipeline. I assume that the operators are also blind because they cannot monitor the health of the pumps, fuel stirrers, and gages on their network. 

Yet, Colonial Pipeline did not have the confidence in their security to keep their pipelines running. Being blind means they actually lost control, forcing them to shut down. To their credit they did have enough control to shut things down safely. 

Lessons learned so far from the Colonial Pipeline ransomware attack include: 

* Segmenting production from office systems (IT) worked in this case. One-way flow of information from production systems to office is safe. (But not resilient if that data can be lost to a simple ransomware attack.)
* Network segmentation is one thing. Business process segmentation is another. If your business depends on an isolated network you should game out scenarios that involve losing all office IT systems while maintaining production. A manufacturing plant is easier than a pipeline which has remote sensors and pumping stations strung out across its 5,500 mile span. 

The [Cybersecurity and Infrastructure Security Agency (CISA)](https://us-cert.cisa.gov/) and the FBI issued a joint statement on ransomware attacks from DarkSide. In it they offered some mitigation advice. Some of them are bad, like using one time password tokens to access control systems, which implies the network is not effectively cordoned off from the internet. Others are good:

**Limit access to resources over networks, especially by restricting RDP.** More than 50% of ransomware attacks come in over RDP since COVID started. 

**Monitor and/or block inbound connections from Tor exit nodes.** It’s always safe to block traffic from TOR exit nodes.

**Implement and ensure robust network segmentation between IT and OT networks** 

**Organize OT assets into logical zones by taking into account criticality, consequence, and operational necessity.** 

**Identify OT and IT network inter-dependencies and develop workarounds or manual controls to ensure ICS networks can be isolated if the connections create risk to the safe and reliable operation of OT processes.** 

The last three are specific to critical infrastructure and great advise.

I would say ask yourself, what would it take to have such high confidence in your security that you could continue to pump millions of gallons of gasoline across the country even when all of your IT systems were crippled?   That would be resilience.